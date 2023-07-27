import { Component } from 'react'

interface Props {
  name: string
}

interface State {
  name: string
}

class App extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      name: this.props.name
    }
  }

  render (): JSX.Element {
    return (
      <h1 className='text-red-400 font-medium'> Hello { this.state.name } </h1>
    )
  }
}

export default App
