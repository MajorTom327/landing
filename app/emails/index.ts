import type { InvitationEmailParams } from "./newMessage";
import InvitationEmail from "./newMessage";

export { InvitationEmail } from "./newMessage";
export type { InvitationEmailParams } from "./newMessage";

const emails = {
  invitation: InvitationEmail,
};

export type EmailId = keyof typeof emails;

export type EmailOptions = {
  emailId: "invitation";
  params: InvitationEmailParams;
};

export default emails;
