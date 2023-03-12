import CharacterList from "./components/CharacterList"

function App(){
  return <div className="bg-dark text-white w-5">
    <h1 className="text-center display-1 py-4">Personajes de Rick and Morty</h1>
    <CharacterList/>
  </div>;
}

export default App