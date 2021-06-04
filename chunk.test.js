const chunkArry = require('./chunk');

test('reverse if the function exist ',()=>{
    expect(chunkArry).toBeDefined();
});

test('chunk an array  ',()=>{
    const numbers=[1,2,3,4];
    const len = 2 ;
    const chunkArr = chunkArry (numbers, len);
    expect(chunkArr).toEqual([[1,2],[3,4]]);
});