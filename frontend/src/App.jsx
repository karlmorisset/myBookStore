import Home from "@pages/Home";
import Books from "@pages/Books";
import Register from "@pages/Register";
import Login from "@pages/Login";
import { Link, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/books">Mes livres</Link>
          </li>
          <li>
            <Link to="/register">Créer un utilisateur</Link>
          </li>
          <li>
            <Link to="/login">Se connecter</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
