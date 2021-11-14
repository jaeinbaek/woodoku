function switchBlocks(tempBoard, blockCode, sRow, sCol) {
    switch (blockCode) {
        // Horizotal 5 Length bar
        case 1:
            if (sCol > 4) {
                console.log('outOfRange')
                return
              }
            // Length Check
            for (let i = 0; i < 5; i++) {
                if (tempBoard[sRow][sCol + i] === 1) {
                    console.log('already setted')
                    return
                }
            }
            // Set Bolock If Pass Every Tests
            for (let i = 0; i < 5; i++) {
                tempBoard[sRow][sCol + i] = 1
            }
            return tempBoard
        // Horizotal 3 Length bar
        case 2:
            if (sCol > 6) {
                console.log('outOfRange')
                return
              }
            for (let i = 0; i < 3; i++) {
                if (tempBoard[sRow][sCol + i] === 1) {
                    console.log('already setted')
                    return
                }
            }
            // Set Bolock If Pass Every Tests
            for (let i = 0; i < 3; i++) {
                tempBoard[sRow][sCol + i] = 1
            }
            return tempBoard
        // Vertical 5 Length Bar
        case 3:
            if (sRow > 4) {
                console.log('outOfRange')
                return
            }
            // Length Check
            for (let i = 0; i < 5; i++) {
                if (tempBoard[sRow + 1][sCol] === 1) {
                    console.log('already setted')
                    return
                }
            }
            // Set Bolock If Pass Every Tests
            for (let i = 0; i < 5; i++) {
                tempBoard[sRow + i][sCol] = 1
            }
            return tempBoard
        // Vertical 3 Length Bar
        case 4:
            if (sRow > 6) {
                console.log('outOfRange')
                return
            }
            // Length Check
            for (let i = 0; i < 3; i++) {
                if (tempBoard[sRow + 1][sCol] === 1) {
                    console.log('already setted')
                    return
                }
            }
            // Set Bolock If Pass Every Tests
            for (let i = 0; i < 3; i++) {
                tempBoard[sRow + i][sCol] = 1
            }
            return tempBoard
        // 2X2 Square
        case 5:
            if (sRow > 7) {
                console.log('outOfRange')
                return
            }
            if (sCol > 7) {
                console.log('outOfRange')
                return
            }
            // Length Check
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j <= 1; j++) {
                    if (tempBoard[sRow + i][sCol + j] === 1) {
                        console.log('already setted')
                        return
                    }
                }
            }
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j <= 1; j++) {
                    tempBoard[sRow + i][sCol + j] = 1
                }
            }
            return tempBoard
        default:
            break;
    }
}

export default switchBlocks;