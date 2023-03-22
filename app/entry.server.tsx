import { PassThrough } from "stream";
import type { EntryContext } from "@vercel/remix";
import { Response } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import envCheck from "./lib/envCheck";
import environment from "./config/environment";

import type { i18n as ti18n } from "i18next";
import { createInstance } from "i18next";
import Backend from "i18next-fs-backend";
import { resolve } from "node:path";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { i18n, supportedLanguages } from "~/services/i18n.server";

const ABORT_DELAY = 5000;

envCheck(environment);

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return isbot(request.headers.get("user-agent"))
    ? handleBotRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext
      )
    : handleBrowserRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext
      );
}

function handleBotRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let didError = false;

    const { pipe, abort } = renderToPipeableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        onAllReady() {
          const body = new PassThrough();

          responseHeaders.set("Content-Type", "text/html");

          resolve(
            new Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          didError = true;

          console.error(error);
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}

function handleBrowserRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise<ti18n>(async (_resolve) => {
    let instance = createInstance();

    let lng = await i18n.getLocale(request);
    let ns = i18n.getRouteNamespaces(remixContext);

    // @ts-ignore
    await instance
      .use(initReactI18next)
      .use(Backend)
      .init({
        ...i18n,
        lng,
        ns,
        supportedLngs: supportedLanguages,
        fallbackLng: "fr",
        defaultNS: "translation",
        react: { useSuspense: false },
        backend: {
          loadPath: resolve(__dirname, "../public/locales/{{lng}}/{{ns}}.json"),
        },
      });

    return _resolve(instance);
  }).then((instance) => {
    return new Promise((resolve, reject) => {
      let didError = false;

      const { pipe, abort } = renderToPipeableStream(
        <I18nextProvider i18n={instance}>
          <RemixServer context={remixContext} url={request.url} />
        </I18nextProvider>,
        {
          onShellReady() {
            const body = new PassThrough();

            responseHeaders.set("Content-Type", "text/html");

            resolve(
              new Response(body, {
                headers: responseHeaders,
                status: didError ? 500 : responseStatusCode,
              })
            );

            pipe(body);
          },
          onShellError(err: unknown) {
            reject(err);
          },
          onError(error: unknown) {
            didError = true;

            console.error(error);
          },
        }
      );

      setTimeout(abort, ABORT_DELAY);
    });
  });
}
