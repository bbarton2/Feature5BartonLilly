import React from "react";
import { useHistory } from "react-router-dom";

const AuthForm = ({ user, onChange, onSubmit }) => {
  const history = useHistory();

  const buttonHandler = () => {
    history.push("/login");
  };

  return (
    <div className = "form1">
      <form onSubmit={onSubmit} autoComplete="off">
        <div className="form-group">
          <label>First Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="first-name-input"
            value={user.firstName}
            onChange={onChange}
            name="firstName"
            placeholder="first name"
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label>Last Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="last-name-input"
            value={user.lastName}
            onChange={onChange}
            name="lastName"
            placeholder="last name"
            required
          />
        </div>{" "}
        <br />
        <div className="form-group">
          <label>Email</label>
          <br />
          <input
            type="email"
            className="form-control"
            id="email-input"
            value={user.email}
            onChange={onChange}
            name="email"
            placeholder="email"
            required
          />
        </div>{" "}
        <br />
        <div className="form-group">
          <label>Password</label>
          <br />
          <input
            type="password"
            className="form-control"
            id="password-input"
            value={user.password}
            onChange={onChange}
            name="password"
            placeholder="password"
            min="0"
            required
          />
        </div>
        <br />
        <div>
          <button type="submit" onSubmit={onSubmit}>
            Submit
          </button>
          <br />
          <br />
          <p>Already Have An Account </p> <button onClick={buttonHandler}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
