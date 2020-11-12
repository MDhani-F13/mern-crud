import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"

import PengunjungList from "./components/pengunjung-list.component";
import AddPengunjung from "./components/add-pengunjung.component";
import EditPengunjung from "./components/edit-pengunjung.component";
import DeletePengunjung from "./components/delete-pengunjung.component";

import BukuList from "./components/buku-list.component";
import AddBuku from "./components/add-buku.component";
import EditBuku from "./components/edit-buku.component";
import DeleteBuku from "./components/delete-buku.component";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <br/>
        <Route path="/" exact component={PengunjungList} />
        <Route path="/add-pengunjung" component={AddPengunjung} />
        <Route path="/edit-pengunjung/:id" component={EditPengunjung} />
        <Route path="/delete-pengunjung/:id" component={DeletePengunjung} />

        <Route path="/buku" exact component={BukuList} />
        <Route path="/add-buku" component={AddBuku} />
        <Route path="/edit-buku/:id" component={EditBuku} />
        <Route path="/delete-buku/:id" component={DeleteBuku} />
      </div>
    </Router>
  );
}

export default App;