
const excelToJson = require('convert-excel-to-json')
// require('./db')
const ninjadb = require('ninjadb')
const drinks = ninjadb.create('drinks.json')

async function populate () {
  const result = await excelToJson({
    sourceFile: './tiki.xlsx'
  })

  // console.log(result)

  result.Sheet1.forEach(e => {
    drinks.push({
      name: e.A,
      ingredient: e.B,
      category: e.D.split('(')[0].trim(),
      type: e.D.split('(')[1] ? '(' + e.D.split('(')[1] : '(' + e.D.split('(')[0].trim() + ')',
      page: e.E
    })
  })
}
populate().catch(err => console.error(err))
