const ajax = require("node.ajax");

ajax("https://accounts.kakao.com/weblogin/authenticate.json", "POST", {
    "os":"web",
    "webview_v":2,
    "email":"hk9764@naver.com",
    "password":"English4576*",
    "continue":"https://kauth.kakao.com/oauth/authorize?client_id=6cfb479f221a5adc670fe301e1b6690c&redirect_uri=sef&response_type=code&state=tGruWU0ih4mGuqIKQCP21kNONH00riKYKm7840YSaoyz11ts7zfKua32rMZ%40QzAln9NCEtNnK%2FlOJPAXOvkTAg%3D%3D&encode_state=true&lang=en",
    "third":false
}, {
    "Origin": "https://accounts.kakao.com"
})
.then((res) => {
    console.log(res);
})

// ajax({
//     "data": {
//         "os":"web",
//         "webview_v":2,
//         "email":"natenate2403@gmail.com",
//         "password":"English4576*",
//         "continue":"https://kauth.kakao.com/oauth/authorize?client_id=6cfb479f221a5adc670fe301e1b6690c&redirect_uri=sef&response_type=code&state=tGruWU0ih4mGuqIKQCP21kNONH00riKYKm7840YSaoyz11ts7zfKua32rMZ%40QzAln9NCEtNnK%2FlOJPAXOvkTAg%3D%3D&encode_state=true&lang=en",
//         "third":false
//     },
//     "type":"POST",
//     "url":"https://accounts.kakao.com/weblogin/authenticate.json",
//     headers: {
//         Origin: "https://accounts.kakao.com"
//     },
//     success: (Parse_data) => {console.log(Parse_data)}
// })