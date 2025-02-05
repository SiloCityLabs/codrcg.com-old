export interface InfoListProps {
  game?: string;
  data: Record<string, InfoData>;
  dataKeys: Array<string>;
  types?: string[] | null;
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
  payload?: string;
  trait?: string;
  no_attach?: boolean;
  no_attach_info?: boolean;
  isDlc?: boolean;
};
