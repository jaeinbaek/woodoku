function overlaySwitchBlocks(tempBoard, blockCode, sRow, sCol) {
    switch (blockCode) {
        // Horizotal 5 Length bar
        case 1:
            if (sCol > 4) {
                return 0
              }
            // Length Check
            for (let i = 0; i < 5; i++) {
                if (tempBoard[sRow][sCol + i] === 1) {
                    return 0
                }
            }
            // Set Bolock If Pass Every Tests
            for (let i = 0; i < 5; i++) {
                tempBoard[sRow][sCol + i] = 2
            }
            return tempBoard
        // Horizotal 3 Length bar
        case 2:
            if (sCol > 6) {
                return 0
              }
            for (let i = 0; i < 3; i++) {
                if (tempBoard[sRow][sCol + i] === 1) {
                    return 0
                }
            }
            // Set Bolock If Pass Every Tests
            for (let i = 0; i < 3; i++) {
                tempBoard[sRow][sCol + i] = 2
            }
            return tempBoard
        // Vertical 5 Length Bar
        case 3:
            if (sRow > 4) {
                return 0
            }
            // Length Check
            for (let i = 0; i < 5; i++) {
                if (tempBoard[sRow + i][sCol] === 1) {
                    return 0
                }
            }
            // Set Bolock If Pass Every Tests
            for (let i = 0; i < 5; i++) {
                tempBoard[sRow + i][sCol] = 2
            }
            return tempBoard
        // Vertical 3 Length Bar
        case 4:
            if (sRow > 6) {
                return 0
            }
            // Length Check
            for (let i = 0; i < 3; i++) {
                if (tempBoard[sRow + i][sCol] === 1) {
                    return 0
                }
            }
            // Set Bolock If Pass Every Tests
            for (let i = 0; i < 3; i++) {
                tempBoard[sRow + i][sCol] = 2
            }
            return tempBoard
        // 2X2 Square
        case 5:
            if (sRow > 7) {
                return 0
            }
            if (sCol > 7) {
                return 0
            }
            // Length Check
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j <= 1; j++) {
                    if (tempBoard[sRow + i][sCol + j] === 1) {
                        return 0
                    }
                }
            }
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j <= 1; j++) {
                    tempBoard[sRow + i][sCol + j] = 2
                }
            }
            return tempBoard
        default:
            break;
    }
}

export default overlaySwitchBlocks;