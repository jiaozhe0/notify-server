/*
 * @Author: JiaoZhe
 * @Date: 2022-03-12 14:23:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-13 19:02:11
 * @FilePath: /notify-server/src/index.ts
 * @Description: 这个文件做了什么
 */
import dotenv from 'dotenv'
import LoveMsg from './libs/LoveMsg'
import schedule from 'node-schedule'
console.log('schedule', schedule)
dotenv.config()

function init() {
  schedule.scheduleJob('30 10 * * * *', () => {
    LoveMsg()
  })
}
init()
// 早安、午安、晚安 => 由环境变量控制
// LoveMsg()
