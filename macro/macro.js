const crypto = require("crypto");

const ciphers = crypto.getCiphers();

// crypto.pbkdf2('tGruWU0ih4mGuqIKQCP21kNONH00riKYKm7840YSaoyz11ts7zfKua32rMZ@QzAln9NCEtNnK/lOJPAXOvkTAg==', 'MF1iwXQQhH0tS9XtnZM4K3DjKMtSbIOh9QJhivb1DooOMFo87Sbav4bAGepKBSmECKO6SQo9dVwAAAFwJW3oyw', 100000, 64, 'sha512', (err, key) => {
//     // console.log(key.toString('base64'));
// });


// console.log(crypto.createHash('sha512').update('tGruWU0ih4mGuqIKQCP21kNONH00riKYKm7840YSaoyz11ts7zfKua32rMZ@QzAln9NCEtNnK/lOJPAXOvkTAg==').digest('hex'));


for (var i = 0; i < ciphers.length; i++) {
    try {
        const decipher = crypto.createDecipher(ciphers[i], 'MF1iwXQQhH0tS9XtnZM4K3DjKMtSbIOh9QJhivb1DooOMFo87Sbav4bAGepKBSmECKO6SQo9dVwAAAFwJW3oyw');
        let result2 = decipher.update('tGruWU0ih4mGuqIKQCP21kNONH00riKYKm7840YSaoyz11ts7zfKua32rMZ@QzAln9NCEtNnK/lOJPAXOvkTAg==', 'base64', 'utf8'); // 암호화할문 (base64, utf8이 위의 cipher과 반대 순서입니다.)
        result2 += decipher.final('utf8'); // 암호화할문장 (여기도 base64대신 utf8)

        console.log(result2);
    } catch(e) {
        // console.log("\n\n\n------" + i + "-----\n\n\n");
        // console.error(e);
        // console.log("\n\n\n------" + i + "------\n\n\n");
    }
}