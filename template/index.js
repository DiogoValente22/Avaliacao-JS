class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Bill {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  addItem = item => {
    this.items.push(item);
  }

  removeItem = (nome) => {
    this.items.splice(nome, 1);
    bill.render();
    
    var elementTotal = document.getElementById('total');

    var total = bill.items.reduce(getTotal, 0);
    function getTotal(total, item){
      return total + parseFloat(item.price);
    }
    elementTotal.innerHTML = 'R$ ' + '<span id="precoTotal">' + total + '</span>';

  }

  billTotal = () => {
    
    var elementTotal = document.getElementById('total');

    var total = bill.items.reduce(getTotal, 0);
    function getTotal(total, item){
      return total + parseFloat(item.price);
    }
    elementTotal.innerHTML = 'R$ ' + '<span id="precoTotal">' + total + '</span>';
  }

  render = () => {
    
    let billContainer = document.getElementById('items');
    billContainer.innerHTML = '';

    if(bill.items.length == 0){
      var elements = document.querySelector('#items');
      elements.innerHTML = '<h1 style="margin-left: 100px;">A comanda está vazia</h1>';
    }else{
        this.items.map(item => {
        let posicao = this.items.indexOf(item);
        let row = document.createElement('tr');
        let foodName = document.createElement('td');
        let foodPrice = document.createElement('td');
        foodName.onclick = function(){
          bill.removeItem(posicao);
        }
        foodName.innerHTML = item.name;
        foodPrice.innerHTML = 'R$ ' + item.price;
        row.append(foodName);
        row.append(foodPrice);
        billContainer.append(row);
      })
    }
  }
}


var bill = new Bill();

function init() {

  // inicializa o valor total para 0 reais
  let elementTotal = document.getElementById('total');
  elementTotal.innerHTML = 'R$ 0,00';
  
  // Exibe que a comanda está vazia
  if(bill.items.length == 0){
    var elements = document.querySelector('#items');
    elements.innerHTML = '<h1 style="margin-left: 100px;">A comanda está vazia</h1>';
  }

  document.getElementsByTagName('body')[0].style.display = 'flex';

}

function adicionarItem (){
  
  var itemName = document.querySelector('#name').value;
  var itemPrice = document.querySelector('#price').value;

  if(itemName == '' || itemPrice == '' || itemName == null || itemPrice == null){
    alert("Ops, parece que você não preencheu um campo. Tente novamente.")
  }else{

    // adiciona um novo item
    bill.addItem(new Item(itemName, itemPrice));

    //Soma os precos de itens adicionados
    bill.billTotal();

    //renderiza a comanda
    bill.render(); 

    limparInput();

  }
}

function billtotal2(){
  
  var itemPrice = document.querySelector('#price').value;

  bill.billTotal2(itemPrice);

  bill.render();

}

function limparInput(){
  let inputName = document.querySelector('#name');
  let inputPrice = document.querySelector('#price');

  inputName.value = '';
  inputPrice.value = '';

}

function printBill() {
  window.print();
  bill.items.length = 0;

  let elementTotal = document.getElementById('total');
  elementTotal.innerHTML = 'R$ 0,00';
  limparInput();
  bill.render();
  
}

