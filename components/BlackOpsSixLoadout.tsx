import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
//Helpers
import { implodeObject } from "../helpers/implodeObject";
import { fetchWeapon } from "../helpers/fetchWeapon";
import { fetchPerks } from "../helpers/fetchPerks";
import { fetchAttachments } from "@/helpers/fetchAttachments";
import { fetchEquipment } from "@/helpers/fetchEquipment";
import { fetchWildcard } from "@/helpers/fetchWildcard";
//Styles
import "../public/styles/components/Loadout.css";

function BlackOpsSixLoadout() {
  const attachs = {
    attach1: "attach1",
    attach2: "attach2",
    attach3: "attach3",
    attach4: "attach4",
    attach5: "attach5",
  };

  const [containerClass, setContainerClass] = useState("hidden");
  let s_attachments = implodeObject(attachs);
  const [data, setData] = useState({
    perks: null,
    primaryWeapon: { name: "", type: "", game: "", no_attach: false },
    p_attachments: "",
    secondaryWeapon: { name: "", type: "", game: "", no_attach: false },
    meleeWeapon: { name: "", type: "", game: "" },
    tacticalEquip: { name: "", type: "" },
    lethalEquip: { name: "", type: "" },
    fieldUpgrade: { name: "", type: "" },
    wildcard: { name: "", type: "" },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const wildcard = await fetchWildcard("black-ops-six");
        
        const perks = await fetchPerks("black-ops-six");
        const primaryWeapon = await fetchWeapon("primary", "black-ops-six");
        //Get Primary Attachments
        const p_attachments = implodeObject(
          await fetchAttachments(primaryWeapon)
        );
        const secondaryWeapon = await fetchWeapon("secondary", "black-ops-six");
        const meleeWeapon = await fetchWeapon("melee", "black-ops-six");
        const tacticalEquip = await fetchEquipment("tactical", "black-ops-six");
        const lethalEquip = await fetchEquipment("lethal", "black-ops-six");
        const fieldUpgrade = await fetchEquipment(
          "field_upgrade",
          "black-ops-six"
        );

        setData({
          perks,
          primaryWeapon,
          p_attachments,
          secondaryWeapon,
          meleeWeapon,
          tacticalEquip,
          lethalEquip,
          fieldUpgrade,
          wildcard,
        });
        setContainerClass("");
      } catch (error: any) {
        console.error(error.message); // Handle errors centrally
      }
    };

    fetchData();
  }, []);

  const {
    perks,
    primaryWeapon,
    p_attachments,
    secondaryWeapon,
    meleeWeapon,
    tacticalEquip,
    lethalEquip,
    fieldUpgrade,
    wildcard,
  } = data;

  return (
    <>
      <Container
        id="random-class"
        className={`${containerClass} shadow-lg p-3 mb-5 bg-body rounded`}
      >
        <Row id="weapons">
          <Col>
            <span className="label">Primary:</span> {primaryWeapon.name} - (
            {primaryWeapon.game}) - ({primaryWeapon.type})
            <br />
            {primaryWeapon.no_attach ? (
              <>
                {" "}
                <span className="label">Primary Attachments: </span> No
                Attachments{" "}
              </>
            ) : (
              <>
                {" "}
                <span className="label">Primary Attachments:</span>{" "}
                {p_attachments}{" "}
              </>
            )}
          </Col>
          <Col>
            <span className="label">Secondary:</span> {secondaryWeapon.name} - (
            {secondaryWeapon.game}) - ({secondaryWeapon.type})
            <br />
            {secondaryWeapon.no_attach ? (
              <>
                {" "}
                <span className="label">Secondary Attachments: </span> No
                Attachments{" "}
              </>
            ) : (
              <>
                {" "}
                <span className="label">Secondary Attachments:</span>{" "}
                {s_attachments}{" "}
              </>
            )}
          </Col>
          <Col>
            <span className="label">Melee:</span> {meleeWeapon.name} - (
            {meleeWeapon.game}) - ({meleeWeapon.type})
          </Col>
        </Row>
        <Row id="equipment">
          <Col>
            <span id="tactical">
              <span className="label">Tactical:</span> {tacticalEquip.name}
            </span>
            <span id="lethal">
              <span className="label">Lethal:</span> {lethalEquip.name}
            </span>
          </Col>
          <Col>
            <span className="label">Perks:</span> {perks}
          </Col>
          <Col>
            <span className="label">Field Upgrade:</span> {fieldUpgrade.name}
          </Col>
        </Row>
        <Row>
          <Col>
            <span className="label">Wildcard:</span> {wildcard.name}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BlackOpsSixLoadout;
