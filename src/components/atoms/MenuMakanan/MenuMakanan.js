import React from "react";

var MenuMakanan = (props) => {
    return(
        <div className="MenuMakanan" style={{border : '1px solid black', width : 300, margin : 'auto' }}>
            <p>Menu : {props.namaMakanan} </p>
            <p>Harga : {props.hargaMakanan} </p>
        </div>
    );
}

export default MenuMakanan;