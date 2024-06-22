export default function limite (a){
    //Situacion economica de la biblioteca unas
    if(a>0){
        if(a>1000){
            return "Hay mucho dinero"
            //Hay mucho dinero
        }else{
            return "Hay poco dinero"
            //No hay mucho dinero
        }
    }else{
            return "Hay deuda";
            //Hay deuda
        }
    }
