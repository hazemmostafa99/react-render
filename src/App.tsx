import ParentOne from "./components/Optimization/ParentOne";
import "./App.css";
import ChildOne from "./components/Optimization/ChildOne";

function App() {
  return (
    <>
      <section id="center">
        <ParentOne>
          <ChildOne />
        </ParentOne>
      </section>
    </>
  );
}

export default App;
