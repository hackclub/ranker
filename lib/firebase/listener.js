const { throttle } = require("lodash");
const axios = require("axios");
const db = require("./firebase");

console.log("listener service has been deployed");

require("dotenv").config();

const arr = [0, 0, 0]; // this is to stop them from deploying on start

const base_func = () => {
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
};

const re_deploy = throttle(base_func, 10000);

db.collection("clubs").onSnapshot(
  (snapshot) => {
    if (arr[0]) re_deploy();
    arr[0] += 1;
  },
  (error) => {}
);

db.collectionGroup("team").onSnapshot(
  (snapshot) => {
    if (arr[1]) re_deploy();
    arr[1] += 1;
  },
  (error) => {}
);

db.collectionGroup("posts").onSnapshot(
  (snapshot) => {
    if (arr[2]) re_deploy();
    arr[2] += 1;
  },
  (error) => {}
);
