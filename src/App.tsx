import gsap from "gsap";
import { Draggable } from "gsap/all";
import { Dock, Navbar, Welcome } from "#components/index";
import Terminal from "#windows/Terminal";
import Safari from "#windows/Safari";
import { Finder, Resume, Text, Image, Contact } from "./windows";

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
      <Finder />
      <Text />
      <Image />
      <Contact />
    </main>
  );
};

export default App;
