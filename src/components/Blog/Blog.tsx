import React from "react";
import posts from "../../data";
import { NavLink } from "react-router-dom";
import Controles from "../Controls/Controles";

const Blog = () => {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {posts.map((element) => {
          return (
            <li key={element.id}>
              <NavLink to={`/post/${element.id}`}>{element.titulo}</NavLink>
            </li>
          );
        })}
      </ul>
      <Controles />

    </div>
  );
};

export default Blog;
