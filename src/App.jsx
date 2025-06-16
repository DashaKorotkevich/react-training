import { useState } from 'react'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Description'},
    {id: 2, title: 'JS', body: 'Description'},
  ])

  return (
    <div className='App'>
      {/* <PostItem post={{id: 1, title: 'js', body: 'fjj'}}/> */}
      <form>
        <input type="text" placeholder="Название поста"/>
        <input type="text" placeholder="Описание поста"/>
        <MyButton disabled>Создать пост</MyButton>
      </form>
      {/* {posts.map(post=>
        <PostItem post={post} key={post.id}/>
      )} */}
      <PostList posts={posts} title="Список постов 1"/>
    </div>
  );
}

export default App
