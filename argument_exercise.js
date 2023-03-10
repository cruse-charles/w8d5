function sum(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}


// ----------------------------------- Bind with Args ----------------------

Function.prototype.myBind = function (ctx, ...bindArgs) {
  const that = this;

  return function (...callArgs) {
    return that.apply(ctx, [...bindArgs, ...callArgs]);
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true


// ---------------------CurriedSum------------------



function curriedSum(num) {
  let args = [];

  return function _curryAdd(num) {
    args.push(num);
    console.log(sum(args));
    return _curryAdd
  };
}

const total = curriedSum(4);
total(5)(30)(20)(1); // => 56