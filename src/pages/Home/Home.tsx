import React from "react";
import { HomeSection } from "./Home.styled";
import { Todo } from "../../components/index";
const Home = () => {
  return (
    <HomeSection id="home">
      <Todo />
    </HomeSection>
  );
};

export default Home;
