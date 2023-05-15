import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { YuGiOhDB } from "@prisma/client";
import { HiAdjustments } from "react-icons/hi";
import { TfiViewListAlt } from "react-icons/tfi";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const Cards = ({ item }: { item: YuGiOhDB }) => {
  console.log(item.id);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`https://images.ygoprodeck.com/images/cards/${item.id}.jpg`}
        alt="Card Image"
      />

      <Card.Body>
        <Card.Title>{item.CardName}</Card.Title>
        <Card.Text>{item.Description}</Card.Text>
      </Card.Body>
      <Card.Body
        className="flex max-h-14 items-center justify-between border-t-2 border-gray-100
      "
      >
        <TfiViewListAlt size={30} className="cursor-pointer" />
        <Dropdown>
          <Dropdown.Toggle variant="none"></Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={handleShow}>
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Body>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure about deleting this powerful card ?!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default Cards;
