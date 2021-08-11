import React, { FC } from "react";
import { useHistory } from "react-router-dom";

const SearchPage: FC = () => {
  const history = useHistory();

  // TODO: fetch artists data from db to map
  const CreateProfileCards = () => {
    return (
      <>
        <div>
          <button onClick={() => history.push("/profile")}>ProfileCard</button>
        </div>
        <div>
          <button onClick={() => history.push("/profile")}>ProfileCard</button>
        </div>
        <div>
          <button onClick={() => history.push("/profile")}>ProfileCard</button>
        </div>
      </>
    );
  };

  return (
    <>
      <div>Search Page</div>
      <CreateProfileCards />
    </>
  );
};

export default SearchPage;
