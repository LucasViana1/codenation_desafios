import React from "react";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameIsSelected: false,
      countryIsSelected: false,
      companyIsSelected: false,
      departmentIsSelected: false,
      admissionDateIsSelected: false,
    };
  }

  searching(e) {
    this.props.search(e.target.value);
  }

  handleClass(e, option) {
    this.setState({
      nameIsSelected: option === "name" ? true : false,
      countryIsSelected: option === "country" ? true : false,
      companyIsSelected: option === "company" ? true : false,
      departmentIsSelected: option === "department" ? true : false,
      admissionDateIsSelected: option === "admissionDate" ? true : false,
    });
    if (option === "name") this.props.filterName();
    if (option === "country") this.props.filterCountry();
    if (option === "company") this.props.filterCompany();
    if (option === "department") this.props.filterDepartment();
    if (option === "admissionDate") this.props.filterAdmissionDate();
  }
  render() {
    return (
      <div className="container">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              onChange={(e) => this.searching(e)}
            />

            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>

          <button
            className={`filters__item ${
              this.state.nameIsSelected ? "is-selected" : ""
            }`}
            onClick={(e) => this.handleClass(e, "name")}
          >
            Nome <i className="fas fa-sort-down" />
          </button>

          <button
            className={`filters__item ${
              this.state.countryIsSelected ? "is-selected" : ""
            }`}
            onClick={(e) => this.handleClass(e, "country")}
          >
            País <i className="fas fa-sort-down" />
          </button>

          <button
            className={`filters__item ${
              this.state.companyIsSelected ? "is-selected" : ""
            }`}
            onClick={(e) => this.handleClass(e, "company")}
          >
            Empresa <i className="fas fa-sort-down" />
          </button>

          <button
            className={`filters__item ${
              this.state.departmentIsSelected ? "is-selected" : ""
            }`}
            onClick={(e) => this.handleClass(e, "department")}
          >
            Departamento <i className="fas fa-sort-down" />
          </button>

          <button
            className={`filters__item ${
              this.state.admissionDateIsSelected ? "is-selected" : ""
            }`}
            onClick={(e) => this.handleClass(e, "admissionDate")}
          >
            Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </div>
    );
  }
}

export default Filters;
