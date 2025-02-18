import React from "react";
import CodPlaceholder from "@/components/CodPlaceholder";

const CodClassName = ({ isGenerating, value }) => {
  return (
    <>
      <h3 className="text-center">&ldquo;<CodPlaceholder isLoading={isGenerating} value={value} />&rdquo;</h3>
      <hr />
    </>
  );
}

export default CodClassName;
