import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import InfoList from "@/components/info/InfoList";
//Helpers
import { getWeapon } from "@/helpers/info/getWeapon";
//Styles
import "@/public/styles/components/Loadout.css";

export default function ModernWarfareRemasteredWeapons() {
  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "Multiplayer Generator",
      href: "/modern-warfare/remastered/generator",
    },
    { label: "Loadout Info", href: "/modern-warfare/remastered/info" },
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

  useEffect(() => {
    const dataList = getWeapon("modern-warfare-remastered");
    setData(dataList);

    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Modern Warfare Remastered Weapons</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="View information for weapons in Modern Warfare Remastered. View all attachments."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Modern Warfare Remastered RCG, COD MW RCG, mw remastered random class generator,
          mw remastered, modern warfare remastered, modern warfare remastered rcg, modern warfare remastered random class generator, class generator, zombies, Infinity Ward zombies,
          modern warfare zombies, modern warfare remastered zombies, modern warfare rcg, modern warfare random class generator"
        />
      </Head>
      <Header className="mwr" navLinks={navLinks} />
      <Container className="generator" fluid>
        <Row>
          <Col>
            <h2>
              Modern Warfare Remastered
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Weapons
            </h2>

            {!isLoading && <InfoList data={data} dataKeys={dataKeys} />}
          </Col>
        </Row>
      </Container>
    </>
  );
}
