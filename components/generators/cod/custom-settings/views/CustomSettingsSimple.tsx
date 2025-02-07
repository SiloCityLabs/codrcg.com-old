import { useEffect, useState } from "react";
//Components
import { Col } from "react-bootstrap";
//Helpers
import { createRangeArray } from "@/helpers/createRangeArray";
//Types
import { Setting } from "@/types/CustomSettings";
//Styles
import styles from "@/public/styles/components/CustomSettings.module.css";

interface CustomSettingsProps {
  data: Setting;
  count: number;
}

function CustomSettingsSimple({ data, count }: CustomSettingsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState(data.default);

  if (
    data.min !== undefined &&
    data.max !== undefined &&
    data.increment !== undefined
  ) {
    const valuesArray = createRangeArray(data.min, data.max, data.increment);
    data = { ...data, values: valuesArray as number[] };
  }

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
      <Col xl={3} lg={4} md={6} sm className="text-center mb-3">
        <span className={`${styles.customSettingName} fw-bolder fs-5`}>
          {data.name}:
        </span>{" "}
        <br className="d-none d-md-block" />
        <span className={`${styles.customSettingValue} text-muted fs-6`}>
          {value}
        </span>{" "}
        <br />
      </Col>
    )
  );
}

export default CustomSettingsSimple;
