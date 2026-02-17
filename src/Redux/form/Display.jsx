import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { delateAction, editAction } from './Action'


export default function Display() {
    const data = useSelector((store) => { return store })
    console.log(data)

    const dispatch = useDispatch()

    return (
        <div>
            <h1>Display</h1>
            {
                data.map((el, i) => {
                    return <>
                        <li key={ i }>{ el }

                        </li>

                    </>
                })
            }
        </div>
    )
}
