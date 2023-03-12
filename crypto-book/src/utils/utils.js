
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