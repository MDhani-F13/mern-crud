import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Pengunjung = props => (
  <tr>
    <td>{props.pengunjung.id_pengunjung}</td>
    <td>{props.pengunjung.nama}</td>
    <td>{props.pengunjung.alamat}</td>
    <td>{props.pengunjung.nomor_hp}</td>
    <td>{props.pengunjung.pekerjaan}</td>
    <td>{props.pengunjung.judul_buku}</td>
    <td>
      <Link to={"/edit-pengunjung/" + props.pengunjung._id}>Edit</Link> &nbsp;
      <Link to={"/delete-pengunjung/" + props.pengunjung._id}>Delete</Link>
    </td>
  </tr>
)
export default class PengunjungList extends Component {
  constructor(props) {
    super(props);
    this.deletePengunjung = this.deletePengunjung.bind(this);
    this.state = { pengunjung: [] };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/pengunjung/')
      .then(response => {
        this.setState({ pengunjung: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  deletePengunjung(id) {
    axios.delete('http://localhost:5000/pengunjung/' + id)
      .then(res => console.log(res.data));
    this.setState({
      products: this.state.pengunjung.filter(el => el._id !== id)
    })
  }
  pengunjungList() {
    return this.state.pengunjung.map(currentpengunjung => {
      return <Pengunjung pengunjung={currentpengunjung} deletepengunjung={this.deletePengunjung} key={currentpengunjung._id} />;
    })
  }
  render() {
    return (
      <div>
        <h3>Pengunjung List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>No Pengunjung</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Nomor HP</th>
              <th>Pekerjaan</th>
              <th>Judul Buku</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.pengunjungList()}
          </tbody>
        </table>
      </div>
    )
  }
}