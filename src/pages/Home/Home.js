import {Component} from 'react';
import { MenuMakanan, MenuMinuman } from '../../components'; 
import '../../App.css';
class Home extends Component{

    constructor(){
        super();
        this.state = {
            namaResto : 'Cafe dan Resto',
            namaPembeli : '',
            keterangan : '',
            jenisPembayaran : '',
            menuMakanan:[
                { nama : 'Ayam Bakar', harga : 25000, stok : 10},
                { nama : 'Nasi Goreng', harga : 15000, stok : 0},
            ],
            menuMinuman: [
                { id: 1, nama: 'Juice Melon',    harga: 15000 , stok: 4},
                { id: 2, nama: 'Milkshake Strawberry', harga: 20000 , stok: 0},
                { id: 3, nama: 'Juice Tomat',    harga: 15000 , stok: 6},
                { id: 4, nama: 'Juice Mangga',   harga: 15000, stok:7 },
                { id: 5, nama: 'Juice Alpukat',  harga: 15000, stok :0 },
            ],
        }
    }

    handleGantiNama = () => {
        this.setState({namaResto : 'ganti'})
    }

    // handleNamaPembeli = (event) => {
    //     this.setState({namaPembeli : event.target.value})
    // }

    // handleKeterangan = (event) => {
    //     this.setState({keterangan : event.target.value})
    // }

    // handleJenisPembayaran = (event) => {
    //     this.setState({jenisPembayaran : event.target.value})
    // }

    handleChange = (event) => {
        var name = event.target.name
        var value = event.target.value
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='App'>
                <h1>{this.state.namaResto}</h1>
                <button className='btn btn-primary' onClick={this.handleGantiNama}>Ganti nama</button>
                <div className='row' style={{marginTop: '10px'}}>
                    <div className='col-md-4 offset-md-4'>
                        <form>
                            <div className='form-group'>
                                <label>Nama Pembeli:  </label>
                                <input className='form-control' name='namaPembeli' onChange={this.handleChange}
                                value={this.state.namaPembeli} />
                                <p> Nama Pembeli : {this.state.namaPembeli}</p>
                            </div>
                            <div className='form-group'>
                            <label>Keterangan:  </label>
                                <textarea className='form-control' name='keterangan' onChange={this.handleChange}
                                value={this.state.keterangan} />
                                <p> Keterangan : {this.state.keterangan}</p>
                            </div>
                            <label>Jenis Pembayaran:</label>
                            <div className='form-group'>
                            <select className='form-control'name='jenisPembayaran' value={this.state.value} onChange={this.handleChange}>
                                <option value='cash'>Cash</option>
                                <option value='kartuKredit'>Kartu Kredit</option>
                                <option value='voucher'>Voucher</option>
                            </select>
                            <small>Jenis Pembayaran: {this.state.jenisPembayaran}</small>
                            </div>
                        </form>
                    </div>
                </div>
                <h2>Menu Makanan</h2>
                {this.state.menuMakanan.map(menu =>
                    <MenuMakanan 
                    namaMenu={menu.nama} 
                    hargaMenu={menu.harga}
                    stok={menu.stok}
                    />
                )}
                <h2>Menu Minuman</h2>
                { this.state.menuMinuman.map((menu) => 
                    <MenuMinuman
                        key={menu.id}
                        namaMenu={menu.nama} 
                        hargaMenu={menu.harga}
                        stok={menu.stok}
                    />
                )}
            </div>
        );
    }
}

export default Home;