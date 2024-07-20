interface Props {
  name: string;
  photo: string;
  onClick: () => void;
}

const OneContact: React.FC<Props> = ({ name, photo, onClick }) => {
  return (
    <div
      className="card border border-primary mx-auto p-3 mt-3 d-flex flex-row align-items-center"
      style={{ height: "150px" }}
      onClick={onClick}
    >
      <img src={photo} alt="" style={{ width: "100px" }} />
      <h3 className="ms-3 fs-1 fw-bold">{name}</h3>
    </div>
  );
};

export default OneContact;
