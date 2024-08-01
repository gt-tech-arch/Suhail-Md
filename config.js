const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+256762612066";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_45_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcyLFxuICAgICAgICA1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDg0LFxuICAgICAgICAzNixcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDg0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTksXG4gICAgICAgIDUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDczLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNixcbiAgICAgICAgMTk3LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWUNlbEkwTXhsTG9IRjNTdURQeVNoOHB2cnVWaEtNbHZFakxXMUNGRmFiRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMXZrUVRrMjZRN1NkMVNvdlRXcDczZ1wiLFxuICBcInBob25lSWRcIjogXCJhNjFkNDE0YS01MWNhLTQ0NWYtYjY0MC05MWM2MjBiOGNiYmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY1LFxuICAgICAgMjM1LFxuICAgICAgMjEyLFxuICAgICAgMTIxLFxuICAgICAgMjE2LFxuICAgICAgMzMsXG4gICAgICA1MCxcbiAgICAgIDE4MCxcbiAgICAgIDIwMCxcbiAgICAgIDk2LFxuICAgICAgOTEsXG4gICAgICAxOTgsXG4gICAgICAyMzMsXG4gICAgICAxNzksXG4gICAgICAxNjMsXG4gICAgICAxMjEsXG4gICAgICAxNTIsXG4gICAgICAyMjYsXG4gICAgICAxNDIsXG4gICAgICAxNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgMTI2LFxuICAgICAgMjI3LFxuICAgICAgNjAsXG4gICAgICAyMzEsXG4gICAgICAwLFxuICAgICAgODUsXG4gICAgICAyNDcsXG4gICAgICAxNDQsXG4gICAgICAxNzksXG4gICAgICAyNDcsXG4gICAgICA4MixcbiAgICAgIDE3MCxcbiAgICAgIDIyOSxcbiAgICAgIDE0OSxcbiAgICAgIDIzOCxcbiAgICAgIDIyNSxcbiAgICAgIDExLFxuICAgICAgMTQsXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1pRNVdCUDlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc2MjYxMjA2NjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQG5vX3N0eWxpc2hcIixcbiAgICBcImxpZFwiOiBcIjIzOTI0NzI0NDE4MTU2OTozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0thaCtLQUdFSWk4c0xVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia0RDZUJFejRqY2tPZ04zNFB1V29GNC9zYnMrcjNQNHJYMExMY1N3bG5UQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVZ3I3Nm1sajJ4NUszV2tIMGl6Ym40TVZmOFJTeUlhV2NsMnFnTGtqNGpzVWFwVDFjZXgvc3J0RUYxWjJaWm02ZkxRdzVNeTEwUys0bVpsQ2lSZStBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFdE1YWDVucjJlaVZVYTZpZGppTWpwSGRoM3YxMUphQjZNOWw5bkpRMitSVEFJczlycnlwbmh3ZmdiZlhrbEJxaEhHWjRzc1Y3Njg5T1FNNDk5UHJEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NjI2MTIwNjY6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTU1OTE2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT1doXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPV2guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoVVJpN1RRT1h2V29XZ1FKMi9ERi9NNFF2UnBWcW5tczh3SGxoMTBNeldFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2Nzk2OTE5NDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
