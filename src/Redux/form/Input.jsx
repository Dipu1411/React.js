import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { myAction } from './Action'

export default function Input() {
    const [ state, setState ] = useState({ Username: "" })
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(myAction(state.Username))
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    placeholder="Enter Username"
                    value={ state.Username }
                    onChange={ (e) => setState({ Username: e.target.value }) }
                />
                <button type="submit">Submit</button>
            </form>
        
        </div>
    )
}
