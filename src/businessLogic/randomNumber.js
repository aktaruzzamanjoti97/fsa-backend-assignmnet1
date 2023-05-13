function getRandomNumber(start, end) {
    const startNum = parseInt(start);
    const endNum = parseInt(end);

    return Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
}

module.exports = getRandomNumber;