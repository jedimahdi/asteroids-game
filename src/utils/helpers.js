export function rotatePoint(p, center, angle) {
  return {
    x:
      (p.x - center.x) * Math.cos(angle) -
      (p.y - center.y) * Math.sin(angle) +
      center.x,
    y:
      (p.x - center.x) * Math.sin(angle) +
      (p.y - center.y) * Math.cos(angle) +
      center.y,
  }
}
export function asteroidVertices(count, rad) {
  let p = []
  for (let i = 0; i < count; i++) {
    p[i] = {
      x:
        (-Math.sin(((360 / count) * i * Math.PI) / 180) +
          (Math.round(Math.random() * 2 - 1) * Math.random()) / 3) *
        rad,
      y:
        (-Math.cos(((360 / count) * i * Math.PI) / 180) +
          (Math.round(Math.random() * 2 - 1) * Math.random()) / 3) *
        rad,
    }
  }
  return p
}
