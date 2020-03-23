import React, {useEffect, useRef, useReducer, useCallback} from 'react'
import {id} from './utils/base'
import * as Ship from './objects/ship'
import * as Bullet from './objects/bullet'

const initialState = {
  context: null,
  ship: {
    position: {
      x: 800,
      y: 400,
    },
    velocity: {
      x: 0,
      y: 0,
    },
    rotation: 0,
  },
  bullets: [],
  keys: {
    right: false,
    left: false,
    up: false,
  },
  screen: {
    width: 0,
    height: 0,
    ratio: 0,
  },
}

function reducer(state, action) {
  switch (action.type) {
    case 'set_context':
      return {...state, context: action.context, screen: action.screen}

    case 'set_keys':
      return {...state, keys: {...state.keys, ...action.keys}}

    case 'add_bullet':
      return {...state, bullets: [...state.bullets, {position: {x: 5, y: 7}}]}

    case 'update':
      Ship.draw(state)
      // map()
      const drawBullet = x => Bullet.draw(state, x)
      const updateBullet = x => Bullet.update(state, x)
      state.bullets.map(drawBullet)

      return {
        ...state,
        ship: Ship.update(state),
        bullets: state.bullets.map(updateBullet).filter(id),
      }

    default:
      return state
  }
}

const KEY = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  A: 65,
  D: 68,
  W: 87,
  SPACE: 32,
}

function App() {
  const canvas = useRef(null)
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const ctx = canvas.current.getContext('2d')
    dispatch({
      type: 'set_context',
      context: ctx,
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      },
    })
  }, [])

  const update = useCallback(() => {
    let ctx = state.context || canvas.current.getContext('2d')

    ctx.save()

    ctx.fillStyle = '#000'
    // context.globalAlpha = 0.4;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

    dispatch({type: 'update'})

    ctx.restore()
    requestAnimationFrame(() => {
      update()
    })
  }, [state.context])

  const handleKeys = useCallback((e, value) => {
    if (e.keyCode === KEY.LEFT || e.keyCode === KEY.A)
      dispatch({type: 'set_keys', keys: {left: value}})
    if (e.keyCode === KEY.RIGHT || e.keyCode === KEY.D)
      dispatch({type: 'set_keys', keys: {right: value}})
    if (e.keyCode === KEY.UP || e.keyCode === KEY.W)
      dispatch({type: 'set_keys', keys: {up: value}})
    if (e.keyCode === KEY.SPACE) dispatch({type: 'add_bullet'})
  }, [])

  useEffect(() => {
    window.addEventListener('keyup', e => handleKeys(e, false))
    window.addEventListener('keydown', e => handleKeys(e, true))

    requestAnimationFrame(() => {
      update()
    })

    return () => {
      window.removeEventListener('keyup', handleKeys)
      window.removeEventListener('keydown', handleKeys)
    }
  }, [handleKeys, update])

  return (
    <div className="App">
      <canvas
        ref={canvas}
        width={state.screen.width * state.screen.ratio}
        height={state.screen.height * state.screen.ratio}
      ></canvas>
    </div>
  )
}

export default App
