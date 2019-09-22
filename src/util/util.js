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
                const keys = regx.exec(item)[1];
                const keysArr = keys.split('.');
                console.log(keysArr)

                let tmp = reverseData;
                for(let i = 0; i < keysArr.length; i++){
                    if (i == keysArr.length - 1){
                        tmp[keysArr[i]] = val;
                    }else{
                        tmp = tmp[keysArr[i]];
                    }
                }
            }
        }
        console.log(reverseData)
        return reverseData;
    },
    panelDataChange: ({val,oldVal,index,isChildren,subIndex,key}, preData)=>{
        const isObject = Object.prototype.toString.apply(val) === `[object Object]` || false;
        let result = [...preData];
        for(let i=0;i<preData.length;i++){
            const json = preData[i];
            if(index === i){
                if(isChildren){ //collapse
                    if(subIndex !== undefined){
                        let children = json.children;
                        let data = {};
                        if(key){
                            data = children[key][subIndex] || {};
                        }else{
                            data = children[subIndex] || []
                        }
                        if(!isObject){
                            data = {
                                ...data,
                                data: {
                                    ...data.data,
                                    value: val
                                }
                                value: val, 
                            }
                        }else {
                            data = {
                                ...data,
                                data: {
                                    ...data.data,
                                    ...val
                                },
                                ...val
                            };
                        }
                        result[i].children = data;
                    }
                }else {
                    if(!isObject){
                        result[i] = {
                            ...json,
                            data: {
                                ...json.data,
                                value: val
                            },
                            value: val, 
                        }
                    }else {
                        result[i] = {
                            ...json,
                            data: {
                                ...json.data,
                                ...val
                            },
                            ...val
                        };
                    }
                }
                break;
            }
        };
        return result;
    }
}
export default Util;