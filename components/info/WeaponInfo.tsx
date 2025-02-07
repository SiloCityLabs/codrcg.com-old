import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tabs, Tab, Badge } from "react-bootstrap";
//Helpers
import { getWeapon } from "@/helpers/info/getWeapon";
import { fetchAttachments } from "@/helpers/fetch/fetchAttachments";
//types
import { WeaponInfoProps } from "@/types/Info";
import { Weapon } from "@/types/Generator";

const titleMap = {
  name: "Name",
  type: "Type",
  game: "Game",
  no_attach: "No Attachments",
  no_attach_info: "No Attachment Info",
  isDlc: "DLC Weapon",
};

function WeaponInfo({ value, game }: WeaponInfoProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [weaponData, setWeponData] = useState({});
  const [attachmentInfo, setAttachmentInfo] = useState({});
  const [key, setKey] = useState<string>("");

  useEffect(() => {
    const dataList = getWeapon(game, value);

    if (dataList && isWeapon(dataList)) {
      setWeponData(dataList);
      const attachments = fetchAttachments(dataList, -1);
      setAttachmentInfo(attachments);
      setKey(Object.keys(attachments)[0]);
    } else {
      console.error("No Weapon found in the dataList object");
    }

    setIsLoading(false);
  }, [value]);

  console.log("weaponData", weaponData);

  function isWeapon(obj: any): obj is Weapon {
    return (
      typeof obj === "object" &&
      obj !== null &&
      typeof obj.name === "string" &&
      typeof obj.type === "string" &&
      typeof obj.game === "string"
    );
  }

  return (
    <Container id="weapon-info" className="shadow-lg p-3 bg-body rounded">
      {!isLoading && (
        <>
          <Row className="justify-content-md-center">
            {weaponData &&
              Object.entries(weaponData).map(([key, value]) => (
                <Col sm className="text-center mb-3 mb-md-0" key={key}>
                  <span className="fw-bolder fs-5">{titleMap[key]}:</span>{" "}
                  <br />
                  <span className="text-muted fs-6">{String(value)}</span>
                </Col>
              ))}
          </Row>

          <hr className="mt-4" />
          <Row className="justify-content-md-center">
            {attachmentInfo && Object.keys(attachmentInfo).length > 0 ? (
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k ?? "")}
                className="mb-3"
              >
                {Object.entries(attachmentInfo).map(([key, values]) => {
                  const itemCount = Array.isArray(values) ? values.length : 1; // Calculate item count

                  return (
                    <Tab
                      eventKey={key}
                      title={
                        <span>
                          {key} <Badge bg="dark">{itemCount}</Badge>
                        </span>
                      }
                      key={key}
                    >
                      {Array.isArray(values) ? (
                        values.map((value, index) => (
                          <React.Fragment key={index}>
                            <span className="text-muted fs-6">
                              {typeof value === "string"
                                ? value
                                : String(value)}{" "}
                              {/* Type check */}
                            </span>
                            <br />
                          </React.Fragment>
                        ))
                      ) : typeof values === "string" ? (
                        <span className="text-muted fs-6">{values}</span>
                      ) : (
                        // Handle other non-array value types
                        <span className="text-muted fs-6">
                          {String(values)}
                        </span>
                      )}
                    </Tab>
                  );
                })}
              </Tabs>
            ) : (
              <h3 className="text-center">No attachments</h3>
            )}
          </Row>
        </>
      )}
    </Container>
  );
}

export default WeaponInfo;
