class Bank{
    users =[
        {accountno:5566331,balance:10000,Accountname:"Rahul",Password:"1234"},
        {accountno:5566332,balance:12000,Accountname:"Raghu",Password:"1234"},
        {accountno:5566333,balance:15000,Accountname:"Rana",Password:"1234"}
        
    ]; 
    getBalanceWtihoutErrorHandling(accountno){
        const result = this.users.find((x)=>x.accountno === accountno);

        console.log(`Balance: ${result.balance}, Account Holder: ${result.Accountname}`)
    }
    getBalance(accountno,Password){ 
        try{ const result = this.users.find((x)=> x.accountno ===accountno)
             if (result){
                const isVallidPassword = result.Password === Password;
                if(isVallidPassword){
                    console.log(`Balance:${result.balance} , Account HolderName: ${result.Accountname}`)
                    return `Balance:${result.balance} , Account HolderName: ${result.Accountname}`;
                } 
                else{
                    throw ` Wrong Password`;
                }
             }else{
                throw `Invalid Account NO ${accountno}`
             }
        }
        catch(error){
            console.log(error);

        }finally{ 
            console.log(`Process is completed`)
        }
    }
}
let stateBank = new Bank();
stateBank.getBalanceWtihoutErrorHandling(5566331);
stateBank.getBalance(5566331 , '1234')

let formData = document.getElementById('formData');
let display = document.getElementById('displayMessage');

formData.addEventListener('submit',
    function (event){ event.preventDefault()

});