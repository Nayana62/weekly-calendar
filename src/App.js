import "./App.css";
import Calender from "./components/Calender";
import Header from "./components/Header";
import Planning from "./components/Planning";

function App() {
  return (
    <div className="app">
      <Header />
      <Planning />
      <Calender />
    </div>
  );
}

export default App;
