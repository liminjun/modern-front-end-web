var myvalue: number = 123;
var mynumarray: number[] = [1, 2, 3];

enum Instrument { Trumet, Violin, Piano };

console.log(Instrument.Violin);

var myinst: Instrument = Instrument.Trumet;

function addOne(val):number { 
    return val + 1;
}

addOne(1);

class Jake { 
    name:string
}

var myfriend: Jake = new Jake;
