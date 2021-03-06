module.exports = {
    randomInteger: function(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    },
    randomString: function(x){
        var letras = "abcdefghijklmnopqrstuvwxyz0123456789";
        var a = "";
        for(var i=0, ilen=x; i<ilen; i++){
            a += letras[this.randomInteger(0, letras.length)];
        }
        return a;
    },
    randomMail: function(){
        var d = this.randomInteger(0, list.length);
        var n = this.randomInteger(2, 10);
        return this.randomString(n)+"@"+list[d];
    },
    add_mail: function(mail, id){

        var name = Array.from(mail.split("@")[0]);
        var domain = mail.split("@")[1];
        var nlen = name.length;
    
        if(nlen > 0 && nlen <= 100){
            if(list.includes(domain)){
                if(!mails.hasOwnProperty(domain)){
                    mails[domain] = {};
                }
                for(var i=0; i<nlen; i++){
                    switch (i) {
                        case 0:
                            if(!mails[domain].hasOwnProperty(name[0])){ mails[domain][name[0]] = {}; if(nlen == 1){ mails[domain][name[0]]['&'] = id; return 0; }}else{ if(nlen == 1){ if(mails[domain][name[0]]['&'] == undefined){ mails[domain][name[0]]['&'] = id; return 0; }else{ return 1; }}}
                        break;
                        case 1:
                            if(!mails[domain][name[0]].hasOwnProperty(name[1])){ mails[domain][name[0]][name[1]] = {}; if(name.length == 2){ mails[domain][name[0]][name[1]]['&'] = id; return 0; }}else{ if(name.length == 2){ if(mails[domain][name[0]][name[1]]['&'] == undefined){ mails[domain][name[0]][name[1]]['&'] = id; return 0; }else{ return 1; }}}
                        break;
                        case 2:
                            if(!mails[domain][name[0]][name[1]].hasOwnProperty(name[2])){ mails[domain][name[0]][name[1]][name[2]] = {}; if(name.length == 3){ mails[domain][name[0]][name[1]][name[2]]['&'] = id; return 0; }}else{ if(name.length == 3){ if(mails[domain][name[0]][name[1]][name[2]]['&'] == undefined){ mails[domain][name[0]][name[1]][name[2]]['&'] = id; return 0; }else{ return 1; }}}
                        break;
                        case 3:
                            if(!mails[domain][name[0]][name[1]][name[2]].hasOwnProperty(name[3])){ mails[domain][name[0]][name[1]][name[2]][name[3]] = {}; if(name.length == 4){ mails[domain][name[0]][name[1]][name[2]][name[3]]['&'] = id; return 0; }}else{ if(name.length == 4){ if(mails[domain][name[0]][name[1]][name[2]][name[3]]['&'] == undefined){ mails[domain][name[0]][name[1]][name[2]][name[3]]['&'] = id; return 0; }else{ return 1; }}}
                        break;
                        case 4:
                            if(!mails[domain][name[0]][name[1]][name[2]][name[3]].hasOwnProperty(name[4])){ mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]] = {}; if(name.length == 5){ mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]]['&'] = id; return 0; }}else{ if(name.length == 5){ if(mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]]['&'] == undefined){ mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]]['&'] = id; return 0; }else{ return 1; }}}
                        break;
                        case 5:
                            if(!mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]].hasOwnProperty(name[5])){ mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]] = {}; if(name.length == 6){ mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]]['&'] = id; return 0; }}else{ if(name.length == 6){ if(mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]]['&'] == undefined){ mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]]['&'] = id; return 0; }else{ return 1; }}}
                        break;
                        case 6:
                            if(!mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]].hasOwnProperty(name[6])){ mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]] = {}; if(name.length == 7){ mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]]['&'] = id; return 0; }}else{ if(name.length == 7){ if(mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]]['&'] == undefined){ mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]]['&'] = id; return 0; }else{ return 1; }}}
                        break;
                        case 7:
                            if(!mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]].hasOwnProperty(name[7])){ mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]][name[7]] = {}; if(name.length == 8){ mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]][name[7]]['&'] = id; return 0; }}else{ if(name.length == 8){ if(mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]][name[7]]['&'] == undefined){ mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]][name[7]]['&'] = id; return 0; }else{ return 1; }}}
                        break;
                        case 8:
                            if(!mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]][name[7]].hasOwnProperty(name[8])){ mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]][name[7]][name[8]] = {}; if(name.length == 9){ mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]][name[7]][name[8]]['&'] = id; return 0; }}else{ if(name.length == 9){ if(mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]][name[7]][name[8]]['&'] == undefined){ mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]][name[7]][name[8]]['&'] = id; return 0; }else{ return 1; }}}
                        break;
                        case 9:
                            if(!mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]][name[7]][name[8]].hasOwnProperty(name[9])){ mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]][name[7]][name[8]][name[9]] = {}; if(name.length == 10){ mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]][name[7]][name[8]][name[9]]['&'] = id; return 0; }}else{ if(name.length == 10){ if(mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]][name[7]][name[8]][name[9]]['&'] == undefined){ mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]][name[7]][name[8]][name[9]]['&'] = id; return 0; }else{ return 1; }}}
                        break;
                    }
                }
            }else{
                return 2;
            }
        }else{
            return 2;
        }
    
    },
    search_mail: function(mail){

        var name = Array.from(mail.split("@")[0]);
        var domain = mail.split("@")[1];
    
        if(list.includes(domain)){
            if(!mails.hasOwnProperty(domain)){
                return false;
            }else{
                switch (name.length) {
                    case 0:
                        return false;
                    break;
                    case 1:
                        try{ if(mails[domain][name[0]]['&'] !== undefined){ return true } }catch(e){ return false }
                    break;
                    case 2:
                        try{ if(mails[domain][name[0]][name[1]]['&'] !== undefined){ return true } }catch(e){ return false }
                    break;
                    case 3:
                        try{ if(mails[domain][name[0]][name[1]][name[2]]['&'] !== undefined){ return true } }catch(e){ return false }
                    break;
                    case 4:
                        try{ if(mails[domain][name[0]][name[1]][name[2]][name[3]]['&'] !== undefined){ return true } }catch(e){ return false }
                    break;
                    case 5:
                        try{ if(mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]]['&'] !== undefined){ return true } }catch(e){ return false }
                    break;
                    case 6:
                        try{ if(mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]]['&'] !== undefined){ return true } }catch(e){ return false }
                    break;
                    case 7:
                        try{ if(mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]]['&'] !== undefined){ return true } }catch(e){ return false }
                    break;
                    case 8:
                        try{ if(mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]][name[7]]['&'] !== undefined){ return true } }catch(e){ return false }
                    break;
                    case 9:
                        try{ if(mails[domain][name[0]][name[1]][name[2]][name[3]][name[4]][name[5]][name[6]][name[7]][name[8]]['&'] !== undefined){ return true } }catch(e){ return false }
                    break;
                }
                return false;
            }
        }
    
    }
};