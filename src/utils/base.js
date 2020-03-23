export const mod = x => y => ((y % x) + x) % x

export const rnd = min => max => Math.floor(Math.random() * max) + min

export const id = x => x
