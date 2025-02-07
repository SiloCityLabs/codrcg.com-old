import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import WeaponInfo from "@/components/info/WeaponInfo";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function ColdWarWeapon() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/black-ops/cold-war/generator" },
    {
      label: "Zombies Generator",
      href: "/black-ops/cold-war/zombies-generator",
    },
    { label: "Loadout Info", href: "/black-ops/cold-war/info" },
    { label: "Changelog", href: "/changelog" },
  ];
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const valueParam = urlParams.get("value");

    if (valueParam === null) {
      // Strictly check for null
      router.replace("/404");
      return;
    }

    setValue(valueParam);

    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Cold War Weapon - {value}</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="View information for a weapon in Cold War. View all attachments."
        />
        <meta
          name="keywords"
          content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Cold War RCG, cold war random class generator,
          cold war, cold war rcg, cold war random class generator, class generator, zombies, treyarch zombies,
          cold war zombies, cold war rcg, cold war random class generator"
        />
      </Head>
      <Header className="cold-war" navLinks={navLinks} />
      <Container className={styles.generator} fluid>
        <Row>
          <Col>
            <h2>
              Cold War
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Weapon - {value}
            </h2>

            {!isLoading && value && (
              <WeaponInfo value={value} game="cold-war" />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
