import React, { Component } from "react";

export default class StudentReg extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      hidden: true,
      location: "",
      DOB: "",
      name: "",
      schoolProgram: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { email, password, location, DOB, name, schoolProgram }   = this.state;
    let newUser = {
      email: email,
      password: password,
      location: location,
      dob: DOB,
      name: name,
      schoolProgram: schoolProgram
    };

    fetch("http://localhost:8080/api/registration", {
      method: "POST",
      body: JSON.stringify({
        newUser: newUser
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => console.log(res.json()));

    // .then(response => {
    //   this.clearState();
    //   this.setState({
    //     searchedItems: [...this.state.searchedItems, ...response]
    //   });
    // })
    // .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormFieldLabel" htmlFor="name"> Full Name </label>
            <input
              className="FormFieldInput"
              placeholder="Enter your full name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormFieldLabel"> Password </label>
            <input
              className="FormFieldInput"
              type={this.state.hidden ? "password" : "text"}
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button className="showButton" onClick={this.toggleShow}> Show / Hide </button>
          </div>
          <div className="FormField">
            <label className="FormFieldLabel">Location</label>
            <input
              className="FormFieldInput"
              placeholder="Enter your Location"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormFieldLabel">E-Mail Address</label>
            <input
              className="FormFieldInput"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormFieldLabel">DOB</label>
            <input
              className="FormFieldInput"
              placeholder="Enter your DOB"
              name="DOB"
              value={this.state.DOB}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormFieldLabel">School Program</label>
            <input
              className="FormFieldInput"
              placeholder="Enter your School Program"
              name="schoolProgram"
              value={this.state.schoolProgram}
              onChange={this.handleChange}
            />
          </div>
​
          <div className="FormField">
            <button className="FormFieldButton mr-20">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}