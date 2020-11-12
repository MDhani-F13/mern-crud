import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Buku = props => (
  <tr>
    <td>{props.Buku.kode_seri}</td>
    <td>{props.Buku.judul_buku}</td>
    <td>{props.Buku.genre}</td>
    <td>{props.Buku.author}</td>
    <td>
      <Link to={"/edit-buku/" + props.Buku._id}>Edit</Link> &nbsp; 
      <Link to={"/delete-buku/" + props.Buku._id}>Delete</Link>
    </td>
  </tr>
)
export default class BukuList extends Component {
  constructor(props) {
    super(props);
    this.deleteBuku = this.deleteBuku.bind(this);
    this.state = { buku: [] };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/buku/')
      .then(response => {
        this.setState({ buku: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  deleteBuku(id) {
    axios.delete('http://localhost:5000/buku/' + id)
      .then(res => console.log(res.data));
    this.setState({
      buku: this.state.buku.filter(el => el._id !== id)
    })
  }
  bukuList() {
    return this.state.Buku.map(currentbuku => {
      return <Buku Buku={currentbuku} deleteBuku={this.deleteBuku} key={currentbuku._id} />;
    })
  }
  render() {
    return (
      <div>
        <h3>Buku List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Kode Seri</th>
              <th>Judul Buku</th>
              <th>Genre</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.bukuList()}
          </tbody>
        </table>
      </div>
    )
  }
}