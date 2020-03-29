const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

const aVeryBigSum = (ar) => ar.reduce((acc, value)=> acc +=value, 0)

console.log(aVeryBigSum(arr))