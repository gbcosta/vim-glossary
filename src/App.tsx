import { Searchbar } from "./components/searchbar";
import { Card } from "./components/card";

function App() {
  return (
    <div className="flex w-full justify-center ">
      <div className="max-w-3xl flex items-center w-full flex-col mt-16 gap-16">
        <h1
          className="text-center text-5xl font-semibold"
          style={{ fontFamily: "Fira Code" }}
        >
          Vim Glossary
        </h1>
        <Searchbar />
        <div className="flex flex-row w-full gap-4">
          <Card commandName="Paste">p</Card>
          <Card commandName="Delete">d</Card>
        </div>
      </div>
    </div>
  );
}

export default App;
