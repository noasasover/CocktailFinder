import { useState, useEffect } from "react";
import "./styles.css";
import Title from "./Title";
import Entry from "./Entry";
import Info from "./Info";
import Image from "./Image";

export default function App() {
  const [name, setName] = useState("Margarita");
  const [data, setData] = useState({});

  useEffect(() => {
    const drinks = encodeURIComponent(name);
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinks}`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(`${e}`));
  }, [name]);

  return (
    <div className="App">
      <Title name="Pour & Explore" />
      <Entry action={setName} />
      <Info name={name} data={data} />
      <Image />
    </div>
  );
}
