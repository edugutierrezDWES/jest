
const Stack = require("../main");

describe('stack without using an array', () => {
    let stack
    beforeEach(()=> {
        stack = new Stack()
    })

    it('should be created empty',()=>{
        expect(stack.top).toBe(-1)
        expect(stack.items).toEqual({})
    });

    it('should push to the top', ()=>{
        stack.push(4)
        stack.push(5)
        stack.push(6)
        expect(stack.top).toBe(2)
        expect(stack.peek).toBe(6)
        
    });

     it('should can pop off', ()=>{
         stack.push(4)
         stack.push(5)
         const pop = stack.pop
         expect(stack.top).toBe(0)
         expect(pop).toBe(5)
         expect(stack.peek).toBe(4)
     });
})