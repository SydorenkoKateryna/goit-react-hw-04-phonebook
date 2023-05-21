import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedData = localStorage.getItem('contactList');

    if (savedData) {
      this.setState({ contacts: JSON.parse(savedData) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem('contactList', JSON.stringify(contacts));
    }
  }

  createContact = data => {
    const newContact = { id: nanoid(), ...data };

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  setFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { contacts, filter } = this.state;

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
        <ContactForm createContact={this.createContact} contacts={contacts} />

        <h2>Contacts</h2>
        <Filter setFilter={this.setFilter} filterValue={filter} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
