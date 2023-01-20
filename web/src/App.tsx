import './styles/global.css'

import { Habit } from "./components/Habit";

function App() {


  return (
    <div>
      <Habit completed={3} />
      <Habit completed={5} />
      <Habit completed={10} />
      <Habit completed={12} />
    </div>
  )

}

export default App