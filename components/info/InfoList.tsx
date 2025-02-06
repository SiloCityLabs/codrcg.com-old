import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Form,
  FormControl,
  Dropdown,
  Badge,
} from "react-bootstrap";
import { InfoListProps } from "@/types/Info";

function InfoList({ data, dataKeys, types, url }: InfoListProps) {
  // Allow types to be null
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [itemCount, setItemCount] = useState(Object.values(data).length);

  useEffect(() => {
    const filtered = Object.entries(data).filter(([key, item]) => {
      const nameMatch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const typeMatch = selectedType
        ? item.type.toLowerCase().trim() === selectedType.toLowerCase().trim()
        : true;

      return nameMatch && typeMatch;
    });

    setFilteredData(Object.fromEntries(filtered));
    setItemCount(Object.values(filtered).length);
  }, [searchTerm, data, selectedType]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  const renderTableHeader = () => (
    <thead>
      <tr>
        {dataKeys.map((key) => (
          <th key={key}>
            {keyToTitle(key)}{" "}
            {key === "name" && <Badge bg="dark">{itemCount}</Badge>}
          </th>
        ))}
      </tr>
    </thead>
  );

  const boolArr = ["isDlc", "no_attach_info", "no_attach"];

  const formatValue = (value, key) => {
    if (typeof value === "boolean" || boolArr.includes(key)) {
      return value ? "Yes" : "-";
    } else if (key === "name" && url) {
      return <a href={`${url}?value=${value}`}>{value}</a>;
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
          <Form className="mb-3 d-flex">
            <FormControl
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="me-2"
            />
            {types && (
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-secondary"
                  id="dropdown-basic"
                >
                  {selectedType || "Select Type"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleTypeSelect("")}>
                    All Types
                  </Dropdown.Item>
                  {types.map((type) => (
                    <Dropdown.Item
                      key={type}
                      onClick={() => handleTypeSelect(type)}
                    >
                      {type}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Form>

          <div className="table-responsive">
            <Table striped bordered hover size="sm">
              {renderTableHeader()}
              <tbody>
                {Object.values(filteredData).length > 0 ? (
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
