export default function limite (a){
    //Situacion economica de la biblioteca unas
    if(a>0){
        if(a>1000){
            return "mucho dinero"
            //Hay mucho dinero
        }else{
            return "poco dinero"
            //No hay mucho dinero
        }
    }else{
            return "deuda";
            //Hay deuda
        }
    }
