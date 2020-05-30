import React from 'react';
import Particles from 'react-tsparticles';
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Home.css';

const Home = () => {
  return (
    <div className='home__container' id="homeSection">
      <Particles
        params={{
          "background": {
            "color": {
              "value": "#2c2c2c"
            },
            "image": "",
            "position": "center",
            "repeat": "no-repeat",
            "size": "cover"
          },
          "detectRetina": true,
          "fpsLimit": 30,

          "interactivity": {
            "detectsOn": "canvas",
            "events": {
              "onHover": {
                "enable": true,
                "mode": "bubble",
              },
              "resize": true
            },
            "modes": {
              "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "color": {
                  "value": "#cecece"
                },
                "size": 40
              },
              "connect": {
                "distance": 80,
                "lineLinked": {
                  "opacity": 0.5
                },
                "radius": 60
              },
              "grab": {
                "distance": 400,
                "lineLinked": {
                  "opacity": 1
                }
              },
              "push": {
                "quantity": 4
              },
              "remove": {
                "quantity": 2
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4,
                "speed": 1
              },
              "slow": {
                "factor": 3,
                "radius": 200
              }
            }
          },
          "particles": {
            "collisions": {
              "enable": false,
              "mode": "bounce"
            },
            "color": {
              "value": "#ffD300"
            },
            "lineLinked": {
              "blink": false,
              "color": {
                "value": "#ffffff"
              },
              "consent": false,
              "distance": 200,
              "enable": false,
              "opacity": 1,
              "shadow": {
                "blur": 5,
                "color": {
                  "value": "lime"
                },
                "enable": false
              },
              "width": 2
            },
            "move": {
              "attract": {
                "enable": false,
                "rotate": {
                  "x": 600,
                  "y": 1200
                }
              },
              "direction": "none",
              "enable": true,
              "outMode": "out",
              "random": false,
              "speed": 5,
              "straight": false,
              "vibrate": false
            },
            "number": {
              "density": {
                "enable": true,
                "area": 800,
                "factor": 1000
              },
              "limit": 0,
              "value": 6
            },
            "opacity": {
              "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 1,
                "sync": false
              },
              "random": {
                "enable": true,
                "minimumValue": 0.3
              },
              "value": 0.5
            },
            "shape": {
              "options": {
                "character": {
                  "fill": true,
                  "close": true,
                  "font": "Verdana",
                  "style": "",
                  "value": "*",
                  "weight": "400"
                },
                "char": {
                  "fill": true,
                  "close": true,
                  "font": "Verdana",
                  "style": "",
                  "value": "*",
                  "weight": "400"
                },
                "image": {
                  "fill": true,
                  "close": true,
                  "height": 100,
                  "replaceColor": true,
                  "src": "https://cdn.matteobruni.it/images/particles/github.svg",
                  "width": 100
                },
                "images": {
                  "fill": true,
                  "close": true,
                  "height": 100,
                  "replaceColor": true,
                  "src": "https://cdn.matteobruni.it/images/particles/github.svg",
                  "width": 100
                },
                "polygon": {
                  "fill": true,
                  "close": true,
                  "sides": 6
                },
                "star": {
                  "fill": true,
                  "close": true,
                  "sides": 6
                }
              },
              "type": "polygon"
            },
            "size": {
              "animation": {
                "destroy": "none",
                "enable": false,
                "minimumValue": 40,
                "speed": 5,
                "startValue": "max",
                "sync": false
              },
              "random": {
                "enable": true,
                "minimumValue": 100
              },
              "value": 160
            },
            "stroke": {
              "color": {
                "value": "#000"
              },
              "width": 0,
              "opacity": 1
            },
            "twinkle": {
              "lines": {
                "enable": false,
                "frequency": 0.05,
                "opacity": 1
              },
              "particles": {
                "enable": false,
                "frequency": 0.05,
                "opacity": 1
              }
            }
          },
          "pauseOnBlur": true,
          "polygon": {
            "draw": {
              "enable": false,
              "stroke": {
                "color": {
                  "value": "#fff"
                },
                "width": 0.5,
                "opacity": 1
              }
            },
            "enable": false,
            "inline": {
              "arrangement": "one-per-point"
            },
            "move": {
              "radius": 10,
              "type": "path"
            },
            "scale": 1,
            "type": "none",
            "url": ""
          }
        }}
        width="100%"
        height="100vh"
      />


      <div className='home-title__container'>
        <h1>Bring your Projects and Ideas to the Internet</h1>
        <h4>- Web Design and Development -</h4>
      </div>

      <Link
        to="teamSection"
        spy={true}
        smooth={true}
        duration={700} 
        className='home-get-started__container' 
        title="Get Started!">
        <FontAwesomeIcon icon={faChevronDown} color="ffffff" className="home-get-started__icon" />
      </Link>
    </div>
  )
}

export default Home;