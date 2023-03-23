pesos = [0.4,0.2,0.1,0.3];
notas = [8.2,5.0,10.0,9.1];
pos = 0;
while (pos < pesos.length && pos < notas.length ){
    console.log(pesos[pos],"*",notas[pos],"=", (pesos[pos]*notas[pos]));
    pos = pos + 1;
}