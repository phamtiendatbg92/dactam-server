// mongoo db
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/dactamdb', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected !!!!!!");
});



////////////////// AccountModel ///////////////////
const accountSchema = new Schema({
    name: String,
    passWord: String,
});

const AccountModel = mongoose.model('account', accountSchema);

////////////////// News Model ///////////////////
const newsSchema = new Schema({
    str: String, // save image url here
});

const NewsModel = mongoose.model('News', newsSchema);


////////////////// Product model///////////////////
const productSchema = new Schema({
    name: String,
    passWord: String,
});

const ProductModel = mongoose.model('Product', productSchema);


module.exports = {AccountModel , NewsModel, ProductModel};