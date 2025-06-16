import { useState } from 'react'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Description'},
    {id: 2, title: 'JS', body: 'Description'},
  ])

  return (
    <div class='App'>
      <h1 style={{textAlign: 'center'}}>Список постов</h1>
     {posts.map(post => 
       <PostItem post={post} key={post.id}/> // ключи позволяют перерисовывать те элементы, в которых произошли изменения
     )}
   
    </div>
  );
}

export default App
