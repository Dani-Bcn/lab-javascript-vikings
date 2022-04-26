// Soldier

class Soldier {
  constructor(health, strength) {
    this.health=health;
    this.strength=strength;  
  }
  attack(){}
  receiveDamage(){}
}
const soldier =new Soldier(100,80)

// Viking
class Viking extends Soldier {
  constructor(name,health,strength){
    super(health,strength)
  this.name=name;
  this.alive=true;
  }
  attack(){}  
  receiveDamage(addDamage){
   this.health-=saxon.strength
  if(this.alive){
      if(this.health<=0){
        war.vikingArmy.pop()      
        if (war.saxongArmy===0){alive=false}
        console.log(`${this.name} has died in act of combat`)
      }else{
        console.log(`${this.name} has received ${addDamage} points of damage`)
      }     
    }  
  }  
  battleCry(){
console.log("¡Odin Owns You All!")
  }
}
const viking= new Viking("Viky",90,50)
viking.battleCry()

// Saxon
class Saxon extends Soldier{ 
  constructor(health,strength){ 
    super(health,strength)
    this.alive=true;
  }  
  receiveDamage(addDamage){
  this.health-=viking.strength
    if(this.alive){
      if(this.health<=0){    
         war.saxonArmy.pop()    
         if (war.vikingArmy===0){alive=false}
        console.log(`A Saxon has died in combat`)
      }else{
        console.log(`A Saxon has received ${addDamage} points of damage`) 
      }           
    }
  }
}
const saxon=new Saxon(20,100)

// War
class War {
  constructor(vakingArmy,saxonArmy){
    this.vikingArmy=vakingArmy=[]
    this.saxonArmy=saxonArmy=[]
  }

addViking(add){
  for(let i=1;i<=add;i++){
    this.vikingArmy.push(viking)
  }
  console.log(this.vikingArmy)
}
addSaxon(add){
    for(let i=1;i<=add;i++){
    this.saxonArmy.push(saxon)
  }
  console.log(this.saxonArmy)
}
vikingAttack(){
  this.saxonArmy[Math.floor(Math.random(1)*10)]
  saxon.receiveDamage(viking.strength)  
}
saxonAttack(){
  this.addViking[Math.floor(Math.random(1)*1)]
  viking.receiveDamage(saxon.strength)
}
showStatus(){}
}
const war = new War()
war.addViking(10)
war.addSaxon(10)
war.vikingAttack()
war.saxonAttack()

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
