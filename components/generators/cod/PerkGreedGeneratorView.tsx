//Components
import CodPlaceholder from "@/components/CodPlaceholder";
import { PerkGreedGeneratorViewProps } from "@/types/GeneratorView";

function PerkGreedGeneratorView({
  isGenerating,
  title,
  titleClassName,
  perk,
  perkGreed,
  perkClassName,
}: PerkGreedGeneratorViewProps) {
  return (
    <>
      <span className={`${titleClassName} fw-bolder fs-5`}> {title}:</span>{" "}
      <br />
      <span className={`${perkClassName} text-muted fs-6`}>
        <CodPlaceholder isLoading={isGenerating} value={perk ? perk : "None"} />
        {perkGreed ? (
          <>
            <br />
            <CodPlaceholder isLoading={isGenerating} value={perkGreed} />
          </>
        ) : null}
      </span>
    </>
  );
}

export default PerkGreedGeneratorView;
