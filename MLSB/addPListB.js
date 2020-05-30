// const axios = require("axios");

// axios.post("https://www.melon.com/mymusic/playlist/mymusicplaylistinsert_insertAction.json", {"plylstTitle":"jiojmo","playlistDesc":"nonj","openYn":"Y","songIds":["31737197","31777113"],"repntImagePath":"","repntImagePathDefaultYn":"N"})
// .then((res) => {
//     console.log(res.data);
// })


$.ajax({
    type : "POST",
    url  : "https://www.melon.com/mymusic/playlist/mymusicplaylistinsert_insertAction.json",
    async : false,
    data : {"plylstTitle":"jiojmo","playlistDesc":"nonj","openYn":"Y","songIds":["31737197","31777113"],"repntImagePath":"","repntImagePathDefaultYn":"N"},
    success : function(result){
        console.log(result);
    },
    headers: header
});