const Util = {
    positiveFormat: (json, data) => {
        json.forEach((object)=>{
            if(object) {
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
                        object[key] = value;
                    }
                }
            }
        })
        return json;
    },
    reverse: () => {

    }
}
export default Util;