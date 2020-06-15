
const CSVParser = {
    read_csv(file) {
        //7th index is where the holdings start
        const START_INDEX = 7;
        //5th index is the market value 
        const VALUE_INDEX = 5;
        let length =  Object.keys(file).length;
        let accountValues = {};
        try {
            for (let i = START_INDEX; i < length; i++){
                accountValues[file[i].as_of_date] = file[i].__parsed_extra[VALUE_INDEX];
            }
        } catch (error) {
            console.log(error);
        }
        return accountValues;
    }
}

export default CSVParser