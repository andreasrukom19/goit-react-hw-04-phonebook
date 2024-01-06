import { Component } from "react";
import css from './ContactListItem.module.css';

export class ContactListItem extends Component {
  render() {
    const { contact, handleDeleteContact } = this.props;
    return (
      <li className={css['contact-list-item']}>
        <span>{ contact.name }:</span>
        <span>{ contact.phone }</span>
        <button
          type="button"
          onClick={() => handleDeleteContact(contact.id)}
          className={css['contact-del-btn']}
        >Delete</button>
      </li>
    )
  }
}