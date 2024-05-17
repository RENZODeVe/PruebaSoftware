import suma from "../controllers/suma.js";
import bucle from "../controllers/bucle.js";


test('suma 1 + 2 equal 3',()=>{
    expect(suma(1,5)).toBe(6);
});

test('practica',()=>{
    expect(bucle(1500,0)).toBe(10);
    expect(bucle(-200,0)).toBe(-200);
    expect(bucle(0,0)).toBe(0);
    expect(bucle(500,0)).toBe(5);    
});