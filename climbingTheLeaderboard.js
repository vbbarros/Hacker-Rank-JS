const leaderboard = [
    100, 90, 90, 80, 75, 60
]

const aliceScore = [
    50, 65, 77, 90, 102
]

const getPositions = (lead) => {
    const positions = lead.filter((value, index) => value != lead[index -1])
    return positions
}

const climbingLeaderboard = (leaderboard, aliceScore) => {
    const positionsLeaderBoard = getPositions(leaderboard)
    let lowestRank = positionsLeaderBoard.length
    return aliceScore.map((value) => {
        while(value >= positionsLeaderBoard[lowestRank -1] && lowestRank > 0){
            lowestRank--;
        }
        return lowestRank + 1
    })
}

console.log(climbingLeaderboard(leaderboard, aliceScore))
