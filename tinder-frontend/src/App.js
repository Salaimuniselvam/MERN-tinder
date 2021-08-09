import "./css/App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCard";
import SwipeButtons from "./components/SwipeButtons";

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
