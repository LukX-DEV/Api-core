const chalk = require('chalk')
const moment = require('moment')
const date = moment().format("[[]DD-MM-YYYY ss:mm:HH[]]")

module.exports.log = (content) => {
    console.log(chalk.gray(date), chalk.green.bold("LOG"), content)
}