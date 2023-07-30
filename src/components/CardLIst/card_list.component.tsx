import { Component } from 'react'
import { monster } from '../../type.d'

interface Props {
	monsters: monster[]
}

class CardList extends Component<Props> {
  render (): JSX.Element {
	const { monsters } = this.props

    return (
      <>
		{
			monsters.map(monster => {
				return (
					<h1 key={monster.id}> {monster.name} </h1>
				)
			})
		}
      </>
    )
  }
}

export default CardList