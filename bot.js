const TelegramBot = require("node-telegram-bot-api");
const cron = require("node-cron");

const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

const chatName = "-1001623450891";

bot.sendMessage(chatName, "MainControlBot управляет графиком работы чата");

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
    .setChatPermissions(chatName, { can_send_messages: true })
    .then(() =>
      bot.sendMessage(chatName, "Отправка сообщений в чат разрешена до 18:00")
    )
    .catch((e) => console.log(e));
});
