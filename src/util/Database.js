import { API, graphqlOperation } from 'aws-amplify'
import { createUserInfo, updateUserInfo } from '../graphql/mutations';
import { listUserInfos } from '../graphql/queries';



const Database = {
    async sendValues(holdings, accounts, changes, idToken) {
        try {
            await API.graphql(graphqlOperation(updateUserInfo, {
                input: {
                    id: idToken,
                    holdings: holdings,
                    accounts: accounts,
                    changes: changes
                }
            }));
        } catch (err) {
            console.log('error sending user data to server. Will try to create new entry')
            try {
                await API.graphql(graphqlOperation(createUserInfo, {
                    input: {
                        id: idToken,
                        holdings: holdings,
                        accounts: accounts,
                        changes: changes
                    }
                }));
            } catch (err) { console.log('error creating new entry.') }
        }
    },

    async fetchValues(idToken) {
        try {
            const response = await API.graphql(graphqlOperation(listUserInfos, {
                filter: {
                    id: {
                        contains: idToken
                    }
                }
            }));
            let values = response.data.listUserInfos.items;
            return values;
        } catch (err) { console.log('error fetching user data from server') }
    },

    saveNewValues(holdings, accounts, changes, idToken) {
        let holdingsString = JSON.stringify(holdings);
        let accountsString = JSON.stringify(accounts);
        let changesString = JSON.stringify(changes);
        this.sendValues(holdingsString, accountsString, changesString, idToken);
    },

    async getValues(idToken) {
        let values = await this.fetchValues(idToken);
        console.log(values);
        try {
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
        } catch (error) {
            console.log('error sending data back to app');
            return null;
        }

    }

}

export default Database