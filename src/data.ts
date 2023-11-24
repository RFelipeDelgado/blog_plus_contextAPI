interface Post {
    id: number;
    titulo: string;
    texto: string;
  }
  
  const posts: Post[] = [
    { id: 1, titulo: "Articulo 1", texto: "Texto del primer artículo. Habla de cosas felices" },
    { id: 2, titulo: "Articulo 2", texto: "Texto del segundo artículo. Habla de cosas tristes =(" },
    { id: 3, titulo: "Articulo 3", texto: "Texto del tercer artículo. Habla de cosas sin importancia" },
  ];
  
  export default posts;
  