import React from "react";

export default function ProfileCardList() {

    // easy method to scale profile
    return (
        <>
            <ProfileCard
                name="divyansh"
                age={20}
                work="web developer"
                greeting={
                    <div>
                        <strong>hello, i am the devil of my world</strong>
                    </div>
                }
            />

            <p>Hobbies : rapping, dancing</p>
            <button>Contact</button>


            <ProfileCard
                name="dipu"
                age={29}
                work="App developer"
                greeting={
                    <div>
                        <strong>hello, lucifer</strong>
                    </div>
                }
            />
            <p>Hobbies : singing, dancing</p>
            <button>Contact</button>
        </>
    )
}

function ProfileCard({ name, age, work, greeting, hobbies }) {
    return (
        <>
            <h2>Name : {name}</h2>
            <h3>Age : {age}</h3>
            <h3>Work : {work}</h3>
            <div>{greeting}</div>
        </>
    )




}

