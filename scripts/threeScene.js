// Simplified Three.js Background

const initThreeScene = () => {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 100;

  // Reduced, cleaner particles
  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 400;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 400;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 300;

    const isCyan = Math.random() > 0.8;
    colors[i * 3] = isCyan ? 0 : 0.1;
    colors[i * 3 + 1] = isCyan ? 0.96 : 0.2;
    colors[i * 3 + 2] = isCyan ? 1 : 0.3;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    vertexColors: true,
    size: 0.6,
    transparent: true,
    opacity: 0.4,
    sizeAttenuation: true
  });

  const particles = new THREE.Points(geo, mat);
  scene.add(particles);

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth - 0.5);
    mouseY = (e.clientY / window.innerHeight - 0.5);
  });

  function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.0005;
    particles.rotation.x += 0.0002;
    
    camera.position.x += (mouseX * 20 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 20 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
};

initThreeScene();
