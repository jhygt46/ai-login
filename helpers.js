module.exports = {
    getPort: function(){
        return 80;
    },
    randomInteger: function(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    },
    randomString: function(x){
        var letras = "abcdefghijklmnopqrstuvwxyz0123456789";
        var a = "";
        for(var i=0, ilen=x; i<ilen; i++){
            a += letras[randomInteger(0, letras.length)];
        }
        return a;
    }
};