import { FC } from "react";

const LogInPage: FC = () => {
  return (
    <>
      <div>
        Email Address: <input />
      </div>
      <div>
        Password: <input />
      </div>
      <div>
        <a href="/signup">Not have an account?</a>
      </div>
    </>
  );
};

export default LogInPage;
