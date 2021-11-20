// Expense Tracker Project
import {totalBanner ,totalIncome ,totalExpense ,addItemForm,dataTableBody} from './uielements.js'

class Amount {
    constructor(amount , type , category , date , description){
        this.amount = amount
        this.type = type
        this.category = category,
        this.date = new Date(date),
        this.description = description
    }
    getTablerow(){
        let row = document.createElement('tr')
        row.classList.add('text-light' ,'text-xl')
        if(this.type === 'income'){
            row.classList.add('bg-success')
        }else{
            row.classList.add('bg-danger')
        } 

        row.innerHTML = `
            <td scope="row">1</td>
            <td>${this.description}</td>
            <td>${this.category}</td>
            <td>${this.date.toDateString()}</td>
            <td>Nrs ${this.amount}</td>
            <td><button type="button" class="btn btn-outline-light">Delete</button></td>
        `
        return row
    }
}

addItemForm.addEventListener('submit' , function(event){
    event.preventDefault()
    let {amount ,
        amount_type : type ,
        amount_category:category ,
        amount_date:date,
        amount_description : description
        } = addItemForm.elements

    let amountdata = new Amount(amount.value , type.value , category.value, date.value  ,description.value)
    console.log(amountdata.getTablerow())
    dataTableBody.appendChild(amountdata.getTablerow())
})