import { API, graphqlOperation } from 'aws-amplify'
import { createUserInfo, deleteUserInfo, updateUserInfo} from '../graphql/mutations';
import { listUserInfos} from '../graphql/queries';



const Database = {
    async sendValues(holdings, accounts, changes) {
        try {
            await API.graphql(graphqlOperation(updateUserInfo, {input: {
                holdings: holdings,
                accounts: accounts,
                changes: changes
              }}));
        } catch (err) { console.log('error sending user data to server') }
    },
    async fetchValues() {
        try {
            const response = await API.graphql(graphqlOperation(listUserInfos));
            let values = response.data.listUserInfos.items;
            return values;
        } catch (err) { console.log('error fetching user data to server') }
    },

    saveNewValues(holdings, accounts, changes) {
        let holdingsString = JSON.stringify(holdings);
        let accountsString = JSON.stringify(accounts);
        let changesString = JSON.stringify(changes);
        this.sendValues(holdingsString, accountsString, changesString);
    },

    async getValues() {
        let values = await this.fetchValues();
        console.log(values);
        let userInfo = values.pop();
        let accountInfo = JSON.parse(userInfo.accounts);
        let holdingInfo = JSON.parse(userInfo.holdings);
        let changesInfo = JSON.parse(userInfo.changes);
        let compiledInfo = {
            accounts: accountInfo,
            holdings: holdingInfo,
            changes: changesInfo
        };
        return compiledInfo;
    }

}

export default Database