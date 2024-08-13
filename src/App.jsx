import Authentication from "./components/Authentication";
import CodeExamples from "./components/CodeExamples";
import EndPoints from "./components/EndPoints";
import Navigation from "./components/Navigation";
import Overview from "./components/Overview";
import Pricing from "./components/Pricing ";
import Tutorial from "./components/Tutorial";

const App = () => {
  return (
    <>
      <header className="bg-[#6366f1] py-[2.5rem]">
        <h1 className="text-white font-bold text-[2.6rem] text-center ">
          Book Generator API
        </h1>
      </header>
      <Navigation />
      <main className="mx-2">
        <Overview />
        <Authentication />
        <EndPoints />
        <Tutorial />
        <CodeExamples />
        <Pricing />
      </main>
    </>
  );
};

export default App;
