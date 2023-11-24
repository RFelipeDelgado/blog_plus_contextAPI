import React, {useContext} from "react";
import styled from "styled-components";
import { ContextoTema } from "../../contexts/contextoTema";

const Controles = () => {

    const valores = useContext(ContextoTema);
    

    return (
        <ContenedorControles>
            <div>
                <Boton onClick={valores.aumentarFont}>Aumentar Font</Boton>
                <Boton onClick={valores.disminuirFont}>Disminuir Font</Boton>
            </div>
            <div>
                <Boton onClick={valores.alinearIzq}>Izquierda</Boton>
                <Boton onClick={valores.alinearCenter}>Centro</Boton>
                <Boton onClick={valores.alinearDer}>Derecha</Boton>
            </div>
        </ContenedorControles>
    );
}

const ContenedorControles = styled.div`
    margin-top: 20px;
`;

const Boton = styled.button`
    background: #165168;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 12px;
    padding: 7px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 3px;

    &:hover {
        background: #191668;
    }
`



export default Controles;