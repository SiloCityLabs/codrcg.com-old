import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import InfoList from "@/components/info/InfoList";
//Helpers
import { getStreaks } from "@/helpers/info/getStreaks";
//Styles
import "@/public/styles/components/Loadout.css";

export default function ColdWarStreaks() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/modern-warfare/three/generator" },
    {
      label: "Zombies Generator",
      href: "/modern-warfare/three/zombies-generator",
    },
    { label: "Loadout Info", href: "/modern-warfare/three/info" },
    { label: "Changelog", href: "/changelog" },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const dataKeys = ["name", "score", "type", "game"];

  useEffect(() => {
    const dataList = getStreaks("modern-warfare-three");
    setData(dataList);

    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Modern Warfare 3 Streaks</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="View all streaks in Modern Warfare 3."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Modern Warfare 3 RCG, COD MW3 RCG, mw3 random class generator,
          mw3, modern warfare 3, modern warfare 3 rcg, modern warfare 3 random class generator, class generator, zombies, Infinity Ward zombies,
          modern warfare zombies, modern warfare 3 zombies, modern warfare rcg, modern warfare random class generator"
        />
      </Head>
      <Header className="modern-warfare" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>
              Modern Warfare 3
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Streaks
            </h2>

            {!isLoading && <InfoList data={data} dataKeys={dataKeys} />}
          </Col>
        </Row>
      </Container>
    </>
  );
}
