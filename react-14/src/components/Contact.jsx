import React from "react";

class Contact extends React.Component {
  getDate(fullDate) {
    const date = new Date(fullDate);
    const day = "00" + date.getDate();
    const month = "00" + parseInt(date.getMonth() + 1);
    const year = date.getFullYear();
    return `${day.slice(-2)}/${month.slice(-2)}/${year}`;
  }
  render() {
    return (
      <article
        className="contact"
        key={this.props.data.id}
        data-testid="contact"
      >
        <span data-testid="contact-avatar" className="contact__avatar">
          <img src={this.props.data.avatar} alt="avatar" />
        </span>
        <span data-testid="contact-name" className="contact__data">
          {this.props.data.name}
        </span>
        <span data-testid="contact-phone" className="contact__data">
          {this.props.data.phone}
        </span>
        <span data-testid="contact-country" className="contact__data">
          {this.props.data.country}
        </span>
        <span data-testid="contact-date" className="contact__data">
          {this.getDate(this.props.data.admissionDate)}
        </span>
        <span data-testid="contact-company" className="contact__data">
          {this.props.data.company}
        </span>
        <span data-testid="contact-department" className="contact__data">
          {this.props.data.department}
        </span>
      </article>
    );
  }
}

export default Contact;
