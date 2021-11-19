//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//start express application
const app = express();

//Reading Enviroment Variables
dotenv.config();

//render template files using the view engine
app.set('view engine', 'ejs');

//Setting up our static path and Body Parser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
// Connect to local MongoDB "mongodb://localhost:27017/wikiDB" or Connect to Your MongoDb Atlas Connection
mongoose.connect(process.env.URL, {
  useNewUrlParser: true
});

//create articleSchema
const articleSchema = {
  title: String,
  content: String
};

//Creating new MongooseModel to define article collection
const Article = mongoose.model("Article", articleSchema);

// Target all Articles using App.route() 

app.route("/articles")

  .get(function(req, res) {
    Article.find(function(err, results) {
      if (!err) {
        res.send(results);
      } else {
        res.send(err);
      }
    });
  })

  .post(function(req, res) {

    const new_Article = new Article({
      title: req.body.title,
      content: req.body.content
    });

    new_Article.save(function(err) {
      if (!err) {
        res.send("Successfully added a new article.");
      } else {
        res.send(err);
      }
    });
  })

  .delete(function(req, res) {

    Article.deleteMany(function(err) {
      if (!err) {
        res.send("Successfully deleted all articles.");
      } else {
        res.send(err);
      }
    });
  });


// Get A Specific Article using App.route()

app.route("/articles/:articleTitle")

  .get(function(req, res) {

    Article.findOne({
      title: req.params.articleTitle
    }, function(err, result) {
      if (result) {
        res.send(result);
      } else {
        res.send("No articles matching that title was found.");
      }
    });
  })

  .put(function(req, res) {

    Article.update({
        title: req.params.articleTitle
      }, {
        title: req.body.title,
        content: req.body.content
      }, {
        overwrite: true
      },
      function(err) {
        if (!err) {
          res.send("Successfully updated the selected article.");
        }
      }
    );
  })

  .patch(function(req, res) {

    Article.update({
        title: req.params.articleTitle
      }, {
        $set: req.body
      },
      function(err) {
        if (!err) {
          res.send("Successfully updated article.");
        } else {
          res.send(err);
        }
      }
    );
  })

  .delete(function(req, res) {

    Article.deleteOne({
        title: req.params.articleTitle
      },
      function(err) {
        if (!err) {
          res.send("Successfully deleted the corresponding article.");
        } else {
          res.send(err);
        }
      }
    );
  });


//set up express server
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
