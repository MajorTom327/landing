import ContentTemplate from "@emails/new-message";
import zod from "zod";

import { EmailRenderer } from "../EmailRenderer";

const paramsSchema = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  subject: zod.string(),
  message: zod.string(),
});

export type NewMessageEmailParams = zod.infer<typeof paramsSchema>;

export class NewMessageEmail extends EmailRenderer<NewMessageEmailParams> {
  subject = "New message from contact form";
  content = ContentTemplate;

  private schema = paramsSchema;

  protected verifyParams(
    params: NewMessageEmailParams | null
  ): NewMessageEmailParams | null {
    return this.schema.parse(params);
  }
}

export default NewMessageEmail;
