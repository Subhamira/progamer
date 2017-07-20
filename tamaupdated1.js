
		
			Pet=function (){
 				this.name ="Halucha"
 				this.mood=["Happy,he got few super powers","cool ,he is turning in to super hero","Sad he is yet to get powers"]
 				this.hungry_level=["Tummyfull","not hungry","Hungry"]
 				this.energy=["focussed","tired","lost interest"]
 				this.super_power=["Growing","Fly","Evaporate people","Lightening","Hatches"]
 				this.guru=["baby","medium","large","gigantic"]
 				this.fcount=100;this.scount=100;
 				this.size_count=0;this.gcount=0
 

 			this.myDice=function(){
            
           var X= Math.floor(Math.random()*6+1);
            if (X===6 ||X===2 ||X===4){
            document.getElementById("AA").innerHTML=(this.name +" got "+X+ ". He wins !!")
            return true; }  
                    
            else{
             document.getElementById("AA").innerHTML=("Try again, "+this.name+ " got = "+ X)}
            return false;

                        };
           

      this.getpower=function(){
        		
       			 var r = this.myDice()
          		if (r==+false){
                    this.scount=this.scount-5;this.fcount=this.fcount-5;
                    document.getElementById('BB').innerHTML=(this.name+" size is = "+this.size_count+" ;His  energy is = "+this.scount+";His hunger level = "+this.fcount)
                 }
                
        		else {
                this.size_count=this.size_count+5;
                document.getElementById('BB').innerHTML=(this.name+" size is ="+this.size_count +";His energy = "+this.scount+";His hunger level = "+this.fcount)
                 }
            
            if (this.scount <25 && this.fcount < 25){
                  document.getElementById('warning').innerHTML=("warning !!! "+this.name+" needs food and rest.")}

             if(this.size_count<25){
                  document.getElementById("CC").innerHTML=(this.name +" is "+this.mood[2]+" ; "+this.hungry_level[0]+" & "+this.energy[0]+" ; "+this.name+" "+" is "+" "+this.super_power[0]+" "+"now !!!")}
            else if(26<this.size_count && this.size_count<50){
                  document.getElementById("CC").innerHTML=(this.name +" is "+this.mood[1]+" ; "+this.hungry_level[1]+" & "+this.energy[0]+" ; "+this.name+" can "+this.super_power[1]+" now !!!")
         		       document.getElementById("img3").src=("https://media.giphy.com/media/14x1sbHPjRH44w/giphy.gif")}
            else if(51<this.size_count && this.size_count<75){
                  document.getElementById("CC").innerHTML=(this.name +" is "+this.mood[0]+" ; "+this.hungry_level[1]+" but "+this.energy[1]+" ; "+this.name+" can "+this.super_power[2]+"!!!")
         		       document.getElementById("img3").src="https://media.giphy.com/media/3Da0hfJkr6agU/giphy.gif"}
             if(76<this.size_count &&this.size_count <100){
                  document.getElementById("CC").innerHTML=(this.name +" is "+this.mood[0]+" ; "+this.hungry_level[2]+" & "+this.energy[2]+" ; "+this.name+" got the last power--- "+this.super_power[3]+"!!!")
                    document.getElementById("img3").src="http://i1.kym-cdn.com/photos/images/original/000/791/080/c4a.gif"}
             if(this.size_count>100){
             // this.gcount=gcount+1
              document.getElementById("CC").innerHTML=(this.name+""+this.super_power[4]+"!!! and "+this.name+" becomes GURU")
             document.getElementById("img3").src="https://archive-media-1.nyafuu.org/vp/image/1408/49/1408491832597.png"}
            
					


            if (this.size_count>100 && this.fcount>=0){
              this.fcount=100;this.scount=100;this.size_count=0}


             if (this.fcount ===0 && this.scount ===0){
                      document.getElementById("warning").innerHTML=(this.name+" is Dead")
                      document.getElementById("CC").innerHTML=("Game over")
										document.getElementById("img3").src="http://clipartbarn.com/wp-content/uploads/2016/10/Tombstone-clip-art-gravestone-clipart-kid.png"
						 					$('#btn1').prop('disabled',true)}
                    
            

                   } 

                                    
			   this.feed=function(){

                document.getElementById("DD").innerHTML=("His hunger level = "+this.fcount)
                //if(25<=this.fcount && this.fcount<=100){
                  // document.getElementById("EE").innerHTML=(this.mood[1]+" "+this.hungry_level[0]+" "+this.energy[0])}
                 if (5<=this.fcount && this.fcount<=25){
                    document.getElementById("FF").innerHTML=("warning :"+this.name+" is dying.He needs foooood!!!")}
                  else if (this.fcount < 5 && this.scount < 5){
                      document.getElementById("FF").innerHTML=(this.name+" is Dead")}
//                   
                             }
                  


        this.sleep=function(){
            document.getElementById("GG").innerHTML=("His energy is = "+this.scount)
                //if(25<=this.scount && this.scount<=100){
                    //document.getElementById("HH").innerHTML=(this.mood[1]+" "+this.hungry_level[0]+" "+this.energy[0])}
           if (5<=this.scount &&this.scount<=25){
             document.getElementById("II").innerHTML=("warning : "+this.name+" is dying.He needs sleep!!!")}
           else if (this.fcount < 5 && this.scount < 5){
              document.getElementById("II").innerHTML=(this.name+" is Dead")}                     

                                }
          this.confirm= function(){
           var ans= confirm("Do you want to Quit?");
              if (ans === true) {
              document.links("https://images6.alphacoders.com/410/410435.jpg".href)}
            
        	              }
			  
					
					
					
					
         		};
        
myPET=new Pet()


