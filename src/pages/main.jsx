import React from "react";
import Banner from "../components/Banner";
import Preview from "../components/Preview";
import MovieContainer from "../components/MovieContainer";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{marginTop:"45"}}>
        <Banner />
        <Preview />
        <div>
          <MovieContainer />
        </div>
      </div>
    );
  }
}

export default Main;