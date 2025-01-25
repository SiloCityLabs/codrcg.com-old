import React, { useEffect, useState } from "react";
//Components
import { Row, Col, Button } from "react-bootstrap";
import CustomMutationsSimple from "@/components/generators/black-ops/four/custom-mutations/views/CustomMutationsSimple";
//Types
import { CustomMutationsProps } from "@/types/CustomMutations";

function CustomMutationsGeneral({ data, count }: CustomMutationsProps) {
  return (
    <Row className="justify-content-md-center">
      {data.map((setting, index) => (
        <CustomMutationsSimple data={setting} count={count} key={index} />
      ))}
    </Row>
  );
}

export default CustomMutationsGeneral;
