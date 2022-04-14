import React, { ElementType } from "react";

const Menu = () =>{

    let seleccionado:number = 0;

    const activeLink = (e:any, key:number) => {
        let list = document.querySelectorAll('.list');
        list.forEach((item) => item.classList.remove('active'));
        e.target.parentElement.parentElement.classList.add('active');
        seleccionado = key;
        console.log(seleccionado);
    }

    return(
        <div className="navigation">
            <ul>
                <li className="list active" onClick={(e) => activeLink(e,0)}>
                    <a href="#">
                        <span className="icon">Icono</span>
                        <span className="text">Aviso</span>
                    </a>
                </li>
                <li className="list" onClick={(e) => activeLink(e,1)}>
                    <a href="#">
                        <span className="icon">Icono</span>
                        <span className="text">Perfil</span>
                    </a>
                </li>
                <li className="list" onClick={(e) => activeLink(e,3)}>
                    <a href="#">
                        <span className="icon">Icono</span>
                        <span className="text">Logout</span>
                    </a>
                </li>
                <div className="indicator"></div>
            </ul>
        </div>
    );
}

export default Menu;