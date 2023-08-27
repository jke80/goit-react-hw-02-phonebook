// import PropTypes from 'prop-types';
import { ContactListStyled } from './ContactListStyled';
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactListStyled>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        ></Contact>
      ))}
    </ContactListStyled>
  );
};
