import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../public/styles/components/GeneratorCard.css";
//Types
import { CardProps } from "@/types/GeneratorCard";

function GeneratorCard(props: CardProps) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://placehold.co/100x100" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <div className="d-grid gap-2">
          <Button
            variant={props.variant}
            href={props.link}
            size="sm"
            disabled={props.disabled}
          >
            Generator
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default GeneratorCard;
