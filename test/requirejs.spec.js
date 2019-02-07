import * as Fake from "../src/fake";

jest.setTimeout(125);

describe("requirejs", () => {
    it("provides one named module", done => {
        const module = {
            moduleFunc: jest.fn(),
        };

        global.requirejs = Fake.requirejs.providing([{ name: "my-module", module: module }]);

        requirejs([
            "my-module",
            providedModule => {
                expect(providedModule).toBe(module);
                done();
            },
        ]);
    });

    it("provides two named modules", done => {
        const moduleOne = {
            moduleOneFunc: jest.fn(),
        };

        const moduleTwo = {
            moduleTwoFunc: jest.fn(),
        };

        global.requirejs = Fake.requirejs.providing([
            { name: "module-1", module: moduleOne },
            { name: "module-2", module: moduleTwo },
        ]);

        requirejs([
            "module-1",
            providedModule => {
                expect(providedModule).toBe(moduleOne);
            },
            "module-2",
            providedModule => {
                expect(providedModule).toBe(moduleTwo);
                done();
            },
        ]);
    });
});
