import {Hero} from "@main/Components/Hero/Hero";
import {About} from "@main/Components/About/About";
import {Services} from "@main/Components/Services/Services";

export default function Main() {
  return (
      <main className={"flex flex-col gap-y-30"}>
        <Hero/>
        <About/>
          <Services/>
      </main>
  );
}
