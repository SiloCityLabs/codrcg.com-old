import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
//Components
import Header from "@/components/Header";
import WeaponInfo from "@/components/info/WeaponInfo";
//Styles
import styles from "@/public/styles/components/Loadout.module.css";

export default function InfiniteWarfareWeapon() {
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Multiplayer Generator", href: "/infinite-warfare/generator" },
        { label: "Loadout Info", href: "/infinite-warfare/info" },
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
                <title>Infinite Warfare Weapon - {value}</title>
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="description"
                    content="View information for a weapon in Infinite Warfare. View all attachments."
                />
                <meta
                    name="keywords"
                    content="Call of duty, call, of, duty, cod, call of duty, random, class, generator, random class generator, rcg,
          free, mp, multiplayer, call of duty random class generator, COD Infinite Warfare RCG, COD IW RCG, iw random class generator,
          iw, infinite warfare, infinite warfare rcg, infinite warfare random class generator, infinite warfare rcg, infinite warfare random class generator"
                />
            </Head>
            <Header className="infinite-warfare" navLinks={navLinks} />
            <Container className={styles.generator} fluid>
                <Row>
                    <Col>
                        <h2>
                            Infinite Warfare
                            <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
                            <br className="d-block d-sm-none" />
                            Weapon - {value}
                        </h2>

                        {!isLoading && value && (
                            <WeaponInfo value={value} game="infinite-warfare" />
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
}
