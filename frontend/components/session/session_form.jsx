import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign( {}, this.state );
    this.props.action(user).then(
      () => this.setState({username: "", password: ""})
    )
  }

  changeProperty(prop) {
    return (e) => {
      this.setState({ [prop]: e.target.value });
    }
  }

  render() {
    return (
      <div>
        <h1> { this.props.formType}  </h1>
        <ul>
          { this.props.errors ? this.props.errors.map( (error, i)=> <li key={i}>{error}</li>) : ""}
        </ul>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={ this.changeProperty("username") }
            value= {this.state.username}
            />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={ this.changeProperty("password") }
            value= {this.state.password}
          />
          <input
            type="submit"
            value = { this.props.formType }
          />
        </form>
        <Link
          to={ this.props.formType === "Log In" ? "/signup" : "/login"}
        >
          { this.props.formType === "Log In" ? "Sign Up" : "Log In"}
        </Link>
      </div>
    )
  }
}

export default withRouter(SessionForm);
