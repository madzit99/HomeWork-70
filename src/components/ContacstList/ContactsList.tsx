import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect } from "react";
import { fetchContacts } from "./ContactsThunks";

const ContactsList = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {contacts ? (
        Object.keys(contacts).map((key) => ( 
          <>
            <h1>{contacts[key].name}</h1>
            <h2>{contacts[key].phone}</h2>
          </>
        ))
      ) : (
        <h1 className="text-center">Нет контактов</h1>
      )}
    </div>
  );
};

export default ContactsList;
