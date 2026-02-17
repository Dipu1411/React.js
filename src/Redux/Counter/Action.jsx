export const Increment = "increment";
export const Decrement = "decrement";

export const increment = () => {
    return {
        type: Increment
    }
}

export const decrement = () => {
    return {
        type: Decrement
    }
}