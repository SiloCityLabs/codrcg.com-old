import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Form, FormControl } from "react-bootstrap";
import { InfoListProps, InfoData } from "@/types/Info";

function InfoList({ data, dataKeys }: InfoListProps) {
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filtered = Object.entries(data).filter(([key, item]) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(Object.fromEntries(filtered));
  }, [searchTerm, data]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const renderTableHeader = () => (
    <thead>
      <tr>
        {dataKeys.map((key) => (
          <th key={key}>{keyToTitle(key)}</th>
        ))}
      </tr>
    </thead>
  );

  const boolArr = ["isDlc", "no_attach_info", "no_attach"];

  const formatValue = (value, key) => {
    if (typeof value === "boolean" || boolArr.includes(key)) {
      return value ? "Yes" : "-";
    }
    return value;
  };

  const keyToTitle = (key) => {
    switch (key) {
      case "no_attach":
        return "No Attachments?";
      case "no_attach_info":
        return "Needs Attachment Info?";
      case "isDlc":
        return "DLC";
      default:
        return key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " ");
    }
  };

  const formatTitle = (str) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const renderTableRow = (item) => (
    <tr key={item.id || item.name || Math.random()}>
      {dataKeys.map((key) => (
        <td key={key}>
          {key === "game"
            ? formatTitle(item[key])
            : formatValue(item[key], key)}
        </td>
      ))}
    </tr>
  );

  return (
    <Container id="data-list" className="shadow-lg p-3 bg-body rounded">
      <Row className="justify-content-md-center">
        <Col sm className="text-center">
          <Form className="mb-3">
            <FormControl
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Form>
          <div className="table-responsive">
            <Table striped bordered hover size="sm">
              {renderTableHeader()}
              <tbody>
                {Object.values(filteredData).length > 0 ? ( // Check for data
                  Object.values(filteredData).map(renderTableRow)
                ) : (
                  <tr>
                    <td colSpan={dataKeys.length} className="text-center">
                      No data found.
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default InfoList;
