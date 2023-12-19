import type { NewMessageEmailParams } from "./newMessage";
import NewMessageEmail from "./newMessage";

const emails = {
  newMessage: NewMessageEmail,
};

export type EmailId = keyof typeof emails;

export type EmailOptions = {
  emailId: "newMessage";
  params: NewMessageEmailParams;
};

export default emails;
