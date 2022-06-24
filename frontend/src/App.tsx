import { Auth } from "./components/screens/auth/Auth";
import { Success } from "./components/screens/success/Success";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
