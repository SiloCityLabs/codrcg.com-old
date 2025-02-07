import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import WeaponInfo from "@/components/info/WeaponInfo";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function BlackOpsThreeWeapon() {
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Multiplayer Generator", href: "/black-ops/three/generator" },
        { label: "Loadout Info", href: "/black-ops/three/info" },
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
                <title>Black Ops 3 Weapon - {value}</title>
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="description"
                    content="View information for a weapon in Black Ops 3. View all attachments."
                />
                <meta
                    name="keywords"
                    content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Black Ops 3 RCG, COD Blops 3 RCG, blops 3 random class generator,
          blops 3, black ops 3, ops 3 rcg, ops 3 random class generator, black ops 3 random class generator, zombies, treyarch zombies,
          black ops zombies, black ops 3 zombies, black ops rcg, black ops random class generator"
                />
            </Head>
            <Header className="black-ops" navLinks={navLinks} />
            <Container className={styles.generator} fluid>
                <Row>
                    <Col>
                        <h2>
                            Black Ops 3
                            <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
                            <br className="d-block d-sm-none" />
                            Weapon - {value}
                        </h2>

                        {!isLoading && value && (
                            <WeaponInfo value={value} game="black-ops-three" />
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
}
