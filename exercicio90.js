const values = [
    0,
    {},
    '',
    [],
    NaN,
    () => {}
]
const truthyValus = values.filter(value => {
    if (value) return value
})