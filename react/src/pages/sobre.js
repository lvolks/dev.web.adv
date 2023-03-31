import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
import "./sobre.css";

export default function Sobre() {
    const { name } = useParams();

    return (
        <div>
            <Title
                title={"Sobre"}
                text={"Mais informações sobre a empresa"} />

            <div className="container1">
                <div className="inf-empresa">
                <p className="inf">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="logo-empresa">
                <img className="foto" src={'/assets/images/foto.png'} />
                </div>
            </div>
        </div>
    )
}