import { useState } from 'react'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";

function App() {
  const [value, setValue] = useState('ТЕКСТ В ИНПУТ')

  return (
    <div class='App'>
     <PostItem post={{id: 1, title: 'JS', body: 'Description'}}/>
   
    </div>
  );
}

export default App
