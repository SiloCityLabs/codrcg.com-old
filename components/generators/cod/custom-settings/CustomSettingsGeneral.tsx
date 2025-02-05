import React from "react";
//Components
import { Row } from "react-bootstrap";
import CustomSettingsSimple from "@/components/generators/cod/custom-settings/views/CustomSettingsSimple";
//Types
import { CustomSettingsProps } from "@/types/CustomSettings";

function CustomSettingsGeneral({ data, count }: CustomSettingsProps) {
  return (
    <Row className="justify-content-md-center">
      {data.map((setting, index) => (
        <CustomSettingsSimple data={setting} count={count} key={index} />
      ))}
    </Row>
  );
}

export default CustomSettingsGeneral;
