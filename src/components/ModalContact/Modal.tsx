import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Contact } from "../../types";

interface Props {
  contact: Contact;
  open: boolean;
  onClose: () => void;
}

const ModalContact: React.FC<Props> = ({ open, contact, onClose }) => {
  return (
    <Modal show={open} onHide={onClose} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{contact.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={contact.photo}
          alt={contact.photo}
          style={{
            display: "block",
            maxWidth: "300px",
            height: "auto",
            margin: "0 auto",
          }}
        />
        <p>Почта: {contact.email}</p>
        <p>Телефон: {contact.phone}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Редактировать</Button>
        <Button variant="danger">Удалить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalContact;
