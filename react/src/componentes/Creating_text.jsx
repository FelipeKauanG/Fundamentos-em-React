import * as THREE from "three"


const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
const scene = new THREE.Scene()

camera.position.z = 5
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)



renderer.render(scene, camera)
