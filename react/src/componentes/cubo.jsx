import * as THREE from "three"

//declarar a cena
const scene = new THREE.Scene()

//declarar câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

//Declarar o renderizador
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

//renderizar a cena no arquivo .html
document.body.appendChild(renderer.domElement)

//declarar o objeto
const geometry = new THREE.BoxGeometry(1,1,1)

//declar o material
const material = new THREE.MeshBasicMaterial({color: 0x00ffee})

// criar o cubo
const cube = new THREE.Mesh( geometry, material)
scene.add(cube)

//Posição da câmera
camera.position.z = 5

//fazer uma função de animação e renderizar
function animate(){
  requestAnimationFrame(animate)
  cube.rotation.z += 0.01
  cube.rotation.y += 0.01

  renderer.render( scene, camera)
}

animate()