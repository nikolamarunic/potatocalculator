

const Calculator = {
  //How to determine whether account is limited(i.e TFSA) or unlimited(i.e. cash account)
  isLimited(account) {
    return (account.limit > -1);
  },

  //rounds to two decimal places if necessary
  round(num) {
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
        targetAmounts[key] = Calculator.round(total * (holding.allocation / 100));
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
      holdingChanges[key] = Calculator.round(targetAmounts[key] - compiledAmounts[key]);
      return 0;
    });
    return holdingChanges
  },
  
  allocateChanges(limitedAccounts, unlimitedAccounts, remainingChanges) {
    //Want to prioritize the limited accounts, so add funds to them first

    for (let i = 0; i < limitedAccounts.length; i++) {
      let account = limitedAccounts[i];
      if (account.limit === 0) {
        break;
      }
      Object.keys(remainingChanges).map(function (key) {
        if (remainingChanges[key] > 0) {
          //Generally want to add to these accounts and not sell
          if (account.limit > remainingChanges[key]) {
            //Can add to the account
            account.values[key] += remainingChanges[key];
            account.limit -= remainingChanges[key];
            remainingChanges[key] = 0;
          } else {
            //Cannot add all the funds to this specific account
            remainingChanges[key] -= account.limit;
            account.values[key] += account.limit;
            account.limit = 0;
            //Since we cannot add anymore funds to this account we can move to the next one early.
            // break; Cant break early because of map
          }
        }
        return 0;
      });
    }
    console.log(remainingChanges);

    //Can add the remaining funds to the unlimited accounts
    for (let i = 0; i < unlimitedAccounts.length; i++) {
      let account = unlimitedAccounts[i];
      Object.keys(remainingChanges).map(function (key) {
        if (remainingChanges[key] < 0 && (Math.abs(remainingChanges[key]) > account.values[key])) {
          //Need to sell more than is available in account
          remainingChanges[key] += account.values[key];
          account.values[key] = 0;
        } else {
          //Buying holdings OR selling a possible amount
          account.values[key] += remainingChanges[key];
          remainingChanges[key] = 0;
        }
        remainingChanges[key] = Calculator.round(remainingChanges[key]); //want nice round numbers
        return 0;
      });
    }
    console.log(remainingChanges);

    return (unlimitedAccounts.concat(limitedAccounts));
  },


  //Handles cases where there were stocks that were needed to be sold but not sold.
  handleErrors(accounts, remainingChanges) {
    let needToSell = 0;
    Object.keys(remainingChanges).map(function (key) {
      needToSell += remainingChanges[key];
      return 0;
    });

    if (needToSell !== 0) {
      // Want to redistribute
      for (let i = 0; i < accounts.length; i++) {
        let account = accounts[i];
        Object.keys(account.values).map(function (key) {
          if (account.values[key] + needToSell >= 0) {
            account.values[key] += needToSell;
            needToSell = 0;
          } else {
            needToSell += account.values[key];
            account.values[key] = 0;
          }
        });
      }
    }
    // console.log(needToSell);
    return accounts;
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

    //now want to calculate the actual and target values for each holding
    let compiledAmounts = this.getCompiledAmounts(holdings, accounts);
    let newTotal = compiledAmounts.total + amount;
    // console.log(compiledAmounts);

    let targetAmounts = this.calculateTargetAmounts(compiledAmounts, holdings, newTotal);

    // console.log(targetAmounts);

    //Next want to calculate the change in each holding.
    let holdingChanges = this.calculateHoldingChanges(targetAmounts, compiledAmounts);
    // console.log(holdingChanges);

    //Finally want to allocate the changes to the accounts
    let newAccounts = this.allocateChanges(limitedAccounts, unlimitedAccounts, holdingChanges);
    // console.log(newAccounts);

    //Need to check and handle any changes that did not go through (i.e. couldnt sell enough stock)
    let handledAccounts = this.handleErrors(newAccounts, holdingChanges);
    // console.log(handledAccounts);

    return handledAccounts;

  }
}

export default Calculator