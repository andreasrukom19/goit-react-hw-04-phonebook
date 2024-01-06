import { Component } from "react";
import css from './ContactList.module.css';
import { ContactListItem } from "components/ContactListItem/ContactListItem";

export class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ul className={css['contact-list']}>
        {contacts.map(contact => {
          return (
            <ContactListItem
              contact={contact}
              key={contact.id}
              handleDeleteContact={onDeleteContact}
            />
          )
        })}
      </ul>
    )
  }
}