// playlist control js

getPlaylistsYT = function (req, res) {
    const { userInfo } = req.session;
    if (!userInfo) return res.status(400).end("Bad Request");
    else if (!userInfo.cusid) return res.status(400).end("Bad Request");
    else if (!userInfo.codeG) return res.redirect("/youtube/authorize");
}