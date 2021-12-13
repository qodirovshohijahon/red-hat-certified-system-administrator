const TelegramBot = require('node-telegram-bot-api')
const axios = require('axios')
const parser = require('./parser.js')


require('dotenv').config()

const token = process.env.TELEGRAM_TOKEN

let bot;

if (process.env.NODE_ENV === 'production') {
    bot = new TelegramBot(token);
    bot.setWebhook(process.env.HEROKU_URL + token)
} else {
    bot = new TelegramBot(token, { polling: true })
}