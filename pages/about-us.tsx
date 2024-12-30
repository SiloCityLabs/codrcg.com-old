import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamCards from "@/components/TeamCards";

export default function Changelog() {
  return (
    <>
      <Head>
        <title>About Us - Call Of Duty Random Class Generator</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="This is the about us for codrcg." />
        <meta
          name="keywords"
          content="call of duty, cod, rcg, codrcg, cod rcg, about us"
        />
      </Head>
      <div className="cod-container">
        <Header />
        <Container className="main-content" fluid>
          <Row>
            <Col>
              <h2 className="text-center">About Us</h2>

              <Container
                id="about-us"
                className="shadow-lg p-3 mb-5 bg-body rounded text-center"
              >
                <Row className="mb-2">
                  <Col>
                    <h3>Why we started this site?</h3>
                    <p>
                      Do you enjoy playing Call Of Duty? We all know that after
                      a while it can get a little repetative, so we thought why
                      not make a website that will randomly create classes to
                      add variety and make it more fun and challenging for
                      everyone. Plus who knows, you might even discover a new
                      class setup that you think is pretty awesome.
                    </p>
                  </Col>
                </Row>
                <TeamCards />
              </Container>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}
