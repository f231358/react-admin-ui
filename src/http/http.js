const Server = '/';

const httpUrl = {
    //'loginUrl':Server+'Account/Login',
    'loginUrl': 'login.html',
    'loginCookies': '.ticket',
    'logoutUrl': '',
    'picServiceUrl': 'http://img.520bamboo.club/'
}

const webSite = {
    'WebSiteName': '艾尼路的个人blog',
    'WebUrl': 'http://520bamboo.club/'
}

const payType = 0; // 0-默认微信支付


export default {
    httpUrl: httpUrl,
    webSite: webSite
}