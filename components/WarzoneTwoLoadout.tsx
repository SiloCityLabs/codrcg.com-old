import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
//Helpers
import { implodeObject } from "../helpers/implodeObject";
import { fetchWeapon } from "../helpers/fetchWeapon";
import { fetchPerks } from "../helpers/fetchPerks";
//Styles
import "../public/styles/components/Loadout.css";
import { fetchEquipment } from "@/helpers/fetchEquipment";
//Types
import { ClassProps } from "@/types/WarzoneTwo";

function WarzoneTwoLoadout(props: ClassProps) {
  const [containerClass, setContainerClass] = useState("hidden");
  let p_attachments = implodeObject(props.p_attachments);
  let s_attachments = implodeObject(props.s_attachments);
  const [data, setData] = useState({
    perks: null,
    primaryWeapon: { name: "", type: "", game: "", no_attach: false },
    secondaryWeapon: { name: "", type: "", game: "", no_attach: false },
    tacticalEquip: { name: "", type: "" },
    lethalEquip: { name: "", type: "" },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const perks = await fetchPerks();
        const primaryWeapon = await fetchWeapon("primary");
        const secondaryWeapon = await fetchWeapon("secondary");
        const tacticalEquip = await fetchEquipment("tactical", "warzone-two");
        const lethalEquip = await fetchEquipment("lethal", "warzone-two");

        setData({
          perks,
          primaryWeapon,
          secondaryWeapon,
          tacticalEquip,
          lethalEquip,
        });
        setContainerClass("");
      } catch (error: any) {
        console.error(error.message); // Handle errors centrally
      }
    };

    fetchData();
  }, []);

  const { perks, primaryWeapon, secondaryWeapon, tacticalEquip, lethalEquip } =
    data;

  // Remove unnecessary console logs

  return (
    <>
      <Container
        id="random-class"
        className={`${containerClass} shadow-lg p-3 mb-5 bg-body rounded`}
      >
        <Row id="weapons">
          <Col>
            <span className="label">Primary:</span> {primaryWeapon.name} (
            {primaryWeapon.game})
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
            <span className="label">Secondary:</span> {secondaryWeapon.name} -{" "}
            {secondaryWeapon.game}
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
        </Row>
        <Row>
          <Col id="equipment">
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
        </Row>
      </Container>
    </>
  );
}

export default WarzoneTwoLoadout;
