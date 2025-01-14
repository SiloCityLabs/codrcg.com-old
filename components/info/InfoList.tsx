import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Form, FormControl } from "react-bootstrap";
//Types
import { InfoListProps, InfoData } from "@/types/Info";

function InfoList({ game = "", data, dataKeys }: InfoListProps) {
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const results = Object.keys(data).filter((key) =>
      data[key].name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredObjects = results.reduce((obj, key) => {
      obj[key] = data[key];
      return obj;
    }, {} as Record<string, InfoData>);

    setFilteredData(filteredObjects);
  }, [searchTerm, data]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
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
                <thead>
                  <tr>
                    {dataKeys.includes("name") && <th>Name</th>}
                    {dataKeys.includes("score") && <th>Score</th>}
                    {dataKeys.includes("description") && <th>Description</th>}
                    {dataKeys.includes("equipment") && <th>Equipment</th>}
                    {dataKeys.includes("weapon") && <th>Weapon</th>}
                    {dataKeys.includes("type") && <th>Type</th>}
                    {dataKeys.includes("game") && <th>Game</th>}
                    {dataKeys.includes("no_attach") && (
                      <th>Has Attachments?</th>
                    )}
                    {dataKeys.includes("isDlc") && <th>DLC</th>}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(filteredData).map((key) => (
                    <tr key={key}>
                      {dataKeys.includes("name") && (
                        <td>{filteredData[key].name}</td>
                      )}
                      {dataKeys.includes("score") && (
                        <td>{filteredData[key].score}</td>
                      )}
                      {dataKeys.includes("description") && (
                        <td>{filteredData[key].description}</td>
                      )}
                      {dataKeys.includes("equipment") && (
                        <td>{filteredData[key].equipment}</td>
                      )}
                      {dataKeys.includes("weapon") && (
                        <td>{filteredData[key].weapon}</td>
                      )}
                      {dataKeys.includes("type") && (
                        <td>{filteredData[key].type}</td>
                      )}
                      {dataKeys.includes("game") && (
                        <td>{filteredData[key].game}</td>
                      )}
                      {dataKeys.includes("no_attach") && (
                        <td>
                          {filteredData[key]?.no_attach ? "true" : "false"}
                        </td>
                      )}
                      {dataKeys.includes("isDlc") && (
                        <td>{filteredData[key]?.isDlc ? "true" : "false"}</td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default InfoList;
