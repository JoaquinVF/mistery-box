import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeCanvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (!canvasRef.current) return; // Si el canvas no está disponible, no hacemos nada

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add some lights to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    camera.add(pointLight);

    // Add a cube to the scene
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add fog to the scene
    scene.fog = new THREE.FogExp2(0x000000, 0.02);

    // Position the camera
    camera.position.z = 5;
    scene.add(camera);

    // Render the scene
    const renderScene = () => {
      requestAnimationFrame(renderScene);
      cube.rotation.x += 0.001;
      cube.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    renderScene();
  }, [canvasRef]);

  return <canvas ref={canvasRef} />;
};

export default ThreeCanvas;
