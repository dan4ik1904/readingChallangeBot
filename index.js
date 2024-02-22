const Bot = require('node-telegram-bot-api')
const express = require('express')

const app = express()

const token = '6356508064:AAGJlsz8e2eZEDnmwDdjliTNPm6SLLTH4Pc';

const bot = new Bot(token, {polling: true});

const PORT = process.env.PORT || 3000
bot.on('message', (msg) => {
        try {
            const opts = {
                reply_to_message_id: msg.message_id,
                reply_markup: JSON.stringify({
                inline_keyboard: 
                [
                    [{text: 'Добавить книгу 📕', web_app: {url: 'https://docs.google.com/forms/d/e/1FAIpQLSeF4bafe8oV-LPOIPzXC4GHhezjmaFp3j1vlpVzu3kKqymnHQ/viewform'}}],
                    [{text: 'Результаты 📊', web_app: {url: 'https://docs.google.com/spreadsheets/d/19khBMTRnbUs8ua7AKGqT4BjCDBfZNu9JuOb9mUwh8aY/'}}]
                ]
            })
          };
          bot.sendMessage(msg.chat.id, `Добро пожаловать в клуб любителей книг📕❤️\n\nВместе мы хотим прочитать 330 книг в 2023/24 учебном году.`, opts);
          console.log(msg)
        } catch (error) {
            console.log('err')
        }
        
    });
  
 app.listen(PORT, () => {
      console.log('bot sterted on PORT', PORT)
})
  
app.get('/', (req, res) => {
      res.send('OK')
})