import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Form, FormControl } from "react-bootstrap";
//Types
import { InfoListProps, InfoData } from "@/types/Info";

function InfoList({ data, dataKeys }: InfoListProps) {
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
                    {dataKeys.includes("mode") && <th>Mode</th>}
                    {dataKeys.includes("story") && <th>Story</th>}
                    {dataKeys.includes("minor") && <th>Minor</th>}
                    {dataKeys.includes("major") && <th>Major</th>}
                    {dataKeys.includes("payload") && <th>Payload</th>}
                    {dataKeys.includes("trait") && <th>Trait</th>}
                    {dataKeys.includes("type") && <th>Type</th>}
                    {dataKeys.includes("game") && <th>Game</th>}
                    {dataKeys.includes("no_attach") && (
                      <th>Has Attachments?</th>
                    )}
                    {dataKeys.includes("no_attach_info") && (
                      <th>Needs Attachment Info?</th>
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
                      {dataKeys.includes("mode") && (
                        <td>{filteredData[key].mode}</td>
                      )}
                      {dataKeys.includes("story") && (
                        <td>{filteredData[key].story}</td>
                      )}
                      {dataKeys.includes("minor") && (
                        <td>{filteredData[key].minor}</td>
                      )}
                      {dataKeys.includes("major") && (
                        <td>{filteredData[key].major}</td>
                      )}
                      {dataKeys.includes("payload") && (
                        <td>{filteredData[key].payload}</td>
                      )}
                      {dataKeys.includes("trait") && (
                        <td>{filteredData[key].trait}</td>
                      )}
                      {dataKeys.includes("type") && (
                        <td>{filteredData[key].type}</td>
                      )}
                      {dataKeys.includes("game") && (
                        <td>{formatTitle(filteredData[key].game)}</td>
                      )}
                      {dataKeys.includes("no_attach") && (
                        <td>
                          {filteredData[key]?.no_attach ? "true" : "false"}
                        </td>
                      )}
                      {dataKeys.includes("no_attach_info") && (
                        <td>
                          {filteredData[key]?.no_attach_info ? "true" : "false"}
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

function formatTitle(str) {
  // Split the string by hyphens
  const words = str.split("-");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the words with spaces
  return capitalizedWords.join(" ");
}

export default InfoList;
