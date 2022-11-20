import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/cards";
import data from "./components/data";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
        // {...item}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
