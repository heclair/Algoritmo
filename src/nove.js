entradas = [9,2,4,5,8];
saidas =   [3,5,2,7,4];
pos = 0;
maior = 0
while(pos < entradas.length && pos < saidas.length){
    if(entradas[pos] > saidas[pos]){
        maior = entradas[pos];
    }
    else{
        maior = saidas[pos];
    }
    console.log(pos,":",maior);
    pos = pos + 1;
}