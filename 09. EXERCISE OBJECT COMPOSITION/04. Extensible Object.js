function getExtensibleObj(template) {
    let obj = {
        extend: (template) => {
            for (let prop in template) {
                if (typeof template[prop] === 'function'){
                  Object.getPrototypeOf(obj)[prop] = template[prop]
                } else {
                  obj[prop] = template[prop];
                }
            }
        }
    };
    return obj;
}

let extensibleObj = getExtensibleObj();

    extensibleObj.extend({
    extentionMethod: function () {
        return 'neshto'
    },
    extensionProperty: 'something'
});

    console.log(extensibleObj);