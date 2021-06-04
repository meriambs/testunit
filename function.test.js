const functions = require('./function');

//test toBe , where you look if the result is exactly what you are looking for .

test('add2 + 2 to equal 4', ()=>{
expect(functions.add(2, 2)).toBe(4);

});

test('should be null ', ()=>{
    expect(functions.isNull()).toBeNull();
    
    });


test('should be false ', ()=>{
    expect(functions.checkValue(null)).toBeFalsy();
    
    });

//check user , check object , the toBe wont work in the case of an object , but toEqual is the one .

test('should be meriam ben salah  ', ()=>{
    expect(functions.createUser()).toEqual({
        firstName:'meriam',
        lastName:'ben slaah '
    });
    
    });

    //less and greter : we put a function we test in the test 

         test('should be under 6000 ', ()=>{
        const m1 =750;
        const m2 = 1450;
        expect(m1 + m2).toBeLessThan(6000);
        
        });

        // regex:

            test('there is no i in team  ', ()=>{
            expect('team').not.toMatch(/I/);
            
            });

            //work with array 

            test('Admin should have a user name ',()=>{
                usernames=['meriam','refka','lamia'];
                expect(usernames).toContain('lamia')
            })

            //the axios part use the jsonlaceholder helps us to have fakse db.
            // dont forget the assertions and the return to be sure to have the exact same responce u are looking for 
            test('should user placeholder fin the user first name ',()=>{
              expect.assertions(1);
              return functions.fetchUser().then(data=>{
              expect(data.name).toEqual('Leanne Graham')
              })
              });

              //change it to async :

            //   test('should user placeholder fin the user first name ', async ()=>{
            //   expect.assertions(1);
            //   const data = await functions.fetchUser()
            //   expect(data.name).toEqual('Leanne Graham')
              
            //   });

