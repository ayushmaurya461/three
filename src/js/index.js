import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const renderer = new THREE.WebGLRenderer( { antialias: true, precision:'highp' } );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Declaring Perspective camera & Scene
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const scene = new THREE.Scene();

// Setting orbit
const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(4, 0, 10);
orbit.update();

// directionalLight()
const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x0000, 10); // Sky color, Ground color, Intensity
hemisphereLight.rotation.set(0, 1, 0);
scene.add(hemisphereLight);

let mixer;
const gltfLoader = new GLTFLoader();
let model;
// loadSquidward();
loadBikniCity();


const clock = new THREE.Clock();
function animate() {
  // raycaster.setFromCamera( pointer, camera );
  if(mixer)
    mixer.update(clock.getDelta());
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", function () {
  camera.aspect = this.window.innerWidth / this.window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(this.window.innerWidth, this.window.innerHeight);
});


function loadBikniCity() {
  gltfLoader.load("src/assets/city.glb", (gltf) => {
    model = gltf.scene;
    scene.add(model);
    model.scale.set(.1,.1,.1)
    model.rotation.set(0,-2,0)
    mixer = new THREE.AnimationMixer(model);
    const clips = gltf.animations;
    clips.forEach((cl) => {
      const action = mixer.clipAction(cl);
      action.play();
    });
  });
}

function loadSquidward() {
  gltfLoader.load("src/assets/squidward.glb", (gltf) => {
    model = gltf.scene; // Assign the loaded model to the global variable
    model.scale.set(8, 8, 10);
    model.position.z = -3;
    model.position.y = 0;
    scene.add(model);
    model.layers.enableAll();
  });
}



function pointer(event, type) {
  const mouse = new THREE.Vector2(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  );

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children, true);

  if (intersects.length > 0) {
    if (type === 'click') {
      handleIntersectionClick(intersects[0]);
    } else if (type === 'move') {
      handleIntersectionMove(intersects[0]);
    }
  }
}

function handleIntersectionMove(intersection) {
  if (intersection.faceIndex === 240) {
    document.querySelector('body').style.cursor = "pointer";
  } else {
    document.querySelector('body').style.cursor = "default";
  }
}

function  handleIntersectionClick(intersection){
  console.log(intersection)
  if(intersection.faceIndex == 240){
    loadBikniCity()
    scene.remove(model)
  }
};

window.addEventListener("mousemove", function(e) { pointer(e,'move'); });
window.addEventListener("click", function(e) { pointer(e,'click'); });
