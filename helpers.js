module.exports = {
    getPort: function (){
        return 80;
    },
    randomInteger: function(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }
};