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
      baseUrl:
        "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts?search=",
      data: [],
      name: true,
    };
    this.filterName = this.filterName.bind(this);
    this.filterCountry = this.filterCountry.bind(this);
    this.filterCompany = this.filterCompany.bind(this);
    this.filterDepartment = this.filterDepartment.bind(this);
    this.filterAdmissionDate = this.filterAdmissionDate.bind(this);
    this.filterAdmissionDate = this.filterAdmissionDate.bind(this);
    this.search = this.search.bind(this);
  }

  async componentDidMount() {
    await this.getContacts();
  }

  async getContacts(wordKey = "") {
    const data = await fetch(this.state.baseUrl + wordKey, {
      method: "GET",
    }).then((resp) => resp.json());
    this.setState({ data });
  }

  async search(wordKey) {
    if (wordKey !== "") wordKey = wordKey[0].toUpperCase() + wordKey.slice(1);

    await this.getContacts(wordKey);
  }

  renderContacts() {
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
          search={this.search}
        />
        <div className="container">
          <section className="contacts">
            <Contact />
            <Contacts contacts={this.state.data} />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
