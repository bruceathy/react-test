import { useState } from "react";
import "./App.css";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import TabBtn from "./components/TabBtn";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  function handleSelect(selectedTopic) {
    setSelectedTopic(selectedTopic);
  }

  return (
    <div>
      <Header />
      <section>
        <Card
          name={CORE_CONCEPTS[0].title}
          text={CORE_CONCEPTS[0].description}
        />
        <Card
          name={CORE_CONCEPTS[1].title}
          text={CORE_CONCEPTS[1].description}
        />
        <Card
          name={CORE_CONCEPTS[2].title}
          text={CORE_CONCEPTS[2].description}
        />
        <Card
          name={CORE_CONCEPTS[3].title}
          text={CORE_CONCEPTS[3].description}
        />
      </section>

      <section className="examples">
        <h2>Examples</h2>
        <menu>
          <TabBtn onSelect={() => handleSelect("components")}>
            Components
          </TabBtn>
          <TabBtn onSelect={() => handleSelect("jsx")}>JSX</TabBtn>
          <TabBtn onSelect={() => handleSelect("props")}>Props</TabBtn>
          <TabBtn onSelect={() => handleSelect("state")}>State</TabBtn>
        </menu>
        <div className="topic-container">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </div>
      </section>
    </div>
  );
}

export default App;
