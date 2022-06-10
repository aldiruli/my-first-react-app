import React from "react";

var MenuMinuman = (props) => {
    return(
        <div className="MenuMinuman" style={{border : '1px solid black', width : 300, margin : 'auto' }}>
            <p>Nama Minuman : {props.namaMinuman}</p>
            <p>Harga : {props.hargaMinuman}</p>
        </div>
    );
}

export default MenuMinuman;