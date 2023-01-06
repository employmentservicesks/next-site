const TelegramBot = require("node-telegram-bot-api");
const cron = require("node-cron");

const token = "5924623836:AAHq7hWkwoHsZn1EzLcp034CtqVEv-1TOpo";
const bot = new TelegramBot(token, { polling: true });

const chatName = "-1001623450891";

bot.sendMessage(chatName, "проверка работы бота");

cron.schedule("1 18 * * *", () => {
  bot
    .setChatPermissions(chatName, { can_send_messages: false })
    .then(() =>
      bot.sendMessage(chatName, "Отправка сообщений в чат запрещена до 09:00")
    )
    .catch((e) => console.log(e));
});

cron.schedule("59 8 * * *", () => {
  bot
    .setChatPermissions(chatName, { can_send_messages: false })
    .then(() =>
      bot.sendMessage(chatName, "Отправка сообщений в чат разрешена до 09:00")
    )
    .catch((e) => console.log(e));
});
