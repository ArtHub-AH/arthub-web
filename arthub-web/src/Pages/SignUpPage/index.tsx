import { FC } from "react";

const SignUpPage: FC = () => {
  return (
    <>
      <div>Enter your information</div>
      <div>
        Email Address: <input />
      </div>
      <div>
        Password: <input />
      </div>
      <div>
        Username: <input />
      </div>
      <div>
        First Name: <input /> Last Name: <input />
      </div>
      <button>Submit</button>
    </>
  );
};

export default SignUpPage;
