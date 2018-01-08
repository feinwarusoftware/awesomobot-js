"use strict"

const express = require("express");
const router = express.Router();

const Server = require("../../common/models/server");

router.get("/", (req, res, next) => {

    if (req.user.currentGuild) {
        return next();
    }

    var queries = [];
    for (var i = 0; i < req.user.guilds.length; i++) {
        queries.push(Server.findById(req.user.guilds[i].id));
    }

    Promise.all(queries).then(servers => {
        
        for (var i = 0; i < servers.length; i++) {
            req.user.guilds[i].bot = false;
            if (servers[i] != null) {
                req.user.guilds[i].bot = true;
            }
        }

        res.render("dashboard/select", { user: req.user });
    });
});

router.get("/", (req, res) => {

    if (!req.user.currentGuild) {
        res.send("You need to select a server first!");
    }

    Server.findById(req.user.currentGuild, (err, server) => {
        if (err) {
            res.send(err);
        }

        res.render("dashboard/", { user: req.user, server: server });
    });
});

router.get("/developer", (req, res) => {

    if (!req.user.currentGuild) {
        res.send("You need to select a server first!");
    }

    Server.findById(req.user.currentGuild, (err, server) => {
        if (err) {
            res.send(err);
        }

        res.render("dashboard/developer", { user: req.user, server: server });
    });
});

router.get("/games", (req, res) => {

    if (!req.user.currentGuild) {
        res.send("You need to select a server first!");
    }

    Server.findById(req.user.currentGuild, (err, server) => {
        if (err) {
            res.send(err);
        }

        res.render("dashboard/games", { user: req.user, server: server });
    });
});

router.get("/leaderboards", (req, res) => {

    if (!req.user.currentGuild) {
        res.send("You need to select a server first!");
    }

    Server.findById(req.user.currentGuild, (err, server) => {
        if (err) {
            res.send(err);
        }

        res.render("dashboard/leaderboards", { user: req.user, server: server });
    });
});

router.get("/moderation", (req, res) => {

    if (!req.user.currentGuild) {
        res.send("You need to select a server first!");
    }

    Server.findById(req.user.currentGuild, (err, server) => {
        if (err) {
            res.send(err);
        }

        res.render("dashboard/moderation", { user: req.user, server: server });
    });
});

router.get("/music", (req, res) => {

    if (!req.user.currentGuild) {
        res.send("You need to select a server first!");
    }

    Server.findById(req.user.currentGuild, (err, server) => {
        if (err) {
            res.send(err);
        }

        res.render("dashboard/music", { user: req.user, server: server });
    });
});

router.get("/stats", (req, res) => {

    if (!req.user.currentGuild) {
        res.send("You need to select a server first!");
    }

    Server.findById(req.user.currentGuild, (err, server) => {
        if (err) {
            res.send(err);
        }

        res.render("dashboard/stats", { user: req.user, server: server });
    });
});

router.get("/:server_id", (req, res, next) => {

    if (parseInt(req.params.server_id)) {

        req.user.currentGuild = req.params.server_id;
        res.redirect("/dashboard");
    } else {

        return next();
    }
});

module.exports = router;