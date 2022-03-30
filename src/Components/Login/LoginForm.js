import React from "react";
import { useHistory } from "react-router-dom";
import Parse from "parse";

const LoginForm = ({ user, onChange, onSubmit }) => {
    const history = useHistory();
    
    const buttonHandler = () => {
      history.push("/loginhome");
    };  
    
  return ( 
    // the login form
    <div className = "form1">
      <form onSubmit={onSubmit} autoComplete="off">
          <label>Email</label>
          <br />
          <input
            type="text"
            value={user.email}
            onChange={onChange}
            name="email"
            placeholder="email"
            required
          />
            <br />
            <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            value={user.password}
            onChange={onChange}
            name="password"
            placeholder="password"
            required
          />
        <br />
        <br />
        <br />
        
          
          <button type="submit" onSubmit={onSubmit} id="submitClicked">
            Submit
          </button>
          <br />
          <br />
         
        
      </form>
    </div>
  );
};

export default LoginForm;
