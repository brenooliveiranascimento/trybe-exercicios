const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAtack = (dragon) => {
  const minDamage = 15;
  const maxDamage = dragon.strength;
  const randomDamage = Math.floor(Math.random() * (maxDamage - minDamage) + minDamage)
  return randomDamage
}

const warriorAtack = (warrior) => {
  const minDamage = warrior.strength;
  const maxDamage = warrior.strength  * warrior.weaponDmg;
  const randomDamage = Math.floor(Math.random() * (maxDamage - minDamage) + minDamage)
  return randomDamage
}

const mageAtack = (mage) => {
  const mageMana = mage.mana;
  const minDamage = mage.intelligence;
  const maxDamage = mage.intelligence *2;

  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if(mageMana > 15) {
    const randomDamage = Math.floor(Math.random() * (maxDamage - minDamage) + minDamage);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = randomDamage;
    return turnStats;
  }
  return turnStats
}

const gameActions = {
  warriorTurn: (warriorAtack) => {
    const warriorDamage = warriorAtack(warrior)
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage
    console.log(warrior, dragon);
  },
  magrTurn: (mageAtack) => {
    const mageTurnState = mageAtack(mage);
    const mageDamage = mageTurnState.damageDealt
    mage.damage = mageDamage;
    mage.mana -= mageTurnState.manaSpent;
    dragon.healthPoints -= mageDamage
  },
  dragonTurn: (dragonAtack) => {
    const dragonDamage = dragonAtack(dragon);
    dragon.damage = dragonDamage;
    warrior.healthPoints -= dragonDamage;
    mage.healthPoints -= dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAtack);
gameActions.magrTurn(mageAtack);
gameActions.dragonTurn(dragonAtack);
console.log(gameActions.turnResults());