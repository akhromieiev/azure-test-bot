const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start(ctx => ctx.reply('Hello'));
bot.on('message', ctx => ctx.telegram.sendCopy(ctx.chat.id, ctx.message));
bot.launch();
