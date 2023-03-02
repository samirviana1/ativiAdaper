// a interface weapon
interface Iweapon {
  use(): void;
}
// class cliente que depende da interface weapon
class Client {
  attack(weapon: Iweapon) {
    weapon.use();
  }
}
// class que o cliente quer usar no attack
class Sword {
  slash() {
    console.log("Sword slash");
  }
}
// class que o cliente quer usar no attack
class MachineGun {
  fire() {
    console.log("Machine Gun fire");
  }
}

// -- usar weapon sem adapter causa uma incopatibilidade de interfaces, porque o cliente espera uma interface weapon e recebe class com um metodo de attack sword
const clientNew = new Client();
clientNew.attack(new Sword());

//Uso do ADAPTER para ultilizar corretamente o metodo attack da class weapon

class SwordAdapter extends Sword implements Iweapon {
  use() {
    this.slash();
  }
}
