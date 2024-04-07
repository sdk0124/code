"use strict";

const hello = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    hello, // hello: hello
    login, // login: login(key와 value가 같은 형태)
};