import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class FormAddTask extends Component {
  state = { startDate: new Date() };
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  render() {
    return (
      <>
        <form className="form">
          <label htmlFor="titleTask" className="form_title">
            Wpisz nazwę projektu
          </label>
          <input type="text" name="titleTask" className="form_titleInput" />
          <label htmlFor="describeTask" className="form_title">
            Wpisz nazwę projektu
          </label>
          <textarea
            name="describeTask"
            className="form_describeTextarea"
          ></textarea>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            className="form_DataPicker"
            dateFormat="dd/MM/yyyy"
          />
          <button className="form_button">Dodaj</button>
        </form>
      </>
    );
  }
}

export default FormAddTask;
