const { v4:uddiv4} = require('uuid');
const user = [
    {
        id:uddiv4(),
        name:'prokash sarker',
        age:21,
    },
    {
        id:uddiv4(),
        name:'anik biswas',
        age:22,
    },
];

module.exports = {user};