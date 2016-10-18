module scenes {
    export class Play extends objects.Scene {
         private _bg : createjs.Bitmap;
         private _enemy : objects.Enemy;
        
         private _scoreboard : objects.Label;
        constructor() {
            super();
            this.start();
        }

        public start() : void {

            //add background
            this._bg = new createjs.Bitmap(assets.getResult("Bank_BG2"));
            this.addChild(this._bg);
            stage.addChild(this);
          
            //generate first robber
            this.spawnRobber();

            //add Scoreboard Label
            this._scoreboard =new objects.Label("Score: " + gameScore, "50px Playbill", "#000000", 400, 20);
            stage.addChild(this._scoreboard);
           
        }

        public update() : void {
           this._enemy.update();
           if (!this._enemy.activeIndicator){
               
               this.spawnRobber();
           }
            stage.removeChild(this._scoreboard);
            delete this._scoreboard;
            this._scoreboard =new objects.Label("Score: " + gameScore, "50px Playbill", "#000000", 400, 20);
            stage.addChild(this._scoreboard);
        }

        robberClick(e : createjs.MouseEvent): void {
            this._enemy.shot();
            this.update();
        }

        spawnRobber() : void {
            this._enemy = new objects.Enemy("robber");
            this._enemy.on("click", this.robberClick,this);
            this.addChild(this._enemy);
        }
        
    }
}