import { hexToRgba } from "./hexToRgba";

describe("hexToRgba", () => {
  const errorString = "Invalid hex color format. Use a 6-character hex code.";
  it("returns an appropiate RGBA for a hex code", () => {
    expect(hexToRgba("#ff00ff", 0.5)).toBe("rgba(255, 0, 255, 0.5)");
  });
  it("accepts a hex code with no #", () => {
    expect(hexToRgba("ff00ff", 0.5)).toBe("rgba(255, 0, 255, 0.5)");
  });
  it("throws an error for an invalid hex color format", () => {
    expect(() => {
      hexToRgba("ff0", 0.5);
    }).toThrow(errorString);

    expect(() => {
      hexToRgba("#ff00ff00", 0.5);
    }).toThrow(errorString);

    expect(() => {
      hexToRgba("xyz123", 0.5);
    }).toThrow(errorString);
  });
  it("returns full opacity if no opacity argument is provided", () => {
    expect(hexToRgba("ff00ff")).toBe("rgba(255, 0, 255, 1)");
  });
});
