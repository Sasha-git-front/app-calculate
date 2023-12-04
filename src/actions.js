const operant1 = (value) => {
    return {
        type: "OPERANT1",
        payload: value
    }
}
const operant2 = (value) => {
    return {
        type: "OPERANT2",
        payload: value
    }
}
const sign = (value) => {
    return {
        type: "SIGN",
        payload: value
    }
}
const rez = (value) => {
    return {
        type: "REZ",
        payload: value
    }
}

export { operant1, operant2, sign,rez} 