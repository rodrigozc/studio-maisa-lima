const functions = require('firebase-functions');
const config = require('./config');

var cors = require('cors');

var instagram = require('instagram-node').instagram();

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport(config.mail.smtp);
var mailOptions = config.mail.options;

instagram.use(config.instagram);

var formatText = function(data) {
  return "Nome: " + data.name + "\n" +
         "Email: " + data.email + "\n" +
         "Telefone: " + data.phone + "\n" +
         "Mensagem: " + data.message;
}

var formatHtml = function(data) {
  return "<p><b>Nome: </b>" + data.name + "</p>" +
         "<p><b>Email: </b>" + data.email + "</p>" +
         "<p><b>Telefone: </b>" + data.phone + "</p>" +
         "<p><b>Mensagem: </b>" + data.message + "</p>";
}

var instagramRecentFunction = function(req, res) {
  instagram.user_self_media_recent({ count: 12 }, function(err, result, pagination, remaining, limit) {
    if (result && remaining) {
      res.json(result);
    } else {
      res.json(err);
    }
  });
};

var sendMailFunction = function(req, res) {
  // setup e-mail data
  mailOptions.text = formatText(req.body);
  mailOptions.html = formatHtml(req.body);
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      res.status(500);
      res.json(error);
    }
    else {
      res.json(info);
    }
  });
}

exports.instagramRecent = functions.https.onRequest((req, res) => {
  var corsFunction = cors();
  corsFunction(req, res, function() {
        instagramRecentFunction(req, res);
    });
});

exports.sendMail = functions.https.onRequest((req, res) => {
  var corsFunction = cors();
  corsFunction(req, res, function() {
        sendMailFunction(req, res);
    });
});
