import * as THREE from 'three';

// Colors
export const COLOR_EMERALD_DARK = new THREE.Color('#005C35'); // Deeper, richer green
export const COLOR_EMERALD_LIGHT = new THREE.Color('#00FF55'); // High saturation vibrant green
export const COLOR_GOLD_METALLIC = new THREE.Color('#D4AF37');
export const COLOR_GOLD_BRIGHT = new THREE.Color('#FFD700'); // Pure Gold
export const COLOR_GOLD_PALE = new THREE.Color('#FFE4B5'); // Moccasin/Cream (less white)
export const COLOR_ROSE_GOLD = new THREE.Color('#E0BFB8');
export const COLOR_RED_ACCENT = new THREE.Color('#FF0000'); // Vibrant Red

// Configuration
export const PARTICLE_COUNT = 3000;
export const ORNAMENT_RATIO = 0.15; // 15% of particles are ornaments
export const TREE_HEIGHT = 12;
export const TREE_RADIUS_BOTTOM = 4.5;
export const SCATTER_RADIUS = 15;

// Animation Settings
export const TRANSITION_SPEED = 2.5; // Lower is slower/smoother (using MathUtils.damp factor)