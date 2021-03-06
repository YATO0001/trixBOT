//principais
const Discord = require('discord.js')
const fs = require('fs')
const config = require("../config.json")

//database
const mongoose = require("mongoose")
mongoose.connect(config.mongolink, {
    useNewUrlParser: true
})
const db_config = require("../models/config.js")
const staff_list = require("../models/staff-list.js")
const regras = require("../models/regras.js")
const mute = require("../models/mute.js")
const userinfo = require("../models/userinfo.js")
const warns = require("../models/warns.js")
const loja_tags = require("../models/loja-tags.js")
const eco = require("../models/eco.js")

const color = require('cli-color')

exports.run = (client, message) => {
    const maquinas = require("../models/maquinas.js")
    maquinas.findOne({ guildid: message.guild.id, userid: message.author.id }, async (err, result) => {
        if (!result) {
            const newmaq = new maquinas({
                guildid: message.guild.id,
                userid: message.author.id,

                maquina1_valor: 300e3,
                maquina1_inv: 0,

                maquina2_valor: 1e6,
                maquina2_inv: 0,

                maquina3_valor: 6e6,
                maquina3_inv: 0,

                maquina4_valor: 36e6,
                maquina4_inv: 0,

                maquina5_valor: 252e6,
                maquina5_inv: 0,

                maquina6_valor: 2e9,
                maquina6_inv: 0,

                maquina7_valor: 18e9,
                maquina7_inv: 0,

                maquina8_valor: 180e9,
                maquina8_inv: 0,

                maquina9_valor: 2e12,
                maquina9_inv: 0
            })
            await newmaq.save()
            passo2()
        }
        if (result) {
            passo2()
        }

        function passo2() {
            maquinas.findOne({ guildid: message.guild.id, userid: message.author.id }, async (err, maquina) => {
                const vips = require("../models/vips.js")
                vips.findOne({ userid: message.author.id }, (err, vip) => {
                    eco.findOne({ guildid: message.guild.id, userid: message.author.id }, (err, rcoins) => {

                        const maquina1_gera = 69
                        const maquina1_inv = maquina.maquina1_inv
                        const maquina1_gera_inv = vip ? ((maquina1_gera * vip.mult) * maquina1_inv).toFixed(0) : Math.floor(maquina1_gera * maquina1_inv)
                        const maquina1_gera_und = vip ? (maquina1_gera * vip.mult).toFixed(0) : maquina1_gera

                        const maquina2_gera = 239
                        const maquina2_inv = maquina.maquina2_inv
                        const maquina2_gera_inv = vip ? ((maquina2_gera * vip.mult) * maquina2_inv).toFixed(0) : Math.floor(maquina2_gera * maquina2_inv)
                        const maquina2_gera_und = vip ? (maquina2_gera * vip.mult).toFixed(0) : maquina2_gera

                        const maquina3_gera = 1388
                        const maquina3_inv = maquina.maquina3_inv
                        const maquina3_gera_inv = vip ? ((maquina3_gera * vip.mult) * maquina3_inv).toFixed(0) : Math.floor(maquina3_gera * maquina3_inv)
                        const maquina3_gera_und = vip ? (maquina3_gera * vip.mult).toFixed(0) : maquina3_gera

                        const maquina4_gera = 25000
                        const maquina4_inv = maquina.maquina4_inv
                        const maquina4_gera_inv = vip ? ((maquina4_gera * vip.mult) * maquina4_inv).toFixed(0) : Math.floor(maquina4_gera * maquina4_inv)
                        const maquina4_gera_und = vip ? (maquina4_gera * vip.mult).toFixed(0) : maquina4_gera

                        const maquina5_gera = 175e3
                        const maquina5_inv = maquina.maquina5_inv
                        const maquina5_gera_inv = vip ? ((maquina5_gera * vip.mult) * maquina5_inv).toFixed(0) : Math.floor(maquina5_gera * maquina5_inv)
                        const maquina5_gera_und = vip ? (maquina5_gera * vip.mult).toFixed(0) : maquina5_gera

                        const maquina6_gera = 1388888
                        const maquina6_inv = maquina.maquina6_inv
                        const maquina6_gera_inv = vip ? ((maquina6_gera * vip.mult) * maquina6_inv).toFixed(0) : Math.floor(maquina6_gera * maquina6_inv)
                        const maquina6_gera_und = vip ? (maquina6_gera * vip.mult).toFixed(0) : maquina6_gera

                        const maquina7_gera = 12.5e6
                        const maquina7_inv = maquina.maquina7_inv
                        const maquina7_gera_inv = vip ? ((maquina7_gera * vip.mult) * maquina7_inv).toFixed(0) : Math.floor(maquina7_gera * maquina7_inv)
                        const maquina7_gera_und = vip ? (maquina7_gera * vip.mult).toFixed(0) : maquina7_gera

                        const maquina8_gera = 125e6
                        const maquina8_inv = maquina.maquina8_inv
                        const maquina8_gera_inv = vip ? ((maquina8_gera * vip.mult) * maquina8_inv).toFixed(0) : Math.floor(maquina8_gera * maquina8_inv)
                        const maquina8_gera_und = vip ? (maquina8_gera * vip.mult).toFixed(0) : maquina8_gera

                        const maquina9_gera = 1388888888
                        const maquina9_inv = maquina.maquina9_inv
                        const maquina9_gera_inv = vip ? ((maquina9_gera * vip.mult) * maquina9_inv).toFixed(0) : Math.floor(maquina9_gera * maquina9_inv)
                        const maquina9_gera_und = vip ? (maquina9_gera * vip.mult).toFixed(0) : maquina9_gera

                        const totalg1 = Math.floor(maquina1_gera_inv)
                        const totalg2 = Math.floor(maquina2_gera_inv)
                        const totalg3 = Math.floor(maquina3_gera_inv)
                        const totalg4 = Math.floor(maquina4_gera_inv)
                        const totalg5 = Math.floor(maquina5_gera_inv)
                        const totalg6 = Math.floor(maquina6_gera_inv)
                        const totalg7 = Math.floor(maquina7_gera_inv)
                        const totalg8 = Math.floor(maquina8_gera_inv)
                        const totalg9 = Math.floor(maquina9_gera_inv)

                        const embed = new Discord.RichEmbed()
                            .setTitle('Loja de maquinas - ' + message.guild.name)
                            .setColor('#FF8C00')
                            .setDescription(`
                                ***===/Seus Coins/===***
                                Coins: **__${rcoins.coins}__**
                                
                                *Maquinas irão produzir coins sem que você precise mandar mensagens!*

                                ***__Reaja com o emoji da maquina para compra-la!__***`)
                            .addBlankField(false)
                            .setFooter(`Maquinas de ${message.author.tag} | Gera um total de ${totalg1 + totalg2 + totalg3 + totalg4 + totalg5 + totalg6 + totalg7 + totalg8 + totalg9} coins por minuto`)

                            //v1
                            .addField(':one: Maquina V1', `
                                **===/Seu/===**
                                Você tem: ${maquina1_inv} maquinas
                                Gera: ${maquina1_gera_inv} coins/minuto

                                **===/Loja/===**
                                Valor: ${maquina.maquina1_valor} coins
                                Gera: ${maquina1_gera_und} coins/minuto
                                `, true)

                            //v2
                            .addField(':two: Maquina V2', `
                                **===/Seu/===**
                                Você tem: ${maquina2_inv} maquinas
                                Gera: ${maquina2_gera_inv} coins/minuto

                                **===/Loja/===**
                                Valor: ${maquina.maquina2_valor} coins
                                Gera: ${maquina2_gera_und} coins/minuto
                                `, true)

                            .addBlankField(false)

                            //v3
                            .addField(':three: Maquina V3', `
                                **===/Seu/===**
                                Você tem: ${maquina3_inv} maquinas
                                Gera: ${maquina3_gera_inv} coins/minuto

                                **===/Loja/===**
                                Valor: ${maquina.maquina3_valor} coins
                                Gera: ${maquina3_gera_und} coins/minuto
                                `, true)

                        message.channel.send(embed).then(async msg => {

                            await msg.react('1%E2%83%A3')
                            await msg.react('2%E2%83%A3')
                            await msg.react('3%E2%83%A3')

                            const coletor = msg.createReactionCollector(((react, user) => user.id === message.author.id), { 'time': 60000 })

                            coletor.on('collect', col => {
                                col.remove(message.author.id)

                                //maquina v1
                                if (col.emoji.identifier === '1%E2%83%A3') {

                                    eco.findOne({ userid: message.author.id, guildid: message.guild.id }, (err, c_coins) => {

                                        maquinas.findOne({ guildid: message.guild.id, userid: message.author.id }, async (err, c_maq) => {

                                            if (c_coins.coins >= c_maq.maquina1_valor) {
                                                c_coins.coins = Math.floor(c_coins.coins - c_maq.maquina1_valor)
                                                c_maq.maquina1_valor = Math.floor(c_maq.maquina1_valor * 1.3)
                                                c_maq.maquina1_inv = Math.floor(c_maq.maquina1_inv + 1)
                                                await c_coins.save()
                                                await c_maq.save()

                                                const get_update = client.exec.get('embed_maquina_update')
                                                get_update.run(client, message, msg, maquinas)

                                            } else {
                                                const embed_err = new Discord.RichEmbed()
                                                    .setColor('#ff0000')
                                                    .setDescription(`${message.member}**, Você não tem coins suficientes para esta compra!**`)
                                                message.channel.send(embed_err)
                                            }

                                        })

                                    })

                                }


                                //maquina v2
                                if (col.emoji.identifier === '2%E2%83%A3') {

                                    eco.findOne({ userid: message.author.id, guildid: message.guild.id }, (err, c_coins) => {

                                        maquinas.findOne({ guildid: message.guild.id, userid: message.author.id }, async (err, c_maq) => {

                                            if (c_coins.coins >= c_maq.maquina2_valor) {
                                                c_coins.coins = Math.floor(c_coins.coins - c_maq.maquina2_valor)
                                                c_maq.maquina2_valor = Math.floor(c_maq.maquina2_valor * 1.3)
                                                c_maq.maquina2_inv = Math.floor(c_maq.maquina2_inv + 1)
                                                await c_coins.save()
                                                await c_maq.save()

                                                const get_update = client.exec.get('embed_maquina_update')
                                                get_update.run(client, message, msg, maquinas)
                                            } else {
                                                const embed_err = new Discord.RichEmbed()
                                                    .setColor('#ff0000')
                                                    .setDescription(`${message.member}**, Você não tem coins suficientes para esta compra!**`)
                                                message.channel.send(embed_err)
                                            }

                                        })

                                    })

                                }


                                //maquina v3
                                if (col.emoji.identifier === '3%E2%83%A3') {

                                    eco.findOne({ userid: message.author.id, guildid: message.guild.id }, (err, c_coins) => {

                                        maquinas.findOne({ guildid: message.guild.id, userid: message.author.id }, async (err, c_maq) => {

                                            if (c_coins.coins >= c_maq.maquina3_valor) {
                                                c_coins.coins = Math.floor(c_coins.coins - c_maq.maquina3_valor)
                                                c_maq.maquina3_valor = Math.floor(c_maq.maquina3_valor * 1.3)
                                                c_maq.maquina3_inv = Math.floor(c_maq.maquina3_inv + 1)
                                                await c_coins.save()
                                                await c_maq.save()

                                                const get_update = client.exec.get('embed_maquina_update')
                                                get_update.run(client, message, msg, maquinas)
                                            } else {
                                                const embed_err = new Discord.RichEmbed()
                                                    .setColor('#ff0000')
                                                    .setDescription(`${message.member}**, Você não tem coins suficientes para esta compra!**`)
                                                message.channel.send(embed_err)
                                            }

                                        })

                                    })

                                }


                            })
                        })
                    })
                })
            })
        }
    })
}

module.exports.help = {
    name: '/maquinas/'
}