
let count = 0;
let isTrue = false;

let purchase = [];
let store = [];
let customer = [];
let locCustomer = [{

    customerId : "c001",
    customerName : "pasindu",
    customerAddress : "allepola"

}];


function addCustomerFun(){

    alert("butten workd");

    //localStorage.clear("BcustomerList");
    

    locCustomer = JSON.parse(localStorage.getItem("BcustomerList")) || [] ;



    let cId = document.getElementById("Cid").value;
    let cName = document.getElementById("Cname").value;
    let cAddress = document.getElementById("Caddress").value;

    console.log(cId);
    
    customer = 
        {
            customerId : cId,
            customerName : cName,
            customerAddress : cAddress
        };
    
    

    console.log(customer.length);

    for (let element of locCustomer) {
        
        if (element.customerId == cId) {
            
            isTrue = true;
            alert("You are already registeres you can place order");
        }
    }

    if (isTrue != true) {

        locCustomer.push(customer);
        localStorage.setItem("BcustomerList",JSON.stringify(locCustomer)); //store customers in local 
        alert("customer registered successfully");   
    }

    

    

    

    console.log(locCustomer);
    
    
    
};


let selectItem ;


store = [

    {
        itemCode : "B1001",
        itemName : "Classic Burger (Large)",
        price :  750.00,
        discount : "",
    },
    {
        itemCode : "B1002",
        itemName : "Classic Burger (Regular)",
        price :  1500.00,
        discount : 15,
    },
    {
        itemCode : "B1003",
        itemName : "Turkey Burger",
        price :  1600.00,
        discount : "",
    },
    {
        itemCode : "B1004",
        itemName : "Chicken Burger (Large)",
        price :  1400.00,
        discount : ""
    },
     {
        itemCode : "B1005",
        itemName : "Chicken Burger (Regular)",
        price :  800.00,
        discount : 20
    },
     {
        itemCode : "B1006",
        itemName : "Cheese Burger (Large)",
        price :  1000.00,
        discount : ""
    },
     {
        itemCode : "B1007",
        itemName : "Cheese Burger (Regular)",
        price :  600.00,
        discount : ""
    },
     {
        itemCode : "B1008",
        itemName : "Bacon Burger",
        price :  650.00,
        discount : 15
    },
     {
        itemCode : "B1009",
        itemName : "Shawarma Burger",
        price :  800.00,
        discount : ""
    },
     {
        itemCode : "B1010",
        itemName : "Olive Burger",
        price :  1800.00,
        discount : ""
    },


];


let strburgerList = JSON.stringify(store);
localStorage.setItem("BurgerList",strburgerList);



for (data of store) {
    
    //console.log(data.itemCode);

    document.getElementById("displayTable").innerHTML +=`


     <tr>
        <th>${data.itemCode}</th>
        <th>${data.itemName}</th>
        <th>${data.price}</th>
        <th>${data.discount}</th>
    </tr>


`
    
}

// function selectFun(){

//     selectItem = document.getElementById("SelectCode").value;

//     alert("press");

//    console.log(store);
   
    
//     for (const element of store) {

//     console.log(element.itemCode == selectItem);
    
    
//     if(element.itemCode == selectItem){
        


//     }
    
    

// }


function cartFun() {

    let isthere = false;

    let selectCode = document.getElementById("select").value;

    document.getElementById("select").addEventListener("click",function count(){
       
    });

    for (element of store) {
        
        if (selectCode == element.itemCode) {
            isthere = true;
        }
    }

    if (isthere == true) {

        purchase = JSON.parse(localStorage.getItem("orderId"));
        //count++;

        // document.getElementById("cartDisplay").innerHTML = count;
        // console.log(count);
        purchase.push(selectCode);

        console.log(purchase);

        
        
        localStorage.setItem("orderId",JSON.stringify(purchase));

        alert("item add successfully to cart");
        

        
    }else{
        alert("chect the item code and re-enter");
    }

    
   

    console.log(selectCode);
     console.log(count);
    
    
    


}

function viewCart() {

    let index =[];
    let orderId = JSON.parse(localStorage.getItem("orderId"));

    console.log(store.length);
    
    for(let j=0 ; j < orderId.length; j++){
        
        for(let i=0 ; i < store.length; i++){

            if (orderId[j] == store[i].itemCode ){
                
                index.push(i);
            }
        }
    }
    
    

        // console.log(orderId[i]);
        
        // console.log(store[index[i]].itemName);
        
    console.log(index);
    
    
        
    
    for(let i=0 ; i < index.length; i++){
        document.getElementById("cart").innerHTML += `
            
            <div>
            <table border="1">
                <tr>
                    <td>${orderId[i]}</td>
                    <td>${store[index[i]].itemName}</td>
                </tr>
            </table>


            </div>
        
        `
  
    }
    

}

function removeItems() {
    
    let removeId = document.getElementById("remove").value;
    console.log(removeId);
    

    let objid = JSON.parse(localStorage.getItem("orderId"));

    let indexR = objid.indexOf(removeId);

    if (indexR != -1) {
        objid.splice(indexR,1);
    }

    localStorage.setItem("orderId",JSON.stringify(objid));
    alert("Item remove successfully");
    location.reload();

   
    

}

function purchaseFun(){

    alert("button");
    let index =[];

    purCusId = JSON.parse(localStorage.getItem("orderId"));

    for(let j=0 ; j < purCusId.length; j++){
        
        for(let i=0 ; i < store.length; i++){

            if (purCusId[j] == store[i].itemCode ){
                
                index.push(i);
            }
        }
    }  

    let total = 0;
    let discountCal = 0;

    for(let i=0 ; i < index.length; i++){

       // console.log(store[index[i]].price);
        //console.log(store[index[i]].discount);
        
        if (store[index[i]].discount != "") {
           //discount = store[index[i]].discount;
            total = total + store[index[i]].price;

            discountCal = store[index[i]].price*(store[index[i]].discount/100);

            console.log(total);
            console.log(discountCal);
            
        }else{

            total = total + store[index[i]].price;

        }

    }

    alert("Total Price : "+total + "\nTotal Discount : "+discountCal +"\nBalance : "+(total - discountCal)
    );


    console.log(index);
    


}


    





















