const mongoose = require('mongoose')

const schema = mongoose.Schema({
    guildid: String,
    userid: String,
    tempo: String
})

module.exports = mongoose.model('time_hacks',schema)