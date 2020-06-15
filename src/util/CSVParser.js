
const CSVParser = {
    //Gets names from list of objects (i.e accounts, holdings etc)
    get_names(list) {
        let usedNames = [];
        for (let i = 0; i < list.length; i++) {
            usedNames.push(list[i].name)
        }
        return usedNames
    },
    //Will add any new holdings to users current info
    fix_holdings(newAccount, oldHoldings) {
        let curr_id = oldHoldings[oldHoldings.length - 1].id + 1;
        //Need a list of holding names to compare to
        let usedNames = this.get_names(oldHoldings);

        Object.keys(newAccount).map(function (key) {
            if (key !== 'name' && !(usedNames.includes(key))) { //Only want to look at holdings
                oldHoldings.push( {name: key, allocation: 0, id: curr_id++});
            }
          });

        return oldHoldings;
    },

    //Will add any new accounts to users current info
    fix_accounts(newAccount, accounts, holdings) {
        console.log(newAccount);
        //If account already exists just want to extract values
        let accountNames = this.get_names(accounts);
        let accountName = newAccount.name;
        delete newAccount.name;
        //all the holding names, new ones included
        let holdingNames = this.get_names(holdings);

        if (accountNames.includes(accountName)){
            //account already exists
            //need to just append the new keys to the account
            let currAccount = accounts.find(savedAcc => savedAcc.name === accountName);
            Object.keys(newAccount).map((holdingName) => {
                currAccount.values[holdingName] = newAccount.holdingName;
            });
            // currAccount.values = newAccount;
        } else {
            //If not an existing account we will just create a new one
            // need to set values of other holding to zero in this account
            
            for (let i = 0; i < holdingNames.length; i++){
                if (!(holdingNames[i] in newAccount)){
                    //set values of holdings not in this account to zero
                    newAccount[holdingNames[i]] = 0;
                }
            }
            accounts.push({name: accountName, values: newAccount, limit: -1, id: (accounts[accounts.length - 1].id + 1)});
        }
        //Also need to update the holdings of the other accounts to reflect read holdings
        for (let i = 0; i < accounts.length; i++){
            let currAccount = accounts[i];
            let currHoldings = Object.keys(currAccount.values);
            holdingNames.map((name) => {
                //want to initialize it to zero if not found in account already
                if (!(currHoldings.includes(name))){
                    currAccount.values[name] = 0;
                }
            });

        }
        return {accounts: accounts, newAccount: accountName};
    },


    //fixes any issues with the changes
    fix_changes(changes, newName, holdings){
        let currChanges = changes.find(change => change.name === newName); //will be null if it is a new account
        console.log(currChanges);
        if (!currChanges) {
            //if the account is new need to append 
            let newChange = {name: newName, values: {}};
            changes.push(newChange);
            console.log(changes);
        }
        //Now need to update all the holdings to all the changes
        for (let i = 0; i < changes.length; i++) {
            let curr = changes[i];
            let usedHoldings = Object.keys(curr.values);
            holdings.map((holding) => {
                //If change not present then set it to zero
                //Else leave it alone
                if (!(usedHoldings.includes(holding.name))) {
                    curr.values[holding.name] = 0;
                }
            }); 
        }
        return changes;

    },

    read_csv(file, accounts, holdings, changes) {
        //7th index is where the holdings start
        const START_INDEX = 7;
        //5th index is the market value 
        const VALUE_INDEX = 5;
        let length =  Object.keys(file).length;
        let accountValues = {};
        // console.log(file);
        try {
            //want to get rid of 'td direct investing' in the name
            let fullName = file[0][Object.keys(file[0])[1]];
            accountValues["name"] = fullName.slice(fullName.indexOf(' - ') + 3, fullName.length - 1);
            for (let i = START_INDEX; i < length; i++){
                accountValues[file[i].as_of_date] = file[i].__parsed_extra[VALUE_INDEX];
            }
        } catch (error) {
            console.log(error);
        }
        let new_holdings = this.fix_holdings(accountValues, holdings);
        let accountChanges = this.fix_accounts(accountValues, accounts, holdings);
        let new_accounts = accountChanges.accounts;

        let new_changes = this.fix_changes(changes, accountChanges.newAccount, new_holdings);

        let items = {holdings: new_holdings, accounts: new_accounts, changes: new_changes};
        console.log(items);

        return items;
    }
}

export default CSVParser