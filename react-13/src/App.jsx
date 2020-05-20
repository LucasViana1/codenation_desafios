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
    this.filterCountry = this.filterCountry.bind(this);
    this.filterCompany = this.filterCompany.bind(this);
    this.filterDepartment = this.filterDepartment.bind(this);
    this.filterAdmissionDate = this.filterAdmissionDate.bind(this);
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
    let listSort = this.state.data;
    listSort.sort(function compare(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    this.setState({
      data: listSort,
    });
    console.log("state atual app");
    console.log(this.state);
  }
  filterCountry() {
    let listSort = this.state.data;
    listSort.sort(function compare(a, b) {
      if (a.country < b.country) return -1;
      if (a.country > b.country) return 1;
      return 0;
    });
    this.setState({
      data: listSort,
    });
  }
  filterCompany() {
    let listSort = this.state.data;
    listSort.sort(function compare(a, b) {
      if (a.company < b.company) return -1;
      if (a.company > b.company) return 1;
      return 0;
    });
    this.setState({
      data: listSort,
    });
  }
  filterDepartment() {
    let listSort = this.state.data;
    listSort.sort(function compare(a, b) {
      if (a.department < b.department) return -1;
      if (a.department > b.department) return 1;
      return 0;
    });
    this.setState({
      data: listSort,
    });
  }
  filterAdmissionDate() {
    let listSort = this.state.data;
    listSort.sort(function compare(a, b) {
      if (a.admissionDate < b.admissionDate) return -1;
      if (a.admissionDate > b.admissionDate) return 1;
      return 0;
    });
    this.setState({
      data: listSort,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters
          filterName={this.filterName}
          filterCountry={this.filterCountry}
          filterCompany={this.filterCompany}
          filterDepartment={this.filterDepartment}
          filterAdmissionDate={this.filterAdmissionDate}
        />
        <div className="container">
          <section className="contacts">
            <Contact />
            <Contacts contacts={this.state.data} />
            {/* {this.renderContacts()} */}
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
