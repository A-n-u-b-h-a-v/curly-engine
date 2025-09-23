class Controls{
    constructor(contolType){
        this.forward=false;
        this.left=false;
        this.right=false;
        this.reverse=false;
        switch (contolType) {
            case "KEYS":
                this.#addKeyboardListners();
                break;
        
            case "DUMMY":
                this.forward=true;
                break
        }
    }
    #addKeyboardListners() {
    const leftKeys = ["ArrowLeft", "a", "A"];
    const rightKeys = ["ArrowRight", "d", "D"];
    const upKeys = ["ArrowUp", "w", "W"];
    const downKeys = ["ArrowDown", "s", "S"];

    document.onkeydown = (event) => {
        if (leftKeys.includes(event.key)) this.left = true;
        if (rightKeys.includes(event.key)) this.right = true;
        if (upKeys.includes(event.key)) this.forward = true;
        if (downKeys.includes(event.key)) this.reverse = true;
    };

    document.onkeyup = (event) => {
        if (leftKeys.includes(event.key)) this.left = false;
        if (rightKeys.includes(event.key)) this.right = false;
        if (upKeys.includes(event.key)) this.forward = false;
        if (downKeys.includes(event.key)) this.reverse = false;
    };
}

}