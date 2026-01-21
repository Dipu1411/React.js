import react, { useContext } from "react";
import { myContext } from "./Context";

export default function Child() {
    const data = useContext(myContext);

    return (
        <div>
            <h2>child component</h2>
            <p>{ data.name }</p>
            <p>{ data.age }</p>
        </div>
    )
}