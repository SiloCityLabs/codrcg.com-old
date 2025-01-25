import React from "react";
//Components
import { Row } from "react-bootstrap";
import CustomMutationsSimple from "@/components/generators/black-ops/four/custom-mutations/views/CustomMutationsSimple";
//Types
import { Setting } from "@/types/CustomMutations";

interface CustomMutationsProps {
  data: Record<string, Setting[]>;
  count: number;
}

function CustomMutationsSection({ data, count }: CustomMutationsProps) {
  return (
    <Row className="justify-content-md-center">
      {Object.keys(data).map((outerIndex) => (
        <React.Fragment key={outerIndex}>
          <h4 className="text-center">{outerIndex}</h4>
          <hr />
          {data[outerIndex].map((setting, innerIndex) => (
            <CustomMutationsSimple
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

export default CustomMutationsSection;
