const input = [-4, 3, -9, 0, 4, 1]

// const filterbyBigger = (arr) => arr.filter(item => item > 0)
// const filterbyLesser = (arr) => arr.filter(item => item < 0)

const filterbyBigger = (item) => item > 0
const filterbyLesser = (item) => item < 0

const core = (comparator) => (filtered, sampleSize) => {
    const attr = filtered.filter(comparator)
    return attr.length/sampleSize
}

const bigger = core(filterbyBigger)
const lesser = core(filterbyLesser)

const plusMinus = (arr) => {
    const big = bigger(arr, arr.length)
    const less = lesser(arr, arr.length)
    return [[big], [less], [1-big-less]]
}

console.log(plusMinus(input))
