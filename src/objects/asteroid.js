import {asteroidVertices} from '../utils/helpers'

const update = (state) => state

function draw(state) {
  const context = state.context
  context.save()
  context.translate(this.position.x, this.position.y)
  context.rotate((this.rotation * Math.PI) / 180)
  context.strokeStyle = '#FFF'
  context.lineWidth = 2
  context.beginPath()
  context.moveTo(0, -this.radius)

  for (let i = 1; i < this.vertices.length; i++) {
    context.lineTo(this.vertices[i].x, this.vertices[i].y)
  }
  context.closePath()
  context.stroke()
  context.restore()
}

export {draw, update}
