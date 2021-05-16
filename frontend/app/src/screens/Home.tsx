import React from "react";
import useAuth from "../hooks/useAuth";
import Hotel from "./Hotel";
import Ngo from "./Ngo";

const Home = () => {
  const { user } = useAuth();

  return user?.isNgo ? <Ngo /> : <Hotel />;
};

export default Home;
