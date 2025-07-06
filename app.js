
let store = [];
let customer = [];
let locCustomer = [{

    customerId : "c001",
    customerName : "pasindu",
    customerAddress : "allepola"

}];


function addCustomerFun(){

    alert("butten workd");

    

    locCustomer = JSON.parse(localStorage.getItem("CusList"))  ;
    console.log(locCustomer);
    


    let CustomerId = document.getElementById("Cid").value
    let CustomerName = document.getElementById("Cname").value
    let CustomerAddress = document.getElementById("Caddress").value

    for (element of locCustomer) {
        console.log(element.customerId);
        console.log(element.customerId == CustomerId);
        
        

        if (element.customerId == CustomerId) {
            alert("you are already registerd customer you can place order");
        }else{
              
            // locCustomer = JSON.parse(localStorage.getItem("cusList")) || [] ;

            customer = [{

                customerId : CustomerId,
                customerName : CustomerName,
                customerAddress : CustomerAddress

            }];

            locCustomer.push(customer);

            let strAllCus = JSON.stringify(locCustomer);
            localStorage.setItem("CusList",strAllCus);
            break;

        }
        break;
    }




}


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

function selectFun(){

    selectItem = document.getElementById("SelectCode").value;

    alert("press");

   console.log(store);
   
    
    for (const element of store) {

    console.log(element.itemCode == selectItem);
    
    
    if(element.itemCode == selectItem){
        


    }
    
    

}


    

}



















