// import nodemailer from "nodemailer";
// import mg from "nodemailer-mailgun-transport";
import { isNil } from "ramda";

// import { isNilOrEmpty, isNotNilOrEmpty } from "ramda-adjunct";

// const api_key = process.env.MAILGUN_API_KEY!;
// const domain = process.env.MAILGUN_DOMAIN!;
// const mailgunFrom = process.env.MAILGUN_FROM!;

type MailContactParams = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// const shouldInitialize = isNotNilOrEmpty(process.env.MAILGUN_API_KEY);

export class Mailer {
  nm: any;

  constructor() {
    // const auth = {
    //   auth: {
    //     api_key,
    //     domain,
    //   },
    // };
    // if (shouldInitialize) {
    //   this.nm = nodemailer.createTransport(mg(auth));
    // }
  }

  contact({ name, email, subject, message }: MailContactParams) {
    if (isNil(this.nm)) return Promise.reject("Mailer not initialized");

    // return this.nm
    //   .sendMail({
    //     from: mailgunFrom,
    //     to: "me@valentin-thomas.com",
    //     subject: `[WEBSITE CONTACT] ${name} <${email}>: ${subject}`,
    //     replyTo: `${name} <${email}>`,
    //     html: `
    //     <h1>Received a message from your website</h1>

    //     <p>From: ${name} &lt;${email}&gt;</p>
    //     <p>Subject: ${subject}</p>
    //     <p>Message: ${message}</p>
    //   `,
    //     text: `
    //     Received a message from your website

    //     From: ${name}<${email}>
    //     Subject: ${subject}
    //     Message: ${message}
    //   `,
    //   })
    //   .then(() => {
    //     console.log("Message sent");
    //   })
    //   .catch((err: any) => {
    //     console.error(err);
    //   });
  }
}

export const mailer = new Mailer();

export default mailer;
