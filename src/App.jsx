import { Routes, Route } from "react-router-dom";
import PlayGame from "./pages/PlayGame/PlayGame";
import StartGame from "./pages/StartGame/StartGame";
function App() {
  return (
    // <>
    // <h1 className="font-semibold text-3xl">Welcome to HangMan</h1>
    // <TextInputFormContainer onSubmit={(value) => console.log("Value coming from the hidden form is", value)}/>
    // </>
    <>
      <div>Navbar</div>

      <Routes>
        <Route path="/play" element={<PlayGame />} />
        <Route path="/start" element={<StartGame />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </>
  );
}

export default App;
