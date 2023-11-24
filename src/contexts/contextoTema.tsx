import React, { useState } from "react";

// crear contexto === estado global
const ContextoTema = React.createContext();

const ProveedorTema = ({ children }) => {
    const [tema, setTema] = useState({
        alineado: "center",
        fuente: 30,
    });

    const aumentarFont = () => {setTema({...tema, fuente: tema.fuente + 1})}

    return (
        <ContextoTema.Provider value={{ tema, aumentarFont }}>{children}</ContextoTema.Provider>
    );
};

export { ContextoTema, ProveedorTema };
