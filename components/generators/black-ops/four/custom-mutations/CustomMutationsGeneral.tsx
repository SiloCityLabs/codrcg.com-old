import React, { useEffect, useState } from "react";
//Components
import { Row, Col, Button } from "react-bootstrap";
import CustomMutationsSimple from "@/components/generators/black-ops/four/custom-mutations/views/CustomMutationsSimple";
//Types
import { Setting, CustomMutationsProps } from "@/types/CustomMutations";

function CustomMutationsGeneral({ data, count }: CustomMutationsProps) {
  const [isLoading, setIsLoading] = useState(false);

  console.log("CustomMutationsGeneral data", data);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    isLoading && (
      <>
        <Row className="justify-content-md-center">
          {data.map((setting, index) => (
            <React.Fragment key={index}>
              {setting.type === "simple" ? (
                <CustomMutationsSimple data={setting} count={count} />
              ) : (
                <Col xl={3} lg={4} md={6} sm className="text-center mb-4">
                  <span className="fw-bolder fs-5">{setting.name}:</span> <br />
                  <span className="text-muted fs-6">{setting.default}</span>
                </Col>
              )}
            </React.Fragment>
          ))}
        </Row>
      </>
    )
  );
}

export default CustomMutationsGeneral;
