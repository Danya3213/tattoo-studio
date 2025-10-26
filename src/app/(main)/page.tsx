import {Hero} from "./Components/Hero/Hero";
import {About} from "./Components/About/About";
import {Services} from "./Components/Services/Services";
import {Instagram} from "./Components/Instagram/Instagram";

export default function Main() {
  return (
      <main className={"flex flex-col gap-y-30"}>
        <Hero/>
        <About/>
          <Services/>
          <Instagram/>
      </main>
  );
}
