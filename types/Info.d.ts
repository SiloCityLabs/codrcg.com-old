export interface InfoListProps {
  game?: string;
  data: Record<string, InfoData>;
  dataKeys: Array<string>;
}

export type InfoData = {
  name: string;
  type: string;
  game: string;
  score?: number;
  description?: string;
  equipment?: string;
  weapon?: string;
  no_attach?: boolean;
  isDlc?: boolean;
};
