

const Calculator = {
  //How to determine whether account is limited(i.e TFSA) or unlimited(i.e. cash account)
  isLimited(account) {
    return (account.limit > -1);
  },

  //rounds to two decimal places if necessary
  roundTo(num) {
    return (Math.round((num + Number.EPSILON) * 100) / 100);
  },

  getCompiledAmounts(holdings, accounts) {
    let amounts = {};
    for (let i = 0; i < holdings.length; i++) {
      let holding = holdings[i];
      amounts[holding.name] = 0;
    }
    amounts.total = 0;
    for (let i = 0; i < accounts.length; i++) {
      let account = accounts[i];
      for (let j = 0; j < holdings.length; j++) {
        let holding = holdings[j].name;
        amounts[holding] += account.values[holding];
        amounts.total += account.values[holding];
      }
    }
    return amounts;
  },

  //Calculates the targets given the allocations in holdings and new total.
  calculateTargetAmounts(compiledAmounts, holdings, total) {
    let targetAmounts = {}
    Object.keys(compiledAmounts).map(function (key) {
      let holding = holdings.find(stock => stock.name === key);
      if (holding) {
        targetAmounts[key] = Calculator.roundTo(total * (holding.allocation / 100));
      }
      return 0;
    });
    return targetAmounts;
  },

  //Calculates the difference from how much is in the stock and how much there should be 
  //given the target allocation and accounting for the investment.
  calculateHoldingChanges(targetAmounts, compiledAmounts) {
    let holdingChanges = {}
    Object.keys(targetAmounts).map(function (key) {
      holdingChanges[key] = Calculator.roundTo(targetAmounts[key] - compiledAmounts[key]);
      return 0;
    });
    return holdingChanges
  },

  calculateInvestment(holdings, accounts, amount) {
    //Want to contribute to limited accounts first (TFSA, RRSP...)
    //So we should make the distinction b/w them.
    let limitedAccounts = [];
    let unlimitedAccounts = [];

    for (let i = 0; i < accounts.length; i++) {
      let account = accounts[i];
      if (this.isLimited(account)) {
        limitedAccounts.push(account);
      } else {
        unlimitedAccounts.push(account);
      }
    }
    console.log(limitedAccounts);
    console.log(unlimitedAccounts);


    //now want to calculate the actual and target values for each holding
    let compiledAmounts = this.getCompiledAmounts(holdings, accounts);
    let newTotal = compiledAmounts.total + amount;
    console.log(compiledAmounts);

    let targetAmounts = this.calculateTargetAmounts(compiledAmounts, holdings, newTotal);

    console.log(targetAmounts)

    //Next want to calculate the change in each holding.
    let holdingChanges = this.calculateHoldingChanges(targetAmounts, compiledAmounts);
    console.log(holdingChanges);






  }
}

export default Calculator