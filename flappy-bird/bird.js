function Bird() {
    this.x = 64;
    this.y = height / 2;
    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;
    this.size = 32;
    this.hittingGround = false;

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, this.size, this.size);
    }

    this.up = function() {
        this.velocity += this.lift;
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        this.hittingGround = false;

        if (this.y > height - this.size/2) {
            this.y = height - this.size/2;
            this.velocity = 0;
            this.hittingGround = true;
        }

        if (this.y < this.size/2) {
            this.y = this.size/2;
            this.velocity = 0;
        }
    }

}
