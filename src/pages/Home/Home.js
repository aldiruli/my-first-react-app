import {Component} from 'react';
import { MenuMakanan, MenuMinuman } from '../../components';

class Home extends Component{
    render(){
        return(
            <div className="App">
                <h1>ini home</h1>
                <h3>Menu Makanan</h3>
                <MenuMakanan namaMakanan = {"ayam goreng"} hargaMakanan={"13.000"} />
                <MenuMakanan namaMakanan = {"nasi goreng"} hargaMakanan={"13.000"} />
                <h3>Menu Minuman</h3>
                <MenuMinuman namaMinuman = {"kopi"} hargaMinuman = {"4.000"}/>
                <MenuMinuman namaMinuman = {"teh"} hargaMinuman = {"5.000"}/>
            </div>
        );
    }
}

export default Home;