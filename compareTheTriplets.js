const a = [17, 28, 30]
const b = [99, 16, 8]

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    return a.reduce((acc, value, index) => {
        if(value < b[index]){
            acc[1] +=1
        }else if(value > b[index]){
            acc[0] +=1
        }
        return acc
    }, [0, 0])
}

const response = compareTriplets(a,b)
console.log(response)



