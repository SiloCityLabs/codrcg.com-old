import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import InfoList from "@/components/info/InfoList";
//Helpers
import { getWeapon } from "@/helpers/info/getWeapon";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function WarzoneWeapons() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Warzone Generator", href: "/warzone/generator" },
    { label: "Where We Droppin?", href: "/warzone/where-we-droppin" },
    { label: "Loadout Info", href: "/warzone/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const dataKeys = [
    "name",
    "type",
    "game",
    "no_attach",
    "no_attach_info",
    "isDlc",
  ];
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    const tmp_types: string[] = [];
    const dataList = getWeapon("warzone");
    setData(dataList);

    //Format data
    for (const key in dataList) {
      const type = dataList[key].type;

      if (!tmp_types.includes(type)) {
        tmp_types.push(type);
      }
    }
    setTypes(tmp_types);

    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Warzone Weapons</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="View information for weapons in Warzone. View all attachments."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Warzone RCG, COD Blops 6 RCG, blops 6 random class generator,
          blops 6, black ops 6, ops 6 rcg, ops 6 random class generator, black ops 6 random class generator, zombies, treyarch zombies,
          black ops zombies, black ops 6 zombies, black ops rcg, black ops random class generator"
        />
      </Head>
      <Header className="warzone" navLinks={navLinks} />
      <Container className={styles.generator} fluid>
        <Row>
          <Col>
            <h2>
              Warzone
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Weapons
            </h2>

            {!isLoading && (
              <InfoList data={data} dataKeys={dataKeys} types={types} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
