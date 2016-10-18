var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.call(this);
            this.start();
        }
        Play.prototype.start = function () {
            //add background
            this._bg = new createjs.Bitmap(assets.getResult("Bank_BG2"));
            this.addChild(this._bg);
            stage.addChild(this);
            //generate first robber
            this.spawnRobber();
            //add Scoreboard Label
            this._scoreboard = new objects.Label("Score: " + gameScore, "50px Playbill", "#000000", 400, 20);
            stage.addChild(this._scoreboard);
        };
        Play.prototype.update = function () {
            this._enemy.update();
            if (!this._enemy.activeIndicator) {
                this.spawnRobber();
            }
            stage.removeChild(this._scoreboard);
            delete this._scoreboard;
            this._scoreboard = new objects.Label("Score: " + gameScore, "50px Playbill", "#000000", 400, 20);
            stage.addChild(this._scoreboard);
        };
        Play.prototype.robberClick = function (e) {
            this._enemy.shot();
            this.update();
        };
        Play.prototype.spawnRobber = function () {
            this._enemy = new objects.Enemy("robber");
            this._enemy.on("click", this.robberClick, this);
            this.addChild(this._enemy);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map