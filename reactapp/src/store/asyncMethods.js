import axios from 'axios';
const host = 'http://localhost:8080' 
let fns = {
    async TmList(){
        let page = parseInt(Math.random()*30);
        let httpUrl = `${host}/api/rtimu/?page=${page}`
        let res = await axios.get(httpUrl);
        return res.data
        //console.log(res.data)
    }
}

export default fns;