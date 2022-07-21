const graph = document.querySelector('.graph');
let max = 200;
let  highestAmount= -1;

const   resData = async(url) => {
try{
    let res = await fetch(url)
    let data = await res.json() 
    creategraphElements(data.length,data)
  
}catch (error){
    console.log(error)
}
   
}
resData('/data.json')
  function creategraphElements(n,data){
    
    for (let i = 0; i < n; i++) {
        let amount = data[i].amount
        
        let heigthElem = amount * 2;
        let newElemGraph = document.createElement('div')
        newElemGraph.setAttribute("day", data[i].day)
        newElemGraph.setAttribute("amount", `$${data[i].amount}`)
        newElemGraph.classList.add('elm_graph')
        newElemGraph.style.height = `${heigthElem}px` 
        graph.appendChild(newElemGraph);
        
    }
    maxAmount()
        
}



function maxAmount(){
    let attrAmountGraph = document.querySelectorAll('.elm_graph')

    for (let x = 0; x < attrAmountGraph.length; x++) {
      let amountAttr = attrAmountGraph[x].getAttribute('amount').slice(1, -1);
      if(amountAttr > highestAmount) highestAmount = amountAttr
      
    }

    for (let i = 0; i < attrAmountGraph.length; i++) {
      let amountAttr = attrAmountGraph[i].getAttribute('amount').slice(1, -1);
        if(amountAttr ==  highestAmount ){
            attrAmountGraph[i].style.background = 'hsl(186, 34%, 60%)'
          }
    }
    
}
