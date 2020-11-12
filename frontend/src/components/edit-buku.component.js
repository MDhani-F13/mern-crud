import React, { Component } from 'react';
import axios from 'axios';

export default class EditBuku extends Component {
  constructor(props) {
    super(props);
    this.onChangeKodeSeri = this.onChangeKodeSeri.bind(this);
    this.onChangeJudulBuku = this.onChangeJudulBuku.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      kode_seri: '',
      judul_buku: '',
      genre: '',
      author: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/buku/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          kode_seri: response.data.kode_seri,
          judul_buku: response.data.judul_buku,
          genre: response.data.genre,
          author: response.data.author
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  onChangeKodeSeri(e) {
    this.setState({
      kode_seri: e.target.value
    });
  }
  onChangeJudulBuku(e) {
    this.setState({
      judul_buku: e.target.value
    });
  }
  onChangeGenre(e) {
    this.setState({
      genre: e.target.value
    });
  }
  onChangeAuthor(e){
    this.setState({
      author: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    const buku = {
      kode_seri: this.state.kode_seri,
      judul_buku: this.state.judul_buku,
      genre: this.state.genre,
      author: this.state.author
    };
    console.log(buku);
    axios.post('http://localhost:5000/buku/update/' + this.props.match.params.id, buku)
      .then(res => console.log(res.data));
    window.location = '/buku';
  }

  render() {
    return (
      <div>
        <h3>Edit Buku</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Kode Seri: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.kode_seri}
              onChange={this.onChangeKodeSeri}
            />
          </div>
          <div className="form-group">
            <label>Judul Buku: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.judul_buku}
              onChange={this.onChangeJudulBuku}
            />
          </div>
          <div className="form-group">
            <label>Address: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.genre}
              onChange={this.onChangeGenre}
            />
          </div>
          <div className="form-group">
            <label>Address: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.author}
              onChange={this.onChangeAuthor}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Add Buku" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}