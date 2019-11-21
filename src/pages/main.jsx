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
      <div style={{ marginTop: "43%" }}>
        <Banner />
        <Preview />
        <MovieContainer title="TV프로그램" movies={[
          {title: "신서유기7"},
          {title: "신서유기6"},
          {title: "신서유기5"},
          {title: "신서유기4"},
          {title: "신서유기3"},
          {title: "신서유기2"},
          {title: "신서유기1"},
          ]}/>
      </div>
    );
  }
}

export default Main;