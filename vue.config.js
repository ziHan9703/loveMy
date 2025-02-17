/*
 * @Author: your name
 * @Date: 2025-02-17 17:07:26
 * @LastEditors: your name
 * @LastEditTime: 2025-02-17 20:17:57
 * @Description: 
 * @FilePath: /love-demo/vue.config.js
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/ziHan9703.github.io/' : '/'
})
