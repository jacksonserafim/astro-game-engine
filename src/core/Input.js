export class InputHandler {
    constructor() {
        this.keys = {}

        window.addEventListener('keydown', (event) => {
            const key = event.key.toLowerCase();

            if ([' ', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(key)) {
                e.preventDefault();
            }

            this.keys[key] = true;
        });

        window.addEventListener('keyup', (e) => {
            this.keys[e.key.toLowerCase()] = false;
        });

        window.addEventListener('blur', () => {
            this.keys = {};
        });
    }

    isDown(key) {
        return !!this.keys[key.toLowerCase()];
    }
}