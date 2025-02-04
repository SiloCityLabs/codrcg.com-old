import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GeneratorCard from "@/components/GeneratorCard";
//json
import generatorList from "@/json/index/generator-list.json";
import zombieGeneratorList from "@/json/index/zombie-generator-list.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Call Of Duty Random Class Generators</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Your hub for all call of duty random class generators past, present and future."
        />
        <meta
          name="keywords"
          content="call of duty, cod, random class generator, rcg, multiplayer, call of duty random class generator,
          Morden Warfare 2 RCG, MW2 RCG, mw2 random class generator, modern warfare 2, modern warfare 2 random class generator,
          Black Ops RCG, blops, black ops, ops rcg, black ops random class generator,
          Morden Warfare 3 RCG, MW3 RCG, mw3 random class generator, modern warfare 3, modern warfare 3 random class generator,
          Black Ops 2 RCG, blops 2, black ops 2, ops 2 rcg, black ops 2 random class generator,
          Ghost random class generator, Ghost,
          Black Ops 3 RCG, blops 3, black ops 3, ops 3 rcg, black ops 3 random class generator
          Call of Duty: WWII, World War II RCG, WWII, world war II random class generator
          Call of Duty: WW2, World War 2 RCG, WW2, world war 2 random class generator,
          Black Ops 4 RCG, blops 4, black ops 4, ops 4 rcg, black ops 4 random class generator,
          Black Ops 6 RCG, blops 6, black ops 6, ops 6 rcg, black ops 6 random class generator,
          Cold War random class generator, Cold War,
          Vanguard random class generator, Vanguard,
          Infinite Warfare random class generator, Infinite Warfare,
          Warzone random class generator, Warzone"
        />
        <meta
          name="keywords"
          content="call of duty, cod, random class generator, rcg, multiplayer, call of duty random class generator, Morden Warfare 2 RCG, MW2 RCG, mw2 random class generator, modern warfare 2, modern warfare 2 random class generator, Black Ops RCG, blops, black ops, ops rcg, black ops random class generator, Morden Warfare 3 RCG, MW3 RCG, mw3 random class generator, modern warfare 3, modern warfare 3 random class generator, Black Ops 2 RCG, blops 2, black ops 2, ops 2 rcg, black ops 2 random class generator, Ghost random class generator, Ghost, Advanced Warfare RCG, advanced warfare random class generator, Black Ops 3 RCG, blops 3, black ops 3, ops 3 rcg, black ops 3 random class generator, Call of Duty: WWII, World War II RCG, WWII, world war II random class generator, Call of Duty: WW2, World War 2 RCG, WW2, world war 2 random class generator, black ops 6, zombies, black ops 6 zombies, warzone, modern warfare 3 (2023)"
        />
      </Head>
      <div className="cod-container">
        <div id="we-are-back-banner" className="py-2">
          <span className="fs-5">
            We&apos;re back, and we&apos;re open source!!
          </span>
        </div>
        <Header />
        <Container className="main-content">
          <Row>
            {generatorList.map((card, index) => (
              <Col
                key={index}
                xl={3}
                lg={4}
                md={6}
                className="text-center mb-4"
              >
                <GeneratorCard
                  title={card.title}
                  text={card.text}
                  variant={card.variant}
                  btn1Text={card.btn1Text}
                  link={card.link}
                  disabled={card.disabled}
                  btn2Text={card.btn2Text}
                  link2={card.link2}
                  disabled2={card.disabled2}
                />
              </Col>
            ))}
          </Row>
          <Row className="mt-5">
            <h3 className="text-center">Zombies</h3>
            <hr />
            {zombieGeneratorList.map((card, index) => (
              <Col
                key={index}
                xl={3}
                lg={4}
                md={6}
                className="text-center mb-4"
              >
                <GeneratorCard
                  title={card.title}
                  text={card.text}
                  variant={card.variant}
                  btn1Text={card.btn1Text}
                  link={card.link}
                  disabled={card.disabled}
                  btn2Text={card.btn2Text}
                  link2={card.link2}
                  disabled2={card.disabled2}
                />
              </Col>
            ))}
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}
