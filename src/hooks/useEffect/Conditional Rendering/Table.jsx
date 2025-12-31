import React, { useState } from 'react'

export default function Table() {
    // const [state, setState] = useState(false)
    return (
        <div>
            <h1>tabel component</h1>            
            <table border="1">
                <tr>
                    <th>name:</th>
                    <th>country</th>
                </tr>
                <tr>
                    <td>divyansh</td>
                    <td>india</td>
                </tr>
            </table>
        </div>
    )
}
