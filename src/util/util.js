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
    reverse: () => {
        
    }
}
export default Util;