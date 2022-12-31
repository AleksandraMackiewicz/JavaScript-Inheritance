//https://github.com/rolling-scopes-school/js-fe-course-en/blob/main/tasks/classes-inheritance/classes-inheritance.md//ES5
//ES5 base
function Calculations(val){
    
}
Calculations.prototype.set = function(newVal){
    this.val = newVal;
    return this; //set
}
Calculations.prototype.get = function(){
   return this.val; //get
}

//ES6
class IntBuilder extends Calculations {
    
    constructor(val){
        super();
        this.val = val; //constructor
        if(val === undefined){
            this.val = 0;
    
         }
   
  
    }
    plus(...n){
        for(let i =0; i < n.length; i++){
            
           
            this.val += n[i];
        }
        return this;



       
    }
    minus(...n){
        for(let i=0; i<n.length; i++){
        this.val -= n[i];
        }
        return this;
    }
    multiply(n){
        this.val *= n;
        return this;
    }
    divide(n){
        this.val /= n;
      
        this.val = Math.round(this.val);
        return this;
    }
    mod(n){
        this.val %= n;
        return this;
    }
    static random (from, to){
        let rand = Math.floor(Math.random() * to) + from;
        return rand;
    }
 
}


let second = new IntBuilder(10);


// console.log('Number is ' + second.get());
// second.plus(1, 2, 3, 8);
// console.log('Number is ' + second.get());
// second.minus(2);
// console.log('Number is ' + second.get());
// second.multiply(8);
// console.log('Number is ' + second.get());
// second.divide(2.1);
// console.log('Number is ' + second.get());
// second.mod(3);
// console.log('Number is ' + second.get());

// console.log('Number is ' + second.get());


console.log(second.plus(2,3,2).minus(1,2).multiply(2).divide(4).mod(3).get());


//ES5
function StringBuilder(val){
    Calculations.call(this, val);
    

    if(val == undefined) {
        this.val = '';
       } else {
        this.val = val;
       }
    
}
StringBuilder.prototype = Object.create(Calculations.prototype);
    StringBuilder.prototype.constructor = StringBuilder;


StringBuilder.prototype.plus = function(){
    for(let i =0; i < arguments.length; i++){
        arguments[i];
        this.val += arguments[i];

    }
    return this;

}
StringBuilder.prototype.minus = function(n){
    this.val = this.val.slice(0, -n);
    return this;
}
StringBuilder.prototype.multiply = function(n){

    this.val = this.val.repeat(n);
    return this;
}
StringBuilder.prototype.divide = function(n){
    
    let k =  Math.floor(this.val.length / n); 
    this.val = this.val.slice(0, k);
    return this;
}
StringBuilder.prototype.remove = function(str){
   this.val = this.val.split(str).join("");
    return this;
}
StringBuilder.prototype.sub = function(from, n){

    this.val = this.val.substr(from, n);
    return this;
}




let third = new StringBuilder('Hello');


console.log(third.plus(' all', '!').minus(4).multiply(3).divide(4).remove('l').sub(1,1).get());



// console.log(third.set('ne'));
// console.log(third.multiply(2).minus())
// third.strInf('third');


// console.log('third string is '+ third.strInf(''));

// third.strPlus(' is ', 'eating');
// console.log(third.strPlus());
// third.strMinus()
// console.log(third.strMinus());
// third.strMultiply(3);
// console.log(third.strMultiply(1));
// third.strDivide(2);
// console.log(third.strDivide(1));
// third.strRemove()
// console.log(third.strRemove('ss'));
// third.strSub();
// console.log(third.strSub(2, 4));
