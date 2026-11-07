import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import './Background.css'

const Background = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine)
  }, [])

  const options = {
    fpsLimit: 60,
    background: {
      color: 'transparent', // CSS handles the gradient
    },
    detectRetina: true,
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ['#ff0000ff', '#ff0000ff', '#098d23ff', '#ff0000ff']
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: { min: 3.5, max: 6.5 },
        random: true,
        anim: {
          enable: true,
          speed: 10,
          size_min: 0.1,
          sync: false
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: '#ffffffff',
        opacity: 0.2,
        width: 1,
        triangles: {
          enable: true,
          opacity: 0.001,
          color: '#e8eeecff' // or matching particle color
        }
      },
      move: {
        enable: true,
        speed: 1.7,
        direction: 'none',
        random: false,
        straight: false,
        outModes: {
          default: 'bounce'
        },
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detectsOn: 'window',
      events: {
        onHover: {
          enable: true,
          mode: 'grab'
        },
        onClick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  }

  return (
    <div className="background-container">
      <div className="bg-gradient-overlay"></div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        className="particles-canvas"
      />
    </div>
  )
}

export default Background
