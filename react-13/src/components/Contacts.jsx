import React from "react";

class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {}
  getDate(fullDate) {
    const date = new Date(fullDate);
    const day = "00" + date.getDate();
    const month = "00" + date.getMonth();
    const year = date.getFullYear();
    return `${day.slice(-2)}/${month.slice(-2)}/${year}`;
  }

  renderContacts() {
    let listContacts = this.props.contacts.map((item) => {
      return (
        <article className="contact">
          <span className="contact__avatar">
            <img src={item.avatar} alt="avatar" />
          </span>
          <span className="contact__data">{item.name}</span>
          <span className="contact__data">{item.phone}</span>
          <span className="contact__data">{item.country}</span>
          <span className="contact__data">
            {this.getDate(item.admissionDate)}
          </span>
          <span className="contact__data">{item.company}</span>
          <span className="contact__data">{item.department}</span>
        </article>
      );
    });
    return listContacts;
  }

  render() {
    return <>{this.renderContacts()}</>;
  }
}

export default Contacts;
