export const hexToRgba = (hex: string, opacity?: number): string => {
  const hexRegExp = /^#?[0-9A-Fa-f]{6}$/;
  if (!/^#?[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error("Invalid hex color format. Use a 6-character hex code.");
  }

  const sanitisedHex = hex.startsWith("#") ? hex.slice(1) : hex;
  console.log({ sanitisedHex });

  const red = parseInt(sanitisedHex.slice(0, 2), 16);
  const green = parseInt(sanitisedHex.slice(3, 4), 16);
  const blue = parseInt(sanitisedHex.slice(4, 6), 16);
  const alpha = opacity || 1;

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};
