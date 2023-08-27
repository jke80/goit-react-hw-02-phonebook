import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import React from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const TEST = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const INITIAL_STATE = {
  contacts: [...TEST],
  filter: '',
};
export class App extends React.Component {
  state = { ...INITIAL_STATE };

  handelSubmit = e => {
    e.preventDefault();

    const id = nanoid();
    const name = e.target.name.value;
    const number = e.target.number.value;

    this.setState(({ contacts }) => {
      if (contacts.some(contact => contact.name === name)) {
        Notify.failure(`${name} is already in contacts`);
        return;
      }
      Notify.success(`Contact ${name} added successfully`);
      return { contacts: [...contacts, { id, name, number }] };
    });
    this.setState({ name: '' });
    this.setState({ number: '' });
  };

  handelDelete = id => {
    this.setState(prevState => {
      const newContacts = prevState.contacts.filter(
        contact => contact.id !== id
      );
      Notify.success(`Contact deleted successfully`);
      return { contacts: newContacts };
    });
  };

  filteredContacts() {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  handelChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          // fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <Form onSubmit={this.handelSubmit} />
        {!!this.state.contacts.length && (
          <Filter onChange={this.handelChange} filter={this.state.filter} />
        )}
        {!!this.state.contacts.length && <h2>Contacts</h2>}
        <ContactList
          contacts={this.filteredContacts()}
          onDelete={this.handelDelete}
        />
      </div>
    );
  }
}
