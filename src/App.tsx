import { PathFindingProvider } from "./context/PathFindingContext"


function App() {

  return (
    <PathFindingProvider>

      <h1 className="text-3xl font-bold underline h-screen w-screen bg-blue-500">
        Hello world!
      </h1>
    </PathFindingProvider>
  )
}

export default App
