import { c } from "./class-name-helper";

describe("ClassName helper", () => {
  it("should receive an amount of values and return a single string", () => {
    const result = c("just", {
      "having fun": false,
      testing: true,
    });

    expect(result).toBe("just testing");
  });

  it("should handle conditional values", () => {
    const result = c({
      "this should appear": true,
      "this should not appear": false,
    });

    expect(result).toBe("this should appear");
  });

  it("should handle conflicting tailwind classes", () => {
    const result = c("px-4 bg-white p-3", "p-2", { "bg-black": true });

    expect(result).toBe("p-2 bg-black");
  });
});
