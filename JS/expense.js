//EXPENSE TRACKER
//list1=[[name:praveen,budget:500,car:800,juice:90]]..............list1[0].

let expense=[
    {
     category:"car",
     amount:700
    },

    {
        category:"food",
        amount:900
    },

    {
        category:"trip",
        amount:800
    }

]



let object1={
    name:"praveen",
    budget:10000,
    totalexpense:0,
    expense:expense
}



function addexpense(cat, amt)
{
    object1.expense.push(
        {
            category:cat,
            amount:amt
        }
    )
}


function display()
{

    for(let i=0;i<object1.expense.length;i++)
    {
        console.log(object1.expense[i].category + ":" + object1.expense[i].amount)
    }
}

function calculatetotal()
{
   let total=0
   for(let i=0;i<object1.expense.length;i++)
   {
    total+=object1.expense[i].amount
   }
   object1.totalexpense=total
}

function checkbudget()
{
    if(object1.totalexpense>object1.budget)
    {
        console.log("Budget exceeded")
    }
    else{
        console.log("Within Budget")
    }
}






