import React, { useEffect, useState } from "react";
//Components
import { Row, Col, Button } from "react-bootstrap";
import CustomMutationsSimple from "@/components/generators/black-ops/four/custom-mutations/views/CustomMutationsSimple";
//Helpers
import { createRangeArray } from "@/helpers/createRangeArray";
//Json
import generalSettings from "@/json/black-ops/four/zombies/custom-mutations/general.json";

function CustomMutationsGeneral() {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);

  console.log("generalSettings", generalSettings);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const handleClick = async () => {
    setCount(count + 1);
  };

  return (
    isLoading && (
      <>
        <Row className="justify-content-md-center">
          {generalSettings.map((setting, index) => {
            if (setting.min !== undefined && setting.max !== undefined) {
              const valuesArray = createRangeArray(
                setting.min,
                setting.max,
                setting.increment
              );
              //TODO: Figue
              setting = { ...setting, values: valuesArray as number[] };
            }

            console.log("setting", setting);

            return (
              <React.Fragment key={index}>
                {setting.type === "simple" ? (
                  <CustomMutationsSimple data={setting} count={count} />
                ) : (
                  <Col xl={3} lg={4} md={6} sm className="text-center mb-4">
                    <span className="fw-bolder fs-5">{setting.name}:</span>{" "}
                    <br />
                    <span className="text-muted fs-6">{setting.default}</span>
                  </Col>
                )}
              </React.Fragment>
            );
          })}
        </Row>
        <Row id="button-row">
          <Col className="text-center">
            <Button variant="black-ops" href="#" onClick={handleClick}>
              Generate Loadout
            </Button>
          </Col>
        </Row>
      </>
    )
  );
}

export default CustomMutationsGeneral;
