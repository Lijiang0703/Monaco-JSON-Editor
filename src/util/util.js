const Util = {
    positiveFormat: (json, data) => {
        const formatJson = [];
        json.reduce((formatJson, object, index)=>{
            if(object) {
                formatJson[index] = JSON.parse(JSON.stringify(object));
                for(let key in object) {
                    const item = object[key];
                    const regx = /\$\{(\S+?)\}/g;
                    if(item.match(regx) !== null){
                        const keys = regx.exec(item)[1];
                        const keysArr = keys.split('.');
                        const value = keysArr.reduce((obj, op, index)=>{
                            if(!obj && index !== keysArr.length) {
                                obj = data[op];
                            } else {
                                obj = obj[op];
                            }
                            return obj;
                        }, '');
                        formatJson[index][key] = value;
                    }
                }
            }
            return formatJson;
        },formatJson)
        console.log(formatJson)
        return formatJson;
    },
    reverseFormat: ({index, val, middleData, appData = {}}) => {
        const data = middleData[index] || {};
        const reverseData = JSON.parse(JSON.stringify(appData));
        for(let key in data) {
            const item = data[key];
            const regx = /\$\{(\S+?)\}/g;
            if(item.match(regx) !== null){
                // const keys = regx.exec(item)[1];
                // const keysArr = keys.split('.');
                // keysArr.reduce((obj, op, index)=>{
                //     if(index === 0) {
                //         obj = appData[op];
                //     } else if(index === keysArr.length - 1) {
                //         obj[op] = val;
                //     } else {
                //         obj = obj[op];
                //     }
                //     return obj;
                // }, '')
            }
        }
        console.log(reverseData)
        return reverseData;
    }
}
export default Util;