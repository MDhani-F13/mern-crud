import React, { Component } from 'react';
import axios from 'axios';

export default class AddPengunjung extends Component {
  constructor(props) {
    super(props);
    this.onChangeIDPengunjung = this.onChangeIDPengunjung.bind(this);
    this.onChangeNama = this.onChangeNama.bind(this);
    this.onChangeAlamat = this.onChangeAlamat.bind(this);
    this.onChangeNomorHP = this.onChangeNomorHP.bind(this);
    this.onChangePekerjaan = this.onChangePekerjaan.bind(this);
    this.onChangeJudulBuku = this.onChangeJudulBuku.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      id_pengunjung: '',
      nama: '',
      alamat: '',
      nomor_hp: '',
      pekerjaan: '',
      judul_buku: '',
      buku: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/buku/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            buku: response.data.map(buku => buku.name),
            judul_buku: response.data[0].judul_buku
          });
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
  onChangeIDPengunjung(e) {
    this.setState({
      id_pengunjung: e.target.value
    });
  }
  onChangeNama(e) {
    this.setState({
      nama: e.target.value
    });
  }
  onChangeAlamat(e) {
    this.setState({
      alamat: e.target.value
    });
  }
  onChangeNomorHP(e) {
    this.setState({
      nomor_hp: e.target.value
    });
  }
  onChangePekerjaan(e) {
    this.setState({
      pekerjaan: e.target.value
    });
  }
  onChangeJudulBuku(e) {
    this.setState({
      judul_buku: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const pengunjung = {
      id_pengunjung: this.state.id_pengunjung,
      nama: this.state.nama,
      alamat: this.state.alamat,
      nomor_hp: this.state.nomor_hp,
      pekerjaan: this.state.pekerjaan,
      judul_buku: this.state.price
    };
    console.log(pengunjung);
    axios.post('http://localhost:5000/pengunjung/add', pengunjung)
      .then(res => console.log(res.data));
    this.setState({
      id_pengunjung: '',
      nama: '',
      alamat: '',
      nomor_hp: '',
      pekerjaan: '',
      judul_buku: '',
      buku: []
    })
    window.location = '/';

  }

  render() {
    return (
      <div>
        <h3>Add New Pengunjung</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>No Pengunjung: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.id_pengunjung}
              onChange={this.onChangeIDPengunjung}
            />
          </div>
          <div className="form-group">
            <label>Nama: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.nama}
              onChange={this.onChangeNama}
            />
          </div>
          <div className="form-group">
            <label>Alamat: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.alamat}
              onChange={this.onChangeAlamat}
            />
          </div>
          <div className="form-group">
            <label>Nomor HP: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.nomor_hp}
              onChange={this.onChangeNomorHP}
            />
          </div>
          <div className="form-group">
            <label>Pekerjaan: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.pekerjaan}
              onChange={this.onChangePekerjaan}
            />
          </div>
          <div className="form-group">
            <label>Judul Buku: </label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.judul_buku}
              onChange={this.onChangeJudulBuku}>
              {
                this.state.buku.map(function (buku) {
                  return <option
                    key={buku}
                    value={buku}>{buku}
                  </option>;
                })
              }
            </select>
          </div>
          <div className="form-group">
            <input type="submit" value="Add Pengunjung" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}