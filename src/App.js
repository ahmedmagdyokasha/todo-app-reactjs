import Navbar from "./Components/Navbar";
import Home from "./Components/home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaskEditForm from "./Components/TaskEditForm";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tasks/edit/:id" element={<TaskEditForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
