import { FC, useState } from "react";
import Axios from "axios";

const SignUpPage: FC = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const addUser = () => {
    Axios.post("http://localhost:3001/signup/create", {
      emailAddress: emailAddress,
      password: password,
      username: username,
      firstName: firstName,
      lastName: lastName,
    }).then(() => {
      console.log("Success!!");
    });
  };

  return (
    <>
      <div>Enter your information</div>
      <div>
        Email Address:{" "}
        <input
          type="text"
          onChange={(event) => {
            setEmailAddress(event.target.value);
          }}
        />
      </div>
      <div>
        Password:{" "}
        <input
          type="text"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <div>
        Username:{" "}
        <input
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </div>
      <div>
        First Name:{" "}
        <input
          type="text"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />{" "}
        Last Name:{" "}
        <input
          type="text"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
      </div>
      <button onClick={addUser}>Submit</button>
    </>
  );
};

export default SignUpPage;
