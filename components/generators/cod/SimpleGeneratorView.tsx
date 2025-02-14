//Components
import CodPlaceholder from "@/components/CodPlaceholder";

interface CustomSettingsProps {
    isGenerating: boolean;
    title: string;
    value: string | null;
}

function SimpleGeneratorView({ isGenerating, title, value }: CustomSettingsProps) {
    return (
        <>
            <span className="fw-bolder fs-5">{title}:</span> <br />
            <span className="text-muted fs-6">
                <CodPlaceholder isLoading={isGenerating} value={value} />
            </span>
        </>
    );
}

export default SimpleGeneratorView;
