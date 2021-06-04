
const reverse = require('./reverse');


test('reverse if the function exist ',()=>{
    expect(reverse).toBeDefined();
});

test('testing a string ',()=>{
expect(reverse('hello')).toEqual('olleh')
});