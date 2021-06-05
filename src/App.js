import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Food Shopping',
        day: 'June 5th at 10:00am',
        reminder: true,
    },
    {
        id: 2,
        text: 'Study Session',
        day: 'June 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Cleaning Day',
        day: 'June 7th at 12:00pm',
        reminder: false,
    },
])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
