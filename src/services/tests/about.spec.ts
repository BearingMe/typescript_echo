import { setup, template } from "../about";

describe("Test about component", () => {
  it("Ensure required fields", () => {
    const fields = ["name", "alias", "version", "description", "author"];

    fields.forEach((field) => {
      expect(setup).toHaveProperty(field);
    });
  });

  it("Ensure template", () => {
    expect(template).toBeInstanceOf(Function);
  });
});
