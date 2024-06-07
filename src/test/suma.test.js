import suma from "../controllers/suma.js";
import bucle from "../controllers/bucle.js";
import Sentencia from "../controllers/PruebaSentencia.js";

test('suma',()=>{
    expect(suma(1,5)).toBe(6);
});

test('practica',()=>{
    expect(bucle(1500,0)).toBe(10);
    expect(bucle(-200,0)).toBe(-200);
    expect(bucle(0,0)).toBe(0);
    expect(bucle(500,0)).toBe(5);    
});

test('Prueba de Sentencia y Desicion',()=>{
    expect(Sentencia(1300)).toBe("Hay mucho dinero");
    expect(Sentencia(500)).toBe("Hay poco dinero");
    expect(Sentencia(0)).toBe("No hay dinero ni deuda");
    expect(Sentencia(-200)).toBe("Hay deuda");
});