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
    }
};