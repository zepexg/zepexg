import React, { ElementType } from "react";

const Menu = () =>{

    const activeLink = (e:any) => {
        let list = document.querySelectorAll('.list');
        list.forEach((item) => item.classList.remove('active'));
        e.target.parentElement.parentElement.classList.add('active');
    }

    return(
        <div className="navigation">
            <ul>
                <li className="list active" onClick={(e) => activeLink(e)}>
                    <a href="#">
                        <span className="icon">Icono</span>
                        <span className="text">Aviso</span>
                    </a>
                </li>
                <li className="list" onClick={(e) => activeLink(e)}>
                    <a href="#">
                        <span className="icon">Icono</span>
                        <span className="text">Perfil</span>
                    </a>
                </li>
                <li className="list" onClick={(e) => activeLink(e)}>
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