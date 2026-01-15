class Controls{
    constructor(controlType){
        this.forward=false;
        this.left=false;
        this.right=false;
        this.reverse=false;

        switch (controlType) {
            case "KEYS":
                this.#addKeyboardListeners();
                break;
        
            case "DUMMY":
                this.forward=true;
                break
        }
    }
    #addKeyboardListeners() {
        this.keys={
            ArrowLeft:false, ArrowRight:false, ArrowUp:false, ArrowDown:false,
            a:false, d:false, w:false, s:false, 
            A:false, D:false, W:false, S:false
        };

        document.addEventListener("keydown",(event)=>{
            this.keys[event.key]=true;
            this.#updateState();
        });
        document.addEventListener("keyup",(event)=>{
            this.keys[event.key]=false;
            this.#updateState();
        });
    }

    #updateState(){
        this.left = this.keys.ArrowLeft || this.keys.a || this.keys.A;
        this.right = this.keys.ArrowRight || this.keys.d || this.keys.D;
        this.forward = this.keys.ArrowUp || this.keys.w || this.keys.W;
        this.reverse = this.keys.ArrowDown || this.keys.s || this.keys.S;
    }
}