

const Calculator = {
  //How to determine whether account is limited(i.e TFSA) or unlimited(i.e. cash account)
  isLimited(account) {
    return (account.limit > -1);
  },
  getCompiledAmounts(holdings, accounts) {
    let amounts = {};
    for (let i = 0; i < holdings.length; i++) {
      let holding = holdings[i];
      amounts[holding.name] =0;
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

    console.log(amounts);
    return amounts;
  },

  calculateInvestment(holdings, accounts, amount) {
    //Want to contribute to limited accounts first (TFSA, RRSP...)
    //So we should make the distinction b/w them.
    let limitedAccounts = [];
    let unlimitedAccounts = [];

    for (let i = 0; i < accounts.length; i++){
      let account = accounts[i];
      if (this.isLimited(account)){
        limitedAccounts.push(account);
      } else {
        unlimitedAccounts.push(account);
      }
    }
    console.log(limitedAccounts);
    console.log(unlimitedAccounts);


    let compiledAmounts = this.getCompiledAmounts(holdings, accounts);


  }
}

export default Calculator