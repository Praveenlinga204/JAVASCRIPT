class bankAccount{
    #Balance
    constructor(initalBalance){
        this.#Balance=initalBalance
    }
    Depositeamount(amount){
        if(amount>0){
            this.#Balance+=amount;
            console.log(`Deposite ${amount}. New Balance ${this.#Balance}`)
        }else{
            console.log('Invalide Deposite amount')
        }
    }
    Withdrawamount(amount){ 
        if(amount>0 && amount <=this.#Balance){
            this.#Balance-=amount;
            console.log(`withdraw ${amount}. New Balance ${this.#Balance}`)
        }else{
            console.log(`Invalid amount or Insufficient amount.`)
        }
    }
    getBalance(){
        return this.#Balance;
    }
}

let arun = new bankAccount(1000);
console.log(arun);
arun.Depositeamount(500);
arun.Withdrawamount(500);
console.log(arun.getBalance() );