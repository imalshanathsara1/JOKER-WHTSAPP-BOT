
const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['94718628230'] //ur owner number
global.ownername = "ðððððð¤¡ ððððððð ððð" //ur owner name
global.ytname = "YT: imalsha officel" //ur yt chanel name
global.socialm = "GitHub: imalsha nethsara" //ur github or insta name
global.location = "srilanka, kurunagala, nikawaratiya" //ur location

//bot bomdy 
global.ownernomer = "94718628230" //ur number à¶à·à¶¸à¶­à· à·à·à¶¯à·à¶ºà¶§ à·à·à¶±à·à· à¶à¶»à¶±à·à¶±ð¤¡
global.premium = ['94718628230'] //ur premium number à¶à·à¶¸à¶­à· à·à·à¶¯à·à¶ºà¶§ à·à·à¶±à·à· à¶à¶»à¶±à·à¶±ð¤¡ 
global.botname = 'ðððððð¤¡ ððððððð ððð' // don't change bot name à¶¸à·à¶­à¶± à·à·à¶±à·à· à¶à¶»à¶±à·à¶± à¶à¶´à· à¶¶à·à¶§à· à·à·à¶© à¶±à·à¶­à· à·à·à¶±à·à¶± à¶´à·à¶½à·à·à¶±à·ð¤¡
global.linkz = "https://chat.whatsapp.com/BqiGubpIWswI3hHs9eo1ik" //your theme url which will be displayed on whatsapp
global.websitex = "https://www.youtube.com/channel/UC24OsdsddTp72b62USP0QWg" //ur website to be displayed
global.botscript = 'https://github.com/imalshanathsara1/JOKER-WHTSAPP-BOT' //script link
global.themeemoji = "ð¤¡" //ur theme emoji
global.packname = "ð¤¡Sticker By ðððððð¤¡ ððððððð ððð" //ur sticker watermark packname à¶à·à¶¸à¶­à·à¶±à¶¸à· à·à·à¶±à·à· à¶à¶»à¶±à·à¶±
global.author = "joker Bot\n\n\nA whatsapp bot developed by\Imalsha nethsara\n\n\n\n\n\n\n\n       --------______-------\n\n\n\n\n\n\n\nContact No. : +94718628230" //ur sticker watermark author
global.wm = "https://github.com/imalshanathsara1/JOKER-WHTSAPP-BOT." //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'ððð«ð ð²ð¨ð® ð ð¨ð¤¡!',
    admin: 'ðð¡ð¢ð¬ ðððð­ð®ð«ð ðð¨ð®ð¥ð ðð ð®ð¬ðð ðð² ððð¦ð¢ð§ð¬ ð¨ð§ð¥ð²ð¤¡!',
    botAdmin: 'ðð¨ð­ ðð®ð¬ð­ ðð ððð¦ð¢ð§ ðð¢ð«ð¬ð­ð¤¡!',
    premime: 'ðð«ðð¦ð¢ð®ð¦ ðð©ððð¢ðð¥ ðððð­ð®ð«ðð¬ ðð ðð¨ð® ððð§ð­ ð­ð¨ ððð ð¢ð¬ð­ðð« ðð²ð©ð ððð§ð­ð¤¡',
    owner: 'ðð¡ð¢ð¬ ðððð­ð®ð«ð ðð¨ð®ð¥ð ðð ð®ð¬ðð ðð² ð¨ð°ð§ðð« ð¨ð§ð¥ð²ð¤¡',
    group: 'ðððð­ð®ð«ðð¬ ðð¬ðð ðð§ð¥ð² ðð¨ð« ðð«ð¨ð®ð©ð¬ð¤¡!',
    private: 'ðððð­ð®ð«ðð¬ ðð¬ðð ðð§ð¥ð² ðð¨ð« ðð«ð¢ð¯ðð­ð ðð¡ðð­ð¤¡!',
    bot: 'ðð¡ð¢ð¬ ðððð­ð®ð«ð ðð¨ð®ð¥ð ðð ð®ð¬ðð ðð² ðð¨ð­ ð¨ð§ð¥ð²ð¤¡',
    wait: 'ð£ð¨ð¤ðð« ðð§ ð©ð«ð¨ððð¬ð¬...ð¤¡',
    linkm: 'ðð¡ðð«ð ð¢ð¬ ð­ð¡ð ð¥ð¢ð§ð¤ð¤¡?',
    endLimit: 'ðð¨ð®ð« ððð¢ð¥ð² ðð¢ð¦ð¢ð­ ððð¬ ðð±ð©ð¢ð«ðð, ðð¡ð ðð¢ð¦ð¢ð­ ðð¢ð¥ð¥ ðð ððð¬ðð­ ðð¯ðð«ð² ðð ðð¨ð®ð«ð¤¡ð¬',
    nsfw: 'ðð¡ð ð§ð¬ðð° ðððð­ð®ð«ð ð¡ðð¬ ð§ð¨ð­ ðððð§ ððð­ð¢ð¯ðð­ðð, ð©ð¥ððð¬ð ðð¨ð§ð­ððð­ ð­ð¡ð ððð¦ð¢ð§ ð­ð¨ ððð­ð¢ð¯ðð­ðð¤¡',
}

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: 'ð',
level: 'ðï¸',
limit: 'ð',
health: 'â¤ï¸',
exp: 'ð«',
money: 'ðµ',
potion: 'ð¥¤',
diamond: 'ð',
common: 'ð¦',
uncommon: 'ð',
mythic: 'ð³ï¸',
legendary: 'ðï¸',
pet: 'ð',
trash: 'ð',
armor: 'ð',
sword: 'âï¸',
wood: 'ðªµ',
batu: 'ðª¨',
string: 'ð¸ï¸',
horse: 'ð',
cat: 'ð',
dog: 'ð',
fox: 'ð¦',
petFood: 'ð',
iron: 'âï¸',
gold: 'ð',
emerald: 'ð',
budak: 'ð',
busur: 'ð¹',
panah: 'ð',
kapak: 'ðª'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
