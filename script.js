function signup(){

    House_Num = h_num.value;
    Owner_Name = o_name.value;
    No_Members = no_members.value;
    Password = reg_pass.value;
    Re_password = re_pass.value;
    balance = 0;

    if(House_Num=="" || Owner_Name=="" || No_Members=="" || Password=="" || Re_password==""){
        alert("Please fill all fields");
    }
    else{
        family={
            House_Num,
            Owner_Name,
            No_Members,
            Password,
            balance
        }
        
        if(House_Num in localStorage){
            alert("Account Already Exist");
        }
        else if(Password===Re_password){
            
            localStorage.setItem(House_Num,JSON.stringify(family));
            alert("Registered Successfully");
            window.location="index.html";
        }
        else{
            alert("Password didnt match");
            console.log(Password); 
            console.log(Re_password);
        }
    }
    
}

function login(){
    HouseNum = lnum.value; 
    loginPassword = lpwd.value;
    if(HouseNum =="" || loginPassword==""){
        alert("Please Enter House number and Password")
    }
    else if(HouseNum in localStorage){
        family = JSON.parse(localStorage.getItem(HouseNum));
        if(family.Password == loginPassword){
            alert("Login Successfull");
            
            
            localStorage.setItem('OName',family.Owner_Name);
            localStorage.setItem('hnum',family.House_Num);
            localStorage.setItem('nom',family.No_Members);
            localStorage.setItem('pas',family.Password);
            localStorage.setItem('balance',family.balance);
            window.location = 'home.html';
        }
        else{
            alert("Incorrect Passsword");
        }
    }
    else{
        alert(`${HouseNum} is not present`);
    }
}


Owner_Name = localStorage.getItem('OName');
House_Num = localStorage.getItem('hnum');
No_Members = localStorage.getItem('nom');
Password = localStorage.getItem('pas');
balance = localStorage.getItem('balance');
family = JSON.parse(localStorage.getItem(House_Num));
getBal(balance);


function Income(){
    var credit_type= c_type.value;
        var credit_money= parseFloat(c_money.value);
        console.log(credit_type,credit_money);
        if(credit_type=="" || credit_money==""){
            alert("Please Enter Description and Income")
        }
        else{
            balance = localStorage.getItem('balance');
            console.log(`Balance Before : ${balance}`);
            balance=parseFloat(balance)+credit_money;
            localStorage.setItem('balance',balance);
            console.log(balance);
            family={
                House_Num,
                Owner_Name,
                No_Members,
                Password,
                balance
            }
            localStorage.setItem(House_Num,JSON.stringify(family));
            getBal(balance);

            amount.innerHTML = balance

            var table = document.getElementById('incometable');

            
            var row = table.insertRow(2);

            
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);

            
            cell1.innerHTML = credit_type;
            cell2.innerHTML = credit_money;
            cell3.innerHTML = balance;

            
        }
    
}


function expense(){
    var expense_type=ex_type.value;
    var expense_money=parseFloat(ex_money.value);
    if(expense_type=="" || expense_money==""){
        alert("Please Fill the Description and Expense...");
    }
    else{
        balance = localStorage.getItem('balance');
        balance=parseFloat(balance)-expense_money;
        localStorage.setItem('balance',balance);
        family={
            House_Num,
            Owner_Name,
            No_Members,
            Password,
            balance
        }
        localStorage.setItem(House_Num,JSON.stringify(family));
        getBal(balance);
        balan.innerHTML = balance
        var table = document.getElementById('expensetable');

        
        var row = table.insertRow(2);

        
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2)

        
        cell1.innerHTML = expense_type;
        cell2.innerHTML = expense_money;
        cell3.innerHTML = balance;
    }
}



    function getBal(balance){
    
        if(balance>2000){
            bal.innerHTML=`<h3 style=" color :green"> Your Savings : <p style="padding-top:10px">Rs. ${balance}/-</p> </h3>`;
            
        }
        else{
                bal.innerHTML=`<h3 style=" color :red"> Your Savings is : <p style="padding-top:10px">Rs. ${balance}/-</p> </h3>`;
                
            }    
        }

      function logOut(){
        window.location='./index.html'
        localStorage.clear()
      }