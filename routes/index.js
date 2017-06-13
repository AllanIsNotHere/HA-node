var express = require ('express');
var router = express.Router();

/*GET home page*/
router.get('/', function(req, res, next){
  const context = {
    title: 'profile',
    name:'Allan',
    age: '13',
    position: 'Meme God ( ͡° ͜ʖ ͡°)',
    hobbies: ['Memes', 'Making Memes', 'Programming','( ͡° ͜ʖ ͡°)']

  }
res.render('profile', context);

});


module.exports = router;
