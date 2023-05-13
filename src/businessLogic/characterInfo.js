function getCharactersInfo(str) {
    const letters = str.match(/[a-zA-Z]/g) || [];
    const symbols = str.match(/[^a-zA-Z0-9]/g) || [];
    const numbers = str.match(/[0-9]/g) || [];

    return {
        letters: letters.length,
        symbols: symbols.length,
        numbers: numbers.length,
    };
}

module.exports = getCharactersInfo;