import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import GeneratorCard from "@/components/GeneratorCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Call Of Duty Random Class Generator</title>
        <meta
          name="description"
          content="Spice up your COD gameplay! Generate unique random loadouts for any Call of Duty title. Discover new weapons, perks, and gear combinations."
        />
        <meta
          name="keywords"
          content="call of duty, random class generator, black ops 6, zombies, black ops 6 zombies, warzone, modern warfare 3 (2023)"
        />
      </Head>
      <div id="we-are-back-banner" className="py-2">
        <span className="fs-5">We're back, and we're open source!!</span>
      </div>
      <Header />
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xl={3} lg={4} className="text-center">
            <GeneratorCard
              title="Black Ops 6"
              text="Zombies generator coming in december 2024"
              variant="black-ops"
              btn1Text="MP Generator"
              link="black-ops-six/generator"
              disabled={false}
              btn2Text="Zombies Generator"
              link2="black-ops-six/zombies-generator"
              disabled2={false}
            />
          </Col>
          <Col xl={3} lg={4} className="text-center">
            <GeneratorCard
              title="Warzone"
              text="Coming this holiday season"
              variant="success"
              link="warzone-two/generator"
              disabled={true}
            />
          </Col>
          <Col xl={3} lg={4} className="text-center">
            <GeneratorCard
              title="Modern Warfare 3 (2023)"
              text="Coming in 2025"
              variant="danger"
              link="modern-warfare-three/generator"
              disabled={true}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
