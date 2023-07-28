import { Component } from 'react'
import { type monster } from './type.d'

interface Props {
  name: string
}

interface State {
  monsters: monster[]
}

class App extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      monsters: []
    }
  }

  render (): JSX.Element {
    return (
      
      )
  }
}

export default App
