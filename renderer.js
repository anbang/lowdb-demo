// // import { remote, app } from 'electron'
// // import low from 'lowdb'
// // import FileSync from 'lowdb/adapters/FileSync'

const {remote, app} = require('electron')
const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')



const APP = process.type === 'renderer' ? remote.app : app
const STORE_PATH = APP.getPath('userData');

console.log("STORE_PATH",STORE_PATH);

const adapter = new FileSync(path.join(STORE_PATH, '/ccc_data.json'))
const db = low(adapter)
// // ---------------------------- test
let test = {
    "ccc_accounts": [],
    "accounts_keystore": [],
    "send_list": {},
    "ccc_contacts": {
        "contact_ary": []
    },
    "ccc_setting": {
        "lang": "zh-CN",
        "lang_conf": {
            "zh-CN": "中文(简体)",
            "zh-TW": "中文(繁體)",
            "en": "English",
            "ja": "日本語-DEMO",
            "ko": "한국어"
        },
        "demo_data_path": ""
    }
}
db.defaults(test).write()

const defultDir = db.get('ccc_setting.demo_data_path').value()
console.log("defultDir",defultDir);

let dir = "E:\demo-wallet\data";
db.set('ccc_setting.demo_data_path', dir).write()

//   // ---------------------------- test