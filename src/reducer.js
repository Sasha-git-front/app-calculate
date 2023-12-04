const reducer = (state = {}, action) => {
    switch (action.type) {
        case "OPERANT1":
            return { ...state, number1: action.payload }
        case "OPERANT2":
            return { ...state, number2: action.payload }
        case "SIGN":
            return { ...state, sign: action.payload }
        case "REZ":
            return { ...state, number1: "", number2: "", sign: "", rez: action.payload }
        default:
            return state
    }
}
export { reducer }
