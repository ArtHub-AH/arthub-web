import React, { FC } from "react";
import { useHistory, withRouter } from "react-router-dom";

const ProfilePage: FC = () => {
  const history = useHistory();

  // TODO: Fetch artworks from db to map
  const CreateArtWorkViews = () => {
    return (
      <>
        <div>
          <button onClick={() => console.log("artwork button clicked.")}>
            ArtWork1
          </button>
          <button onClick={() => console.log("artwork button clicked.")}>
            ArtWork2
          </button>
          <button onClick={() => console.log("artwork button clicked.")}>
            ArtWork3
          </button>
        </div>
        <div>
          <button onClick={() => console.log("artwork button clicked.")}>
            ArtWork4
          </button>
          <button onClick={() => console.log("artwork button clicked.")}>
            ArtWork5
          </button>
          <button onClick={() => console.log("artwork button clicked.")}>
            ArtWork6
          </button>
        </div>
        <div>
          <button onClick={() => console.log("artwork button clicked.")}>
            ArtWork7
          </button>
          <button onClick={() => console.log("artwork button clicked.")}>
            ArtWork8
          </button>
          <button onClick={() => console.log("artwork button clicked.")}>
            ArtWork9
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      ProfilePage
      <div>
        <button onClick={() => history.push("/account")}>Account Logo</button>
      </div>
      <CreateArtWorkViews />
    </>
  );
};

export default ProfilePage;