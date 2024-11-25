import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import GeneratorCard from "@/components/GeneratorCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Call Of Duty Random Class Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Your hub for all call of duty random class generators past, present and future."
        />
        <meta
          name="keywords"
          content="call of duty, cod, random class generator, rcg, multiplayer, call of duty random class generator, Morden Warfare 2 RCG, MW2 RCG, mw2 random class generator, modern warfare 2, modern warfare 2 random class generator, Black Ops RCG, blops, black ops, ops rcg, black ops random class generator, Morden Warfare 3 RCG, MW3 RCG, mw3 random class generator, modern warfare 3, modern warfare 3 random class generator, Black Ops 2 RCG, blops 2, black ops 2, ops 2 rcg, black ops 2 random class generator, Ghost random class generator, Ghost, Advanced Warfare RCG, advanced warfare random class generator, Black Ops 3 RCG, blops 3, black ops 3, ops 3 rcg, black ops 3 random class generator, Call of Duty: WWII, World War II RCG, WWII, world war II random class generator, Call of Duty: WW2, World War 2 RCG, WW2, world war 2 random class generator, black ops 6, zombies, black ops 6 zombies, warzone, modern warfare 3 (2023)"
        />
      </Head>
      <div id="we-are-back-banner" className="py-2">
        <span className="fs-5">
          We&apos;re back, and we&apos;re open source!!
        </span>
      </div>
      <Header />
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xl={3} lg={4} className="text-center">
            <GeneratorCard
              title="Black Ops 6"
              text=""
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
              text=""
              variant="success"
              link="warzone/generator"
              disabled={false}
            />
          </Col>
          <Col xl={3} lg={4} className="text-center">
            <GeneratorCard
              title="Modern Warfare 3 (2023)"
              text="Coming in 2025"
              variant="danger"
              link="modern-warfare-three/generator"
              disabled={true}
              // btn2Text="Zombies Generator"
              // link2="modern-warfare-three/zombies-generator"
              // disabled2={true}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
