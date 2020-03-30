const input = 8

const staircase = (input) => {
    let response = []
    for(let i = 1; i <= input; i++){
        const espaceNumber = input - i
        let strItem = ""
        for(let j =  1; j <= espaceNumber; j++){
            strItem = spaceConcat(strItem)
        }
        for(let k = 1; k<=i; k++){
            strItem = sharpConcat(strItem)
        }

        response.push(strItem)
    }
    return response
}

const spaceConcat = (acc) => `${acc} `
const sharpConcat = (acc) => `${acc}#`



console.log(staircase(input))