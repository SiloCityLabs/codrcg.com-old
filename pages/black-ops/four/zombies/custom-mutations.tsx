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
import generalSettings from "@/json/black-ops/four/zombies/custom-mutations/general.json";
import systemsSettings from "@/json/black-ops/four/zombies/custom-mutations/systems.json";
import weaponSettings from "@/json/black-ops/four/zombies/custom-mutations/weapons.json";
import enemiesSettings from "@/json/black-ops/four/zombies/custom-mutations/enemies.json";
import playerSettings from "@/json/black-ops/four/zombies/custom-mutations/player.json";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function CustomMutations() {
  const [isLoading, setIsLoading] = useState(true);
  const [key, setKey] = useState<string>("general");
  const [count, setCount] = useState(0);
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Zombies Generator", href: "/black-ops/four/zombies/generator" },
    { label: "Loadout Info", href: "/black-ops/four/info" },
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
        <title>Black Ops 4 Random Custom Mutations Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your COD gameplay! Generate unique random custum mutations settings for Black Ops 4 Zombies. Discover new ways to play."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, zombies, call of duty random class generator, COD Black Ops 4 RCG, COD Blops 4 RCG, blops 4 random class generator,
          blops 4, black ops 4, ops 4 rcg, ops 4 random class generator, black ops 4 random class generator, zombies, treyarch zombies,
          black ops zombies, black ops 4 zombies, black ops rcg, black ops random class generator"
        />
      </Head>
      <Header className="black-ops" navLinks={navLinks} />
      <Container className={styles.generator} fluid>
        <Row>
          <Col>
            <h2>
              Black Ops 4
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Random Custom Mutations Generator
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
                    <Tab eventKey="systems" title="Systems">
                      <CustomSettingsSection
                        data={systemsSettings}
                        count={count}
                      />
                    </Tab>
                    <Tab eventKey="weapons" title="Weapons">
                      <CustomSettingsSection
                        data={weaponSettings}
                        count={count}
                      />
                    </Tab>
                    <Tab eventKey="enemies" title="Enemies">
                      <CustomSettingsSection
                        data={enemiesSettings}
                        count={count}
                      />
                    </Tab>
                    <Tab eventKey="player" title="Player">
                      <CustomSettingsSection
                        data={playerSettings}
                        count={count}
                      />
                    </Tab>
                  </Tabs>
                  <Row id="button-row">
                    <Col className="text-center">
                      <Button
                        variant="black-ops"
                        href="#"
                        onClick={handleClick}
                      >
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
