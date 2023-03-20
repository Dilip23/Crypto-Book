
export function uniqueData(data, key){

    let shortenData = Array.from(new Set(data[key].map(items => {
        console.log('--------------------');
        const date = new Date(items[0]);
        return [date.toDateString(), items[1]];
    })));

    let finalData = Object.entries(shortenData.reduce((ac, cv) => {
        if(!ac.hasOwnProperty(cv[0])){
            return {
                ...ac,
                [cv[0]]: cv[1]
            }
        }
        return ac;
    }, {}));

    finalData = finalData.map(item => [new Date(item[0]).getTime(), item[1]]);
    // console.log('final ---> ',finalData);
    return finalData;
}


export function formatCompactNumber(number) {
    const formatter = Intl.NumberFormat("en", { notation: "compact" });
    return formatter.format(number);
  }


export function calculatePercentage(n1, n2){
    // Convert strings to numbers
    const upper = parseInt(n1);
    const lower = parseInt(n2);

    const value = upper / lower;
    return value;
}