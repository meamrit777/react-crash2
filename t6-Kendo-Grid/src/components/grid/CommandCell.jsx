import Button from "../buttons/Button";

const CommandCell = ({ editButton, deleteButton }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Button label={editButton.label} onClick={editButton.onClick} />

      <a style={{ width: "20px" }}></a>

      <Button label={deleteButton.label} onClick={deleteButton.onClick} />
    </div>
  );
};

export default CommandCell;
