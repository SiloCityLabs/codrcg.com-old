import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// Styles
import styles from "@/public/styles/components/TeamCards.module.css";

function TeamCards() {
  const members = [
    {
      name: "Andrew Elbaneh",
      image: "",
      psn: "Bana0615",
      steam: "Bana0615",
      twitter: "https://twitter.com/AndrewElbaneh",
      youtube: "https://www.youtube.com/channel/UC3MbriiZ8-0YMN2MGCHrx4Q",
      instagram: "https://instagram.com/elbaneh",
    },
    {
      name: "Luis Rodriguez",
      image: "",
      psn: "Ldrrp",
      steam: "Ldrrp",
    },
  ];

  return (
    <Row id="team-cards" xs={1} md={2} lg={4} className={`g-4 mb-3 ${styles.row}`}>
      {members.map((member, idx) => (
        <Col key={idx} className={styles.col}>
          <Card className={`h-100 ${styles.card}`}>
            {member.image && (
              <Card.Img variant="top" src={member.image} alt={member.name} />
            )}
            <Card.Body className="d-flex flex-column">
              <Card.Title>{member.name}</Card.Title>
              <Card.Text>
                {member.psn && (
                  <>
                    <label>PSN:</label> <small>{member.psn}</small>
                    <br />
                  </>
                )}
                {member.steam && (
                  <>
                    <label>Steam:</label> <small>{member.steam}</small>
                  </>
                )}
              </Card.Text>
              {member.twitter || member.youtube || member.instagram ? (
                <div className={styles.social}>
                  {member.twitter && (
                    <a href={member.twitter} target="_blank" rel="noopener">
                      <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
                    </a>
                  )}
                  {member.youtube && (
                    <a href={member.youtube} target="_blank" rel="noopener">
                      <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                  )}
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noopener">
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                  )}
                </div>
              ) : null}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default TeamCards;