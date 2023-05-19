import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { YuGiOhDb } from "@prisma/client";
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
import { Alert, FloatingLabel } from "react-bootstrap";
import { Formik, Field } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Cards = ({ item }: { item: YuGiOhDb }) => {
  const { refetch } = api.cards.getAll.useQuery();
  const { mutateAsync: deleteCard } = api.cards.deleteCard.useMutation();
  const { mutateAsync: updateCard } = api.cards.updateCard.useMutation();

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
        src={`https://images.ygoprodeck.com/images/cards/${item?.id}.jpg`}
        alt="Card Image"
      />

      <Card.Body>
        <Card.Title>{item?.CardName}</Card.Title>
        <Card.Text>{item?.Description}</Card.Text>
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
          The card will be permanently deleted, are you sure?
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
      {/* Edit Modal */}
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
              id: item.id,
              CardName: item.CardName,
              CardType: item.CardType ? item.CardType : "",
              Attribute: item.Attribute ? item.Attribute : "",
              Property: item.Property ? item.Property : "",
              Types: item.Types ? item.Types : "",
              Level: item.Level ? item.Level : -1,
              ATK: item.ATK ? item.ATK : -1,
              DEF: item.DEF ? item.DEF : -1,
              Link: item.Link ? item.Link : -1,
              PendulumScale: item.PendulumScale ? item.PendulumScale : -1,
              Description: item.Description ? item.Description : "",
            }}
            onSubmit={async (values) => {
              try {
                await updateCard(values);
                await refetch();
                editHandleClose();
              } catch (error) {
                console.log(error);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="flex items-center justify-center ">
                  <div className="flex flex-col">
                    <label htmlFor="Card Name">Card Name</label>
                    <label htmlFor="Card Type">Card Type</label>
                    <label htmlFor="Attribute">Attribute</label>
                    <label htmlFor="Property">Property</label>
                    <label htmlFor="Types">Types</label>
                    <label htmlFor="Level">Level</label>
                    <label htmlFor="ATK">ATK </label>
                    <label htmlFor="DEF">DEF</label>
                    <label htmlFor="LINK">LINK</label>
                    <label htmlFor="PendulumScale">Pendulum Scale</label>
                    <label htmlFor="Description">Description</label>
                  </div>
                  <div className="flex flex-col">
                    <Field id="CardName" name="CardName" />
                    <Field id="CardType" name="CardType" />
                    <Field id="Attribute" name="Attribute" />
                    <Field id="Property" name="Property" />
                    <Field id="Types" name="Types" />
                    <Field id="Level" name="Level" />
                    <Field id="ATK" name="ATK" />
                    <Field id="DEF" name="DEF" />
                    <Field id="Link" name="Link" />
                    <Field id="PendulumScale" name="PendulumScale" />
                    <Field id="Description" name="Description" />
                  </div>
                </div>

                <button type="submit">Submit</button>
              </Form>
            )}
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
