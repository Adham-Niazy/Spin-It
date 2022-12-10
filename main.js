import * as THREE from 'three';
import './style.css';

// Scene
const scene = new THREE.Scene();

// Creating the Sphere
// 1) Creating the Geometry
const geometry = new THREE.SphereGeometry(3, 64, 64);
// 2) Creating the Material of the Sphere
const material = new THREE.MeshStandardMaterial({
  color: '#00ffa3',
});

// 3) Combining Geometry + Material = Mesh;
const mesh = new THREE.Mesh(geometry, material);
// 4) Then We will add the resulted (MESH) to the Scene
scene.add(mesh);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}
window.addEventListener('resize', () => {
  // Update Sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  // Update Camera
  camera.updateProjectionMatrix();
  camera.aspect = sizes.width / sizes.height;
  renderer.setSize(sizes.width, sizes.height);
  console.log("Hi");
})

// Light
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10)
scene.add(light);

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 20;
scene.add(camera);

// Renderer
const canvas = document.querySelector("#webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const loop = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
  console.log("Hi - LOOP");
}
loop();