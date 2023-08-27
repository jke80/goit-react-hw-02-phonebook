import { StyledContact } from './StyledContact';

export const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  const handelDelete = () => {
    onDelete(id);
  };

  return (
    <StyledContact>
      <div>
        <p>
          Name: <span>{name}</span>
        </p>
        <p>
          Number: <span>{number}</span>
        </p>
      </div>

      <button type="button" onClick={handelDelete}>
        delete
      </button>
    </StyledContact>
  );
};
