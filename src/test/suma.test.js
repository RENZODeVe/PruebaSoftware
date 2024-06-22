import suma from "../controllers/suma.js";
import bucle from "../controllers/bucle.js";
import limite from "../controllers/AnalisisValorLimite.js";

test('suma',()=>{
    expect(suma(1,5)).toBe(6);
});

test('practica',()=>{
    expect(bucle(1500,0)).toBe(10);
    expect(bucle(-200,0)).toBe(-200);
    expect(bucle(0,0)).toBe(0);
    expect(bucle(500,0)).toBe(5);    
});
//Análisis de valor límite
//Inválido [-infinito,0]
//Válido [1,1000]
//Inválido [1001,infinito]
test('limite',()=>{
    expect(limite(0)).toBe("deuda");
    expect(limite(1)).toBe("poco dinero");
    expect(limite(1000)).toBe("poco dinero");
    expect(limite(1001)).toBe("mucho dinero");
}); 
