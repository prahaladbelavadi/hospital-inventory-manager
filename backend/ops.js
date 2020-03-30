const Center = require('./models/center');
const User = require('./models/user');

exports.createUser = async ({ body: { role, email } }, res) => {
  try {
    const user = await User.find({ email });
    if (user.length > 0) {
      res.json({ status: 'User already exists. Kindly Login' });
    } else {
      User.create({ email, role }).then(user => {
        res.status(201).send(user);
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.login = async ({ body: { email, password } }, res) => {
  try {
    const user = await User.find({ email });
    if (password === undefined){
      res.json({status: 'Enter Password Please'})
    }
    else if (user.length === 0) {
      res.json({ status: 'User Does not Exist' });
    }
    else if (user[0].password === undefined) {
      User.findOneAndUpdate({ email, $set: { password } }).then(user=>{
        res.json({ status: 'Password Set', email });
      });
    }
    else if (user.length > 0 && user[0].password != password) {
      res.json({ status: 'Password incorrect' });
    }
    else if (user.length > 0 && user[0].password == password) {
      res.json({ status: 'Successful Login', email });
    }
  } catch (error) {
    res.status(500).send();
  }
};

exports.fetchAllCenterData = async ({ body: {} }, res) => {
  try {
    Center.find({}).then(centers => {
      res.send(centers);
    });
  } catch (error) {
    res.status(500).send();
  }
};
