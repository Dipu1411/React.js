import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import app from './Firebase';


const database = getDatabase(app);
export default function Database() {


    function senddata() {
        set(ref(database, 'user/Divyansh'), {
            user: "divyansh",
            email: "dipuvadher04@gmail.com"

        })
            .then(() => {
                console.log("data save sucessfully");
            })
            .catch((error) => {
                console.log("error", error);
            })
    }







    return (
        <div>

            {/* <button onClick={ senddata }>sendData</button> */}




        </div>
    )
}