import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect, useState } from "react";
import { fetchContacts } from "./ContactsThunks";
import { Contact } from "../../types";
import OneContact from "./OneContact";
import ModalContact from "../ModalContact/Modal";

const ContactsList = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch: AppDispatch = useDispatch();

  const [open, setOpen] = useState<boolean>(false);

  const [modalContent, setModalContent] = useState<Contact>({
    id: "",
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleContactClick = (contact: Contact, id: string) => {
    setModalContent(() => ({
      ...contact,
      id: id,
    }));
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {contacts && Object.keys(contacts).length > 0 ? (
        Object.keys(contacts).map((key) => {
          const contact = contacts[key];
          return (
            <OneContact
              key={key}
              name={contact.name}
              photo={contact.photo}
              onClick={() => handleContactClick(contact, key)}
            />
          );
        })
      ) : (
        <h1 className="text-center">Нет контактов</h1>
      )}
      <ModalContact
        open={open}
        contact={modalContent}
        onClose={() => onClose()}
      />
    </div>
  );
};

export default ContactsList;
