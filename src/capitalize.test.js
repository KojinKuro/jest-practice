import { capitalize } from "./capitalize.js";

describe("Capitalize test", () => {
  it("Will capitalize tyler to Tyler", () => {
    let name = "tyler";
    expect(capitalize(name)).toBe("Tyler");
  });

  it("Will capitalize bob to Bob", () => {
    let name = "bob";
    expect(capitalize(name)).toBe("Bob");
  });

  it("Can handle numbers", () => {
    let name = "1roboBob";
    expect(capitalize(name)).toBe("1roboBob");
  });
});
