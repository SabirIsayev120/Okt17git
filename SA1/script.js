import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.136/build/three.module.js';
// Divarlar üçün material və ölçü
const wallMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
const wallThickness = 0.5;
const wallSize = 12; // Oyun sahəsinin ölçüsü



camera.position.set(0, 0, 15); // Kameranı geri çək ki, hər şey görünsün
// Səhnə, kamera və renderer yaradılır
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// İlanın hissələri
let snake = [];
let snakeLength = 5;
let direction = new THREE.Vector3(1, 0, 0);
let speed = 0.2;

// İlan üçün kublar əlavə edilir
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff09 });

for (let i = 0; i < snakeLength; i++) {
    let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = -i;
    scene.add(cube);
    snake.push(cube);
}

// Yem yaradılır
const foodGeometry = new THREE.SphereGeometry(0.3, 16, 16);
const foodMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const food = new THREE.Mesh(foodGeometry, foodMaterial);
scene.add(food);
food.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, 0);

camera.position.z = 5;

// Klaviatura idarəetməsi
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") direction.set(0, 1, 0);
    if (event.key === "ArrowDown") direction.set(0, -1, 0);
    if (event.key === "ArrowLeft") direction.set(-1, 0, 0);
    if (event.key === "ArrowRight") direction.set(1, 0, 0);
});

// Oyunun yenilənməsi
function animate() {
    requestAnimationFrame(animate);

    // Yeni baş mövqeyi
    let head = snake[0].position.clone().add(direction.clone().multiplyScalar(speed));

    // İlanı hərəkət etdir
    for (let i = snake.length - 1; i > 0; i--) {
        snake[i].position.copy(snake[i - 1].position);
    }
    snake[0].position.copy(head);

    // Yem yeyildikdə
    if (head.distanceTo(food.position) < 0.5) {
        let newCube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        newCube.position.copy(snake[snake.length - 1].position);
        scene.add(newCube);
        snake.push(newCube);

        food.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, 0);
    }

    renderer.render(scene, camera);
}
scene.background = new THREE.Color(0x202020); // Qara yerinə tünd boz fon
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.set(0, 0, 10); // Kameranı geriyə çək ki, obyektlər görünsün

console.log(snake);
console.log(food);



const cubeGeometry = new THREE.BoxGeometry(1, 1, 1); // 1x1 ölçüdə ilan hissələri

const foodGeometry = new THREE.SphereGeometry(0.5, 16, 16);
animate();
'