import { useState, useEffect } from "react";
import Head from "next/head";
import {
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Button,
  Spinner,
} from "react-bootstrap";
import Header from "@/components/Header";
import CustomSettingsGeneral from "@/components/generators/cod/custom-settings/CustomSettingsGeneral";
import CustomSettingsSection from "@/components/generators/cod/custom-settings/CustomSettingsSection";
//Json
import generalSettings from "@/json/world-war-two/custom-match/general.json";
import rulesSettings from "@/json/world-war-two/custom-match/rules.json";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function CustomMatch() {
  const [isLoading, setIsLoading] = useState(true);
  const [key, setKey] = useState<string>("general");
  const [count, setCount] = useState(0);
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/world-war-two/generator" },
    { label: "Zombies Generator", href: "/world-war-two/zombies-generator" },
    { label: "Loadout Info", href: "/world-war-two/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleClick = async () => {
    setIsLoading(true);
    setCount(count + 1);
    setKey("general");

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>World War Two Random Custom Match Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your COD gameplay! Generate unique random custum match settings for World War Two. Discover new ways to play."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD World War 2 RCG, world war two random class generator,
          world war two, world war two rcg, world war two random class generator, class generator, zombies, treyarch zombies,
          world war two zombies, world war two rcg, world war two random class generator"
        />
      </Head>
      <Header className="ww2" navLinks={navLinks} />
      <Container className={styles.generator} fluid>
        <Row>
          <Col>
            <h2>
              World War Two
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Random Custom Match Generator
            </h2>
            <Container className="shadow-lg p-3 mb-5 bg-body rounded">
              {isLoading ? ( // Conditional rendering based on isLoading
                <div className="text-center">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              ) : (
                <>
                  <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k ?? "general")}
                    className="mb-3"
                  >
                    <Tab eventKey="general" title="General">
                      <CustomSettingsGeneral
                        data={generalSettings}
                        count={count}
                      />
                    </Tab>
                    <Tab eventKey="rules" title="Rules">
                      <CustomSettingsSection
                        data={rulesSettings}
                        count={count}
                      />
                    </Tab>
                  </Tabs>
                  <Row id="button-row">
                    <Col className="text-center">
                      <Button variant="ww2" href="#" onClick={handleClick}>
                        Generate Settings
                      </Button>
                    </Col>
                  </Row>
                </>
              )}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
