import { randomizeAttachments } from "@/helpers/randomizeAttachments";

const attachmentsList: Record<string, any> = {};

export function getLmgAttachments(
  type: string,
  gun: string,
  count: number
): any {
  const attachments: any = [];
  const data = attachmentsList[gun];

  if (data) {
    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
