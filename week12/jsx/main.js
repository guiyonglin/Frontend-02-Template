import { Component,  } from './framework.js'

class Carousel {
    constructor() {
        this.root = document.createElement("div");
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }
    appendChild(child) {
        child.mountTo(this.root);
    }
    mountTo(parent) {
        parent.appendChild(this.root)
    }
}

let a = <Carousel id="a">
        <span>a</span>
        <span>b</span>
        <span>c</span>
    </Carousel>

a.mountTo(document.body)