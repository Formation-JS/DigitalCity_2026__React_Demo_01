import type { Person } from './@types/people'
import './App.css'
import Counter from './components/Counter/Counter'
import PeopleTable from './components/PeopleTable/PeopleTable'
import Welcome from './components/Welcome/Welcome'

function App() {

  const people: Person[] = [
    { id: 1, firstname: 'Donald', lastname: 'Duck', birthdate: new Date(1990, 0, 12) },
    { id: 2, firstname: 'Zaza', lastname: 'Vanderquack', birthdate: new Date(2005, 6, 2) },
    { id: 3, firstname: 'Lena', lastname: 'De sortilege', birthdate: new Date(2006, 1, 28) },
    { id: 4, firstname: 'Gontran', lastname: 'Bonheur', birthdate: new Date(1988, 10, 1) },
  ]

  return (
    <>
      <h1>Demo 01</h1>
      <Welcome firstname='Della' lastname='Duck' />

      {/* <h2>Liste des personnes</h2>
      <PeopleTable people={people} /> */}

      <h2>Exo 01</h2>
      <Counter />
    </>
  )
}

export default App
