/*
 * @Author: JiaoZhe
 * @Date: 2022-03-12 14:23:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-14 08:31:23
 * @FilePath: /notify-server/src/libs/LoveMsg/index.ts
 * @Description: 这个文件做了什么
 */
/**
 * @name loveMsg
 * @description 入口
 */
import dotenv from 'dotenv'

import { goodMorning } from './goodMorning'
import { goodAfternoon } from './goodAfternoon'
import { goodEvening } from './goodEvening'
dotenv.config()

const { MESSAGE_TYPE } = process.env

export default function main() {
  if (MESSAGE_TYPE === 'goodAfternoon') {
    // 午安
    goodAfternoon()
  } else if (MESSAGE_TYPE === 'goodEvening') {
    // 晚安
    goodEvening()
  } else {
    // 早安
    goodMorning()
    // goodAfternoon()
  }
}
