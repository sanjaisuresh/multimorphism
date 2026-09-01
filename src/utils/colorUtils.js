/**
 * Converts a HEX color to HSL
 * @param {string} hex - The hex color (e.g. #FF0000)
 * @returns {number[]} [h, s, l]
 */
function hexToHSL(hex) {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  }
  
  r /= 255;
  g /= 255;
  b /= 255;
  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h * 360, s * 100, l * 100];
}

/**
 * Converts HSL to HEX
 * @param {number} h - Hue (0-360)
 * @param {number} s - Saturation (0-100)
 * @param {number} l - Lightness (0-100)
 * @returns {string} HEX color
 */
function hslToHex(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

/**
 * Generates a full color palette from a base hex color.
 * @param {string} hex - Base hex color
 * @returns {object} { lighter, light, default, dark, darker }
 */
export function generateColorPalette(hex) {
  const [h, s, l] = hexToHSL(hex);
  
  return {
    lighter: hslToHex(h, s, Math.min(100, l + 30)),
    light: hslToHex(h, s, Math.min(100, l + 15)),
    default: hex,
    dark: hslToHex(h, s, Math.max(0, l - 15)),
    darker: hslToHex(h, s, Math.max(0, l - 30)),
  };
}
