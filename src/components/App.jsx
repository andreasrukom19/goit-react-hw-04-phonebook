import { Component } from "react";
import { nanoid } from "nanoid";
import { FormAddContacts } from "./FormAddContacts/FormAddContacts";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  handleSubmitForm = formData => {
    const hasDuplicateName = this.state.contacts.some(contact => contact.name.toLowerCase() === formData.name.toLowerCase());
    if (hasDuplicateName) {
      alert('A contact with this name already exists!');
      return;
    }

    const contactData = {
      id: nanoid(),
      ...formData,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contactData],
      }
    })
  }

  handleDeleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    })
  }

  handleChangeFilter = event => {
    const value = event.target.value;
    this.setState({filter: value,})
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const contactsList = JSON.parse(savedContacts) ?? [];
    this.setState({ contacts: contactsList });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const stringifiedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stringifiedContacts);
    }
  }

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(this.state.filter.trim().toLowerCase())
    )
    return (
      <div className="wrapper">
        <h1 className="page-title">Phonebook</h1>
        <FormAddContacts onSubmit={this.handleSubmitForm} />
        <h2 className="contact-title">Contacts</h2>
        <Filter filter={this.state.filter} handleChangeFilter={this.handleChangeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    )
  }
}
