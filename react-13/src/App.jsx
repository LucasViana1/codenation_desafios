import React from "react";

import "./App.scss";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contact from "./components/Contact";
import Contacts from "./components/Contacts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts",
      data: [],
      name: true,
    };
    this.filterName = this.filterName.bind(this);
  }

  async componentDidMount() {
    await this.getContacts();
    console.log("state");
    console.log(this.state);
  }

  async getContacts() {
    const data = await fetch(this.state.baseUrl, {
      method: "GET",
    }).then((resp) => resp.json());
    this.setState({ data });
    console.log("get contatos");
    console.log(this.state);
  }

  renderContacts() {
    console.log("render");
    console.log(this.state);
    let listContacts = this.state.data.map((item) => {
      return <Contacts contacts={item} />;
    });
    return listContacts;
  }

  filterName() {
    this.setState({
      selectedName: !this.state.name,
      name: !this.state.name,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters filterName={this.filterName} />
        <div className="container">
          <section className="contacts">
            <Contact />
            {this.renderContacts()}
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
