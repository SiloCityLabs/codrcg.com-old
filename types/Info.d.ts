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
  mode?: string;
  story?: string;
  equipment?: string;
  weapon?: string;
  minor?: string;
  major?: string;
  no_attach?: boolean;
  isDlc?: boolean;
};
