
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017')
.then(function(){
  console.log('Database Connected')
})
.catch(function(err){
  console.log(e)
})

let UserSchema = mongoose.Schema({
  gamename : String,
  review :String
})

module.exports = mongoose.model('user', UserSchema)
