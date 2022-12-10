import * as THREE from 'three';

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

// Camera
const camera = new THREE.PerspectiveCamera(45, 800, 600);
scene.add(camera);