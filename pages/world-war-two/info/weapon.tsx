import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import WeaponInfo from "@/components/info/WeaponInfo";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function WorldWarTwoWeapon() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Multiplayer Generator", href: "/world-war-two/generator" },
    { label: "Zombies Generator", href: "/world-war-two/zombies-generator" },
    { label: "Custom Match", href: "/world-war-two/custom-match" },
    { label: "Loadout Info", href: "/world-war-two/info" },
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
        <title>World War Two Weapon - {value}</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="View information for a weapon in World War Two. View all attachments."
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
              Weapon - {value}
            </h2>

            {!isLoading && value && (
              <WeaponInfo value={value} game="world-war-two" />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
