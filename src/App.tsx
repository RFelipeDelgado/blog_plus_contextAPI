import React, {useContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import styled from "styled-components";
import Post from "./components/Post/Post";
import Error404 from "./components/ErrorPage/ErrorPage";
import { ContextoTema } from "./contexts/contextoTema";

const App = () => {
  const {tema} = useContext(ContextoTema)
  console.log(tema);
  

  return (
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        <Main tema={tema}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
};

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  text-align: center;
`;

const Main = styled.main`
  font-size: ${props => props.tema ? props.tema.fuente + 'px' : '16px'};
  text-align: ${props => props.tema ? props.tema.alineado : 'right'};
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 8px 8px 5px rgba(129, 129, 129, 0.1);

  /* width: 90%; */
`;

export default App;
