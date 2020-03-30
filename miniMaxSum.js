input = [7, 69, 2, 221, 8974]

const minMaxSum = (input) => {
    let response = []
    for (let i = 0; i < input.length; i++){
        const sum = input.filter((value, index) => {
            return index != i
        }).reduce((acc, value) => {
            return acc + value
        }, 0)
        response.push(sum) 
    }
    return response.reduce((acc, value) => {
        if(value < acc[0]){
            acc[0] = value
        }
        if(value > acc[1]){
            acc[1] = value
        }
        return acc
    }, [[response[0]],response[0]])
}

console.log(minMaxSum(input))