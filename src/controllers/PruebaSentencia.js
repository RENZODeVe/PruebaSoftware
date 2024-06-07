export default function Sentencia (a){
    //Situacion economica de la biblioteca unas
    if(a>0){
        if(a>=1000){
            return "Hay mucho dinero"
            //Hay mucho dinero
        }else{
            return "Hay poco dinero"
            //No hay mucho dinero
        }
    }else{
        if(a==0){
            return "No hay dinero ni deuda";
            //No hay dinero
        }else{
            return "Hay deuda";
            //Hay deuda
        }
    }
}