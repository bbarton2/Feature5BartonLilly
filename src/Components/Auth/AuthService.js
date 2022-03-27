import Parse from "parse";

// used in auth register component
export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  console.log("User: ", user);
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

export const logIn = (existingUser) => {
  //login function
  return existingUser
    .logIn(existingUser.username, existingUser.password)
    .then((result) => {})
    .catch((error) => {
      alert("Error: " + error.code + " " + error.message);
    });
};