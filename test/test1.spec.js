const Superhero = require("./../app/superhero");

describe( "TDD Development, first test case for Spiderverse class", () => {
    
    test("Test 1", () => {

        // Aqui escribimos el codigo que queremos usar
        const superhero = new Superhero("Spiderman", 31, "Toby Maguire");
        expect(superhero.name).toBe("Spiderman");
        expect(superhero.age).toBe(31);
        expect(superhero.actor).toBe("Toby Maguire");
    })
})

