import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import WeaponInfo from "@/components/info/WeaponInfo";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function ModernWarfareThreeWeapon() {
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
        <title>Modern Warfare 3 Weapon - {value}</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="View information for a weapon in Modern Warfare 3. View all attachments."
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
      <Container className={styles.generator} fluid>
        <Row>
          <Col>
            <h2>
              Modern Warfare 3
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Weapon - {value}
            </h2>

            {!isLoading && value && (
              <WeaponInfo value={value} game="modern-warfare-three" />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
