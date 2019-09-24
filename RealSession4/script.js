//object constructor
class Character{
    constructor(name,energy,id){
        this.name=name;
        this.energy=energy;
        this.id=id;
    }
    display=function(){
        document.getElementById(this.id).innerHTML=`Name: ${this.name} <br> Energy : ${this.energy}`;
    }
        
        
    attack=function(opponent,item){
            let newEnergy=opponent.energy - item.ihitPoints;
            opponent.energy=newEnergy;
            opponent.display();
            document.getElementById('console').innerHTML=`${this.name} is attacking ${opponent.name} with a  ${item.img}   !`;
            if(opponent.energy <= 0){
                document.getElementById(opponent.id).innerHTML="Game Over! Try Again";
                //console.log("Hello");

            
        } 
    }
}

  


//character code
const c1 = new Character("Mario",100,"c1");
const c2 = new Character("Bowser",100,"c2");  
c1.display();
c2.display();


//items code
class Item{
    constructor(iName,ihitPoints,img){
        this.ihitPoints=ihitPoints;
        this.iName=iName;
        this.img=img;
        }
    }

const item1 = new Item('Fireball',10,'<img class="item" src="img/fireball.jpg">');
const item2 = new Item('Shell',20, '<img class="item" src="img/shell.png">');
const item3 = new Item('Blue Shell',30,'<img class="item" src="img/blueshell.png">');
const item4 = new Item('Hammer',45, '<img class="item" src="img/thwomp.png">');
const item5 = new Item('Boo', 25, '<img class="item" src="img/boo.png">');
const item6 = new Item('Banzai Bill', 50, '<img class="item" src="img/bbill.png">');
const item7 = new Item('Kitchen Sink',100, '<img class="item" src="img/ksink.jpg">');

    
    
const items=[item1,item2,item3,item4,item5,item6,item7];


      
        





//general functions
const reset = function(){
    c1.energy=100;
    c2.energy=100;
    c1.display();
    c2.display();
    iName.display();
    ihitPoints.display();
    img.display();
}

function selectItem(){
    let selection = Math.floor(Math.random()*7);
    return items[selection];
}


