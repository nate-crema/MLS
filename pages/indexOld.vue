<template>
<p></p>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'

import axios from 'axios';

export default {
  mounted() {
    const thisOut = this;
    axios.get("http://www.melon.com", {
            headers: {
                Cookie: '"PCID=15808164212678805910919; PC_PCID=15808164212678805910919; melonlogging=1000000800; POC=MP10; MAC=yxGp3ngirn2TD8sA0wMN73oo+NLJ038ZYDiQOFrISKOBULvpKEQ8OGp7RjNPmdhQ; DECOPMAC=C8M4FqPk8FwvC+5oWaiWQtqhAgMIBZNKymGdtBlYh5wv3LWOTYVHmRGRD1ocFRfI; MUG=NDIxNTYyMzMlM0IlM0IlRUMlOUQlQkMlRUIlQjAlOTglM0IwMjA4MTcyMDM4JTNC; MHC="JTIza2FrYW9faGs5NzY0JTNCMCUzQjAlM0IwJTNCJTNCJTNCJTNCJTNCMCUzQjAyMDgxNzIwMzglM0I="; MUAC="NDIxNTYyMzMlM0IxOCUzQlklM0IlRUElQjklODAlRUQlOTklOTQlRUElQjclQTAlM0JNJTNCTiUzQjIlM0IwMjA4MTcyMDM4JTNCMjAyMDAyMDgxNzIwMzglM0JOJTNCMjAyMDAyMDgxNzIwMzglM0I="; MUNIK="JUVBJUI5JTgwJUVEJTk5JTk0JUVBJUI3JUEwJTNCMDIwODE3MjAzOCUzQg=="; KAUTH=bmRMRW10OWo4Nmc1ZTZCOFFlekQyNXpxYlRmQzAyYzR5THdMdHdvOWRHZ0FBQUZ3SS1MblFBJTNCemJxVkhYNk5pcE9xUzNxak51LXZKR0QwTW9xQWxqcUl4MUdaRFFvOWRHZ0FBQUZ3SS1MblBnJTNCJTNCJTNCJTNCJTNC; MUS="NDIxNTYyMzM7I2tha2FvX2hrOTc2NDstMjEzOTIyMjQ0OTs="; keyCookie=42156233; MLCP="NDIxNTYyMzMlM0IlMjNrYWthb19oazk3NjQlM0JOJTNCMCUzQmc5WjElMkJUOFYwODREZ2U5SDJyRUlRWDRYM1U5NXRVdFl5QktoRk5neWtFY3Zva3dpTWFXTFcyZVQxR1dRQUZnaSUzQiUzQjAyMDgxNzIwMzklM0IlRUElQjklODAlRUQlOTklOTQlRUElQjclQTAlM0IxJTNCaGs5NzY0JTQwbmF2ZXIuY29tJTNCMiUzQg==""',
                withCredentials: true
            }})
    .then(({data}) => {
      document.cookie = '"PCID=15808164212678805910919; PC_PCID=15808164212678805910919; melonlogging=1000000800; POC=MP10; MAC=yxGp3ngirn2TD8sA0wMN73oo+NLJ038ZYDiQOFrISKOBULvpKEQ8OGp7RjNPmdhQ; DECOPMAC=C8M4FqPk8FwvC+5oWaiWQtqhAgMIBZNKymGdtBlYh5wv3LWOTYVHmRGRD1ocFRfI; MUG=NDIxNTYyMzMlM0IlM0IlRUMlOUQlQkMlRUIlQjAlOTglM0IwMjA4MTcyMDM4JTNC; MHC="JTIza2FrYW9faGs5NzY0JTNCMCUzQjAlM0IwJTNCJTNCJTNCJTNCJTNCMCUzQjAyMDgxNzIwMzglM0I="; MUAC="NDIxNTYyMzMlM0IxOCUzQlklM0IlRUElQjklODAlRUQlOTklOTQlRUElQjclQTAlM0JNJTNCTiUzQjIlM0IwMjA4MTcyMDM4JTNCMjAyMDAyMDgxNzIwMzglM0JOJTNCMjAyMDAyMDgxNzIwMzglM0I="; MUNIK="JUVBJUI5JTgwJUVEJTk5JTk0JUVBJUI3JUEwJTNCMDIwODE3MjAzOCUzQg=="; KAUTH=bmRMRW10OWo4Nmc1ZTZCOFFlekQyNXpxYlRmQzAyYzR5THdMdHdvOWRHZ0FBQUZ3SS1MblFBJTNCemJxVkhYNk5pcE9xUzNxak51LXZKR0QwTW9xQWxqcUl4MUdaRFFvOWRHZ0FBQUZ3SS1MblBnJTNCJTNCJTNCJTNCJTNC; MUS="NDIxNTYyMzM7I2tha2FvX2hrOTc2NDstMjEzOTIyMjQ0OTs="; keyCookie=42156233; MLCP="NDIxNTYyMzMlM0IlMjNrYWthb19oazk3NjQlM0JOJTNCMCUzQmc5WjElMkJUOFYwODREZ2U5SDJyRUlRWDRYM1U5NXRVdFl5QktoRk5neWtFY3Zva3dpTWFXTFcyZVQxR1dRQUZnaSUzQiUzQjAyMDgxNzIwMzklM0IlRUElQjklODAlRUQlOTklOTQlRUElQjclQTAlM0IxJTNCaGs5NzY0JTQwbmF2ZXIuY29tJTNCMiUzQg==""';
      document.getElementsByTagName("html")[0].innerHTML = data;
      console.log(isMelonLogin());
    })
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

