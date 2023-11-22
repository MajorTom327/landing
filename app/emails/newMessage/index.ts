import ContentTemplate from "@emails/new-message";
import zod from "zod";

import { EmailRenderer } from "../EmailRenderer";

const paramsSchema = zod.object({
  invitConfirmUrl: zod.string().url(),
});

export type InvitationEmailParams = zod.infer<typeof paramsSchema>;

export class InvitationEmail extends EmailRenderer<InvitationEmailParams> {
  subject = "Vous avez été invité à rejoindre une équipe";
  content = ContentTemplate;

  private schema = paramsSchema;

  protected verifyParams(
    params: InvitationEmailParams | null
  ): InvitationEmailParams | null {
    return this.schema.parse(params);
  }
}

export default InvitationEmail;
