import React, { FC } from "react";
import { useHistory, withRouter } from "react-router-dom";

const Header: FC = () => {
  const history = useHistory();
  return (
    <div>
      <a href="/">ARTHUB</a>
      <button onClick={() => history.push("/account")}>Account Icon</button>
    </div>
  );
};

export default withRouter(Header);
