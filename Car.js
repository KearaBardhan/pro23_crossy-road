class Car{
   constructor(speed){
        this.x = random([100,210,320,440,550,660,770,880,990,1100,1210]);
        this.y = height-random([150,250,350,950,1050,1150,1750,1850,1950]);
        this.drive = createSprite(this.x,this.y);
        this.drive.shapeColor = "blue";
        this.drive.scale=0.5;

        if(this.y==height-250 || this.y==height-1050 || this.y==height-1850)
        {
            speed=-speed;
            this.drive.addAnimation("car", carAnimation2)
            this.drive.scale=0.055
        }
        this.drive.velocityX = speed;

      
         if (this.y==height-150 || this.y==height-350 ||this.y==height-1950 ||this.y==height-950 ||this.y==height-1150 ||this.y==height-1750)
        {

            speed=speed;

            this.drive.addAnimation("car1", carAnimation1)
            this.drive.scale=0.055
         }
 
        
    }
   
}


