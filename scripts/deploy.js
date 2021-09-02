require("dotenv").config();

var axios = require("axios");

var config = {
  method: "post",
  url: process.env.DEPLOY_HOOK,
  headers: {},
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
