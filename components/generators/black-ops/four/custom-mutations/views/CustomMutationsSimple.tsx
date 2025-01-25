import { useEffect, useState } from "react";
//Components
import { Col } from "react-bootstrap";
//Types
import { Setting } from "@/types/CustomMutations";

interface CustomMutationsSimpleProps {
  data: Setting;
  count: number;
}

function CustomMutationsSimple({ data, count }: CustomMutationsSimpleProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState(data.default);

  useEffect(() => {
    const keepDefaultValue =
      Math.random() < parseFloat(data.defaultChance) / 100;

    if (!keepDefaultValue && data?.values) {
      const tmpValue =
        data.values[Math.floor(Math.random() * data.values.length)];

      setValue(tmpValue);
    }

    setIsLoading(true);
  }, [count]);

  return (
    isLoading && (
      <Col xl={3} lg={4} md={6} sm className="text-center mb-4">
        <span className="fw-bolder fs-5">{data.name}:</span> <br />
        <span className="text-muted fs-6">{value}</span> <br />
      </Col>
    )
  );
}

export default CustomMutationsSimple;
