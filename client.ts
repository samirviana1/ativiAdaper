// a interface weapon
interface Iweapon {
  use(): void;
}
// class Heroi que depende da interface weapon
class Heroi {
  attack(weapon: Iweapon) {
    weapon.use();
  }
}
// class que o Heroi quer usar no attack
class Sword {
  slash() {
    console.log("Sword slash");
  }
}
// class que o Heroi quer usar no attack
class MachineGun {
  fire() {
    console.log("Machine Gun fire");
  }
}

// -- usar weapon sem adapter causa uma incopatibilidade de interfaces, porque o Heroi espera uma interface weapon e recebe class com um metodo de attack sword
const HeroiNew = new Heroi();
HeroiNew.attack(new Sword());

//Uso do ADAPTER para ultilizar corretamente o metodo attack da class sword

class SwordAdapter extends Sword implements Iweapon {
  use() {
    this.slash();
  }
}

HeroiNew.attack(new SwordAdapter());
