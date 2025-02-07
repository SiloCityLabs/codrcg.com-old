import React from "react";
//Components
import { Row } from "react-bootstrap";
import CustomSettingsSimple from "@/components/generators/cod/custom-settings/views/CustomSettingsSimple";
//Types
import { Setting } from "@/types/CustomSettings";

interface CustomSettingsProps {
  data: Record<string, Setting[]>;
  count: number;
}

function CustomSettingsSection({ data, count }: CustomSettingsProps) {
  return (
    <Row className="justify-content-md-center">
      {Object.keys(data).map((outerIndex) => (
        <React.Fragment key={outerIndex}>
          <h4 className="text-center">{outerIndex}</h4>
          <hr />
          {data[outerIndex].map((setting, innerIndex) => (
            <CustomSettingsSimple
              data={setting}
              count={count}
              key={innerIndex}
            />
          ))}
        </React.Fragment>
      ))}
    </Row>
  );
}

export default CustomSettingsSection;
