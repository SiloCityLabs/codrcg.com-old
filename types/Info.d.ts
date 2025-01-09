export interface InfoListProps {
  game?: string;
  data: Record<string, InfoData>;
  dataKeys: Array<string>;
}

type InfoData = {
  name: string;
  type: string;
  game: string;
  description?: string;
  no_attach?: boolean;
  isDlc?: boolean;
};
