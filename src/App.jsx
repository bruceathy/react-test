import "./App.css";
import Header from "./components/Header/Header";
import CountBtn from "./components/CountBtn/CountBtn";
import Card from "./components/Card/Card";

function App() {
  return (
    <div>
      <Header />
      <CountBtn />
      <section>
        <Card name="Card 1" />
        <Card name="Card 2" />
        <Card name="Card 3" />
      </section>
    </div>
  );
}

export default App;
