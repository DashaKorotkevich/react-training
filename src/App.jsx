import { useState } from 'react'
import Counter from "./components/Counter";

function App() {
  const [value, setValue] = useState('ТЕКСТ В ИНПУТ')

  return (
    <div class='App'>
      <Counter/>
    </div>
  );
}

export default App
