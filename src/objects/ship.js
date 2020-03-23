import {mod} from '../utils/base'

const ROTATION_SPEED = 2
const SHIP_SPEED = 0.1
const INERTIA = 0.99

const nextPosition = state => ({
  x: mod(state.screen.width)(state.ship.position.x + state.ship.velocity.x),
  y: mod(state.screen.height)(state.ship.position.y + state.ship.velocity.y),
})

const nextRotation = state =>
  state.keys.right
    ? mod(360)(state.ship.rotation + ROTATION_SPEED)
    : state.keys.left
    ? mod(360)(state.ship.rotation - ROTATION_SPEED)
    : mod(360)(state.ship.rotation)

const accelerate = velocity => rotation => ({
  x:
    (velocity.x - Math.sin((-rotation * Math.PI) / 180) * SHIP_SPEED) * INERTIA,
  y:
    (velocity.y - Math.cos((-rotation * Math.PI) / 180) * SHIP_SPEED) * INERTIA,
})

const nextVelocity = state =>
  state.keys.up
    ? accelerate(state.ship.velocity)(state.ship.rotation)
    : {
        x: state.ship.velocity.x * INERTIA,
        y: state.ship.velocity.y * INERTIA,
      }

const update = state => ({
  ...state.ship,
  position: nextPosition(state),
  velocity: nextVelocity(state),
  rotation: nextRotation(state),
})

function draw(state) {
  const {context, ship} = state

  context.save()
  context.translate(ship.position.x, ship.position.y)
  context.rotate((ship.rotation * Math.PI) / 180)
  context.strokeStyle = '#ffffff'
  context.fillStyle = '#000000'
  context.lineWidth = 2
  context.beginPath()
  context.moveTo(0, -15)
  context.lineTo(10, 10)
  context.lineTo(5, 7)
  context.lineTo(-5, 7)
  context.lineTo(-10, 10)
  context.closePath()
  context.fill()
  context.stroke()
  context.restore()
}
export {draw, update}
