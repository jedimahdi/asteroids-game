const nextPosition = (state, bullet) => ({
  x: bullet.position.x + 1,
  y: bullet.position.y,
})

const update = (state, bullet) =>
  bullet.position.x < 0 ||
  bullet.position.y < 0 ||
  bullet.position.x > state.screen.width ||
  bullet.position.y > state.screen.height
    ? false
    : {position: nextPosition(state, bullet)}

function draw(state, bullet) {
  const {context} = state

  context.save()
  context.translate(bullet.position.x, bullet.position.y)
  context.rotate((bullet.rotation * Math.PI) / 180)
  context.fillStyle = '#FFF'
  context.lineWidth = 0.5
  context.beginPath()
  context.arc(0, 0, 2, 0, 2 * Math.PI)
  context.closePath()
  context.fill()
  context.restore()
}

export {draw, update}
