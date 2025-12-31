import React from "react";

export default function ParentComponent() {

    return (
        <>
            <h1> hello, i am parent component </h1>
            <ChildComponent data="i am data from parent component" />
        </>
    )

    function ChildComponent({ data }) {
        return (
            <>
                <h3> hello, i am child component </h3>
                <GrandChildComponent data={data} />
            </>
        )
    }

    function GrandChildComponent({ data }) {
        return (
            <>
                <h3> hello, i am grand child component </h3>
                <GreatGrandChildComponent data={data} />
            </>
        )
    }

    function GreatGrandChildComponent({ data }) {
        return (
            <>
                <h1> {data} </h1>

            </>
        )
    }
}