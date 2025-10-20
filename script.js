const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')

// -> função para formatar valor de reais no preço.
function formatCurrency(value) {
  const newValue = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
  return newValue
}

// -> função forEach
function showAll(productsArray) {
  myLi = ``
  productsArray.forEach(product => {
    myLi += `
        <li>
            <img  src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price"> ${formatCurrency(product.price)}</p>
        </li> 
     `
  });
  list.innerHTML = myLi
}
// -> função map
function mapAllItens() {
  const newPrices = menuOptions.map((product) => ({
    ...product,// <-Spread Operator, essa ferramenta (...) mantêm o array original e altera o restante. 
    price: product.price * 0.9,// dar 10% de desconto

  }))

  showAll(newPrices)
}
// -> função reduce
function sumAllItems() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

  list.innerHTML = `
        <li>
           
            
            <p>O valor total dos itens é de: ${formatCurrency(totalValue)}</p>
        </li> 
     `

  console.log(totalValue)
}

function filterAllItems() {
  const filterJustVegan = menuOptions.filter((product) => product.vegan === true)
  showAll(filterJustVegan)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)




