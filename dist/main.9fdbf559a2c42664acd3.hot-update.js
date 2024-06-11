"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatesquidward"]("main",{

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n\r\n\r\n\r\n\r\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer( { antialias: true, precision:'highp' } );\r\nrenderer.setSize(window.innerWidth, window.innerHeight);\r\ndocument.body.appendChild(renderer.domElement);\r\n\r\n//Declaring Perspective camera & Scene\r\nconst camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(\r\n  45,\r\n  window.innerWidth / window.innerHeight,\r\n  0.1,\r\n  1000\r\n);\r\nconst scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\r\n\r\n// Setting orbit\r\nconst orbit = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__.OrbitControls(camera, renderer.domElement);\r\ncamera.position.set(4, 0, 10);\r\norbit.update();\r\n\r\n// directionalLight()\r\nconst hemisphereLight = new three__WEBPACK_IMPORTED_MODULE_0__.HemisphereLight(0xffffff, 0x0000, 10); // Sky color, Ground color, Intensity\r\nhemisphereLight.rotation.set(0, 1, 0);\r\nscene.add(hemisphereLight);\r\n\r\nlet mixer;\r\nconst gltfLoader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();\r\nlet model;\r\n// loadSquidward();\r\nloadBikniCity();\r\n\r\n\r\nconst clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();\r\nfunction animate() {\r\n  // raycaster.setFromCamera( pointer, camera );\r\n  if(mixer)\r\n    mixer.update(clock.getDelta());\r\n  renderer.render(scene, camera);\r\n}\r\n\r\nrenderer.setAnimationLoop(animate);\r\n\r\nwindow.addEventListener(\"resize\", function () {\r\n  camera.aspect = this.window.innerWidth / this.window.innerHeight;\r\n  camera.updateProjectionMatrix();\r\n  renderer.setSize(this.window.innerWidth, this.window.innerHeight);\r\n});\r\n\r\n\r\nfunction loadBikniCity() {\r\n  gltfLoader.load(\"src/assets/city.glb\", (gltf) => {\r\n    model = gltf.scene;\r\n    scene.add(model);\r\n    model.scale.set(.1,.1,.1)\r\n    model.rotation.set(0,-2,0)\r\n    mixer = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationMixer(model);\r\n    const clips = gltf.animations;\r\n    clips.forEach((cl) => {\r\n      const action = mixer.clipAction(cl);\r\n      action.play();\r\n    });\r\n  });\r\n}\r\n\r\nfunction loadSquidward() {\r\n  gltfLoader.load(\"src/assets/squidward.glb\", (gltf) => {\r\n    model = gltf.scene; // Assign the loaded model to the global variable\r\n    model.scale.set(8, 8, 10);\r\n    model.position.z = -3;\r\n    model.position.y = 0;\r\n    scene.add(model);\r\n    model.layers.enableAll();\r\n  });\r\n}\r\n\r\n\r\n\r\nfunction pointer(event, type) {\r\n  const mouse = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(\r\n    (event.clientX / window.innerWidth) * 2 - 1,\r\n    -(event.clientY / window.innerHeight) * 2 + 1\r\n  );\r\n\r\n  const raycaster = new three__WEBPACK_IMPORTED_MODULE_0__.Raycaster();\r\n  raycaster.setFromCamera(mouse, camera);\r\n  const intersects = raycaster.intersectObjects(scene.children, true);\r\n\r\n  if (intersects.length > 0) {\r\n    if (type === 'click') {\r\n      handleIntersectionClick(intersects[0]);\r\n    } else if (type === 'move') {\r\n      handleIntersectionMove(intersects[0]);\r\n    }\r\n  }\r\n}\r\n\r\nfunction handleIntersectionMove(intersection) {\r\n  if (intersection.faceIndex === 240) {\r\n    document.querySelector('body').style.cursor = \"pointer\";\r\n  } else {\r\n    document.querySelector('body').style.cursor = \"default\";\r\n  }\r\n}\r\n\r\nfunction  handleIntersectionClick(intersection){\r\n  console.log(intersection)\r\n  if(intersection.faceIndex == 240){\r\n    loadBikniCity()\r\n    scene.remove(model)\r\n  }\r\n};\r\n\r\nwindow.addEventListener(\"mousemove\", function(e) { pointer(e,'move'); });\r\nwindow.addEventListener(\"click\", function(e) { pointer(e,'click'); });\r\n\n\n//# sourceURL=webpack://squidward/./src/js/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0f446a7bf205bf8fa3f7")
/******/ })();
/******/ 
/******/ }
);