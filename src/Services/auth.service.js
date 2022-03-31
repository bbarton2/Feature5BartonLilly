import Parse from "parse";

// created the user in auth register
export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  return user
    .signUp()
    .then((newUserSaved) => {
      console.log(newUserSaved);
      return newUserSaved;
    })
    .catch((error) => {
      console.log("in error");
      console.log(error);
      alert(`Error: ${error.message}`);
    });
};

//logins the user in the Login module
export const logIn = (existingUser) => {

  return Parse.User
    .logIn(existingUser.email, existingUser.password)
    .then((result) => {
      return result
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};
