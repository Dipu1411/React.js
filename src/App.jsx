import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import store from "./Redux/Counter/Store";
import Selector from "./Redux/Counter/Selector";
// import NumOperation from "./useMemo/NumOperation";
// import Counter from "./useCallback/Counter";
import FirebaseAuth from "./RnW tasks/FirebaseAuth";

export default function App() {
    return (
        <div>
            {/* <NumOperation />
            <Counter /> */}
            <FirebaseAuth />
            <Provider store={ store }>
                <Selector />
            </Provider>
        </div>
    );
}
