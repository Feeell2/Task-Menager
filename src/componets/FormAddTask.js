import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { add } from "../duck/action";
// import { addTasksArray } from "../duck/reducers";
// const mapStateToProps = state => ({
//   tasks: state.addTasksArray
// });
const mapDispatchToProps = dispatch => {
  return { dispatchAddToSaved: task => dispatch(add(task)) };
};

// import Task from "./Task";
class FormAddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      titleTask: "",
      describeTask: "",
      counter: 0
    };
  }

  addTask = event => {
    event.preventDefault();

    const task = {
      startDate: this.state.startDate.toLocaleDateString(),
      titleTask: this.state.titleTask,
      describeTask: this.state.describeTask
      // index: this.state.counter
    };
    this.setState(prevState => ({
      titleTask: "",
      describeTask: "",
      startDate: new Date(),
      counter: prevState.counter + 1
    }));
    this.props.dispatchAddToSaved(add(task));
  };
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  handleInputDate = date => {
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
          <input
            type="text"
            name="titleTask"
            className="form_titleInput"
            value={this.state.titleTask}
            onChange={this.handleInputChange}
          />
          <label htmlFor="describeTask" className="form_title">
            Wpisz nazwę projektu
          </label>
          <textarea
            name="describeTask"
            className="form_describeTextarea"
            value={this.state.describeTask}
            onChange={this.handleInputChange}
          ></textarea>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleInputDate}
            className="form_DataPicker"
            dateFormat="dd/MM/yyyy"
          />
          <button className="form_button" onClick={this.addTask.bind(this)}>
            Dodaj
          </button>
        </form>
      </>
    );
  }
}

// const mapDispatchToProps = dispatch =>{
// bindActionCreators({add}, dispatch)}
export default connect(null, mapDispatchToProps)(FormAddTask);
