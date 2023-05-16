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
import { VscTypeHierarchySub } from "react-icons/vsc";
import { MdEditAttributes } from "react-icons/md";
import { VscSymbolProperty } from "react-icons/vsc";
import { SiLevelsdotfyi } from "react-icons/si";
import { GiDrippingSword } from "react-icons/gi";
import { BsFillShieldFill } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { HiOutlineScale } from "react-icons/hi";
import { MdOutlineDescription } from "react-icons/md";
import { api } from "@/utils/api";
import { Alert } from "react-bootstrap";
import { Formik, Field } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Cards = ({ item }: { item: YuGiOhDB }) => {
  const { data, error, refetch } = api.cards.getAll.useQuery();
  const { mutateAsync: deleteCard } = api.cards.deleteCard.useMutation();

  console.log(item.id);
  const [showDelete, setShowDelete] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const deleteHandleClose = () => setShowDelete(false);
  const deleteHandleShow = () => setShowDelete(true);

  const previewHandleClose = () => setShowPreview(false);
  const previewHandleShow = () => setShowPreview(true);

  const editHandleClose = () => setShowEdit(false);
  const editHandleShow = () => setShowEdit(true);

  const callDeteteCard = async (id: number) => {
    await deleteCard(id);
    await refetch();
    deleteHandleClose();
    return void 0;
  };

  return (
    <Card className="shadow-2xl" style={{ width: "18rem" }}>
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
        <TfiViewListAlt
          size={30}
          className="cursor-pointer"
          onClick={previewHandleShow}
        />
        <Dropdown>
          <Dropdown.Toggle variant="none"></Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" onClick={editHandleShow}>
              Edit
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={deleteHandleShow}>
              <div className="text-red-600">Delete</div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Body>
      {/* Delete Modal */}
      <Modal show={showDelete} onHide={deleteHandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure about deleting this powerful card ?!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={deleteHandleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => callDeteteCard(item.id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Preview Modal */}
      <Modal show={showPreview} onHide={previewHandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.CardName}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex-col ">
          <div className="flex flex-col items-center justify-center">
            <img
              src={`https://images.ygoprodeck.com/images/cards/${item.id}.jpg`}
              alt="Card Image"
              className="flex items-center justify-center"
            />
            <h1>Stats:</h1>
          </div>
          <div className="p-4">
            <div className="flex items-center gap-4  ">
              <VscTypeHierarchySub size={30} />
              Type: {item.CardType?.replace("NULL", "None")}
            </div>
            <div className="flex items-center gap-4 ">
              <MdEditAttributes size={30} />
              Attributes: {item.Attribute?.replace("NULL", "None")}
            </div>
            <div className="flex items-center gap-4 ">
              <VscSymbolProperty size={30} />
              Property: {item.Property?.replace("NULL", "None")}
            </div>
            <div className="flex items-center gap-4 ">
              <VscTypeHierarchySub size={30} />
              Types: {item.Types?.replace("NULL", "None")}
            </div>
            <div className="flex items-center gap-4 ">
              <SiLevelsdotfyi size={30} />
              Level: {item.Level}
            </div>
            <div className="flex items-center gap-4 ">
              <GiDrippingSword size={30} />
              ATK: {item.ATK}
            </div>
            <div className="flex items-center gap-4 ">
              <BsFillShieldFill size={30} />
              DEF: {item.DEF}
            </div>
            <div className="flex items-center gap-4 ">
              <BiLink size={30} />
              Link: {item.Link}
            </div>
            <div className="flex items-center gap-4 pb-3 ">
              <HiOutlineScale size={30} />
              PendulumScale: {item.PendulumScale}
            </div>
            <div className="flex flex-col items-center border-t-2 pt-3 ">
              <h2>Description:</h2>
              {item.Description?.replace("NULL", "None")}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={previewHandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEdit} onHide={editHandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editing ...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="warning">
            You are editing the card:{item.CardName} with the id:{item.id}
          </Alert>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form>
              <div className="flex">
                <InputGroup className="mb-3 flex flex-col">
                  <InputGroup.Text>Card Name</InputGroup.Text>
                  <InputGroup.Text>Card Type</InputGroup.Text>
                  <InputGroup.Text>Attribute</InputGroup.Text>
                  <InputGroup.Text>Property</InputGroup.Text>
                  <InputGroup.Text>Types</InputGroup.Text>
                  <InputGroup.Text>Level</InputGroup.Text>
                  <InputGroup.Text>ATK</InputGroup.Text>
                  <InputGroup.Text>DEF</InputGroup.Text>
                  <InputGroup.Text>LINK</InputGroup.Text>
                  <InputGroup.Text>PendulumScale</InputGroup.Text>
                  <InputGroup.Text>Description</InputGroup.Text>
                </InputGroup>
              </div>
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={editHandleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editHandleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default Cards;
