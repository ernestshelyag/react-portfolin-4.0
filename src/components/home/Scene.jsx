import React, { Component } from 'react'
import * as THREE from 'three'

class Scene extends Component {
  constructor(props) {
    super (props);
    this.start = this.start.bind(this);
    this.animate = this.animate.bind(this);
  }
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({ color: '#49C5B6', wireframe: true });
    const cube = new THREE.Mesh(geometry, material);

    camera.position.z = 6
    scene.add(cube);
    renderer.setClearColor('#fff');
    renderer.setSize(width, height);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.material = material;
    this.cube = cube;
    this.mount.appendChild(this.renderer.domElement);
    this.start()
  }
  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
  animate() {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate)
  }
  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }
  render() {
    return (
      <div className = "Scene" ref = {(mount) => { this.mount = mount }} />
    )
  }
}

export default Scene
