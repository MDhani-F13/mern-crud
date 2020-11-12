import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteBuku extends Component {
  constructor(props) {
    super(props);
    this.deleteVendor = this.deleteBuku.bind(this);
    this.state = {
      judul_buku: ''
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/buku/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          judul_buku: response.data.judul_buku,
          author: response.data.author
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  deleteBuku() {
    axios.delete('http://localhost:5000/buku/' + this.props.match.params.id)
      .then(res => console.log(res.data));
    window.location = '/buku';
  }

  render() {
    return (
      <div>
        <h3>Delete Buku</h3>
        <h5>Yakin ingin menghapus {this.state.judul_buku}?</h5>
        <br></br>
        <button class="btn btn-primary" onClick={this.deleteVendor}>Delete Buku</button>
      </div>
    )
  }
}
