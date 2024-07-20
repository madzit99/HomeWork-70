import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Contact } from "../../types";
import ButtonSpinner from "../../components/Preloader/ButtonSpinner";
import { AppDispatch, RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewContact } from "../../components/ContacstList/ContactsThunks";

const ContactForm = () => {
  const loading = useSelector((state: RootState) => state.contacts.loading);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState<Contact>({
    id: "",
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(createNewContact(state));
    navigate("/");
  };

  return (
    <Form className="w-50 mx-auto" onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Имя</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Введите имя"
          required
          onChange={onChange}
          value={state.name}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Номер телефона</Form.Label>
        <Form.Control
          type="number"
          name="phone"
          placeholder="Введите номер телефона"
          required
          onChange={onChange}
          value={state.phone}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Почта</Form.Label>
        <Form.Control
          type="text"
          name="email"
          placeholder="Введите почту"
          onChange={onChange}
          value={state.email}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Фото</Form.Label>
        <Form.Control
          type="text"
          name="photo"
          placeholder="Введите ссылку на фото"
          onChange={onChange}
          value={state.photo}
        />
      </Form.Group>
      <div>
        <p>Предпросмотр:</p>
        <img
          src={
            state.photo
              ? state.photo
              : "https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif"
          }
          alt="Photo"
          style={{ width: "250px", height: "250px" }}
        />
      </div>
      <Button type="submit" variant="primary" className="mt-3">
        {loading ? <ButtonSpinner /> : "Добавить контакт"}
      </Button>
    </Form>
  );
};

export default ContactForm;
