import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Background3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const particles: THREE.Line[] = [];
    const particleCount = 150;

    for (let i = 0; i < particleCount; i++) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array([
        0, 0, 0,
        0, -Math.random() * 2 - 0.5, 0,
      ]);
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const material = new THREE.LineBasicMaterial({
        color: 0x22d3ee,
        transparent: true,
        opacity: 0.3,
      });

      const line = new THREE.Line(geometry, material);
      line.position.x = (Math.random() - 0.5) * 20;
      line.position.y = Math.random() * 10;
      line.position.z = (Math.random() - 0.5) * 10;
      scene.add(line);
      particles.push(line);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      particles.forEach((line) => {
        line.position.y -= 0.05;
        if (line.position.y < -5) line.position.y = Math.random() * 10;
      });
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden"
    />
  );
};

export default Background3D;
