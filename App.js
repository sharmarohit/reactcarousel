import React from "react";
import Carousel from "./Carousel";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Carousel delay={3000} children={["test1", "test2", "test3"]} />
    </div>
  );
}
