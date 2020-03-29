arr = []
arr.push([3])
arr.push([11, 2, 4])
arr.push([4, 5, 6])
arr.push([10, 8, -12])

const filter = (matrix) => matrix.filter(arr => arr.length > 1)

const diagonalPrim = (arr) => {
    const filtered = filter(arr)
    return filtered.map((line, index) => line[index])
    .reduce((acc, value) => {
        acc += value
        return acc
    }, 0)
}

const diagonalSec = (arr) => {
    const filtered = filter(arr)
    return filtered.map((line, index) => {
        let newIndex = filtered.length - index - 1
        return line[newIndex]}   
    )
    .reduce((acc, value) => {   
        acc += value
        return acc
    }, 0)
}


console.log(diagonalSec(arr))