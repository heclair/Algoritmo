numeros = [8,3,4,7,5,6,4];
pos = 0;
while(pos < numeros.length){
    if ((pos%2)!=0){
  console.log(pos, ":", numeros[pos])
    }
    pos = pos + 1
  }