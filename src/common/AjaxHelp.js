import axios from "axios";

//const Server = 'http://183.224.17.134:1701/';跨域IP
const Server = '/';

const httpUrl =function(val,CallBackFun){
    alert(Server+'asdasdf'+val);
    CallBackFun();
}

const get=(url,par,CallBackFun)=>{
    //跨域支持
    //axios.defaults.headers.common['Authorization'] = 'BasicAuth 123123123';
    axios({
        method:'get',
        url:Server+url+'/'+par,
        responseType:'json'
      })
    .then(function (response) {
        CallBackFun(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
}


export default {
    httpUrl: httpUrl,
    get: get
}