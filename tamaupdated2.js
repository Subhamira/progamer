
		$(function(){
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
           $ ('#AA').html=(this.name +" got "+X+ ". He wins !!")
            return true; }  
                    
            else{
             $('#AA').html=("Try again, "+this.name+ " got = "+ X)}
            return false;

                        };
           

      this.getpower=function(){
        		
       			 var r = this.myDice()
          		if (r==+false){
                    this.scount=this.scount-5;this.fcount=this.fcount-5;
                    $('#BB').html=(this.name+" size is = "+this.size_count+" ;His  energy is = "+this.scount+";His hunger level = "+this.fcount)
                 }
                
        		else {
                this.size_count=this.size_count+5;
                $('#BB').html=(this.name+" size is ="+this.size_count +";His energy = "+this.scount+";His hunger level = "+this.fcount)
                 }
            
            if (this.scount <25 && this.fcount < 25){
                  $('#warning').html=("warning !!! "+this.name+" needs food and rest.")}

             if(this.size_count<25){
                  $('#CC').html=(this.name +" is "+this.mood[2]+" ; "+this.hungry_level[0]+" & "+this.energy[0]+" ; "+this.name+" "+" is "+" "+this.super_power[0]+" "+"now !!!")}
            else if(26<this.size_count && this.size_count<50){
                  $('#CC').html=(this.name +" is "+this.mood[1]+" ; "+this.hungry_level[1]+" & "+this.energy[0]+" ; "+this.name+" can "+this.super_power[1]+" now !!!")
         		       $('#img3').src=("https://media.giphy.com/media/14x1sbHPjRH44w/giphy.gif")}
            else if(51<this.size_count && this.size_count<75){
                  $('#CC').html=(this.name +" is "+this.mood[0]+" ; "+this.hungry_level[1]+" but "+this.energy[1]+" ; "+this.name+" can "+this.super_power[2]+"!!!")
         		       $('#img3').src="https://media.giphy.com/media/3Da0hfJkr6agU/giphy.gif"}
             if(76<this.size_count &&this.size_count <100){
                  $('#CC').html=(this.name +" is "+this.mood[0]+" ; "+this.hungry_level[2]+" & "+this.energy[2]+" ; "+this.name+" got the last power--- "+this.super_power[3]+"!!!")
                    $('#img3').src="http://i1.kym-cdn.com/photos/images/original/000/791/080/c4a.gif" }
             if(this.size_count>100){
             // this.gcount=gcount+1
              $('#CC').html=(this.name+""+this.super_power[4]+"!!! and "+this.name+" becomes GURU")
             $('#img3').src="https://archive-media-1.nyafuu.org/vp/image/1408/49/1408491832597.png"}
            
					//this.disable=function() {
						//		if(this.fcount===0){
   						//	 document.getElementById("btn1").disabled = true;
								//				}}


            if (this.size_count>100 && this.fcount > 0){
              this.fcount=100;this.scount=100;this.size_count=0}

						
             if ($(this.fcount === 0 && this.scount === 0)){
							 				
							 			 $('#warning').html=(this.name+" is Dead")
                      $('#CC').html=("Game over") }
                    
            					 } 
						
                                    
			   this.feed=function(){

                $('#DD').html=("His hunger level = "+this.fcount)
                //if(25<=this.fcount && this.fcount<=100){
                  // document.getElementById("EE").innerHTML=(this.mood[1]+" "+this.hungry_level[0]+" "+this.energy[0])}
                 if (5<=this.fcount && this.fcount<=25){
                    $('#FF').html=("warning :"+this.name+" is dying.He needs foooood!!!")}
                  else if (this.fcount < 5 && this.scount < 5){
                      $('#FF').html=(this.name+" is Dead")}
//                   
                             }
				 
					
                  


        this.sleep=function(){
            $('#GG').html=("His energy is = "+this.scount)
                //if(25<=this.scount && this.scount<=100){
                    //document.getElementById("HH").innerHTML=(this.mood[1]+" "+this.hungry_level[0]+" "+this.energy[0])}
           if (5<=this.scount &&this.scount<=25){
             $('#II').html=("warning : "+this.name+" is dying.He needs sleep!!!")}
           else if (this.fcount === 5 && this.scount === 5){
              $('#II').html=(this.name+" is Dead")}                     

                                }
          this.confirm= function(){
           var ans= confirm("Do you want to Quit?");
              if (ans === true) {
              document.links("http://localhost:8888/html/tamaupdated1.html".href)}
            
        	              }
			      
					
         		};
		});

myPET=new Pet()
myPET.disable();
