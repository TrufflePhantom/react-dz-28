import React from "react";
import "./Todos.scss";

class TodosClass extends React.Component {
  state = {
    activeInputType: "name",
    activeInputNumber: 0,
    currentValue: "",
    inputs: [
      {
        type: "name",
        placeholder: "Enter Your Name",
      },
      {
        type: "email",
        placeholder: "Enter Your Email",
      },
      {
        type: "password",
        placeholder: "Enter Your Password",
      },
    ],
    data: {
      name: "",
      email: "",
      password: "",
    },
  };

  onNextClick = (evt) => {
    evt.preventDefault();

    this.setState({
      activeInputType: this.state.inputs[this.state.activeInputNumber + 1].type,
    });
    this.setState({ activeInputNumber: this.state.activeInputNumber + 1 });
  };

  onFieldInput = (evt) => {
    this.setState({ currentValue: evt.target.value });
    console.log({ currentValue: evt.target.value });
  };

  render() {
    return (
      <div className="todos">
        <form>
          {this.state.activeInputNumber !== this.state.inputs.length - 1 ? (
            <button onClick={this.onNextClick}>Next Step</button>
          ) : null}

          {this.state.inputs.map((item, index) => {
            return item.type === this.state.activeInputType ? (
              <input
                key={index}
                type={item.type === "password" ? "password" : "text"}
                placeholder={item.placeholder}
                onInput={this.onFieldInput}
              />
            ) : null;
          })}
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default TodosClass;
