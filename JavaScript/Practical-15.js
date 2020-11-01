function decrement(){
    var num = parseInt(document.getElementById("count").textContent);
    if(num>0){
        document.getElementById('count').innerHTML = num-1;
    }

}
function increment(){
    var num = parseInt(document.getElementById("count").textContent);
    document.getElementById('count').innerHTML = num+1;
}