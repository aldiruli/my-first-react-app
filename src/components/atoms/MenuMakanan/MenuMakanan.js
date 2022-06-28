import React from "react";

var MenuMakanan = (props) => {
    if (props.stok !== 0){
    return(
        <div className="MenuMakanan" style={{border : '1px solid black', width : 300, margin : 'auto', textAlign: 'center'}}>
            <p>Menu : {props.namaMenu} </p>
            <p>Harga : {props.hargaMenu} </p>
            <p>Stok : {props.stok} </p>
        </div>
    );
    } else{
        return null;
    }
}

export default MenuMakanan;