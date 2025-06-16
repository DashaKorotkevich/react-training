import { useState } from 'react'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Description'},
    {id: 2, title: 'JS', body: 'Description'},
  ])

  const [title, setTitle] = useState('')

  const addNewPost = () => {
    e.preventDefault()
  } 

  return (
    <div className='App'>
      {/* <PostItem post={{id: 1, title: 'js', body: 'fjj'}}/> */}
      <form>
        <MyInput 
          value={title}
          onChange = {e => setTitle(e.target.value)}
          type="text" 
          placeholder="Название поста"/>
        <MyInput type="text" placeholder="Описание поста"/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form> 
      {/* {posts.map(post=>
        <PostItem post={post} key={post.id}/>
      )} */}
      <PostList posts={posts} title="Список постов 1"/>
    </div>
  );
}

export default App
