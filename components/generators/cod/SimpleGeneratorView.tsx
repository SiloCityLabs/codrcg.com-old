//Components
import CodPlaceholder from "@/components/CodPlaceholder";

interface CustomSettingsProps {
    isGenerating: boolean;
    title: string;
    titleClassName?: string;
    value: string | null;
    valueClassName?: string;
}

function SimpleGeneratorView({ isGenerating, title, titleClassName, value, valueClassName }: CustomSettingsProps) {
    return (
        <>
            <span className={`${titleClassName} fw-bolder fs-5`}> {title}:</span > <br />
            <span className={`${valueClassName} text-muted fs-6`}>
                <CodPlaceholder isLoading={isGenerating} value={value} />
            </span>
        </>
    );
}

export default SimpleGeneratorView;
