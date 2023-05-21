import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contactList')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contactList', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = data => {
    const newContact = { id: nanoid(), ...data };

    setContacts(contacts => [...contacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        width: '400px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        gap: '20px',
        borderRadius: '5px',
        fontSize: '16px',
        color: '#010101',
        backgroundColor: '#ffffff',
        boxShadow:
          '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm createContact={createContact} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter setFilter={handleFilterChange} filterValue={filter} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
