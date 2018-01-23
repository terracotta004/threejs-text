var renderer,
  scene,
  camera,
  myCanvas = document.getElementById('myCanvas');



//RENDERER
renderer = new THREE.WebGLRenderer({canvas: myCanvas, antialias: true});
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

//CAMERA
camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);

//SCENE
scene = new THREE.Scene();

//LIGHTS
var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);

var loader = new THREE.FontLoader();
let font = loader.parse(fontJSON);
var geometry = new THREE.TextGeometry("hello world", {font: font, size: 120, height: 10, material: 0, bevelThickness: 1, extrudeMaterial: 1});  //TextGeometry(text, parameters)

var material = new THREE.MeshLambertMaterial({color: 0xF3FFE2});
var mesh = new THREE.Mesh(geometry, material);
mesh.position.z = -100;

scene.add(mesh);
camera.position.set(425, 30, 900);

//RENDER LOOP
render();

var delta = 0;
function render() {
   // mesh.rotation.x += 0.01;
   // mesh.rotation.y += 0.01;

    //delta += 0.1;
    //geometry.vertices[0].x = -25 + Math.sin(delta) * 50;
    //geometry.verticesNeedUpdate = true;

  renderer.render(scene, camera);

  requestAnimationFrame(render);
}