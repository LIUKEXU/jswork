let time = new Date()
let fen= s= 0;
fen = 59 - time.getMinutes()
s = 59 - time.getSeconds()
let id =setInterval(seckill,1000)
function seckill() {
    s--
    if(s== -1){
        s= 59
        fen--
    } 
    if(fen == -1){
        fen = 59
    } 
    document.getElementById('fen').innerHTML = fen +'分'
    document.getElementById('s').innerHTML = s +'秒'
}