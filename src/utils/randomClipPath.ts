export function generateRandomClipPath(steps = 10, height = 20): string {
  const points: string[] = [];

  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * 100; 
    const y = 100 - Math.random() * height;
    points.push(`${x}% ${y}%`);
  }

  points.push("100% 100%", "0% 100%");

  return `polygon(${points.join(",")})`;
}