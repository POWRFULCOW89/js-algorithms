const totalCid = cid =>{
    cid = cid.flat().map( i => typeof i === 'number' ? i : 0);
    cid = cid.reduce((acum, value) => acum += value);
    let precision = 100;
    return Math.round(cid * precision) / precision
}

const getCidCash = (price, cash, cid) => {
    const denoms = [    // denomination values in pennies
        1,
        5,
        10,
        25,
        100,
        500,
        1000,
        2000,
        10000
    ];
    let currentChange = cash * 100 - price * 100; // track the change left
  
    return cid.reduceRight((price, cash, index) => {    // traverse through the different denominations taking change into account
        let out = Math.min(currentChange - currentChange % denoms[index], cash[1] * 100);
        currentChange -= out;
        return out ? price.concat([[cash[0], out / 100]]) : price;
    },[]);

}

const checkCashRegister = (price, cash, cid) => {
    let change = cash - price;
    let currentCash = totalCid(cid);
    let obj = {status: "INSUFFICIENT_FUNDS", change: []};

    if (currentCash < change){
    } else if (currentCash == change){
        obj.status = "CLOSED";
        obj.change = getCidCash(price, cash, cid);
    } else if(currentCash > change){
        obj.status = "OPEN";
        obj.change = getCidCash(price, cash, cid);
    }

    if (obj.change.length > 0 && totalCid(obj.change) < change){
        obj.change = [];
        obj.status = "INSUFFICIENT_FUNDS";
    }

    if (obj.status == "CLOSED"){
        let dems = ["PENNY", "NICKEL", "DIME", "QUARTER", "ONE", "FIVE", "TEN", "TWENTY", "ONE HUNDRED"];
        
        for (let i = 0; i < dems.length; i++) {
            const e = obj.change[i];
            if (!e){
                
                obj.change.push([dems[i], 0]);
            }
        }
    }

    return obj;
}

module.exports = checkCashRegister;