var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy(imageString) {
            _super.call(this, enemyAtlas, imageString, "poof");
            //randomize life
            var min = Math.ceil(1);
            var max = Math.floor(5);
            this._life = Math.floor(Math.random() * (max - min + 1)) + min;
            this.setPosition(this.position);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            // Register mouseover and mouseout event listeners. 
            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);
        }
        Object.defineProperty(Enemy.prototype, "life", {
            get: function () {
                return this._life;
            },
            enumerable: true,
            configurable: true
        });
        Enemy.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        Enemy.prototype.setPosition = function (pos) {
            this.x = ((Math.random() * (config.Screen.WIDTH - 150))) + 30;
            this.y = ((Math.random() * (config.Screen.HEIGHT - 230) - 150)) + 230;
        };
        Enemy.prototype.getPosition = function () {
            return new objects.Vector2(this.x, this.y);
        };
        Enemy.prototype.shot = function () {
            this._life--;
            if (this._life == 0) {
                this._dead();
            }
        };
        Enemy.prototype._dead = function () {
            console.log("dead");
            gameScore += 5;
            this.destroy();
        };
        // Modify the bitmaps alpha value when hovering over the button
        Enemy.prototype.overButton = function (event) {
            event.currentTarget.alpha = 0.7;
        };
        // Modify the bitmaps alphave when mouse is not hovering
        Enemy.prototype.outButton = function (event) {
            event.currentTarget.alpha = 1.0;
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map