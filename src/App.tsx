import { type ChangeEvent, Component } from 'react'
import { type monster } from './type.d'

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
    const value = event.target.value
    const filteredMonsters = this.state.monsters.filter(monster => {
      return monster.name.includes(value)
    })
    this.setState(() => ({ searchField: value, filteredMonsters }))
  }

  render (): JSX.Element {
    return (
      <div>
        <input className='ml-4 px-4' value={this.state.searchField} type='search' placeholder='search monsters' onChange={(event) => { this.handleSearchChange(event) }}/>
        {
          this.state.filteredMonsters.map(monster => {
            return (
              <h1 key={monster.id}> {monster.name} </h1>
            )
          })
        }
      </div>
    )
  }
}

export default App
