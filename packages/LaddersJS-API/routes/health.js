/*jslint node: true */
"use strict";

module.exports = {
  ping: function(req, res) {
    return res.send(202, { status: "UP" });
  }
};
