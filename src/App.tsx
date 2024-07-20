import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ContactForm from "./containers/ContactForm/ContactForm";
import Home from "./containers/Home/Home";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-new" element={<ContactForm />} />
        <Route path="edit/:id" element={<ContactForm />} />
        <Route path="*" element={<h1>Нечего не найдено</h1>} />
      </Routes>
    </>
  );
};

export default App;
