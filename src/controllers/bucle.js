export default function bucle (a, b){
    //Situacion economica de la biblioteca unas
    //Hay dinero?
    if(a>0){
        if(a>1000){
            a=1000;
            //Hay mucho dinero
        }
    }else{
        if(a==0){
            return a;
            //No hay dinero
        }else{
            return a;
            //Hay deuda
        }
    }
    //El administrativo trabajará b cantidad de veces
    do{
        b=b+1;
        a=a-100;
    } while(a>0);
    return b;
}