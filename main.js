

class Stack{

    constructor(){
        this.top = -1
        this.items = {}
    }

    push(el){
      this.top+=1
      this.items[this.top] = el
    }

    get peek(){
      return this.items[this.top]
    }

    get pop(){
      let pop_el = this.peek 
      delete this.items[this.top]
      this.top-=1  
      return pop_el;
    }

    
}

module.exports = Stack