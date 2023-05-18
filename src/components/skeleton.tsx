import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Placeholder, Spinner } from "react-bootstrap";

const Skeleton = () => {
  return (
    <Card className=" w-52">
      <Spinner className="mx-auto p-4" />
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <div className="flex items-center justify-between">
          <Placeholder.Button variant="primary" xs={3} />
          <Placeholder.Button variant="primary" xs={3} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Skeleton;
