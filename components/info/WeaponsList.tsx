import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Form, FormControl } from "react-bootstrap";
//Helpers
import { getWeapon } from "@/helpers/info/getWeapon";
//Types
import { WeaponListProps } from "@/types/Info";

function WeaponsList({ game }: WeaponListProps) {
  const [containerClass, setContainerClass] = useState("hidden");
  const [data, setData] = useState({});
  const [filteredData, setFilteredData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const weaponsList = getWeapon(game);
    setData(weaponsList);
    setFilteredData(weaponsList);

    setContainerClass("");
  }, [game]);

  useEffect(() => {
    const results = Object.keys(data).filter((key) =>
      data[key].name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // If you need the filtered objects:
    const filteredObjects = results.map((key) => data[key]);
    setFilteredData(filteredObjects);
  }, [searchTerm, data]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Container
        id="weapon-list"
        className={`${containerClass} shadow-lg p-3 bg-body rounded`}
      >
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
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Game</th>
                  <th>Has Attachments?</th>
                  <th>DLC Weapon</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(filteredData).map((key) => (
                  <tr key={key}>
                    <td>{filteredData[key].name}</td>
                    <td>{filteredData[key].type}</td>
                    <td>{filteredData[key].game}</td>
                    <td>{filteredData[key]?.no_attach ? "true" : "false"}</td>
                    <td>{filteredData[key]?.isDlc ? "true" : "false"}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WeaponsList;
