// import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// const scene = new THREE.Scene(); 
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 
// const renderer = new THREE.WebGLRenderer(); 
// renderer.setSize( window.innerWidth, window.innerHeight ); 
// document.body.appendChild( renderer.domElement );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); 
// const cube = new THREE.Mesh( geometry, material ); 
// scene.add( cube ); 
// camera.position.z = 5;

// function animate() { 
 //   cube.rotation.x += 0.01; 
  //  cube.rotation.y += 0.01;    
  //  renderer.render( scene, camera ); 
//} 

//renderer.setAnimationLoop(animate);

import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear geometría y material para el cubo
const geometry = new THREE.BoxGeometry(1, 1, 1);
const greenMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, greenMaterial);
cube.position.set(-2, 0, 0); // Position the green cube
scene.add(cube);

// Create a blue cube
const blueMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const blueCube = new THREE.Mesh(geometry, blueMaterial);
blueCube.position.set(0, 0, 0); // Position the blue cube
scene.add(blueCube);

// Create a red cube
const redMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const redCube = new THREE.Mesh(geometry, redMaterial);
redCube.position.set(2, 0, 0); // Position the red cube
scene.add(redCube);

// Agregar una luz direccional y ajustar su posición
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 5;

// Función de animación con rotación y renderizado
function animate() {
    cube.rotation.x += 0.05; // Green cube rotation
    cube.rotation.y += 0.05;

    blueCube.rotation.x += 0.01; // Blue cube rotation
    blueCube.rotation.y += 0.01;

    redCube.rotation.x += 0.95 ; // Red cube rotation
    redCube.rotation.y += 0.95;

    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);
