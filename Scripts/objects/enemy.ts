module objects {
    export class Enemy extends objects.GameObject {

        private _move : objects.Vector2;
        private _speed : number;

        private _life : number;

        // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        constructor(imageString:string) {
            super(enemyAtlas, imageString, "poof");
            //randomize life
            var min = Math.ceil(1);
            var max = Math.floor(5);
            this._life  = Math.floor(Math.random() * (max - min + 1)) + min
            this.setPosition(this.position);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
             // Register mouseover and mouseout event listeners. 
            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);
            
            
        }

        get life() : number {
            return this._life;
        }

        public update() : void {
             super.update();
        }

        public setPosition(pos : objects.Vector2) : void {
            this.x = ((Math.random() * (config.Screen.WIDTH -150))) +30;
            this.y = ((Math.random() * (config.Screen.HEIGHT -230)-150))+230;
        }

        public getPosition() : objects.Vector2 {
            return new objects.Vector2(this.x, this.y);
        }

        public shot() : void {
            this._life--;
            if (this._life==0){
                this._dead();
            }
        }

        private _dead() : void {
            console.log("dead");
            gameScore += 5;
            this.destroy();
            
        }

         // Modify the bitmaps alpha value when hovering over the button
        overButton(event: createjs.MouseEvent) : void {
            event.currentTarget.alpha = 0.7;
        }
        
        // Modify the bitmaps alphave when mouse is not hovering
        outButton(event:createjs.MouseEvent) : void {
            event.currentTarget.alpha = 1.0;
        }
    }
}