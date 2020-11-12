import React, { Component } from 'react';
import axios from 'axios';

export default class DeletePengunjung extends Component {
  constructor(props) {
    super(props);
    this.deleteProduct = this.deletePengunjung.bind(this);
    this.state = {
      id_pengunjung: '',
      nama: ''
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/pengunjung/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          id_pengunjung: response.data.id_pengunjung,
          nama: response.data.nama
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  deletePengunjung() {
    axios.delete('http://localhost:5000/pengunjung/' + this.props.match.params.id)
      .then(res => console.log(res.data));
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Delete Pengunjung</h3>
        <h5>Yakin ingin menghapus {this.state.nama}?</h5>
        <br></br>
        <button class="btn btn-primary" onClick={this.deleteProduct}>Delete Pengunjung</button>
      </div>
    )
  }
}
