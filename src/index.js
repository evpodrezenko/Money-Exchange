// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
    const moneyExchange = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };
    
    const minimumNumberOfCoins = {};
    if (currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
        
    for (let key in moneyExchange) {
        let wholeNnumberOfCoins = Math.floor(currency /  moneyExchange[key]);
        currency = currency - wholeNnumberOfCoins * moneyExchange[key];
        if (wholeNnumberOfCoins > 0) {
            minimumNumberOfCoins[key] = wholeNnumberOfCoins;
        }
    }
    
return minimumNumberOfCoins;
}
