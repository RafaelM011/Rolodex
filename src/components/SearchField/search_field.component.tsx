import { Component } from "react";

interface Props {
    value: string
    onChange: ( event: any) => void
}

class SearchField extends Component<Props> {
    render (){
        const { value, onChange } = this.props

        return(
            <input
            className='ml-4 px-4'
            value={value}
            type='search'
            placeholder='search monsters'
            onChange={onChange}
            />
        )
    }
}

export default SearchField