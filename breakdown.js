const drinks = require('./drinks.json')
const logger = require('./logger')

const arr = drinks.data

const cat = {}
arr.forEach(drink => {
  if (!cat[drink.ingredient]) {
    cat[drink.ingredient] = 1
  } else {
    cat[drink.ingredient]++
  }
})
// logger.log(cat)
var sortable = []
for (var vehicle in cat) {
  sortable.push([vehicle, cat[vehicle]])
}
// logger.log(sortable)
console.log(
  sortable.sort(function (a, b) {
    return a[1] - b[1]
  })

)
