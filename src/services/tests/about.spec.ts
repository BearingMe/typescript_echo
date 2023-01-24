import { setup } from "../about";

describe("Test about component", () => {
  it("Ensure required fields", async () => {
    const fields = ["name", "alias", "version", "description", "author"];

    fields.forEach((field) => {
      expect(setup).toHaveProperty(field);
    });
  });
});
