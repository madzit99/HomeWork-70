import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Contact } from "../../types";
import { AppDispatch } from "../../app/store";
import { useDispatch } from "react-redux";
import { deleteContact, fetchContacts } from "../ContacstList/ContactsThunks";

interface Props {
  contact: Contact;
  open: boolean;
  onClose: () => void;
}

const ModalContact: React.FC<Props> = ({ open, contact, onClose }) => {
  const dispatch: AppDispatch = useDispatch();

  const onDelete = async (id: string) => {
    await dispatch(deleteContact(id));
    await dispatch(fetchContacts());
    onClose();
  };

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
        <Button variant="danger" onClick={() => onDelete(contact.id)}>
          Удалить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalContact;
