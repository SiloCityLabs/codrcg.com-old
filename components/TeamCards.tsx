import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function TeamCards() {
  const members = [
    {
      name: "Andrew Elbaneh",
      image: "https://placehold.co/25x25",
      psn: "Bana0615",
      steam: "Bana0615",
      twitter: "https://twitter.com/AndrewElbaneh",
      youtube: "https://www.youtube.com/channel/UC3MbriiZ8-0YMN2MGCHrx4Q",
      instagram: "https://instagram.com/andrewelbaneh",
    },
    {
      name: "Luis Rodriguez",
      image: "https://placehold.co/25x25",
      psn: "Ldrrp",
      steam: "Ldrrp",
    },
  ];

  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {members.map((member, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={member.image} alt={member.name} />
            <Card.Body>
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
                <div className="social">
                  {member.twitter && (
                    <a href={member.twitter}>
                      <FontAwesomeIcon icon={faTwitterSquare} />
                    </a>
                  )}
                  {member.youtube && (
                    <a href={member.youtube}>
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  )}
                  {member.instagram && (
                    <a href={member.instagram}>
                      <FontAwesomeIcon icon={faInstagram} />
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
