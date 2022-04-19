const Superhero = require("./../app/superHero")

describe("Unite Test", () => {

    test("Case1: Get a hero", ()=> {
        const ironman = new Superhero("Iron Man", "Robert D. Jr", "Tony Stark")

        expect(ironman.name).toBe("Iron Man")
        expect(ironman.actor).toBe("Robert D. Jr")
        expect(ironman.heroName).toBe("Tony Stark")
    })
})
