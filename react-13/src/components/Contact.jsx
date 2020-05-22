import React from "react";

class Contact extends React.Component {
  getDate(fullDate) {
    const date = new Date(fullDate);
    const day = "00" + date.getDate();
    const month = "00" + date.getMonth();
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
        <span className="contact__avatar">
          <img src={this.props.data.avatar} alt="avatar" />
        </span>
        <span className="contact__data">{this.props.data.name}</span>
        <span className="contact__data">{this.props.data.phone}</span>
        <span className="contact__data">{this.props.data.country}</span>
        <span className="contact__data">
          {this.getDate(this.props.data.admissionDate)}
        </span>
        <span className="contact__data">{this.props.data.company}</span>
        <span className="contact__data">{this.props.data.department}</span>
      </article>
    );
  }
}

export default Contact;
