import gsap from "gsap";
import { Draggable } from "gsap/all";
import { Dock, Navbar, Welcome } from "#components/index";
import Terminal from "#windows/Terminal";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
    </main>
  );
};

export default App;
