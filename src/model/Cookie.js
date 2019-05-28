var Cookie = {
    setCook(cname, cvalue, exdays = 7){
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        const expires = 'expires=' + d.toGMTString();
        window.document.cookie =
          ' ' + cname + '=' + cvalue + '; ' + expires + '; path=/';
    },
    getCook(cname){
        const name = cname + '=';
        const ca = window.document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
        }
        return '';
    },
    removeCooke(cname){
        const expires = 'expires=Thu, 01 Jan 1970 00:00:00 GMT';
        window.document.cookie = ' ' + cname + '=; ' + expires + '; path=/';
    }
}

export default Cookie