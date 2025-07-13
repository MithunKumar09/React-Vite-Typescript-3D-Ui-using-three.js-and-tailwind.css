// frontend/src/components/Home/Background3D.tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const Background3D: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) return;

        // Scene setup
        const scene = new THREE.Scene();

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        currentMount.appendChild(renderer.domElement);

        // Responsive design
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Geometry & Material (example: animated particles)
        const geometry = new THREE.BufferGeometry();
        const particlesCount = 5000;
        const positions = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 20;
        }

        geometry.setAttribute(
            'position',
            new THREE.BufferAttribute(positions, 3)
        );

        const material = new THREE.PointsMaterial({
            color: 0x00ffff,
            size: 0.05,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        // Animate
        const animate = () => {
            requestAnimationFrame(animate);
            points.rotation.y += 0.0005;
            points.rotation.x += 0.0002;
            renderer.render(scene, camera);
        };

        animate();

        // GSAP background transitions
        gsap.to(camera.position, {
            z: 4,
            duration: 2,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true,
        });

        // Cleanup
        return () => {
            currentMount.removeChild(renderer.domElement);
        };
    }, []);

return <div ref={mountRef} className="fixed top-0 left-0 w-screen h-screen z-0" />;

};

export default Background3D;
