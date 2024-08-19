
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "+263713954160";
global.sudo = process.env.SUDO || "+263713954160";
global.owner = process.env.OWNER_NUMBER || "+263713954160";
global.style = process.env.STYLE || "4";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUhVU1EwYktLQVpBNEVZeWdxdmY1RkhuUFdZVkNTeXNVWlVjREFzUmtIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjRSazE0M3paR0Y1TkIxYmlCNjJqYlRwcnB4WEhneDNFR1JUTmtldzh5cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSHJUK081a1M0UjQ3SUUySFRIQkIwWG1Lc0VKOVEyVmFKakpCSHJjbTMwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWaXI0RW5Dc3dtdjY0Yzl5N0hpeU1wTGFVMWp4WlBNTkM5N2dTZ1JxeXlvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNOZ0RYT2tyRWJJTWt1U2hjSU90dWRxUE9oaWJXd3ZLSmNnZ0d5d29ZVmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhidkNHUHU2UTM3UFZGaEQ3UEhCNVFZSGsyN085dEUwNHZxNjNMUFBLVTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05RVEY3UUR0dW9ib1NpdXVJZDlwaXFORjBvQzh5Z3psbnpESFRaeHVrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVlJcmFWS2tEaE5lVWtJWlJTZG42TTE5MjdMRExyOWx6RjJHdHY3aTNXQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFCQktCTk5wVFFEZ1pUTGhJTUxPREQ0ck5DY0tJdVZPRldTTWcwQUpPWU1wa21xeEE3MDVMdURVR0xwc2Z4Q2dPME03MFpWMGdyVGJkd3UrTlJxL2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMsImFkdlNlY3JldEtleSI6IlgydmtMN3NlOVQzOWM4U3FTNDhndG5TcXl4ZUM3Sy8wZDlhMXFQbHNWMTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzEzOTU0MTYwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjIzMDgzREI3QjE4QTg3NzBERjA5NEIzOEZEN0Y0OThEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjM5MzgwODB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxMzk1NDE2MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4MTQxODJCOUYyMUY5MDY1QTQxRDZBN0U3NkNDNUY1RSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzOTM4MDg0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtb2ZDTEp3TlJjMnd4MG9rVkE1bkNRIiwicGhvbmVJZCI6IjQzMDM3NjcyLWViYWItNDYwZi04ODM3LWExMWYzZGQwNDllNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtOG1oRy9ZTU5pWVUzbUxtNngwTks3ZUt2Zjg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUpRYU5obEdGZTg2NzBpYk44ZWhmYnl3ZlZzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkwzUzVDSEhGIiwibWUiOnsiaWQiOiIyNjM3MTM5NTQxNjA6MjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4bS54bS/4a2EIMqCyafJm8aWxpbEhcmnIOG0j9KT4bSE4oKE4oKB4oKDIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQMk4xZWNFRUpIcWhMWUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOWW1wRXl1WnJxenZYREsrdDNxMllLeTVOZXoxcXVwMlZtVEdEU1o3QlRBPSIsImFjY291bnRTaWduYXR1cmUiOiJYbDRtSUhYZnVEM2lEMndBVEZ1dGMyL3RwUTdNeEdXNUIzdTljcDhtM0tPZndRWFpZRXpndm5oYUdqQ3ZVc1grZHJTUjdGOEpNaFdWVFRPOFhQTDBBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiS1oxMWRLblNuTTdHeVlFQVdDVDNGTWZCcnRwR0NEVjZXdDlVbm9ZbVJ2eDJHZXV0ZFJuSkcyYmFUbVlmTnBKM051RFpCMFA4VmRUdnB6TTNJTkw3aVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTM5NTQxNjA6MjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFdKcVJNcm1hNnM3MXd5dnJkNnRtQ3N1VFhzOWFycWRsWmt4ZzBtZXdVdyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzkzODA3OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBYVYifQ==" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By ᴹᴿ᭄ ʂɧɛƖƖąɧ ᴏғᴄ₄₁₃*",
  author: process.env.PACK_AUTHER || "ᴹᴿ᭄ ʂɧɛƖƖąɧ ᴏғᴄ₄₁₃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "SH3LLAH_AI",
  ownername: process.env.OWNER_NAME || "ᴹᴿ᭄ ʂɧɛƖƖąɧ ᴏғᴄ₄₁₃",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "MUSAZVITYE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
