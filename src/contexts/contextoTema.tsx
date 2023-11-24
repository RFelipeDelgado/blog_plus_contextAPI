import React, { useState } from "react";

// crear contexto === estado global
const ContextoTema = React.createContext();

const ProveedorTema = ({ children }) => {
    const [tema, setTema] = useState({
        alineado: "center",
        fuente: 30,
    });

    const aumentarFont = () => {setTema({...tema, fuente: tema.fuente + 2})}
    const disminuirFont = () => {setTema({...tema, fuente: tema.fuente - 2})}
    
    
    const alinearIzq = () => {setTema({...tema, alineado: "left"})}
    const alinearCenter = () => {setTema({...tema, alineado: "center"})}
    const alinearDer = () => {setTema({...tema, alineado: "right"})}


    return (
        <ContextoTema.Provider value={{ tema, aumentarFont, disminuirFont, alinearIzq, alinearCenter, alinearDer }}>{children}</ContextoTema.Provider>
    );
};

export { ContextoTema, ProveedorTema };
