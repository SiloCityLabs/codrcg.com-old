import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {};

export function getSmgAttachments(type: string, gun: string, count: number) {
  const attachments: any = [];
  const data = attachmentsList[gun];

  data ? randomizeAttachments(attachments, data, count) : {};

  return attachments;
}
