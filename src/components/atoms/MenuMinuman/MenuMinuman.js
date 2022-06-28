import React, { Component } from "react";

class MenuMinuman extends Component{
    render(){
        if (this.props.stok !== 0){
        return(
            <div className="MenuMakanan" style={{border : '1px solid black', width : 300, margin : 'auto', textAlign:'center' }}>
            <p>Menu : {this.props.namaMenu} </p>
            <p>Harga : {this.props.hargaMenu} </p>
            <p>Harga : {this.props.stok} </p>
        </div>
        );
        } else {
            return null;
        }
    }
}

export default MenuMinuman;