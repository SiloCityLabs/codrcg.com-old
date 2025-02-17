export interface GeneratorViewProps {
  isGenerating: boolean;
  title: string;
  titleClassName?: string;
  value: string | null;
  valueClassName?: string;
}

export interface PerkGreedGeneratorViewProps {
  isGenerating: boolean;
  title: string;
  titleClassName?: string;
  perk: string | null;
  perkGreed: string | null;
  perkClassName?: string;
}
