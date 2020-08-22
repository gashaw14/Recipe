const add = (a,b)=> a+b;
const generate =(name) => `hello ${name}`
test('add numbers', () =>{
    const result = add(3,4);
    expect(result).toBe(7);
})

test('verify name',()=>{
    const result = generate('gashaw')
    expect(result).toBe('hello gashaw')
})