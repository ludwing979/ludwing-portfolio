import gsap from "gsap";
import { Draggable } from "gsap/all";
import { Dock, Navbar, Welcome } from "#components/index";
import Terminal from "#windows/Terminal";
import Safari from "#windows/Safari";
import { Resume } from "./windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
    </main>
  );
};

export default App;
