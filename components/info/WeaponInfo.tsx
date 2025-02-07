import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
//Helpers
import { getWeapon } from "@/helpers/info/getWeapon";
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
  const [weaponName, setWeaponName] = useState("");
  const [weaponData, setWeponData] = useState({});

  useEffect(() => {
    const dataList = getWeapon(game, value);

    if (dataList) {
      if (isWeapon(dataList)) {
        setWeponData(dataList);
        setWeaponName(dataList.name);
      } else if (typeof dataList === "object" && dataList !== null) {
        const firstWeaponKey = Object.keys(dataList)[0];
        if (firstWeaponKey) {
          setWeaponName(dataList[firstWeaponKey].name);
        } else {
          console.error("No Weapon found in the dataList object");
          setWeaponName("Unknown");
        }
      }
    } else {
      console.error("No Weapon found in the dataList object");
      setWeaponName("Unknown");
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
      <Row className="justify-content-md-center">
        {!isLoading && (
          <>
            {weaponData &&
              Object.entries(weaponData).map(([key, value]) => (
                <Col sm className="text-center mb-3 mb-md-0" key={key}>
                  <span className="fw-bolder fs-5">{titleMap[key]}:</span>{" "}
                  <br />
                  <span className="text-muted fs-6">{String(value)}</span>
                </Col>
              ))}
          </>
        )}
      </Row>
    </Container>
  );
}

export default WeaponInfo;
