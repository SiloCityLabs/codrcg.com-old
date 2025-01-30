import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const redirects: Record<string, string> = {
  //PHP site generators
  //Each of these may have subpages we need to add.
  "/black-ops": "/",
  "/black-ops-2": "/",
  "/bo3": "/black-ops/three",
  "/ghost": "/",
  "/infinite-warfare": "/",
  "/modern-warfare": "/",
  "/modern-warfare-2": "/",
  "/modern-warfare-3": "/",
  "/world-war-2": "/",
  "/contactus": "https://shop.silocitylabs.com/policies/contact-information",
  "/shoutouts": "/",
  "/statistics": "/",
  //New Redirects
  "/black-ops-four/generator": "/black-ops/four/generator",
  "/black-ops-four/zombies-generator": "/black-ops/four/zombies/generator",
  "/black-ops-four/info": "/black-ops/four/info",
  "/cold-war/generator": "/black-ops/cold-war/generator",
  "/cold-war/zombies-generator": "/black-ops/cold-war/zombies-generator",
  "/cold-war/info": "/black-ops/cold-war/info",
};

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    const newPath = redirects[window.location.pathname];
    if (newPath) {
      router.replace(newPath);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Page Not Found - Call Of Duty Random Class Generator</title>
        <meta name="description" content="This page could not be found." />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className="cod-container">
        <Header />
        <Container className="main-content" fluid>
          <Row>
            <Col>
              <h2 className="text-center">404 - Page Not Found</h2>

              <Container
                id="about-us"
                className="shadow-lg p-3 mb-5 bg-body rounded text-center"
              >
                <Row className="justify-content-md-center">
                  <Col lg={8}>
                    <p>
                      If you were looking for something, it might have moved.
                    </p>
                    <p>Redirecting if necessary...</p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}
