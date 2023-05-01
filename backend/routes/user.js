const router = require('express').Router();
let User = require('../modals/user.modal');

router.route('/').get((req, res) => {
  User.find() // find is a mongoose method whicch gets the list of all; the users in the Atlas database
  // find returns a promise, so the results are in json format
  
    .then(users => res.json(users)) // res.json means returning in jsopn format. -> users in json
    .catch(err => res.status(400).json('Error: ' + err));
});

// a post request
router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;