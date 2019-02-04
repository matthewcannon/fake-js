import * as Fake from "../src/fake";

jest.setTimeout(125);

describe("requirejs", () => {
    it("resolves one named module", done => {
        const expectedModule = {
            myModuleFunc: jest.fn(),
        };

        global.requirejs = Fake.requirejs.providing("my-module", expectedModule);

        requirejs("my-module", myModule => {
            expect(myModule).toBe(expectedModule);
            done();
        });
    });
});
