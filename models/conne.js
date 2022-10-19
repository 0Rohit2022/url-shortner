const mongoose = require('mongoose');
const shortId = require('shortid')
const schema = mongoose.Schema;

const Shorturlschema = new schema ({
    full: {
        type: String,
        required: true
      },
      short: {
        type: String,
        required: true,
        default: shortId.generate
      },
      clicks: {
        type: Number,
        required: true,
        default: 0
      }
})

module.exports = mongoose.model('urlshort', Shorturlschema);