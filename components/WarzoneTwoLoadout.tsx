import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//Helpers
import { implodeObject } from '../helpers/implodeObject';
import { fetchWeapon } from '../helpers/fetchWeapon';
import { fetchPerks } from '../helpers/fetchPerks';
//Styles
import '../public/styles/components/Loadout.css';
import { fetchEquipment } from '@/helpers/fetchEquipment';
//Types
import { ClassProps } from '@/types/WarzoneTwo'; 



function WarzoneTwoLoadout(props: ClassProps) {
    const weapon = { name: '', type: '', game: '', no_attach: false };
    let p_attachments = implodeObject(props.p_attachments);
    let s_attachments = implodeObject(props.s_attachments);
    const [perks, setPerks] = useState(null);
    const [primary, setPrimary] = useState(weapon);
    const [secondary, setSecondary] = useState(weapon);
    const [tactical, setTactical] = useState({ name: '', type: '' });
    const [lethal, setLethal] = useState({ name: '', type: '' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const perks = await fetchPerks();
                setPerks(perks);

                const primaryWeapon = await fetchWeapon('primary');
                setPrimary(primaryWeapon);

                //TODO: Update this to include primarys aswell & test that you dont have the same weapon 2x
                const secondaryWeapon = await fetchWeapon('secondary');
                setSecondary(secondaryWeapon);

                const tacticalEquip = await fetchEquipment('tactical', 'warzone-two');
                setTactical(tacticalEquip);

                const lethalEquip = await fetchEquipment('lethal', 'warzone-two');
                setLethal(lethalEquip);
            } catch (error: any) {
                console.error(error.message); // Handle errors centrally
            }
        };

        fetchData();
    }, []);

    console.log('primary', primary);
    console.log('secondary', secondary);
    console.log('tactical', tactical);
    console.log('lethal', lethal);

    return (
        <>
            <Container id='random-class' className='shadow-lg p-3 mb-5 bg-body rounded'>
                <Row id='weapons'>
                    <Col>
                        <span className='label'>Primary:</span> {primary.name} - {primary.game} <br />
                        {primary.no_attach ? (
                            // No attachments case: Display "No Attachments" or a custom message
                            <><span className='label'>Primary Attachments: </span> No Attachments</>
                        ) : (
                            // Attachments case: Display the existing logic for attachments
                            <><span className='label'>Primary Attachments:</span> {p_attachments}</>
                        )}
                    </Col>
                    <Col>
                        <span className='label'>Secondary:</span> {secondary.name} - {secondary.game} <br />
                        {secondary.no_attach ? (
                            // No attachments case: Display "No Attachments" or a custom message
                            <><span className='label'>Secondary Attachments: </span> No Attachments</>
                        ) : (
                            // Attachments case: Display the existing logic for attachments
                            <><span className='label'>Secondary Attachments:</span> {s_attachments}</>
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col id='equipment'>
                        <span id='tactical'><span className='label'>Tactical:</span> {tactical.name}</span>
                        <span id='lethal'><span className='label'>Lethal:</span> {lethal.name}</span>
                    </Col>
                    <Col>
                        <span className='label'>Perks:</span> {perks}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default WarzoneTwoLoadout;