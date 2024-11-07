import { Container, Row, Col } from 'react-bootstrap';
import Header from '@/components/Header';
import WarzoneTwoLoadout from '@/components/WarzoneTwoLoadout';



export default function WarzoneTwo() {
    const attachs = {
        attach1: 'attach1',
        attach2: 'attach2',
        attach3: 'attach3',
        attach4: 'attach4',
        attach5: 'attach5',
    }

    const perks = {
        perk1: 'perk1',
        perk2: 'perk2',
        perk3: 'perk3',
        perk4: 'perk4'
    }

    return <>
        <Header />
        <Container className='generator' fluid>
            <Row>
                <Col>
                    <h2>Warzone 2 - Random Class Generator</h2>

                    <WarzoneTwoLoadout
                        primary='Primary'
                        p_attachments={attachs}
                        secondary='Secondary'
                        s_attachments={attachs}
                        tactical='tactical'
                        lethal='lethal'
                        perks={perks} />
                </Col>
            </Row>
        </Container>
    </>;
}