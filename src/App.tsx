import { type ChangeEvent, Component } from 'react'
import { type monster } from './type.d'
import CardList from './components/CardLIst/card_list.component'

interface Props {
  name: string
}

interface State {
  searchField: string
  monsters: monster[]
  filteredMonsters: monster[]
}

class App extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      searchField: '',
      monsters: [],
      filteredMonsters: []
    }
  }

  componentDidMount (): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(async response => await response.json())
      .then(data => {
        this.setState(() => ({ monsters: data, filteredMonsters: data }))
      })
      .catch(err => { console.log(err) })
  }

  handleSearchChange (event: ChangeEvent<HTMLInputElement>): void {
    const { monsters } = this.state    
    const value = event.target.value.toLowerCase()
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(value)
    })
    this.setState(() => ({ searchField: value, filteredMonsters }))
  }

  render (): JSX.Element {
    const { filteredMonsters, searchField } = this.state

    return (
      <div>
        <input
          className='ml-4 px-4'
          value={searchField}
          type='search'
          placeholder='search monsters'
          onChange={ (event) => this.handleSearchChange(event) }
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App
