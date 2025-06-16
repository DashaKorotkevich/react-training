import { useState } from 'react'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

function App() {
  const [value, setValue] = useState('ТЕКСТ В ИНПУТ')

  return (
    <div class='App'>
      <Counter/>
      <ClassCounter/>
    </div>
  );
}

export default App
