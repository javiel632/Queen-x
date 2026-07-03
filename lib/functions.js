const axios = require('axios');
const fs = require('fs');
const { fromBuffer } = require('file-type');

const getBuffer = async (url, options) => {
  try {
    options = options || {};
    const res = await axios({
      method: "get",
      url,
      headers: {
        'DNT': 1,
        'User-Agent': 'Google Chrome',
        'Referer': 'https://www.google.com/',
        ...options.headers
      },
      responseType: 'arraybuffer'
    });
    return res.data;
  } catch (e) {
    console.log('Error :', e);
    throw e;
  }
};

const getGroupAdmins = (participants) => {
  let admins_list = [];
  for (let i = 0; i < participants.length; i++) {
    if (participants[i].admin == "superadmin") {
      admins_list.push(participants[i].id);
    } else if (participants[i].admin == "admin") {
      admins_list.push(participants[i].id);
    }
  }
  return admins_list;
};

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`;
};

const h2k = (number) => {
  let u = 0;
  let k = 0;
  if (number >= 1000000) {
    u = parseInt(number / 100000);
    u = u / 10;
    return u.toString() + "M";
  } else {
    if (number >= 1000) {
      k = parseInt(number / 100);
      k = k / 10;
      return k.toString() + "K";
    } else {
      return number.toString();
    }
  }
};

const isUrl = (url) => {
  return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/gi));
};

const Json = (string) => {
  return JSON.stringify(string, null, 2);
};

const runtime = (seconds) => {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const fetchJson = async (url, options) => {
  try {
    options = options || {};
    const res = await axios({
      method: 'GET',
      url: url,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        ...options.headers
      },
      ...options
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

const getSizeMedia = (buffer) => {
  return new Promise(async (resolve, reject) => {
    let mime = await fromBuffer(buffer);
    let fileSizeInBytes = buffer.length;
    let fileSizeInKB = fileSizeInBytes / 1024;
    let fileSizeInMB = fileSizeInKB / 1024;
    if (fileSizeInMB >= 1) {
      resolve(fileSizeInMB.toFixed(2) + " MB");
    } else if (fileSizeInKB >= 1) {
      resolve(fileSizeInKB.toFixed(2) + " KB");
    } else {
      resolve(fileSizeInBytes.toFixed(2) + " B");
    }
  });
};

module.exports = {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson,
  getSizeMedia
};
