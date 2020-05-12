import React from "react";

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    console.log("props");
    console.log(props);
  }
  async componentDidMount() {}
  getDate(fullDate) {
    const date = new Date(fullDate);
    const day = "00" + date.getDate();
    const month = "00" + date.getMonth();
    const year = date.getFullYear();
    return `${day.slice(-2)}/${month.slice(-2)}/${year}`;
  }
  render() {
    return (
      <article className="contact">
        <span className="contact__avatar">
          <img src={this.props.contacts.avatar} alt="avatar" />
        </span>
        <span className="contact__data">{this.props.contacts.name}</span>
        <span className="contact__data">{this.props.contacts.phone}</span>
        <span className="contact__data">{this.props.contacts.country}</span>
        <span className="contact__data">
          {this.getDate(this.props.contacts.admissionDate)}
        </span>
        <span className="contact__data">{this.props.contacts.company}</span>
        <span className="contact__data">{this.props.contacts.department}</span>
      </article>
    );
  }
}

export default Contacts;
