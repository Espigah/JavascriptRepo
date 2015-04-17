/**
 * Created by MCG on 17/04/2015.
 */
describe('hello_test',
    function(){
        it("should work",
            function (){
                expect(true).toBe(true);
            }
        )
    }
)

describe("A suite is just a function", function() {
    var a;

    //var http = require('http');
   // require("./src/Testable.js")
    it("and so is a spec", function() {
        a = true;
       // expect(a).toBe(true);
        expect(mySum(1,1)).toBe(2);
    });
});