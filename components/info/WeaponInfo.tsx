import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
//Helpers
import { getWeapon } from "@/helpers/info/getWeapon";
//types
import { WeaponInfoProps } from "@/types/Info";
import { Weapon } from "@/types/Generator";

function WeaponInfo({ value }: WeaponInfoProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [weaponName, setWeaponName] = useState("");

  useEffect(() => {
    const dataList = getWeapon("black-ops-six", value);

    if (dataList) {
      if (isWeapon(dataList)) {
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
          <Col sm className="text-center">
            Hello World - {weaponName}
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default WeaponInfo;
