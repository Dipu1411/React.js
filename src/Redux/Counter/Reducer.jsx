import { Increment, Decrement } from "./Action";

const initialState = {
    count: 0
}

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case Increment:
            return {
                ...state,
                count: state.count + 1
            }
        case Decrement:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}