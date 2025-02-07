import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import WeaponInfo from "@/components/info/WeaponInfo";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function WarzoneWeapon() {
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Warzone Generator", href: "/warzone/generator" },
        { label: "Where We Droppin?", href: "/warzone/where-we-droppin" },
        { label: "Loadout Info", href: "/warzone/info" },
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
                <title>Warzone Weapon - {value}</title>
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="description"
                    content="View information for a weapon in Warzone. View all attachments."
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
                            Weapon - {value}
                        </h2>

                        {!isLoading && value && (
                            <WeaponInfo value={value} game="warzone" />
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
}
