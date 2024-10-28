import { useState } from "react";
import "./App.css";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import TabBtn from "./components/TabBtn";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
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
          <TabBtn
            isSelected={selectedTopic === "components"}
            onSelect={() => handleSelect("components")}
          >
            Components
          </TabBtn>
          <TabBtn
            isSelected={selectedTopic === "jsx"}
            onSelect={() => handleSelect("jsx")}
          >
            JSX
          </TabBtn>
          <TabBtn
            isSelected={selectedTopic === "props"}
            onSelect={() => handleSelect("props")}
          >
            Props
          </TabBtn>
          <TabBtn
            isSelected={selectedTopic === "state"}
            onSelect={() => handleSelect("state")}
          >
            State
          </TabBtn>
        </menu>
        {!selectedTopic && <p className="placeholder">Select an example</p>}
        {selectedTopic && (
          <div className="topic-container">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
