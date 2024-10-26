import "./App.css";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import TabBtn from "./components/TabBtn";

function App() {
  function handleSelect() {
    alert("Hello World");
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
          <TabBtn onSelect={handleSelect}>Components</TabBtn>
          <TabBtn onSelect={handleSelect}>JSX</TabBtn>
          <TabBtn onSelect={handleSelect}>Props</TabBtn>
          <TabBtn onSelect={handleSelect}>State</TabBtn>
        </menu>
      </section>
    </div>
  );
}

export default App;
