import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
//Helpers
import { implodeObject } from "@/helpers/implodeObject";
import { fetchWeapon } from "@/helpers/fetchWeapon";
import { fetchAttachments } from "@/helpers/fetchAttachments";
import { fetchEquipment } from "@/helpers/fetchEquipment";
//Styles
import "@/public/styles/components/Loadout.css";

function ModernWarfareThreeZombiesLoadout() {
  const [containerClass, setContainerClass] = useState("hidden");
  const [data, setData] = useState({
    primaryWeapon: { name: "", type: "", game: "", no_attach: false },
    p_attachments: "",
    secondaryWeapon: { name: "", type: "", game: "", no_attach: false },
    s_attachments: "",
    tacticalEquip: { name: "", type: "" },
    lethalEquip: { name: "", type: "" },
    fieldUpgrade: { name: "", type: "" },
  });

  useEffect(() => {
    fetchLoadoutData(setData, setContainerClass);
  }, []);

  const handleClick = async () => {
    fetchLoadoutData(setData, setContainerClass);
  };

  const {
    primaryWeapon,
    p_attachments,
    secondaryWeapon,
    s_attachments,
    tacticalEquip,
    lethalEquip,
    fieldUpgrade,
  } = data;

  return (
    <>
      <Container
        id="random-class"
        className={`${containerClass} shadow-lg p-3 bg-body rounded`}
      >
        <Row className="justify-content-md-center mb-4">
          <Col xs md="8" lg="6" className="text-center">
            <span className="fw-bolder fs-5">Primary:</span> <br />
            <span className="text-muted fs-6">{primaryWeapon.name}</span>
            <br />
            {primaryWeapon.no_attach ? (
              <>
                <span className="fw-bolder fs-5">Primary Attachments: </span>
                <br />
                <span className="text-muted fs-6">No Attachments</span>
              </>
            ) : (
              <>
                <span className="fw-bolder fs-5">Primary Attachments:</span>
                <br />
                <span className="text-muted fs-6">{p_attachments}</span>
              </>
            )}
          </Col>
          <Col xs md="8" lg="6" className="text-center">
            <span className="fw-bolder fs-5">Secondary:</span> <br />
            <span className="text-muted fs-6">{secondaryWeapon.name}</span>
            <br />
            {secondaryWeapon.no_attach ? (
              <>
                <span className="fw-bolder fs-5">Secondary Attachments: </span>
                <br />
                <span className="text-muted fs-6">No Attachments</span>
              </>
            ) : (
              <>
                <span className="fw-bolder fs-5">Secondary Attachments:</span>
                <br />
                <span className="text-muted fs-6">{s_attachments}</span>
              </>
            )}
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center mb-4">
          <Col xs md="4" lg="3" className="text-center">
            <span className="fw-bolder fs-5">Tactical:</span> <br />
            <span className="text-muted fs-6">{tacticalEquip.name}</span>
          </Col>
          <Col xs md="4" lg="3" className="text-center">
            <span className="fw-bolder fs-5">Lethal:</span> <br />
            <span className="text-muted fs-6">{lethalEquip.name}</span>
          </Col>
          <Col xs md="4" lg="3" className="text-center">
            <span className="fw-bolder fs-5">Field Upgrade:</span> <br />
            <span className="text-muted fs-6">{fieldUpgrade.name}</span>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs md="8" lg="6" className="text-center">
            <Button variant="danger" href="#" onClick={handleClick}>
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
    let p_attachments;
    let s_attachments;
    const game = "modern-warfare-three-zombies";
    const primaryWeapon = fetchWeapon("all", "modern-warfare-three");
    //Get Primary Attachments
    if (!primaryWeapon.no_attach) {
      p_attachments = implodeObject(fetchAttachments(primaryWeapon));
    }
    //Get secondary Weapon
    const secondaryWeapon = fetchWeapon(
      "all",
      "modern-warfare-three",
      primaryWeapon.name
    );
    //Get Secondary Attachments
    if (!secondaryWeapon.no_attach) {
      s_attachments = implodeObject(fetchAttachments(secondaryWeapon));
    }
    //Get Equipment
    const tacticalEquip = fetchEquipment("tactical", game);
    const lethalEquip = fetchEquipment("lethal", game);
    const fieldUpgrade = fetchEquipment("field_upgrade", game);

    setData({
      primaryWeapon,
      p_attachments,
      secondaryWeapon,
      s_attachments,
      tacticalEquip,
      lethalEquip,
      fieldUpgrade,
    });
    setContainerClass("");
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

export default ModernWarfareThreeZombiesLoadout;
