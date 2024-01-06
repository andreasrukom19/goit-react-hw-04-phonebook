import { Component } from "react";
import { nanoid } from "nanoid";
import css from './FormAddContacts.module.css'

export class FormAddContacts extends Component {
  state = {
    name: '',
    phone: ''
  }

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
    console.log(this.state)
  }

  resetForm = () => {
    this.setState({
      name: '',
      phone: ''
    })
  }

  render() {
    return (
      <form className={css['contact-form']} onSubmit={this.handleSubmit}>
        <label className={css['contact-form-label']}>
          <span className={css['label-text']}>Name</span>
          <input
            className={css['contact-form-input']}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter name"
            id={nanoid()}
            required
          />
        </label>
        <label className={css['contact-form-label']}>
          <span className={css['label-text']}>Phone number</span>
          <input
            className={css['contact-form-input']}
            type="tel"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            placeholder="000-00-00"
            required
          />
        </label>
        <button className={css['contact-form-btn']} type="submit">Add contact</button>
      </form>
    )
  }
}