import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SimpleGeneratorView from "@/components/generators/cod/SimpleGeneratorView";
//Helpers
import { fetchWeapon } from "@/helpers/fetch/fetchWeapon";
import { fetchEquipment } from "@/helpers/fetch/fetchEquipment";
import { fetchClassName } from "@/helpers/fetch/fetchClassName";
//Zombies
import { fetchZombiesCharacter } from "@/helpers/fetch/zombies/fetchZombiesCharacter";
import { fetchZombiesMap } from "@/helpers/fetch/zombies/fetchZombiesMap";
import { fetchZombiesPerks } from "@/helpers/fetch/zombies/fetchZombiesPerks";
//Utils
import { sendEvent } from "@/utils/gtag";

function WorldWarTwoZombiesLoadout() {
  const [isLoading, setIsLoading] = useState(true);
  const [containerClass, setContainerClass] = useState("hidden");
  const [isGenerating, setIsGenerating] = useState(true);

  //Data
  const [data, setData] = useState({
    randClassName: "",
    weapons: {
      primary: {
        weapon: { name: "", type: "", game: "", no_attach: false },
      },
    },
    lethal: "",
    special: "",
    character: "",
    zombieMap: "",
    mods: "",
  });

  useEffect(() => {
    fetchLoadoutData(setData, setContainerClass);
    setIsLoading(false);
    setIsGenerating(false);
  }, []);

  const handleClick = async () => {
    setIsGenerating(true);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      fetchLoadoutData(setData, setContainerClass);
      setIsGenerating(false);
    }, 1000);
  };

  const {
    randClassName,
    weapons,
    lethal,
    special,
    character,
    zombieMap,
    mods,
  } = data;

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <Container
        id="random-class"
        className={`${containerClass} shadow-lg p-3 bg-body rounded`}
      >
        {!isGenerating && (
          <>
            <h3 className="text-center">&ldquo;{randClassName}&rdquo;</h3>
            <hr />
          </>
        )}
        <Row className="justify-content-md-center mb-4">
          <Col xs md="8" lg="4" className="text-center">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Character"
              value={character}
            />
          </Col>
          <Col xs md="8" lg="4" className="text-center">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Primary"
              value={weapons.primary.weapon.name}
            />
          </Col>
          <Col xs md="8" lg="4" className="text-center">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Special"
              value={special}
            />
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center mb-4">
          <Col xs md="4" lg="3" className="text-center">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Mods"
              value={mods}
            />
          </Col>
          <Col xs md="4" lg="3" className="text-center">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Lethal"
              value={lethal}
            />
          </Col>
          <Col xs md="4" lg="3" className="text-center">
            <SimpleGeneratorView
              isGenerating={isGenerating}
              title="Map"
              value={zombieMap}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs md="8" lg="6" className="text-center">
            <Button
              variant="ww2"
              disabled={isGenerating}
              onClick={isGenerating ? undefined : handleClick}
            >
              {isGenerating ? "Generating Loadout..." : "Generate Loadout"}
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

async function fetchLoadoutData(setData, setContainerClass) {
  sendEvent("button_click", {
    button_id: "ww2Zombies_fetchLoadoutData",
    label: "WorldWarTwoZombies",
    category: "COD_Loadouts",
  });

  try {
    const game = "world-war-two-zombies";
    const randClassName = fetchClassName();
    const weapons = {
      primary: {
        weapon: fetchWeapon("primary", game),
      },
    };

    const lethal = fetchEquipment("lethal", "world-war-two").name;
    const special = fetchEquipment("field_upgrade", game).name;
    const character = fetchZombiesCharacter(game).name;
    const zombieMap = fetchZombiesMap(game).name;
    const mods = fetchZombiesPerks(`${game}-${special.toLowerCase()}`, 3).join(
      ", "
    );

    setData({
      randClassName,
      weapons,
      lethal,
      special,
      character,
      zombieMap,
      mods,
    });
    setContainerClass("");
  } catch (error: any) {
    console.error(error.message); // Handle errors centrally
  }
}

export default WorldWarTwoZombiesLoadout;
