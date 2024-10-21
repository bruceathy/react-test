import "./App.css";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

function App() {
  return (
    <div>
      <Header />
      <section>
        <Card name="Card 1" text="Hello" />
        <Card name="Card 2" text="World" />
        <Card name="Card 3" text="Yes" />
        <Card name="Card 4" text="No" />
      </section>
    </div>
  );
}

export default App;
