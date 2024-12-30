import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
//Helpers
import { implodeObject } from "@/helpers/implodeObject";
import { fetchWeapon } from "@/helpers/fetchWeapon";
import { fetchAttachments } from "@/helpers/fetchAttachments";
import { fetchVanguardZombiesMap } from "@/helpers/generator/vanguard/fetchVanguardZombiesMap";
import { fetchVanguardZombiesArtifact } from "@/helpers/generator/vanguard/fetchVanguardZombiesArtifact";
import { fetchClassName } from "@/helpers/fetchClassName";
//Styles
import "@/public/styles/components/Loadout.css";

function VanguardZombiesLoadout() {
  const [isLoading, setIsLoading] = useState(true);
  const [containerClass, setContainerClass] = useState("hidden");

  //Data
  const [data, setData] = useState({
    randClassName: "",
    weapons: {
      primary: {
        weapon: { name: "", type: "", game: "", no_attach: false },
        attachments: "",
      },
    },
    artifact: "",
    zombieMap: "",
  });

  useEffect(() => {
    fetchLoadoutData(setData, setContainerClass);
    setIsLoading(false);
  }, []);

  const handleClick = async () => {
    fetchLoadoutData(setData, setContainerClass);
  };

  const { randClassName, weapons, artifact, zombieMap } = data;

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <Container
        id="random-class"
        className={`${containerClass} shadow-lg p-3 bg-body rounded`}
      >
        <h3 className="text-center mb-5">&ldquo;{randClassName}&rdquo;</h3>
        <Row className="justify-content-md-center mb-4">
          <Col xs md="8" lg="6" className="text-center">
            <span className="fw-bolder fs-5">Primary:</span> <br />
            <span className="text-muted fs-6">
              {weapons.primary.weapon.name}
            </span>
            <br />
            {weapons.primary.weapon.no_attach ? (
              <>
                <span className="fw-bolder fs-5">Primary Attachments: </span>
                <br />
                <span className="text-muted fs-6">No Attachments</span>
              </>
            ) : (
              <>
                <span className="fw-bolder fs-5">Primary Attachments:</span>
                <br />
                <span className="text-muted fs-6">
                  {weapons.primary.attachments}
                </span>
              </>
            )}
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center mb-4">
          <Col xs md="4" lg="3" className="text-center">
            <span className="fw-bolder fs-5">Artifact:</span> <br />
            <span className="text-muted fs-6">{artifact}</span>
          </Col>
          <Col xs md="4" lg="3" className="text-center">
            <span className="fw-bolder fs-5">Map:</span> <br />
            <span className="text-muted fs-6">{zombieMap}</span>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs md="8" lg="6" className="text-center">
            <Button
              variant="danger"
              onClick={handleClick}
              className="w-50 me-2"
            >
              Generate Loadout
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

async function fetchLoadoutData(setData, setContainerClass) {
  try {
    const randClassName = fetchClassName();
    const weapons = {
      primary: {
        weapon: fetchWeapon("all", "vanguard"),
        attachments: "",
      },
    };
    //Get Primary Attachments
    if (!weapons.primary.weapon.no_attach) {
      weapons.primary.attachments = implodeObject(
        fetchAttachments(weapons.primary.weapon, 8)
      );
    }
    const artifact = fetchVanguardZombiesArtifact();
    const zombieMap = fetchVanguardZombiesMap();

    setData({
      randClassName,
      weapons,
      artifact,
      zombieMap,
    });
    setContainerClass("");
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

export default VanguardZombiesLoadout;
