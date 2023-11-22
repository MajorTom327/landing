import { render } from "@react-email/render";
import React from "react";

export class EmailRenderer<T> {
  protected subject: string;
  protected content: React.FunctionComponent<T>;

  constructor() {
    this.subject = "";
    this.content = () => null;
  }

  protected verifyParams(params: T | null) {
    return params;
  }

  render(props: T | null = null) {
    const params = this.verifyParams(props);

    // @ts-expect-error
    const text = render(React.createElement(this.content, params), {
      plainText: true,
    });

    // @ts-expect-error
    const html = render(React.createElement(this.content, params), {
      pretty: true,
    });

    return {
      subject: this.subject,
      text,
      html,
    };
  }
}
