import React, { FC } from "react";
import { useHistory, withRouter } from "react-router-dom";

const HomePage: FC = () => {
    const history = useHistory();

    return (
        <>
        HomePage
        <div>
            <button onClick={() => history.push('/search')}>Search</button>
        </div>
        <div>
            <button onClick={() => history.push('/search')}>2D</button>
            <button onClick={() => history.push('/search')}>3D</button>
            <button onClick={() => history.push('/search')}>option1</button>
            <button onClick={() => history.push('/search')}>option2</button>
            <button onClick={() => history.push('/search')}>option3</button>
            <button onClick={() => history.push('/search')}>option4</button>
        </div>
        <div>
            <button onClick={() => history.push('/profile')}>Recommendations</button>
        </div>
        </>
    );
};

export default HomePage;
