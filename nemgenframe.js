//ARCHETYPE
//==================================================================
function createSelect() {
    var arch = document.getElementById("archetype");
  
    var priStat = "4";
    var secStat = "3";
    var unStat = "2";
    var probStat = "1";
    var priSkill = "3";
    var secSkill = "2";
    var terSkill = "1";
  
    //BULWARK
    if (arch.options[arch.selectedIndex].text == "Bulwark") {
      //STATS
      document.querySelector(".str").innerText = secStat;
      document.querySelector(".dex").innerText = probStat;
      document.querySelector(".con").innerText = priStat;
      document.querySelector(".int").innerText = unStat;
      document.querySelector(".will").innerText = priStat;
      document.querySelector(".per").innerText = secStat;
      document.querySelector(".cha").innerText = unStat;
  
      //SKILLS
      document.querySelector(".pris").innerText = priSkill;
      document.querySelector(".secs").innerText = secSkill;
      document.querySelector(".ters").innerText = terSkill;
      document.querySelector(".primary").innerText = `Shields, Nerve, Endurance`;
      document.querySelector(
        ".secondary"
      ).innerText = `Halberds/Spears, Rifles/Shotguns`;
      document.querySelector(".tertiary").innerText = `Spot`;
  
      //ABILITIES
      document.querySelector(
        ".abilities"
      ).innerText += `Bulwarks can wield two-handed weapons with a shield, though not with another weapon.\n\n`;
  
      //EQUIPMENT
      document.querySelector(
        ".archArmor"
      ).innerText = `Heavy, Field/Shield split.\n\n`;
      //Qualifying Races
      document.querySelector(".qRace").innerText = "Titan, Human, Minotaur";
    } else if (arch.options[arch.selectedIndex].text == "Berserker") {
      //STATS
      document.querySelector(".str").innerText = priStat;
      document.querySelector(".dex").innerText = priStat;
      document.querySelector(".con").innerText = secStat;
      document.querySelector(".int").innerText = probStat;
      document.querySelector(".will").innerText = unStat;
      document.querySelector(".per").innerText = unStat;
      document.querySelector(".cha").innerText = secStat;
  
      //SKILLS
      document.querySelector(".pris").innerText = priSkill;
      document.querySelector(".secs").innerText = secSkill;
      document.querySelector(".ters").innerText = terSkill;
      document.querySelector(
        ".primary"
      ).innerText = `Axes/Hammers, CQC/Juggernaut, Swords`;
      document.querySelector(".secondary").innerText = `Threaten, Spot, Nerve`;
      document.querySelector(".tertiary").innerText = `Acrobatics`;
  
      //ABILITIES
      document.querySelector(
        ".abilities"
      ).innerText += `Berserkers may ignore both death and limb crippling for a number of rounds equal to their Charisma, regardless of damage inflicted.\n\n`;
  
      //EQUIPMENT
      document.querySelector(
        ".archArmor"
      ).innerText = `Light/None, Fields only​.\n\n`;
  
      //Qualifying Races
      document.querySelector(".qRace").innerText = "Ork, Minotaur, Titan";
    } else if (arch.options[arch.selectedIndex].text == "Trickster") {
      //STATS
      document.querySelector(".str").innerText = unStat;
      document.querySelector(".dex").innerText = secStat;
      document.querySelector(".con").innerText = probStat;
      document.querySelector(".int").innerText = priStat;
      document.querySelector(".will").innerText = priStat;
      document.querySelector(".per").innerText = secStat;
      document.querySelector(".cha").innerText = priStat;
  
      //SKILLS
      document.querySelector(".pris").innerText = priSkill;
      document.querySelector(".secs").innerText = secSkill;
      document.querySelector(".ters").innerText = terSkill;
      document.querySelector(
        ".primary"
      ).innerText = `Spot, Convince, Lie, Threaten, Craft, Knowledge, Endurance, Nerve`;
      document.querySelector(
        ".secondary"
      ).innerText = `Handguns, Daggers, Stealth`;
      document.querySelector(".tertiary").innerText = `All Noncombat`;
  
      //ABILITIES
      document.querySelector(
        ".abilities"
      ).innerText += `Tricksters may add their Intelligence or Charisma to the attack dice of any creature, machine, or other entity under their command. They may also add their Lie or Convince skills to Active Defense. They also gain access to the "Trickster Specialty" category when rolling for Traits.\n\n`;
  
      //EQUIPMENT
      document.querySelector(
        ".archArmor"
      ).innerText = `Medium, Shield/Field split.\n\n`;
      //Qualifying Races
      document.querySelector(".qRace").innerText =
        "Human, Ork, Galvan, Halfling, Mitra";
    } else if (arch.options[arch.selectedIndex].text == "Duelist") {
      //STATS
      document.querySelector(".str").innerText = probStat;
      document.querySelector(".dex").innerText = priStat;
      document.querySelector(".con").innerText = secStat;
      document.querySelector(".int").innerText = secStat;
      document.querySelector(".will").innerText = unStat;
      document.querySelector(".per").innerText = priStat;
      document.querySelector(".cha").innerText = priStat;
  
      //SKILLS
      document.querySelector(".pris").innerText = priSkill;
      document.querySelector(".secs").innerText = secSkill;
      document.querySelector(".ters").innerText = terSkill;
      document.querySelector(
        ".primary"
      ).innerText = `Staffs/Swords, Submachine Guns/Handguns, Lie, Acrobatics`;
      document.querySelector(".secondary").innerText = `Nerve, Stealth, Convince`;
      document.querySelector(".tertiary").innerText = `Craft, Pilot, Knowledge`;
  
      //ABILITIES
      document.querySelector(
        ".abilities"
      ).innerText += `Each round a Duelist is in direct combat with a target after the first, they permanently get 10% higher dice pools against that target for all combat related checks, up to a 100% bonus. This bonus never fades on its own, but all dice pool bonuses count towards the same cap. (10% against 10 different people, 20 against 5, etc)\n\n`;
  
      //EQUIPMENT
      document.querySelector(
        ".archArmor"
      ).innerText = `Light, Field/Shield split.\n\n`;
  
      //Qualifying Races
      document.querySelector(".qRace").innerText = "Human, Mitra, Ork, Dryad";
    } else if (arch.options[arch.selectedIndex].text == "Shank") {
      //STATS
      document.querySelector(".str").innerText = unStat;
      document.querySelector(".dex").innerText = priStat;
      document.querySelector(".con").innerText = probStat;
      document.querySelector(".int").innerText = unStat;
      document.querySelector(".will").innerText = secStat;
      document.querySelector(".per").innerText = priStat;
      document.querySelector(".cha").innerText = secStat;
  
      //SKILLS
      document.querySelector(".pris").innerText = priSkill;
      document.querySelector(".secs").innerText = secSkill;
      document.querySelector(".ters").innerText = terSkill;
      document.querySelector(
        ".primary"
      ).innerText = `Daggers, Handguns/Submachine Guns, Stealth`;
      document.querySelector(
        ".secondary"
      ).innerText = `Convince, Acrobatics, Spot`;
      document.querySelector(".tertiary").innerText = `Endurance, Lie`;
  
      //ABILITIES
      document.querySelector(
        ".abilities"
      ).innerText += `Shanks gain doubled stealth bonuses from cover of all kinds, and may Stealth as a move or standard action mid-combat.\n\n`;
  
      //EQUIPMENT
      document.querySelector(
        ".archArmor"
      ).innerText = `Light, Shield/Field split.\n\n`;
  
      //Qualifying Races
      document.querySelector(".qRace").innerText =
        "Human, Mitra, Halfling, Dryad";
    } else if (arch.options[arch.selectedIndex].text == "Ranger") {
      //STATS
      document.querySelector(".str").innerText = secStat;
      document.querySelector(".dex").innerText = secStat;
      document.querySelector(".con").innerText = secStat;
      document.querySelector(".int").innerText = secStat;
      document.querySelector(".will").innerText = secStat;
      document.querySelector(".per").innerText = secStat;
      document.querySelector(".cha").innerText = secStat;
  
      //SKILLS
      document.querySelector(".pris").innerText = "0";
      document.querySelector(".secs").innerText = "0";
      document.querySelector(".ters").innerText = "0";
      document.querySelector(".primary").innerText = `Special`;
      document.querySelector(".secondary").innerText = `Special`;
      document.querySelector(".tertiary").innerText = `Special`;
  
      //ABILITIES
      document.querySelector(
        ".abilities"
      ).innerText += `Rangers have access to a pool of 20 Skill Points they can, as a move action, assign anywhere. Rangers may not assign more Skill Points to a single skill than twice their Star Rating, and gain half as many extra Skill Ranks per Star Rating above the first.\n\n`;
  
      //EQUIPMENT
      document.querySelector(".archArmor").innerText = `Variable\n\n`;
  
      //Qualifying Races
      document.querySelector(".qRace").innerText = "Human, Minotaur";
    } else if (arch.options[arch.selectedIndex].text == "Marksman") {
      //STATS
      document.querySelector(".str").innerText = probStat;
      document.querySelector(".dex").innerText = priStat;
      document.querySelector(".con").innerText = unStat;
      document.querySelector(".int").innerText = secStat;
      document.querySelector(".will").innerText = secStat;
      document.querySelector(".per").innerText = priStat;
      document.querySelector(".cha").innerText = unStat;
  
      //SKILLS
      document.querySelector(".pris").innerText = priSkill;
      document.querySelector(".secs").innerText = secSkill;
      document.querySelector(".ters").innerText = terSkill;
      document.querySelector(
        ".primary"
      ).innerText = `Snipers, Rifles, Machine Guns, Spot`;
      document.querySelector(".secondary").innerText = `Nerve, Stealth`;
      document.querySelector(".tertiary").innerText = `Endurance, Acrobatics`;
  
      //ABILITIES
      document.querySelector(
        ".abilities"
      ).innerText += `Snipers can grant any weapon additional ranks of Aim equal to twice their Star Rating, and may ignore the Heavy tag on weapons they are aiming while prone.\n\n`;
  
      //EQUIPMENT
      document.querySelector(
        ".archArmor"
      ).innerText = `Medium, Shield/Field Split.\n\n`;
  
      //Qualifying Races
      document.querySelector(".qRace").innerText =
        "Human, Child, Dryad, Arachnoid";
    } else if (arch.options[arch.selectedIndex].text == "Powerhouse") {
      //STATS
      document.querySelector(".str").innerText = priStat;
      document.querySelector(".dex").innerText = priStat;
      document.querySelector(".con").innerText = priStat;
      document.querySelector(".int").innerText = probStat;
      document.querySelector(".will").innerText = probStat;
      document.querySelector(".per").innerText = unStat;
      document.querySelector(".cha").innerText = probStat;
  
      //SKILLS
      document.querySelector(".pris").innerText = priSkill;
      document.querySelector(".secs").innerText = secSkill;
      document.querySelector(".ters").innerText = terSkill;
      document.querySelector(
        ".primary"
      ).innerText = `Juggernaut, CQC, Hammers, Axes`;
      document.querySelector(
        ".secondary"
      ).innerText = `Endurance, Nerve, Threaten`;
      document.querySelector(".tertiary").innerText = `Spot`;
  
      //ABILITIES
      document.querySelector(
        ".abilities"
      ).innerText += `Powerhouses get an additional roll on the Trait Chart per Star Rating, which is rerolled until it lands on a supernatural Trait.\n\n`;
  
      //EQUIPMENT
      document.querySelector(
        ".archArmor"
      ).innerText = `Heavy/None, No Fields/Shields.\n\n`;
  
      //Qualifying Races
      document.querySelector(".qRace").innerText =
        "Titan, Ork, Minotaur, Gigaloth.";
    } else if (arch.options[arch.selectedIndex].text == "Speedster") {
      //STATS
      document.querySelector(".str").innerText = probStat;
      document.querySelector(".dex").innerText = priStat;
      document.querySelector(".con").innerText = secStat;
      document.querySelector(".int").innerText = unStat;
      document.querySelector(".will").innerText = secStat;
      document.querySelector(".per").innerText = priStat;
      document.querySelector(".cha").innerText = unStat;
  
      //SKILLS
      document.querySelector(".pris").innerText = priSkill;
      document.querySelector(".secs").innerText = secSkill;
      document.querySelector(".ters").innerText = terSkill;
      document.querySelector(
        ".primary"
      ).innerText = `Daggers, Slashing Swords, Thrusting Swords`;
      document.querySelector(
        ".secondary"
      ).innerText = `Spot, Acrobatics, Stealth, Nerve`;
      document.querySelector(".tertiary").innerText = `CQC, Endurance`;
  
      //ABILITIES
      document.querySelector(
        ".abilities"
      ).innerText += `Speedsters gain access to Speed as a Problem Stat from 1 Star, and may increase it to a Tertiary Stat if they also acquire the Dragon-Class trait. However, they have their trait gains halved at every Star Rating.\n\n`;
  
      //EQUIPMENT
      document.querySelector(
        ".archArmor"
      ).innerText = `Light, Fields/Shields Split.\n\n`;
  
      //Qualifying Races
      document.querySelector(".qRace").innerText =
        "Any";
    } else if (arch.options[arch.selectedIndex].text == "Blaster") {
      //STATS
      document.querySelector(".str").innerText = unStat;
      document.querySelector(".dex").innerText = secStat;
      document.querySelector(".con").innerText = probStat;
      document.querySelector(".int").innerText = unStat;
      document.querySelector(".will").innerText = secStat;
      document.querySelector(".per").innerText = priStat;
      document.querySelector(".cha").innerText = unStat;
  
      //SKILLS
      document.querySelector(".pris").innerText = priSkill;
      document.querySelector(".secs").innerText = secSkill;
      document.querySelector(".ters").innerText = terSkill;
      document.querySelector(
        ".primary"
      ).innerText = `Innate Attack, Spot`;
      document.querySelector(
        ".secondary"
      ).innerText = `Nerve, Insight`;
      document.querySelector(".tertiary").innerText = `Endurance`;
  
      //ABILITIES
      document.querySelector(
        ".abilities"
      ).innerText += `Blasters may substitute any number of traits with Elemental Fury, or three traits with Primordial, and gain access to an Innate Attack with Max 8+double their Star Rating and additional dice equal to double their Star Rating. Every Rating above 1 grants either a Rank of Automatic, three Ranks of Unpredictable or Passive-Ignore, or two ranks of Passive Crush. These may be mixed and matched, and are chosen by the presiding GM based on their element. They also unlock Innate Attack, obviously.
  \n\n`;
  
      //EQUIPMENT
      document.querySelector(
        ".archArmor"
      ).innerText = `Medium, Shield/Field Split\n\n`;
  
      //Qualifying Races
      document.querySelector(".qRace").innerText =
        "Any";
    } else if (arch.options[arch.selectedIndex].text == "Brute") {
      //STATS
      document.querySelector(".str").innerText = priStat;
      document.querySelector(".dex").innerText = secStat;
      document.querySelector(".con").innerText = priStat;
      document.querySelector(".int").innerText = probStat;
      document.querySelector(".will").innerText = probStat;
      document.querySelector(".per").innerText = unStat;
      document.querySelector(".cha").innerText = probStat;
  
      //SKILLS
      document.querySelector(".pris").innerText = priSkill;
      document.querySelector(".secs").innerText = secSkill;
      document.querySelector(".ters").innerText = terSkill;
      document.querySelector(
        ".primary"
      ).innerText = `Juggernaut, CQC, Hammers, Axes`;
      document.querySelector(
        ".secondary"
      ).innerText = `Endurance, Spot`;
      document.querySelector(".tertiary").innerText = `Nerve, Threaten`;
  
      //ABILITIES
      document.querySelector(
        ".abilities"
      ).innerText += `Brutes gain access to the Might stat as a Problem Stat, and may sacrifice 3 Traits in order to raise it to a Tertiary Stat, 5 to a Secondary Stat, and 15 to a Primary Stat. They may also sacrifice half their total Traits to change one of their Primary Stats to a Legendary Stat. 2 Star: F, 3 Star: E, 4 Star: D, 5 Star:  C, 6 Star: B\n\n`;
  
      //EQUIPMENT
      document.querySelector(
        ".archArmor"
      ).innerText = `Heavy/None, No Fields/Shields\n\n`;
  
      //Qualifying Races
      document.querySelector(".qRace").innerText =
        "Any";
    } else {
      //STATS
      document.querySelector(".str").innerText = "-";
      document.querySelector(".dex").innerText = "-";
      document.querySelector(".con").innerText = "-";
      document.querySelector(".int").innerText = "-";
      document.querySelector(".will").innerText = "-";
      document.querySelector(".per").innerText = "-";
      document.querySelector(".cha").innerText = "-";
  
      //SKILLS
      document.querySelector(".pris").innerText = "0";
      document.querySelector(".secs").innerText = "0";
      document.querySelector(".ters").innerText = "0";
      document.querySelector(".primary").innerText = `None`;
      document.querySelector(".secondary").innerText = `None`;
      document.querySelector(".tertiary").innerText = `None`;
  
      //ABILITIES
      document.querySelector(".abilities").innerText += `None\n\n`;
  
      //EQUIPMENT
      document.querySelector(".archArmor").innerText = `-`;
  
      //Qualifying Races
      document.querySelector(".qRace").innerText = "-";
    }
  }
  
  //STAR RATING
  //==================================================================
  function onChange() {
    var starRate = document.getElementById("stars");
  
    if (starRate.options[starRate.selectedIndex].text == "1 Star") {
      //EQUIPMENT
      document.querySelector(".equipment").innerHTML += `No Bonus\n`;
  
      //Number of Traits
      document.querySelector(".numOfT").innerText = "1";
    } else if (starRate.options[starRate.selectedIndex].text == "2 Star") {
      //EQUIPMENT
      document.querySelector(
        ".equipment"
      ).innerHTML += `+1 all Armor Tiers\n`;
  
      //Number of Traits
      document.querySelector(".numOfT").innerText = "2";
  
      //Adding to Stats and Skills
  
      if (document.querySelector(".str").innerText == "4") {
        var pri = parseInt(document.querySelector(".str").innerText);
        var primary = pri + 2;
        document.querySelector(".str").innerText = primary.toString();
      } else if (document.querySelector(".str").innerText == "3") {
        var sec = parseInt(document.querySelector(".str").innerText);
        var secondary = sec + 1;
        document.querySelector(".str").innerText = secondary.toString();
      } else if (document.querySelector(".str").innerText == "2") {
        var un = parseInt(document.querySelector(".str").innerText);
        var unmod = un + 0;
        document.querySelector(".str").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".str").innerText);
        var problem = prob + 0;
        document.querySelector(".str").innerText = problem.toString();
      }
  
      if (document.querySelector(".dex").innerText == "4") {
        var pri = parseInt(document.querySelector(".dex").innerText);
        var primary = pri + 2;
        document.querySelector(".dex").innerText = primary.toString();
      } else if (document.querySelector(".dex").innerText == "3") {
        var sec = parseInt(document.querySelector(".dex").innerText);
        var secondary = sec + 1;
        document.querySelector(".dex").innerText = secondary.toString();
      } else if (document.querySelector(".dex").innerText == "2") {
        var un = parseInt(document.querySelector(".dex").innerText);
        var unmod = un + 0;
        document.querySelector(".dex").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".dex").innerText);
        var problem = prob + 0;
        document.querySelector(".dex").innerText = problem.toString();
      }
  
      if (document.querySelector(".con").innerText == "4") {
        var pri = parseInt(document.querySelector(".con").innerText);
        var primary = pri + 2;
        document.querySelector(".con").innerText = primary.toString();
      } else if (document.querySelector(".con").innerText == "3") {
        var sec = parseInt(document.querySelector(".con").innerText);
        var secondary = sec + 1;
        document.querySelector(".con").innerText = secondary.toString();
      } else if (document.querySelector(".con").innerText == "2") {
        var un = parseInt(document.querySelector(".con").innerText);
        var unmod = un + 0;
        document.querySelector(".con").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".con").innerText);
        var problem = prob + 0;
        document.querySelector(".con").innerText = problem.toString();
      }
  
      if (document.querySelector(".int").innerText == "4") {
        var pri = parseInt(document.querySelector(".int").innerText);
        var primary = pri + 2;
        document.querySelector(".int").innerText = primary.toString();
      } else if (document.querySelector(".int").innerText == "3") {
        var sec = parseInt(document.querySelector(".int").innerText);
        var secondary = sec + 1;
        document.querySelector(".int").innerText = secondary.toString();
      } else if (document.querySelector(".int").innerText == "2") {
        var un = parseInt(document.querySelector(".int").innerText);
        var unmod = un + 0;
        document.querySelector(".int").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".int").innerText);
        var problem = prob + 0;
        document.querySelector(".int").innerText = problem.toString();
      }
  
      if (document.querySelector(".will").innerText == "4") {
        var pri = parseInt(document.querySelector(".will").innerText);
        var primary = pri + 2;
        document.querySelector(".will").innerText = primary.toString();
      } else if (document.querySelector(".will").innerText == "3") {
        var sec = parseInt(document.querySelector(".will").innerText);
        var secondary = sec + 1;
        document.querySelector(".will").innerText = secondary.toString();
      } else if (document.querySelector(".will").innerText == "2") {
        var un = parseInt(document.querySelector(".will").innerText);
        var unmod = un + 0;
        document.querySelector(".will").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".will").innerText);
        var problem = prob + 0;
        document.querySelector(".will").innerText = problem.toString();
      }
  
      if (document.querySelector(".per").innerText == "4") {
        var pri = parseInt(document.querySelector(".per").innerText);
        var primary = pri + 2;
        document.querySelector(".per").innerText = primary.toString();
      } else if (document.querySelector(".per").innerText == "3") {
        var sec = parseInt(document.querySelector(".per").innerText);
        var secondary = sec + 1;
        document.querySelector(".per").innerText = secondary.toString();
      } else if (document.querySelector(".per").innerText == "2") {
        var un = parseInt(document.querySelector(".per").innerText);
        var unmod = un + 0;
        document.querySelector(".per").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".per").innerText);
        var problem = prob + 0;
        document.querySelector(".per").innerText = problem.toString();
      }
  
      if (document.querySelector(".cha").innerText == "4") {
        var pri = parseInt(document.querySelector(".cha").innerText);
        var primary = pri + 2;
        document.querySelector(".cha").innerText = primary.toString();
      } else if (document.querySelector(".cha").innerText == "3") {
        var sec = parseInt(document.querySelector(".cha").innerText);
        var secondary = sec + 1;
        document.querySelector(".cha").innerText = secondary.toString();
      } else if (document.querySelector(".cha").innerText == "2") {
        var un = parseInt(document.querySelector(".cha").innerText);
        var unmod = un + 0;
        document.querySelector(".cha").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".cha").innerText);
        var problem = prob + 0;
        document.querySelector(".cha").innerText = problem.toString();
      }
  
      //SKILLS
      var sp = parseInt(document.querySelector(".pris").innerText);
      var skillPri = sp + 2;
      document.querySelector(".pris").innerText = skillPri;
  
      var ss = parseInt(document.querySelector(".secs").innerText);
      var skillSec = ss + 1;
      document.querySelector(".secs").innerText = skillSec;
  
      var st = parseInt(document.querySelector(".ters").innerText);
      var skillTer = st + 0;
      document.querySelector(".ters").innerText = skillTer;
    } else if (starRate.options[starRate.selectedIndex].text == "3 Star") {
      //EQUIPMENT
      document.querySelector(
        ".equipment"
      ).innerHTML += `+1 all Armor Tiers\n`;
  
      //Number of Traits
      document.querySelector(".numOfT").innerText = "4";
  
      //SKILLS
      var sp = parseInt(document.querySelector(".pris").innerText);
      var skillPri = sp + 4;
      document.querySelector(".pris").innerText = skillPri;
  
      var ss = parseInt(document.querySelector(".secs").innerText);
      var skillSec = ss + 2;
      document.querySelector(".secs").innerText = skillSec;
  
      var st = parseInt(document.querySelector(".ters").innerText);
      var skillTer = st + 1;
      document.querySelector(".ters").innerText = skillTer;
  
      //Adding to Stats and Skills
  
      if (document.querySelector(".str").innerText == "4") {
        var pri = parseInt(document.querySelector(".str").innerText);
        var primary = pri + 5;
        document.querySelector(".str").innerText = primary.toString();
      } else if (document.querySelector(".str").innerText == "3") {
        var sec = parseInt(document.querySelector(".str").innerText);
        var secondary = sec + 3;
        document.querySelector(".str").innerText = secondary.toString();
      } else if (document.querySelector(".str").innerText == "2") {
        var un = parseInt(document.querySelector(".str").innerText);
        var unmod = un + 2;
        document.querySelector(".str").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".str").innerText);
        var problem = prob + 1;
        document.querySelector(".str").innerText = problem.toString();
      }
  
      if (document.querySelector(".dex").innerText == "4") {
        var pri = parseInt(document.querySelector(".dex").innerText);
        var primary = pri + 5;
        document.querySelector(".dex").innerText = primary.toString();
      } else if (document.querySelector(".dex").innerText == "3") {
        var sec = parseInt(document.querySelector(".dex").innerText);
        var secondary = sec + 3;
        document.querySelector(".dex").innerText = secondary.toString();
      } else if (document.querySelector(".dex").innerText == "2") {
        var un = parseInt(document.querySelector(".dex").innerText);
        var unmod = un + 2;
        document.querySelector(".dex").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".dex").innerText);
        var problem = prob + 1;
        document.querySelector(".dex").innerText = problem.toString();
      }
  
      if (document.querySelector(".con").innerText == "4") {
        var pri = parseInt(document.querySelector(".con").innerText);
        var primary = pri + 5;
        document.querySelector(".con").innerText = primary.toString();
      } else if (document.querySelector(".con").innerText == "3") {
        var sec = parseInt(document.querySelector(".con").innerText);
        var secondary = sec + 3;
        document.querySelector(".con").innerText = secondary.toString();
      } else if (document.querySelector(".con").innerText == "2") {
        var un = parseInt(document.querySelector(".con").innerText);
        var unmod = un + 2;
        document.querySelector(".con").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".con").innerText);
        var problem = prob + 1;
        document.querySelector(".con").innerText = problem.toString();
      }
  
      if (document.querySelector(".int").innerText == "4") {
        var pri = parseInt(document.querySelector(".int").innerText);
        var primary = pri + 5;
        document.querySelector(".int").innerText = primary.toString();
      } else if (document.querySelector(".int").innerText == "3") {
        var sec = parseInt(document.querySelector(".int").innerText);
        var secondary = sec + 3;
        document.querySelector(".int").innerText = secondary.toString();
      } else if (document.querySelector(".int").innerText == "2") {
        var un = parseInt(document.querySelector(".int").innerText);
        var unmod = un + 2;
        document.querySelector(".int").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".int").innerText);
        var problem = prob + 1;
        document.querySelector(".int").innerText = problem.toString();
      }
  
      if (document.querySelector(".will").innerText == "4") {
        var pri = parseInt(document.querySelector(".will").innerText);
        var primary = pri + 5;
        document.querySelector(".will").innerText = primary.toString();
      } else if (document.querySelector(".will").innerText == "3") {
        var sec = parseInt(document.querySelector(".will").innerText);
        var secondary = sec + 3;
        document.querySelector(".will").innerText = secondary.toString();
      } else if (document.querySelector(".will").innerText == "2") {
        var un = parseInt(document.querySelector(".will").innerText);
        var unmod = un + 2;
        document.querySelector(".will").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".will").innerText);
        var problem = prob + 1;
        document.querySelector(".will").innerText = problem.toString();
      }
  
      if (document.querySelector(".per").innerText == "4") {
        var pri = parseInt(document.querySelector(".per").innerText);
        var primary = pri + 5;
        document.querySelector(".per").innerText = primary.toString();
      } else if (document.querySelector(".per").innerText == "3") {
        var sec = parseInt(document.querySelector(".per").innerText);
        var secondary = sec + 3;
        document.querySelector(".per").innerText = secondary.toString();
      } else if (document.querySelector(".per").innerText == "2") {
        var un = parseInt(document.querySelector(".per").innerText);
        var unmod = un + 2;
        document.querySelector(".per").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".per").innerText);
        var problem = prob + 1;
        document.querySelector(".per").innerText = problem.toString();
      }
  
      if (document.querySelector(".cha").innerText == "4") {
        var pri = parseInt(document.querySelector(".cha").innerText);
        var primary = pri + 5;
        document.querySelector(".cha").innerText = primary.toString();
      } else if (document.querySelector(".cha").innerText == "3") {
        var sec = parseInt(document.querySelector(".cha").innerText);
        var secondary = sec + 3;
        document.querySelector(".cha").innerText = secondary.toString();
      } else if (document.querySelector(".cha").innerText == "2") {
        var un = parseInt(document.querySelector(".cha").innerText);
        var unmod = un + 2;
        document.querySelector(".cha").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".cha").innerText);
        var problem = prob + 1;
        document.querySelector(".cha").innerText = problem.toString();
      }
    } else if (starRate.options[starRate.selectedIndex].text == "4 Star") {
      //EQUIPMENT
      document.querySelector(
        ".equipment"
      ).innerHTML += `+2 all Armor Tiers\n`;
  
      //Number of Traits
      document.querySelector(".numOfT").innerText = "6";
  
      //SKILLS
      var sp = parseInt(document.querySelector(".pris").innerText);
      var skillPri = sp + 7;
      document.querySelector(".pris").innerText = skillPri;
  
      var ss = parseInt(document.querySelector(".secs").innerText);
      var skillSec = ss + 4;
      document.querySelector(".secs").innerText = skillSec;
  
      var st = parseInt(document.querySelector(".ters").innerText);
      var skillTer = st + 2;
      document.querySelector(".ters").innerText = skillTer;
  
      //Adding to Stats and Skills
  
      if (document.querySelector(".str").innerText == "4") {
        var pri = parseInt(document.querySelector(".str").innerText);
        var primary = pri + 8;
        document.querySelector(".str").innerText = primary.toString();
      } else if (document.querySelector(".str").innerText == "3") {
        var sec = parseInt(document.querySelector(".str").innerText);
        var secondary = sec + 5;
        document.querySelector(".str").innerText = secondary.toString();
      } else if (document.querySelector(".str").innerText == "2") {
        var un = parseInt(document.querySelector(".str").innerText);
        var unmod = un + 3;
        document.querySelector(".str").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".str").innerText);
        var problem = prob + 1;
        document.querySelector(".str").innerText = problem.toString();
      }
  
      if (document.querySelector(".dex").innerText == "4") {
        var pri = parseInt(document.querySelector(".dex").innerText);
        var primary = pri + 8;
        document.querySelector(".dex").innerText = primary.toString();
      } else if (document.querySelector(".dex").innerText == "3") {
        var sec = parseInt(document.querySelector(".dex").innerText);
        var secondary = sec + 5;
        document.querySelector(".dex").innerText = secondary.toString();
      } else if (document.querySelector(".dex").innerText == "2") {
        var un = parseInt(document.querySelector(".dex").innerText);
        var unmod = un + 3;
        document.querySelector(".dex").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".dex").innerText);
        var problem = prob + 1;
        document.querySelector(".dex").innerText = problem.toString();
      }
  
      if (document.querySelector(".con").innerText == "4") {
        var pri = parseInt(document.querySelector(".con").innerText);
        var primary = pri + 8;
        document.querySelector(".con").innerText = primary.toString();
      } else if (document.querySelector(".con").innerText == "3") {
        var sec = parseInt(document.querySelector(".con").innerText);
        var secondary = sec + 5;
        document.querySelector(".con").innerText = secondary.toString();
      } else if (document.querySelector(".con").innerText == "2") {
        var un = parseInt(document.querySelector(".con").innerText);
        var unmod = un + 3;
        document.querySelector(".con").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".con").innerText);
        var problem = prob + 1;
        document.querySelector(".con").innerText = problem.toString();
      }
  
      if (document.querySelector(".int").innerText == "4") {
        var pri = parseInt(document.querySelector(".int").innerText);
        var primary = pri + 8;
        document.querySelector(".int").innerText = primary.toString();
      } else if (document.querySelector(".int").innerText == "3") {
        var sec = parseInt(document.querySelector(".int").innerText);
        var secondary = sec + 5;
        document.querySelector(".int").innerText = secondary.toString();
      } else if (document.querySelector(".int").innerText == "2") {
        var un = parseInt(document.querySelector(".int").innerText);
        var unmod = un + 3;
        document.querySelector(".int").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".int").innerText);
        var problem = prob + 1;
        document.querySelector(".int").innerText = problem.toString();
      }
  
      if (document.querySelector(".will").innerText == "4") {
        var pri = parseInt(document.querySelector(".will").innerText);
        var primary = pri + 8;
        document.querySelector(".will").innerText = primary.toString();
      } else if (document.querySelector(".will").innerText == "3") {
        var sec = parseInt(document.querySelector(".will").innerText);
        var secondary = sec + 5;
        document.querySelector(".will").innerText = secondary.toString();
      } else if (document.querySelector(".will").innerText == "2") {
        var un = parseInt(document.querySelector(".will").innerText);
        var unmod = un + 3;
        document.querySelector(".will").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".will").innerText);
        var problem = prob + 1;
        document.querySelector(".will").innerText = problem.toString();
      }
  
      if (document.querySelector(".per").innerText == "4") {
        var pri = parseInt(document.querySelector(".per").innerText);
        var primary = pri + 8;
        document.querySelector(".per").innerText = primary.toString();
      } else if (document.querySelector(".per").innerText == "3") {
        var sec = parseInt(document.querySelector(".per").innerText);
        var secondary = sec + 5;
        document.querySelector(".per").innerText = secondary.toString();
      } else if (document.querySelector(".per").innerText == "2") {
        var un = parseInt(document.querySelector(".per").innerText);
        var unmod = un + 3;
        document.querySelector(".per").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".per").innerText);
        var problem = prob + 1;
        document.querySelector(".per").innerText = problem.toString();
      }
  
      if (document.querySelector(".cha").innerText == "4") {
        var pri = parseInt(document.querySelector(".cha").innerText);
        var primary = pri + 8;
        document.querySelector(".cha").innerText = primary.toString();
      } else if (document.querySelector(".cha").innerText == "3") {
        var sec = parseInt(document.querySelector(".cha").innerText);
        var secondary = sec + 5;
        document.querySelector(".cha").innerText = secondary.toString();
      } else if (document.querySelector(".cha").innerText == "2") {
        var un = parseInt(document.querySelector(".cha").innerText);
        var unmod = un + 3;
        document.querySelector(".cha").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".cha").innerText);
        var problem = prob + 1;
        document.querySelector(".cha").innerText = problem.toString();
      }
    } else if (starRate.options[starRate.selectedIndex].text == "5 Star") {
      //EQUIPMENT
      document.querySelector(
        ".equipment"
      ).innerHTML += `+2 all Armor Tiers\n`;
  
      //Number of Traits
      document.querySelector(".numOfT").innerText = "8";
  
      //SKILLS
      var sp = parseInt(document.querySelector(".pris").innerText);
      var skillPri = sp + 10;
      document.querySelector(".pris").innerText = skillPri;
  
      var ss = parseInt(document.querySelector(".secs").innerText);
      var skillSec = ss + 7;
      document.querySelector(".secs").innerText = skillSec;
  
      var st = parseInt(document.querySelector(".ters").innerText);
      var skillTer = st + 4;
      document.querySelector(".ters").innerText = skillTer;
  
      //Adding to Stats and Skills
  
      if (document.querySelector(".str").innerText == "4") {
        var pri = parseInt(document.querySelector(".str").innerText);
        var primary = pri + 14;
        document.querySelector(".str").innerText = primary.toString();
      } else if (document.querySelector(".str").innerText == "3") {
        var sec = parseInt(document.querySelector(".str").innerText);
        var secondary = sec + 9;
        document.querySelector(".str").innerText = secondary.toString();
      } else if (document.querySelector(".str").innerText == "2") {
        var un = parseInt(document.querySelector(".str").innerText);
        var unmod = un + 6;
        document.querySelector(".str").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".str").innerText);
        var problem = prob + 3;
        document.querySelector(".str").innerText = problem.toString();
      }
  
      if (document.querySelector(".dex").innerText == "4") {
        var pri = parseInt(document.querySelector(".dex").innerText);
        var primary = pri + 14;
        document.querySelector(".dex").innerText = primary.toString();
      } else if (document.querySelector(".dex").innerText == "3") {
        var sec = parseInt(document.querySelector(".dex").innerText);
        var secondary = sec + 9;
        document.querySelector(".dex").innerText = secondary.toString();
      } else if (document.querySelector(".dex").innerText == "2") {
        var un = parseInt(document.querySelector(".dex").innerText);
        var unmod = un + 6;
        document.querySelector(".dex").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".dex").innerText);
        var problem = prob + 3;
        document.querySelector(".dex").innerText = problem.toString();
      }
  
      if (document.querySelector(".con").innerText == "4") {
        var pri = parseInt(document.querySelector(".con").innerText);
        var primary = pri + 14;
        document.querySelector(".con").innerText = primary.toString();
      } else if (document.querySelector(".con").innerText == "3") {
        var sec = parseInt(document.querySelector(".con").innerText);
        var secondary = sec + 9;
        document.querySelector(".con").innerText = secondary.toString();
      } else if (document.querySelector(".con").innerText == "2") {
        var un = parseInt(document.querySelector(".con").innerText);
        var unmod = un + 6;
        document.querySelector(".con").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".con").innerText);
        var problem = prob + 3;
        document.querySelector(".con").innerText = problem.toString();
      }
  
      if (document.querySelector(".int").innerText == "4") {
        var pri = parseInt(document.querySelector(".int").innerText);
        var primary = pri + 14;
        document.querySelector(".int").innerText = primary.toString();
      } else if (document.querySelector(".int").innerText == "3") {
        var sec = parseInt(document.querySelector(".int").innerText);
        var secondary = sec + 9;
        document.querySelector(".int").innerText = secondary.toString();
      } else if (document.querySelector(".int").innerText == "2") {
        var un = parseInt(document.querySelector(".int").innerText);
        var unmod = un + 6;
        document.querySelector(".int").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".int").innerText);
        var problem = prob + 3;
        document.querySelector(".int").innerText = problem.toString();
      }
  
      if (document.querySelector(".will").innerText == "4") {
        var pri = parseInt(document.querySelector(".will").innerText);
        var primary = pri + 14;
        document.querySelector(".will").innerText = primary.toString();
      } else if (document.querySelector(".will").innerText == "3") {
        var sec = parseInt(document.querySelector(".will").innerText);
        var secondary = sec + 9;
        document.querySelector(".will").innerText = secondary.toString();
      } else if (document.querySelector(".will").innerText == "2") {
        var un = parseInt(document.querySelector(".will").innerText);
        var unmod = un + 6;
        document.querySelector(".will").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".will").innerText);
        var problem = prob + 3;
        document.querySelector(".will").innerText = problem.toString();
      }
  
      if (document.querySelector(".per").innerText == "4") {
        var pri = parseInt(document.querySelector(".per").innerText);
        var primary = pri + 14;
        document.querySelector(".per").innerText = primary.toString();
      } else if (document.querySelector(".per").innerText == "3") {
        var sec = parseInt(document.querySelector(".per").innerText);
        var secondary = sec + 9;
        document.querySelector(".per").innerText = secondary.toString();
      } else if (document.querySelector(".per").innerText == "2") {
        var un = parseInt(document.querySelector(".per").innerText);
        var unmod = un + 6;
        document.querySelector(".per").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".per").innerText);
        var problem = prob + 3;
        document.querySelector(".per").innerText = problem.toString();
      }
  
      if (document.querySelector(".cha").innerText == "4") {
        var pri = parseInt(document.querySelector(".cha").innerText);
        var primary = pri + 14;
        document.querySelector(".cha").innerText = primary.toString();
      } else if (document.querySelector(".cha").innerText == "3") {
        var sec = parseInt(document.querySelector(".cha").innerText);
        var secondary = sec + 9;
        document.querySelector(".cha").innerText = secondary.toString();
      } else if (document.querySelector(".cha").innerText == "2") {
        var un = parseInt(document.querySelector(".cha").innerText);
        var unmod = un + 6;
        document.querySelector(".cha").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".cha").innerText);
        var problem = prob + 3;
        document.querySelector(".cha").innerText = problem.toString();
      }
    } else if (starRate.options[starRate.selectedIndex].text == "6 Star") {
      //EQUIPMENT
      document.querySelector(
        ".equipment"
      ).innerHTML += `Highest Tier Armor Available\n`;
  
      //Number of Traits
      document.querySelector(".numOfT").innerText = "14";
  
      //SKILLS
      var sp = parseInt(document.querySelector(".pris").innerText);
      var skillPri = sp + 12;
      document.querySelector(".pris").innerText = skillPri;
  
      var ss = parseInt(document.querySelector(".secs").innerText);
      var skillSec = ss + 10;
      document.querySelector(".secs").innerText = skillSec;
  
      var st = parseInt(document.querySelector(".ters").innerText);
      var skillTer = st + 7;
      document.querySelector(".ters").innerText = skillTer;
  
      //Adding to Stats and Skills
  
      if (document.querySelector(".str").innerText == "4") {
        var pri = parseInt(document.querySelector(".str").innerText);
        var primary = pri + 20;
        document.querySelector(".str").innerText = primary.toString();
      } else if (document.querySelector(".str").innerText == "3") {
        var sec = parseInt(document.querySelector(".str").innerText);
        var secondary = sec + 12;
        document.querySelector(".str").innerText = secondary.toString();
      } else if (document.querySelector(".str").innerText == "2") {
        var un = parseInt(document.querySelector(".str").innerText);
        var unmod = un + 8;
        document.querySelector(".str").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".str").innerText);
        var problem = prob + 4;
        document.querySelector(".str").innerText = problem.toString();
      }
  
      if (document.querySelector(".dex").innerText == "4") {
        var pri = parseInt(document.querySelector(".dex").innerText);
        var primary = pri + 20;
        document.querySelector(".dex").innerText = primary.toString();
      } else if (document.querySelector(".dex").innerText == "3") {
        var sec = parseInt(document.querySelector(".dex").innerText);
        var secondary = sec + 12;
        document.querySelector(".dex").innerText = secondary.toString();
      } else if (document.querySelector(".dex").innerText == "2") {
        var un = parseInt(document.querySelector(".dex").innerText);
        var unmod = un + 8;
        document.querySelector(".dex").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".dex").innerText);
        var problem = prob + 4;
        document.querySelector(".dex").innerText = problem.toString();
      }
  
      if (document.querySelector(".con").innerText == "4") {
        var pri = parseInt(document.querySelector(".con").innerText);
        var primary = pri + 20;
        document.querySelector(".con").innerText = primary.toString();
      } else if (document.querySelector(".con").innerText == "3") {
        var sec = parseInt(document.querySelector(".con").innerText);
        var secondary = sec + 12;
        document.querySelector(".con").innerText = secondary.toString();
      } else if (document.querySelector(".con").innerText == "2") {
        var un = parseInt(document.querySelector(".con").innerText);
        var unmod = un + 8;
        document.querySelector(".con").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".con").innerText);
        var problem = prob + 4;
        document.querySelector(".con").innerText = problem.toString();
      }
  
      if (document.querySelector(".int").innerText == "4") {
        var pri = parseInt(document.querySelector(".int").innerText);
        var primary = pri + 20;
        document.querySelector(".int").innerText = primary.toString();
      } else if (document.querySelector(".int").innerText == "3") {
        var sec = parseInt(document.querySelector(".int").innerText);
        var secondary = sec + 12;
        document.querySelector(".int").innerText = secondary.toString();
      } else if (document.querySelector(".int").innerText == "2") {
        var un = parseInt(document.querySelector(".int").innerText);
        var unmod = un + 8;
        document.querySelector(".int").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".int").innerText);
        var problem = prob + 4;
        document.querySelector(".int").innerText = problem.toString();
      }
  
      if (document.querySelector(".will").innerText == "4") {
        var pri = parseInt(document.querySelector(".will").innerText);
        var primary = pri + 20;
        document.querySelector(".will").innerText = primary.toString();
      } else if (document.querySelector(".will").innerText == "3") {
        var sec = parseInt(document.querySelector(".will").innerText);
        var secondary = sec + 12;
        document.querySelector(".will").innerText = secondary.toString();
      } else if (document.querySelector(".will").innerText == "2") {
        var un = parseInt(document.querySelector(".will").innerText);
        var unmod = un + 8;
        document.querySelector(".will").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".will").innerText);
        var problem = prob + 4;
        document.querySelector(".will").innerText = problem.toString();
      }
  
      if (document.querySelector(".per").innerText == "4") {
        var pri = parseInt(document.querySelector(".per").innerText);
        var primary = pri + 20;
        document.querySelector(".per").innerText = primary.toString();
      } else if (document.querySelector(".per").innerText == "3") {
        var sec = parseInt(document.querySelector(".per").innerText);
        var secondary = sec + 12;
        document.querySelector(".per").innerText = secondary.toString();
      } else if (document.querySelector(".per").innerText == "2") {
        var un = parseInt(document.querySelector(".per").innerText);
        var unmod = un + 8;
        document.querySelector(".per").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".per").innerText);
        var problem = prob + 4;
        document.querySelector(".per").innerText = problem.toString();
      }
  
      if (document.querySelector(".cha").innerText == "4") {
        var pri = parseInt(document.querySelector(".cha").innerText);
        var primary = pri + 20;
        document.querySelector(".cha").innerText = primary.toString();
      } else if (document.querySelector(".cha").innerText == "3") {
        var sec = parseInt(document.querySelector(".cha").innerText);
        var secondary = sec + 12;
        document.querySelector(".cha").innerText = secondary.toString();
      } else if (document.querySelector(".cha").innerText == "2") {
        var un = parseInt(document.querySelector(".cha").innerText);
        var unmod = un + 8;
        document.querySelector(".cha").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".cha").innerText);
        var problem = prob + 4;
        document.querySelector(".cha").innerText = problem.toString();
      }
    }
  }
  
  //RACES
  //==================================================================
  function raceSelect() {
    var raCho = document.getElementById("race");
  
    if (raCho.options[raCho.selectedIndex].text == "Arachnoid: Spider/Scorpion") {
      //STATS
  
      //Racial Traits
      rb1 = `Extra Limbs: Arachnoids have an extra set of both arms and eyes, allowing them to dual-wield two handed weapons or quad-wield one-handed ones, though both make the penalty go from a halved dice pool to a quartered one. Additionally, their eyes have half their Passive instead of Passive 0.\n\n`;
  
      rb2 = `Carapace: Every Arachnoid possesses a natural instance of Plating on each of their limbs save eyes with 1 HP. This carapace naturally regenerates every reset regardless of all other damage so long as the limb it would be attached to still exists, but cannot be healed.\n\n`;
  
      rb3 = `Webbing allows the user to substitute Constitution for Intelligence when repairing damaged but not destroyed armor, and to do it a number of times equal to their Constitution stat in one IRL day without expending actions, but the webbing decays after reset.\n\n`;
  
      rb4 = `Stingers allow the user to add their Constitution as Additional Dice to Brawling attacks against living creatures, and any living creature damaged by a Brawling attack must make an End check with a DC equal to the user's Con to avoid taking an additional 1 Passive-Ignoring damage.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
      racial.value += rb4;
    } else if (raCho.options[raCho.selectedIndex].text == "Titan") {
      //STATS
      var stat = parseInt(document.querySelector(".str").innerText);
      var fb1 = stat + 3;
      document.querySelector(".str").innerText = fb1.toString();
  
      var stat = parseInt(document.querySelector(".con").innerText);
      var fb2 = stat + 3;
      document.querySelector(".con").innerText = fb2.toString();
      //Racial Traits
      rb1 = `Beefcake: Titans gain +3 to Strength and Constitution along with uncapped Passive Defense, but their Dexterity is locked as a base 1 during character creation in addition to the 1 they must assign normally. Strength and Constitution require half SP to increase, and Dexerity requires 4x SP to increase.\n\n`;
  
      rb2 = `Ungainly: Titans are incapable of wearing armor with a Heavy rating of less than 5, and cannot wield one-handed ranged weapons or dual wield any form of weapon.\n\n`;
  
      rb3 = `Long Strides: Titans calculate move speed, and only move speed, with 1/2 Strength instead of Dexterity.\n\n`;
  
      rb4 = `Tis A Flesh Wound: Destroyed limbs regenerate 1 HP per week until hitting zero, when they begin regenerating naturally. Additionally a Titan’s natural regeneration is equal to their Max HP every Reset.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
      racial.value += rb4;
    } else if (raCho.options[raCho.selectedIndex].text == "Hao(The Collective)") {
      //STATS
      var stat = parseInt(document.querySelector(".str").innerText);
      var fb1 = stat + 3;
      document.querySelector(".str").innerText = fb1.toString();
  
      var stat = parseInt(document.querySelector(".con").innerText);
      var fb2 = stat + 3;
      document.querySelector(".con").innerText = fb2.toString();
  
      var stat = parseInt(document.querySelector(".dex").innerText);
      var fb3 = stat + 3;
      document.querySelector(".dex").innerText = fb3.toString();
  
      //Racial Traits
      rb1 = `Steel-Skinned and Iron-Hearted: Haos have +3 to Strength, Constitution, Dexterity, and Perception during CC, but these stats cannot be increased by SP or any power, and they are incapable of having any powers that rely on those four stats. They also gain uncapped Passive Defense. All Collective possess an ability to draw upon their previous lives and may expend a full round action to distribute 5 skill points among any skills, these points do not count towards techniques or SP count, these points may only be reassigned once per reset.\n\n`;
  
      rb2 = `Unbroken, Undaunted, Unstoppable: Haos take no Base HP damage from limb blocks and cannot fall unconscious or be incapacitated until killed, along with being immune to bleeding out. However, they cannot regenerate naturally or be healed by Medicine, instead requiring Craft checks as if they were broken armor.\n\n`;
  
      rb3 = `Juggernaut: Haos cannot wear any armor smaller than a Personal Mech. If a Collective were to die, they can be entirely rebuilt as a T4R project so long as their head is still intact.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
    } else if (raCho.options[raCho.selectedIndex].text == "Ork") {
      //STATS
  
      //Racial Traits
      rb1 = `Dumb As A Brick: Orks are, generally, not the brightest of lightbulbs. An Ork's Intelligence is capped at 1 during CC in addition to the naturally assigned 1 and requires 2x SP to raise naturally.\n\n`;
  
      rb2 = `Barely Tickled: Orks reduce all damage by a flat 1 after passive, which cannot be bypassed under any circumstances. \n\n`;
  
      rb3 = `Ghaz's Echoes: Every round of combat, an Ork gains +1 to all stats, including Intelligence. This stacks a number of times equal to the Ork's Constitution unmodified by this ability. This ability lasts for 2d2 rounds after hostilities finish.\n\n`;
  
      rb4 = `Up Close And Personal: Every ranged weapon an Ork uses has 1/5th the range it normally does, as they find it incredibly hard to focus on faraway enemies without giving into the urge to get in fightin' range.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
      racial.value += rb4;
    } else if (raCho.options[raCho.selectedIndex].text == "Human") {
      //STATS
  
      //Racial Traits
      rb1 = `I'll Figure It Out: Humans gain 1.5x SP from all sources.\n\n`;
  
      racial.value = rb1;
    } else if (raCho.options[raCho.selectedIndex].text == "Halfling") {
      //STATS
  
      //Racial Traits
      rb1 = `Diminutive: Halflings have halved move speed and their Strength starts out capped at 1, along with requiring them to spend quadruple SP to raise it. Their Dexterity requires half SP to raise, however, and their small size grants them 3 Dice to Active Defense per point of Dexterity rather than two.\n\n`;
  
      rb2 = `Squishy: Halfling Passive caps at 3 barring powers, and they bleed out twice as fast as other races.\n\n`;
  
      rb3 = `Better To Be Lucky Than Good: Halflings can reroll all 1s on a given check a number of times equal to their Charisma every reset.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
    } else if (raCho.options[raCho.selectedIndex].text == "Minotaur") {
      //STATS
      var stat = parseInt(document.querySelector(".str").innerText);
      var fb1 = stat + 1;
      document.querySelector(".str").innerText = fb1.toString();
  
      var stat = parseInt(document.querySelector(".dex").innerText);
      var fb3 = stat + 1;
      document.querySelector(".dex").innerText = fb3.toString();
  
      var stat = parseInt(document.querySelector(".con").innerText);
      var fb2 = stat + 1;
      document.querySelector(".con").innerText = fb2.toString();
      //Racial Traits
      rb1 = `Bloodbath: Minotaurs gain +1 Strength, Dexterity, and Constitution, and each of them requires 1/2 SP cost to raise further. Additionally, all SP gained by Minotaurs from combat is considered free-floating.\n\n`;
  
      rb2 = `Seeing Red: Should a combat continue for more rounds than the Minotaur has points of Willpower they go berserk, and their targets start getting picked randomly from friends and foes both.\n\n`;
  
      rb3 = `Not Done Yet: Minotaurs double their End dice for purposes of resisting incapacitation, unconsciousness, and death. While rolling End, Minotaurs automatically return to sanity until they fall unconscious, begin bleeding out, or die.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
    } else if (raCho.options[raCho.selectedIndex].text == "Earth Child") {
      //STATS
      var stat = parseInt(document.querySelector(".str").innerText);
      var fb1 = stat + 2;
      document.querySelector(".str").innerText = fb1.toString();
  
      //Racial Traits
      rb1 = `Earth: +2 Strength, they may treat any armour they are wearing as if it was a stage lower.\n\n`;
  
      racial.value = rb1;
    } else if (raCho.options[raCho.selectedIndex].text == "Water Child") {
      //STATS
      var stat = parseInt(document.querySelector(".con").innerText);
      var fb1 = stat + 2;
      document.querySelector(".con").innerText = fb1.toString();
  
      //Racial Traits
      rb1 = `Water: +2 Constitution, they may instantly restore half the damage they took from a single physical attack once per reset as their flesh flows over a wound.\n\n`;
  
      racial.value = rb1;
    } else if (raCho.options[raCho.selectedIndex].text == "Fire Child") {
      //STATS
      var stat = parseInt(document.querySelector(".will").innerText);
      var fb1 = stat + 2;
      document.querySelector(".will").innerText = fb1.toString();
  
      //Racial Traits
      rb1 = `Fire: +2 Willpower, they may burn 2 MP to add Willpower to a single non-attack roll check once per round during combat.\n\n`;
  
      racial.value = rb1;
    } else if (raCho.options[raCho.selectedIndex].text == "Force Child") {
      //STATS
      var stat = parseInt(document.querySelector(".cha").innerText);
      var fb1 = stat + 2;
      document.querySelector(".cha").innerText = fb1.toString();
  
      //Racial Traits
      rb1 = `Force: +2 Charisma, a Child of Force may make a small explosion of force propelling them using charisma as if it was a super jump, this ability may be used at almost any time so long as the user is prepared and has the actions to do so.\n\n`;
  
      racial.value = rb1;
    } else if (raCho.options[raCho.selectedIndex].text == "Air Child") {
      //STATS
      var stat = parseInt(document.querySelector(".per").innerText);
      var fb1 = stat + 2;
      document.querySelector(".per").innerText = fb1.toString();
  
      //Racial Traits
      rb1 = `Air: +2 Perception, they may ignore stealth bonuses granted by terrain so long as they are within the same atmosphere as a foe.\n\n`;
  
      racial.value = rb1;
    } else if (raCho.options[raCho.selectedIndex].text == "Light Child") {
      //STATS
      var stat = parseInt(document.querySelector(".dex").innerText);
      var fb1 = stat + 2;
      document.querySelector(".dex").innerText = fb1.toString();
  
      //Racial Traits
      rb1 = `Light: +2 Dexterity, they may choose to teleport anywhere they can see within their normal movement range rather than move normally at will, so long as both where they start and where they end is well lit.\n\n`;
  
      racial.value = rb1;
    } else if (raCho.options[raCho.selectedIndex].text == "Void Walker") {
      //STATS
  
      //Racial Traits
      rb1 = `Voidling: Void Walkers possess a Mana of 2, and start with an unlocked Spellcasting skill. Void Walkers can learn and cast any E-Rank spell due to their natural aptitude but find it difficult to learn any higher spells as well as costing double SP in order to grow their Mana stat.\n\n`;
  
      rb2 = `Out of Touch: The only thing a Void Elf can do with their internal magic reserve, they can as a reaction once per round halve any HP damage they take after Passive Defense as they become slightly out of phase with reality. This costs 10 Mana.\n\n`;
  
      rb3 = `Undying: Void Elves require double the amount of damage taken to actually die rather than be reduced to bleeding out, likely because of their link to the quasi-immortal Void Spirits.\n\n`;
  
      rb4 = `Should Not Be: Constitution and Charisma both require double SP to raise due to their semi-ethereal nature, and Charisma caps at 1 during CC due to the inherent wrongness of their presence.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
      racial.value += rb4;
    } else if (raCho.options[raCho.selectedIndex].text == "Galvan") {
      //STATS
      var stat = parseInt(document.querySelector(".int").innerText);
      var fb1 = stat + 2;
      document.querySelector(".int").innerText = fb1.toString();
  
      //Racial Traits
      rb1 = `Tiny Geniuses: Galvan are tiny frog people who possess unparalleled intellect and as such have +2 Int as well as gaining an additional dice per point of Intellect they have. A Galvan may also choose a number of skills equal to their unmodified Int stat, these skills may be learnt at half SP cost.\n\n`;
  
      rb2 = `Neuron Blast: Should a Galvan ever find themselves in danger or peril they may unlock their limited brain capacity once per day for 2d2 turns, during which they add their Int dice to all non Strength or Constitution based checks. However, upon the end of this effect the Galvan is instantly rendered unconscious at 0HP and MP.\n\n`;
  
      rb3 = `Frog People: The tiny bodies of the Galvan are their greatest weakness, causing their physical stats to be locked at 4 and grow at a halved SP rate, additionally they are also incapable of utilizing any equipment that a member of their race does not personally make. Galvans also gain 3 dice per point in Dex instead of 2.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
    } else if (raCho.options[raCho.selectedIndex].text == "Krabocron") {
      //STATS
      var stat = parseInt(document.querySelector(".str").innerText);
      var fb1 = stat + 4;
      document.querySelector(".str").innerText = fb1.toString();
  
      var stat = parseInt(document.querySelector(".con").innerText);
      var fb2 = stat + 4;
      document.querySelector(".con").innerText = fb2.toString();
  
      var stat = parseInt(document.querySelector(".dex").innerText);
      var fb3 = stat + 2;
      document.querySelector(".dex").innerText = fb3.toString();
  
      var stat = parseInt(document.querySelector(".int").innerText);
      var fb4 = stat - 1;
  
      if (fb4 < 0 || fb4 == 0) {
        fb4 = 1;
      }
      document.querySelector(".int").innerText = fb4.toString();
  
      var stat = parseInt(document.querySelector(".will").innerText);
      var fb5 = stat - 1;
  
      if (fb5 < 0 || fb5 == 0) {
        fb5 = 1;
      }
      document.querySelector(".will").innerText = fb5.toString();
  
      var stat = parseInt(document.querySelector(".cha").innerText);
      var fb6 = stat + 1;
      document.querySelector(".cha").innerText = fb6.toString();
  
      //Racial Traits
      rb1 = `KRAB PEOPLE: Krabocrons are an amazingly powerful and durable race, possessing +4 in Strength, Con and +2 Dex as well as a powerful carapace that grants an additional +4 Passive (but does not uncap it) however they possess a malus to both Int and Will of -1 and suffer from halved growth in those stats due to their self-obsession with their own strength.\n\n`;
  
      rb2 = `LOOK LIKE KRAB: Krabocrons possess powerful pincers that grant their brawling attacks +10 dice and a max damage of 15 as well as letting them retain AD while grappling a target, unfortunately this also completely renders them unable to wear armour or use weapons in any such way.\n\n`;
  
      rb3 = `TALK LIKE PEOPLE: Krabocrons are absolutely terrible at talking with people, having a quartered SP gain on all social skills but paradoxically have a surprisingly strong personality, giving them +1 Charisma.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
    } else if (raCho.options[raCho.selectedIndex].text == "Dryad") {
      //STATS
      var stat = parseInt(document.querySelector(".int").innerText);
      var fb4 = stat - 1;
  
      if (fb4 < 0 || fb4 == 0) {
        fb4 = 1;
      }
      document.querySelector(".int").innerText = fb4.toString();
  
      var stat = parseInt(document.querySelector(".will").innerText);
      var fb5 = stat + 2;
      document.querySelector(".will").innerText = fb5.toString();
  
      var stat = parseInt(document.querySelector(".cha").innerText);
      var fb5 = stat + 2;
      document.querySelector(".cha").innerText = fb5.toString();
  
      //Racial Traits
      rb1 = `Sons and Daughters of Green: Dryads are a plantlike race of humanoids and lack any of the downsides of having proper organs, they may also regenerate 1Hp a round while in direct sunlight or while submerged in water.\n\n`;
  
      rb2 = `Plantkin: Dryads possess an innate connection to themselves and the world around them, granting them +2 Will and Charisma but this also leaves them rather air headed, reducing their Int by 1. Dryads may speak to any nearby plants as if they were sentient an amount of times per day equal to half their Will score, most plants will answer truthfully of anything they had seen or sensed within the past 24 hours.\n\n`;
  
      rb3 = `Curse of Root:  A Dryad's plant based biology is far from perfect and renders them vulnerable to Fire and Poison based damage, causing them to have halved and no passive towards each damage type respectively.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
    } else if (raCho.options[raCho.selectedIndex].text == "Uplifted") {
      //STATS
  
      //Racial Traits
      rb1 = `Immortal Flesh Slimes: Whether their transformation was willing or not, Uplifted are minor Biokinetic Flesh Slimes in the shape of a regular Terran. Uplifted possess a universal 1 HP regeneration a turn from all attacks that aren’t Acidic, Fire or Erasive in nature and cannot conventionally die from physical damage, this however has left the race at large generally cocky to their own invincibility, causing them to suffer -4 to any nerve checks once this illusion shatters.\n\n`;
  
      rb2 = `Undying Bastards: Upon being reduced to 0HP from an attack or situation the user may rapidly and violently evolve, halving all damage taken from that source for d4 IRL days, if the damage was taken due to a environmental effect such as ambient heat or drowning, this adaption instead make the user immune to said effect for 2d2 IRL Days.\n\n`;
  
      rb3 = `Genetic Putty Spill: All of an Uplifted stats are uncapped but due to how their body works, they are completely unable to gain Cybernetics and are utterly immune to most Genemods.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
    } else if (raCho.options[raCho.selectedIndex].text == "Karia") {
      //STATS
  
      var stat = parseInt(document.querySelector(".cha").innerText);
      var fb5 = stat + 2;
      document.querySelector(".cha").innerText = fb5.toString();
  
      //Racial Traits
      rb1 = `I Wanna Be Like You: select one race trait that's based in biology from any other race. You now suffer from all positives and negatives of that trait as if you were a natural-born member of that race, as your biology shifts to accommodate this. This additionally makes you take on the appearance of an idealized and distinctly Alien version of that  race..though people don't seem to mind? They call you pretty, handsome, exotic. You believe them. For Karia that emulate humans, instead of gaining a racial trait they mitigate their halved Mental Passive and Will Dice to Nerve, due to the inherent adaptability of humanity allowing them to shore up some of their racial weaknesses.\n\n`;
  
      rb2 = `I Know How You Feel: Karia, as part of their strange biology and something akin to an innate psionic ability, are easily able to understand others and make themselves understood. In a way, they are social savants, being able to craft extremely convincing lies, see through them, and rally others around themselves and their viewpoints. Karia gain +2 to Charisma, and may choose halved SP costs for either Lie, Convince, or Insight.\n\n`;
  
      rb3 = `Sometimes Empathy Sucks: Karia, being natural masters of the mind and social tactics, are not great at rejection. In addition, their psychic empathy renders them vulnerable to mental attack, halving their Mental Passive and doubling the SP cost to increase Willpower. Their difficulty grasping rejection and constant reaching out to nearby minds doubles the cost of raising Nerve and halves the dice Willpower grants to the Nerve skill.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
    } else if (raCho.options[raCho.selectedIndex].text == "Mitra") {
      //STATS
      var stat = parseInt(document.querySelector(".con").innerText);
      var fb2 = stat - 1;
  
      if (fb2 < 0 || fb2 == 0) {
        fb2 = 1;
      }
      document.querySelector(".con").innerText = fb2.toString();
  
      var stat = parseInt(document.querySelector(".will").innerText);
      var fb5 = stat + 2;
      document.querySelector(".will").innerText = fb5.toString();
  
      var stat = parseInt(document.querySelector(".cha").innerText);
      var fb5 = stat + 1;
      document.querySelector(".cha").innerText = fb5.toString();
  
      //Racial Traits
      rb1 = `Brave Heart, Frail Body: Mitra are... not exactly the sturdiest around, physically. However, their wills are strong and they have... an excess of force of personality and a way with people. They gain +2 Will and +1 Charisma, but -1 Constitution.  Mitra are also  latent Psions. This grants them the ability to, as a Free Action, body block for any ally within 2 units of themselves as their sheer desire to protect their chosen pack drives them forward. They may also "mind block", which applies the Body Block rules to mentalist attacks.\n\n`;
  
      rb2 = `There's No Such Thing As A Bad Dog: Mitra are exceedingly loyal to those they choose as their pack, refusing to take any action they deem as disloyal to their pack. If they attempt to make a decision they perceive as disloyal, they must make a nerve check with a DC of at absolute minimum their Willpower dice. Anyone attempting to persuade a Mitra that an action they would otherwise perceive as disloyal is, in fact living up to their loyalties must meet a Convince DC equal to the Mitra's Nerve dice. (As in Nerve+Willpower.). However, their sheer desire to protect others manifests in their ability to retain their full Active Defense while Body Blocking.\n\n`;
  
      rb3 = `Unconditional Love Is A Terrible Thing: If a Mitra or their pack is betrayed in a substantial manner by a pack member, the Mitra in question goes into a blood rage, seeking to rend the traitor limb from limb. In this state, they add half their Willpower dice to all rolls and double their endurance dice for a number of rounds equal to their Willpower stat, doing everything in their power to put the traitor down and not listening to reason.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
    } else if (raCho.options[raCho.selectedIndex].text == "Basker") {
      //STATS
      var stat = parseInt(document.querySelector(".con").innerText);
      var fb2 = stat + 2;
      document.querySelector(".con").innerText = fb2.toString();
  
      //Racial Traits
      rb1 = `Teenage Mutant Ninja Turtles:  Basker Turtles gain +2 to Con, and have a Shell that acts as Plating with Passive equal to their Constitution and HP equal to half their torso HP.  This shell regenerates 1 HP per round at all times, and will fully regenerate 2d3 rounds later if cracked open fully. Additionally, while the shell is cracked, the turtle's torso passive is halved and their base body gains 1 HP of regen per round, which ceases upon full regeneration of the shell.  Additionally, they may shrink to any size bigger than the palm of a standard human hand, gaining +4 dice to Stealth and +2 Dexterity in this state but halving Strength and HP. Also, Basker Turtles cannot take ranks in Lie, as they are too friendly and amiable to bother with it.\n\n`;
  
      rb2 = `Still A Turtle: However, due to being a turtle,a Basker is unable to use weapons or wear any armor that is not specialized for their body, unless their power grants them a humanoid form or otherwise enables this. They gain 2 free ranks in Shields and may use their Shell as a Shield for the purpose of blocking attacks and shield techs. Additionally, the user halves their Move and AD(but not their Dexterity). However, the user may bite people as a Strength-Based Unnatural Weapons attack with 4 Additional Dice and Max Damage Successes of 12,may do a Body Slam as a Unnatural Weapons attack with uncapped Max Damage Successes and Passive Crush 2,  and may additionally withdraw into their shell, making them immune to Called Shots that aren't to the shell and allowing them access to their full AD at the cost of capping the Body Slam damage to 10. A Body Slam may only be executed as a Jump Strike.\n\n`;
  
      rb3 = `Rapid Spin, Bitch: Basker Turtles have access to a unique Dex-Based Brawling variant: Spinning. Spinning may only be used when a Basker is tucked into their shell, and has its own techniques.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
    } else if (raCho.options[raCho.selectedIndex].text == "Mahntral") {
      //STATS
      var stat = parseInt(document.querySelector(".str").innerText);
      var fb1 = stat + 2;
      document.querySelector(".str").innerText = fb1.toString();
  
      var stat = parseInt(document.querySelector(".dex").innerText);
      var fb3 = stat + 2;
      document.querySelector(".dex").innerText = fb3.toString();
  
      //Racial Traits
      rb1 = `Obvious Predator: Mahntral's are gigantic buff cat people that are generally based on lions. As such they happen to be obligate carnivores and retain some animal advantages. They possess +2 to Str and Dex but their Will takes twice the SP to raise.\n\n`;
  
      rb2 = `Sheathed Claws: Mahntral's possess clawed nails that typically stay somewhat retracted, as a free action they can unsheathe these to add +4 dice to unarmed attacks but break if the attack is soaked by passive defense. Claws recover post combat.\n\n`;
  
      rb3 = `Glorious Mane: Mahntral's possess a mane of hair around their throat regardless of gender that is capable of defending them, granting them immunity to throat called shots but renders them unable to wear most helmets.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
    } else if (raCho.options[raCho.selectedIndex].text == "Squat") {
      //STATS
  
      //Racial Traits
      rb1 = `Stocky: Squats have halved move speed and their Dex starts out capped at 1. Their Strength requires half SP to raise, however, and their square stature grants them 1 Dice to Active Defense per point of Dexterity rather than 2.\n\n`;
  
      rb2 = `Hardy: Squats are hardy people and have an additional +3 to Passive and add +4 to any End Checks.\n\n`;
  
      rb3 = `Luck is for Fools and Cons: The user may instead choose to take half their dice in successes than actually roll for any check. An additional +4 may then be added to the total successes a number of times a day equal to either the Squat's Int or Con, whichever is higher.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
    } else if (raCho.options[raCho.selectedIndex].text == "Necro-Person") {
      //STATS
      var stat = parseInt(document.querySelector(".str").innerText);
      var fb1 = stat + 3;
      document.querySelector(".str").innerText = fb1.toString();
  
      var stat = parseInt(document.querySelector(".con").innerText);
      var fb2 = stat + 3;
      document.querySelector(".con").innerText = fb2.toString();
  
      var stat = parseInt(document.querySelector(".dex").innerText);
      var fb3 = stat - 1;
  
      if (fb3 < 0 || fb3 == 0) {
        fb3 = 1;
      }
      document.querySelector(".dex").innerText = fb3.toString();
  
      //Racial Traits
      rb1 = `Accursed Rotted Thing: Necromen's undead vitality grant them +3 Strength and +3 Vitality as well as -1 Dex as well as granting them complete immunity to poisons, diseases, and lesser biokinesis, this also however renders them slow to change, doubling the Sp requirement of Strength and Vitality. The user's Con stat is replaced with Vitality, which grants 3HP and dice per point instead of 2 and caps their passive at 3.\n\n`;
  
      rb2 = `Cold Flesh and Stilled Heart: No blood flows in a Necromen's veins, rendering them immune to environmental cold damage and halving any cold damage, however their dry flesh and bones leaves them vulnerable to fire, causing them to take double environmental heat damage and halving the user's passive against fire.\n\n`;
  
      rb3 = `Undying: Necromen are effectively undying, unable to fall unconscious or bleedout only ever falling to instant death. Necromen are also unfortunately unable to naturally heal, relying on Surgery and first aid to heal any damage. If a Necromen were to fall in combat but remain mostly intact, a T2R Biology craft check may be performed on their body to resurrect them.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
    } else if (raCho.options[raCho.selectedIndex].text == "Clone") {
      //STATS
  
      //Racial Traits
      rb1 = `Old World Paragons: Raised into genetic perfection Clones possess a baseline 3 in every stat, ignoring the standard array, and gain 1.5x Stat SP as they continue to rapidly develop mentally and physically. Additionally, due to imprinted memories, all Clones start with an additional 5 skill points in CC to use as they please.\n\n`;
  
      rb2 = `Long Forgotten Legacies: Clones are all almost universally sourced from the best and brightest around and as such they carry around traits not commonly seen within the common man, at CC may pick any of the below Legacies and one of the traits within it, please contact a GM about the abilities of each trait.\n\n`;
  
      rb3 = `Legacy: War Hero: Whether it be through grit or determination, you possess a legacy of great resilience and as such gain either the War Machine, Invictus or Killer Instinct trait.\n\n`;
  
      rb4 = `Legacy: Explorer: Your legacy belongs to that of pioneers of the wilds and as such you possess that little extra kick that makes the wilds all the easier to survive. Gain either the Marathon, Big Game Hunter, or the Leg Day trait.\n\n`;
  
      rb5 = `Legacy: Paragon: Descended from heroes you possess the legacy of the greats who came before us as they strove to break every limit imaginable. Gain either the, Freak of Nature, Adamantine, or Inspiring trait.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
      racial.value += rb2;
      racial.value += rb3;
    } else if (raCho.options[raCho.selectedIndex].text == "Gigaloth") {
      //STATS
      var stat = parseInt(document.querySelector(".str").innerText);
      var fb1 = stat + 2;
      document.querySelector(".str").innerText = fb1.toString();
  
      var stat = parseInt(document.querySelector(".dex").innerText);
      var fb3 = stat + 3;
      document.querySelector(".dex").innerText = fb3.toString();
  
      //Racial Traits
      rb1 = `Shaggy Fella: Gigaloths possess +2 Strength and +3 Dex owed to their tall stature and possess an innate +3 to Acrobatics and Stealth. The fur of a Gigaloth doubles their passive against cutting and piercing damage and halves the damage of crushing attacks but renders them unable to wear armor heavier than light.\n\n`;
  
      rb2 = `HandyMan: All Gigaloths possess an extra arm that stretches and maneuvers with uncanny ability, this arm may hold any one-handed weapon and be used to attack nearby foes as a free action at half dice.\n\n`;
  
      rb3 = `Cryptid:  Gigaloths do not suffer stealth penalties from lighting or their own size and may stealth at any time, so long as they are at least lightly obscured.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
    } else if (raCho.options[raCho.selectedIndex].text == "Puplets") {
      //STATS
      document.querySelector(".str").innerText = "3";
      document.querySelector(".dex").innerText = "4";
      document.querySelector(".con").innerText = "3";
      document.querySelector(".will").innerText = "5";
      document.querySelector(".per").innerText = "4";
  
      //Racial Traits
      rb1 = `Variably Sized, Very Cute: Each individual Puplet can only reach a maximum of 3 Strength, 4 Dexterity, 3 Constitution, 5 Willpower, and 4 Perception, and gain no stat boosts from their race at CC. This limit also acts as the base stats for when they work together.
  
  Puplets working tightly together act essentially as a single individual, even being able to wear armor, and have access to the Conditional (P) stat called “Pack”. This stat grants 2 Points per rank in it with a base Pack stat of 4 so long as there are two or more Puplets. Each Point of Pack may be assigned to Strength, Dexterity, Constitution, Perception, or Willpower, and each point invested in a stat increases it by +2, up to a maximum of double the amount of Puplets in the pack. "Pack" only gains SP from combat or non-combat use and cannot be traditionally trained.
  
  Packs are immune to eye shots but are otherwise subject to normal damage transfer from other called shot areas as injured puplets need to be held up more. Should a pack’s main HP reach 0 or lower, but isn’t reduced to the instant death threshold, all individual pack mates fall apart and are rendered unconscious with 0 HP.
  \n\n`;
  
      rb2 = `Swarming and Zording: The Pack-Person may, as an action, halve the effectiveness of their Pack stat to halve damage from single-target attacks and double the Dice Penalty of Called Shots. However, in this state, they cannot make called shots, as the Pack is not cohesive enough for that sort of precision. Additionally, they cannot wear armor in Swarm Form. Additionally, all Called Shot Targets are individual Puplets with their own HP in either state, meaning even if an Arm was destroyed, the attached Hand could crawl back to the whole. Though destroying a Puplet naturally reduces the pack size by 1.\n\n`;
  
      rb3 = `No Thoughts, Head Empty: Puplets have -1 to Int and Double SP Costs on Intelligence skills that aren't Knowledge: Exploration. However, they are treated as Initiate 1 for the purposes of Convince and Insight, at least when they can leverage their cuteness.
  
  Puplets in a pack also gain the ability to freely reroll any Knowledge check as another member of the pack might have picked up on something. This can be done half as many times as there are pack members.
  \n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
    } else if (raCho.options[raCho.selectedIndex].text == "Squall") {
      //STATS
      var stat = parseInt(document.querySelector(".per").innerText);
      var fb1 = stat + 1;
      document.querySelector(".per").innerText = fb1.toString();
  
      var stat = parseInt(document.querySelector(".dex").innerText);
      var fb3 = stat + 2;
      document.querySelector(".dex").innerText = fb3.toString();
  
      //Racial Traits
      rb1 = `It's a Bird! It's a Plane… oh, it's a Bird!: Squall gain +2 Dexterity, and a Bonus Action on their turn, during which they can use the wings extending from their back to fly a number of units equal to what their Dexterity would allow on the ground, plus 2 units for every point in Fly. However, they plummet to earth at the end of their turn, so they need to watch out! Additionally, should they take HP damage equal to or greater than their Passive after Passive to any body part in one hit, they must spend 2d2 HP per round to use their Flight Bonus Action. This penalty lasts until they are fully healed as flying while injured exacerbates their wounds.\n\n`;
  
      rb2 = `Eagle-Eyed And Bird-Brained: Squall gain +1 Perception, the ability to add Aim equal to their Perception stat to all ranged weapons and other ranged attacks and may see around corners, but in return, have Int capped at 1 at Character Creation and have doubled SP costs for both Intelligence and Intelligence-linked skills.\n\n`;
  
      rb3 = `Voracious And Fragile: All Squall add +4 to the DC of all Endurance Checks and must roll Nerve to not immediately devour any and all fish in sight, as well as being easily swayed by shiny objects. However, one can Halve Nerve and End DCs by tempting a Squall with Fish or Shiny Objects.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
    } else if (raCho.options[raCho.selectedIndex].text == "Aquarian") {
      //STATS
      var stat = parseInt(document.querySelector(".will").innerText);
      var fb1 = stat + 1;
      document.querySelector(".will").innerText = fb1.toString();
  
      document.querySelector(".str").innerText = "3";
      document.querySelector(".dex").innerText = "3";
      document.querySelector(".con").innerText = "3";
  
      //Racial Traits
      rb1 = `Hydraulic Power: All Aquarians are all latent Hydrokinetics. As such, when outside of Water, they contain themselves within a water construct that vaguely resembles a humanoid form. The younger generation has taken to calling this construct their "Hydromecha". This water Construct has a Water(A) Conditional Stat that act as the mechs constitution for the sake of Passive Defense and HP. Water, for the purposes of a Hydromecha, adds to all Strength checks, including Brawling and Grapples, replaces Dexterity for all rolls except Initiative, and adds to Endurance and Nerve while inside the mech.\n\n`;
  
      rb2 = `Powerful Soul, Weak Body:  Aquarians naturally have their Strength, Dexterity, and Constitution capped at 3 unless Powers or something else would alter this, as their small bodies and piscine nature limit them. However, they have +1 Willpower and +2 Water, and may spend 2 MP to add their Willpower dice to one physical stat for 2d2 rounds, including perception. This boost can only be applied twice to the same physical stat, but all physical stats can be boosted at once and it is a Free Action on the user's turn to do so.  Additionally, the Mech regenerates HP equal to 1/2 Water per round when submerged.\n\n`;
  
      rb3 = `In Fact, A Fish:  If the Hydromecha is destroyed, an Aquarian may reconstruct it as a Full Round Action. If they cannot do so or are unconscious, they begin to Suffocate, starting after 3 combat rounds if conscious and in combat, or 1 minute if unconscious, incapacitated, or out of combat. The Mecha may be reformed as a Move Action when submerged or by spending 4 MP otherwise. Additionally, Aquarians cannot wear armor that hasn't been specially modified to work with their Mecha.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
    } else if (raCho.options[raCho.selectedIndex].text == "Squidhat") {
      //STATS
      var stat = parseInt(document.querySelector(".str").innerText);
      var fb1 = stat - 1;
      document.querySelector(".str").innerText = fb1.toString();
  
      var stat = parseInt(document.querySelector(".dex").innerText);
      var fb2 = stat - 1;
      document.querySelector(".dex").innerText = fb2.toString();
  
      var stat = parseInt(document.querySelector(".con").innerText);
      var fb3 = stat - 1;
      document.querySelector(".con").innerText = fb3.toString();
  
      var stat = parseInt(document.querySelector(".int").innerText);
      var fb4 = stat + 1;
      document.querySelector(".int").innerText = fb4.toString();
  
      var stat = parseInt(document.querySelector(".will").innerText);
      var fb5 = stat + 1;
      document.querySelector(".will").innerText = fb5.toString();
  
      var stat = parseInt(document.querySelector(".cha").innerText);
      var fb6 = stat + 1;
      document.querySelector(".cha").innerText = fb6.toString();
  
      //Racial Traits
      rb1 = `Semi-Nonstandard Existence: Due to their extradimensional nature and mollusk-like physiology, when a Squidhat is out of their armor, they possess 8 Limbs and Limb Blocks equal to Dexterity(x2). This often necessitates blowing off all their limbs before aiming for the center of mass. Additionally, destroyed limbs heal as if they are merely broken, and limbs specifically possess natural healing at twice the rate of other species. However, their central body heals naturally at half the rate of others, often necessitating medical attention for such injuries.\n\n`;
  
      rb2 = `Smart Little Squids: There are upsides and downsides to being an adorable cephalopod, like having a proportionally huge brain. One of them is that there is naturally less body to, well, body. As such, they possess a -1 to Strength, Dexterity, and Constitution but gain +1 in Intelligence, Willpower, and Charisma, and have halved SP cost for increasing Will due to their strong minds and stronger souls.\n\n`;
  
      rb3 = `Armored Cephalopods: While piloting a set of armor, they may use weapons and other similar equipment, and may add half their Intelligence or Willpower to all physical checks.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
    } else if (raCho.options[raCho.selectedIndex].text == "Piscine") {
      //STATS
  
      //Racial Traits
      rb1 = `Strength From The Deep: Piscine can breathe underwater and seem to be stronger, faster, and sturdier underwater. Conversely, they do poorly in extremely arid environments. They gain +1 to Strength, Constitution, and Dexterity when wet, +2 when Submerged, -1 when Dry, and -2 when Dehydrated. Due to this, they tend to require specialized armor or other apparatuses typically built into clothing or other gear to maintain optimal health and function.\n\n`;
  
      rb2 = `The Blubberkin: Whales, Walruses, Seals, and other large marine creatures that specialize in Bulk. They gain 3 HP per Constitution point, but only 1 Active Defense per Dexterity, barring power interactions and other things.\n\n`;
  
      rb3 = `The Lurkers: Intelligent, sneaky camouflage types, whether predator or prey. Anglerfish, Rockfish, Octopi, Frogfish, other sorts like that. They gain 1 rank of Chameleon per Constitution, but their passive is capped at 4 and they halve their Charisma Dice for Convince and Lie checks.\n\n`;
  
      rb4 =
        "The Fragile Death: Jellies, Anemones, Lionfish, and the like. They gain 3 Acrobatics dice per Skill rank, but their Passive Defense is 0 no matter how high their Constitution gets. Additionally, they may add 1/2 of their Constitution Dice to any Brawling or Unnatural Weapons attack against flesh and any target that is hit by this must roll a Con-based Endurance check with a DC equal to the users Con, the DC increasing by 1 with every qualifying attack, or be Stunned for 1d3 Rounds. Additionally, the Endurance check is automatically made every round by anyone grappling the user.\n\n";
      rb5 =
        "Leapers: Flying Fish, Mullet, Carp, and the like. They may Jump with their Dexterity stat. After successfully Jumping a number of units, the user may Glide twice that distance in a direction of their choosing. Be careful about going Up, and well, Down. They are also flighty creatures. Their Will dice is Halved for purposes of Panic-Related Nerve checks, and when failing such rolls, your Panic result is more likely to be feeling than anything else.\n\n";
      rb6 =
        "The Undying: Sea stars, sea cucumbers, and all sorts of other fun things. These insane bastards can defy death itself, rising from the dead after a number of resets equal to 10-Constitution as long as a piece of them equal to a Medium Called Shot target or larger was not destroyed. However, other pieces may also regrow, and this often leads to conflict, though it is possible to persuade ones sibling-clone-children to fuck off or to work with them. However, they may not revive if killed by poison or certain other effects, their Passive Defense  is locked at 3 barring power interactions, and they take half dice on all Intelligence-based Checks due to their multiple brains struggling to remain in sync.\n\n";
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
      racial.value += rb4;
      racial.value += rb5;
      racial.value += rb6;
    } else if (raCho.options[raCho.selectedIndex].text == "Saurian") {
      //STATS
  
      //Racial Traits
      rb1 = `In Many Forms: Saurians come in many different shapes and sizes, but the following 3 are the most common. 
  
  Scout Caste: They gain +1 to Perception and Dexterity but have -1 to Strength and Constitution from their small, agile builds and sharp senses. 
  
  Warrior Caste: They gain +1 to Constitution and Strength, but have -1 to Intelligence and Perception, as though they are excellent warriors, they are not the sharpest tools in the shed. Additionally, warriors may use their tails to make Strength-based Unnatural Weapon attacks. 
  
  Shaman Caste: They gain +1 to Willpower and Intelligence but -1 to Strength and Dexterity. 
  
  All castes get all Endurance DCs lowered by 5, as they are too stubborn and resilient to quit. 
  \n\n`;
  
      rb2 = `Shiny Feathers and Lizard Tails: All saurians have rather pretty feathers in various shades, though the different castes and individual Saurians differ in placement, coloring, and abundance. These feathers and their naturally social minds grant them +4 dice for Convince and Threaten checks. Additionally, Saurians may use their Tails to limb block, which causes no damage to the base body, and they lose no stats if the tail breaks or is removed. And they may additionally sacrifice this tail to double their Grapple Dice for the purposes of escaping a Grapple, after which it immediately breaks off. The tail regrows to full functionality in 5-Constitution resets after being lost, minimum 1.\n\n`;
  
      rb3 = `I Don't Trust That Fucking Thing: When using technologically advanced weaponry (guns and the like, mostly), Saurians only add Half the dice the relevant stat grants, as they have an instinctive distrust for the blinking lights and clacking noises, showing a distinct preference for Power Constructs and Magic Items.\n\n`;
  
      racial.value = rb1;
      racial.value += rb2;
      racial.value += rb3;
    } else if (raCho.options[raCho.selectedIndex].text == "Lightning Child") {
      //STATS
      var stat = parseInt(document.querySelector(".will").innerText);
      var fb1 = stat + 1;
      document.querySelector(".will").innerText = fb1.toString();
  
      var stat = parseInt(document.querySelector(".dex").innerText);
      var fb3 = stat + 1;
      document.querySelector(".dex").innerText = fb3.toString();
  
      //Racial Traits
      rb1 = `Split Second: With a focused surge of power, Children of Lightning may reroll any of their own checks as a reaction, this may be done an amount of times per reset equal to half of either their Dex or Will stat.\n\n`;
  
      racial.value = rb1;
    }
  }
  
  //TRAITS
  function createClick() {
    trait = Math.floor(Math.random() * 70) + 1;
  
    t1 =
      "\n1- Posse: The user is surrounded with a number of Mercenaries two Star Ratings below them equal to their own Star Rating, with a minimum Star Rating of 1. This may be rolled up to three times, each time after the first increasing the Star Rating of the posse by one.\n";
    t2 =
      "\n2- Shard Addict: The user is in possession of a number of Orange or Yellow Shards equal to double their Star Rating, which can be in any combination of sizes. Each time this ability is selected, the user may either double the amount of Shards they have or increase their color rarity by 1.\n";
    t3 =
      "\n3- Gun Nut: The user increases their Star Rating for purposes of calculating a single Firearms Primary or Secondary skill by one, and may select Variant Firearms rather than standard ones if they so wish. This ability may be rolled multiple times, each time applying to a different Firearms skill.\n\n";
    t4 =
      "\n4- Laser Loon: The user may gain access to energy weapons one Req lower than their highest qualifier rather than a standard weapon.\n";
    t5 =
      "\n5- Armored: The user's armor increases by 1 Tier. This may only be rolled a total of twice, but they also may fill the new armor with Force Fields or Energy Shields as normal.\n";
    t6 =
      "\n6- Buckler: The user gains access to the Shields skill as a Secondary Skill if they did not already had it, and may add a Shield of the highest Req they can use to their equipment.\n";
    t7 =
      "\n7- Reckless Abandon: The user may halve any Active Defense they possess for a round in order to gain the ability to split an attack dice pool in two to make two attacks at once. This stacks with all other forms of multiattack.\n";
    t8 =
      "\n8- Cautious: The user has at least half AD at all times unless physically held down.\n";
    t9 =
      "\n9- Petty Magician: The user gains access to Mana as a Problem Stat, along with a number of E-Grade spells equal to their Star Rating, with every Grade above E doubling the amount of E-Grade spells they count as. This ability may be gained up to three times, and each time it is gained the Stat advances from Problem to Unmodified to Secondary and the user gains access to another selection of E-Grade or higher Spells.\n";
    t10 =
      "\n10- A Knight... of Sorts: The user gains access to a Mount of a Star Rating 2 below their own, minimum one. This ability may be gained up to three times, each time after the first increasing the Star Rating of the Mount.\n";
  
    t11 =
      "\n11- Initiate Monk: The user gains access to Ki as a Problem Stat, along with unlocking the Innate Attack skill as a Tertiary Skill if they do not already have it. This may be selected up to three times, each time after the first raising Ki and Innate Attack in Stat and Skill priority by 1.\n";
    t12 =
      "\n12- Hyperspecialized: When this ability is rolled, the user selects one of their Main Stats to increase to the next Star Rating above their current one, and one Main Stat to reduce to a Secondary Stat.\n";
    t13 =
      "\n13- Jack of All Trades: The user may drop a Main Stat down to a Secondary Stat in order to raise two Unmodified Stats to Secondary Stats or raise a Problem Stat to an Unmodified Stat.\n";
    t14 =
      "\n14- Destructive Blood: The user gains access to Innate Attack as a Tertiary Skill that scales off Constitution, and makes an Innate Attack with Max Damage 10+Star Rating and Additional Dice of Star Ratingx2 any time they take slashing or piercing damage. This may be selected up to twice, the second time increasing the user's effective Star Rating for this attack by one.\n";
    t15 =
      "\n15- Lesser Illusionist: The user gains Unpredictable equal to their Star Rating-1 to all attacks against targets with normal senses only, and an additional 2 Active Defense dice equal to the same against them.\n";
    t16 =
      "\n16- Doppelganger: The user may split their HP in half to create an identical clone of themselves and their equipment as a full-round action. Each additional time this is rolled both themselves and the clone may split one additional time, with no maximum.\n";
    t17 =
      "\n17- Blink: The user gains access to the Disorientation skill, calculated at half normal for Teleportation, and the ability to use BAMF as per the power. If this ability is gained a second time Disorientation is instead calculated as normal.\n";
    t18 =
      "\n18- Dabbling Cultivator: The user gains Initiate 1 on a single Primary Stat. Each time after the first this is selected an additional stat gains Initiate 1 and every two times this is rolled the total level of Initiate the user is increases by one.\n";
    t19 =
      "\n19- Mirror Image: The user may as a full-round action summon 1d4 Illusory Duplicates that function as the Mirror Image power. Each time this is rolled, the die size increases by 1 (d6, d8, etc)\n";
    t20 =
      "\n20- Karia: The user is actually a Karia variant of whatever race they are.\n";
  
    t21 =
      "\n21- Mind Spike: The user gains access to the Mentalist skill as a Tertiary that scales off of Charisma, and may make a Mentalist attack with Additional Dice equal to their Star Rating and Max Damage equal to four plus double their Star Rating.\n";
    t22 =
      "\n22- Elemental Fury: The user gains immunity to a single energy type on the Blaster Table, and access to the stat corresponding to that energy type as a Problem Stat. They may add this stat to any attack and in doing so additionally inflict the Blaster Effect of that given element on their attack, with any DC changing to be equal to four times their Star Rating and any DoT changing to be equal to their Star Rating. Each time this is rolled the user may choose to either gain a second element, increase the priority of an Elemental Stat by one, or increase their Star Rating by one for purposes of DCs and DoT with a single element.\n";
    t23 =
      "\n23-Airborne: The user gains a Flight speed equal to the higher priority of their Dexterity or Willpower stats, with ties going to Dexterity. They additionally gain access to Fly as a Tertiary Skill, and may add it to their Active Defense while flying.\n";
    t24 =
      "\n24- Unstoppable Machine: The user is a Hao rather than their original race, and uses all non-stat related racial traits of the Torchbearer Initiative 1 Hao race, rather than the Collective.\n";
    t25 =
      "\n25- ...A Fucking Turtle? The user is a Basker instead of their original race. All weapons they are proficient with are assumed to be cybernetically implanted, and they lose access to armor in favor of their shell.\n";
    t26 =
      "\n26- Signature Skill: The user may move a Secondary Skill to a Primary Skill, or increase a Primary Skill by one Star Rating. This may be selected any number of times, but may only apply to a given skill once at most.\n";
    t27 =
      "\n27- Walking Tank: The user's Passive Defense is uncapped if it wasn't already, and they gain Kinetic or Energy Resistance equal to their Star Rating.\n";
    t28 =
      "\n28- As I Live And Breathe, The Wolverine: The user gains access to the Healing Factor stat as a Problem Stat, and each time they gain this ability they may raise it in Stat priority once, up to a Primary Stat.\n";
    t29 =
      "\n29- Bestial Brute: The user gains access to Unnatural Weapon as a Secondary Skill that replicates Brawling with Additional Dice equal to twice the user's Star Rating and increases one of Strength, Dexterity, Constitution, or Perception by one in terms of stat priority, to a maximum of Primary.\n";
    t30 =
      "\n30- Golem: The user increases their Strength and Constitution's Stat Priority by one each, or their effective Star Rating for calculating it by one each if they're already Primary Stats. The user also no longer has reduced Passive Defense on any part of their body.\n";
  
    t31 =
      "\n31- My Specialty: The user gains access to a Broad Specialization related to one of their Primary or Secondary Skills with a number of Ranks equal to their Star Rating, obviously Maximum 5.\n";
    t32 =
      "\n32- From The Hip: The user may aim a weapon as a free action rather than a move action, or may aim a weapon without the Aim tag as a move action, using their Star Rating to replace to Aim number.\n";
    t33 =
      "\n33- Nuclear Option: Upon death, the user detonates as an uncapped attack that adds their two highest stats together and hits everything within 4xStar Rating units.\n";
    t34 =
      "\n34- Fighting a Shadow: The user's Star Rating is reduced by one until the first time they are killed, after which it is revealed that the slain version of the user was in some way an impostor or clone or minion and the real user is both alive and witnessed the entire fight.\n";
    t35 =
      "\n35- Ghaz's Paramour: The user gains access to Ghaz's Echoes despite not being an Ork, but they only rise up to 1/2 the user's Constitution stat.\n";
    t36 =
      "\n36- Puppeteer: The user gains Charisma as a Secondary stat if it is not already there or higher, and may a skill-less opposed Charisma check on a non-Mentalist immune target as an action, being able to dictate their actions for a number of rounds equal to their Star Rating, though they cannot force a target to do anything directly suicidal. The user or an ally attacking the target removes the control, and one can only be successfully controlled once per Reset.\n";
    t37 =
      "\n37- Void Spirit: The user is some form of Void Spirit, and reforms within 10-Star Rating resets when killed unless slain by esoteric means or MP damage.\n";
    t38 =
      "\n38- Sneaky Bugger: The user gains access to Stealth as a Secondary Skill if they did not already have it, and may use the Rupture Dagger Technique on any melee or ranged attack from Stealth.\n";
    t39 =
      "\n39- Blind Bruiser: The user is blind, and thus cannot read or determine color, but is also immune to Eye Shots and any effect that requires sight.\n";
    t40 =
      "\n40- Vat-Grown: The user's race changes to Clone, and they add 3 to all of their Stats before any other calculation is done, along with selecting Clone Traits as normal.\n";
  
    t41 =
      "\n41- WHY DID IT HAVE TO BE FUCKING SUPERMAN? The user is a hybrid Sunblood Eternal, and cannot select any other power-based or magic-based Traits, but they have 200 Charge per Star Rating they possess and the normal Eternal milestones for reaching them.\n";
    t42 =
      "\n42- The Big Guns: The user's main weapon, should it be two-handed, counts as a Small Vehicle for purposes of dealing damage.\n";
    t43 =
      "\n43- Oh Great, A Flesh Slime: The user's race changes to Uplifted, rather than what it was before.\n";
    t44 =
      "\n44- Born Lucky: The user has a pool of rerolls equal to their Star Rating, which they may use to force the reroll of any check at will. These rerolls restore upon impressive rolls or per Reset.\n";
    t45 = "\n45- Just That Good: The target has t4.\n";
    t46 =
      "\n46- Fucking Nullifiers: The user gains access to the Templar ability, and their Charism is upgraded to a Secondary Stat if it isn't already there or higher.\n";
    t47 =
      "\n47- Friends in High Places: The user is capable of siccing the authorities of any given place on their enemy, regardless of the actual fault or legality involved.\n";
    t48 =
      "\n48- Conservation of Ninjutsu: The user is actually a hive-mind of individuals identical to the user numbering 5xStar Rating, but in combat their HP is divided by the total number of them in said combat.\n";
    t49 =
      "\n49- Secondary Specialization: The user gains access to a second Archetype and gains its Primary Skills as Secondaries and its Secondary Skills as Tertiaries if it doesn't already have them there or higher. The user also gains access to the Special Ability of the alternate Archetype in addition to their own.\n";
    t50 =
      "\n50- Isn't Geist Supposed To Be Killing You? The user is a power copier, and may replicate any ability they have seen on screen with identical dice and effects.\n";
  
    t51 =
      "\n51- Red Spy: The User is a competent shapeshifter, increasing their charisma up a tier and gaining Insight and Lie as Primary Skills, if their Charisma is already Primary it is calculated as if they were a star level higher. The User may assimilate any person and form they have previously seen perfectly, though this does not alter any of their stats or capabilities, as if they were a humanoid.\n";
    t52 =
      "\n52- Why Are They So Small: The user has been magically minimized, increasing their Defense and Stealth rolls by 50% and reducing their Physical Attack rolls by 50%. They also have halved HP, though their Passive Defense is unchanged, and count as a Medium Called Shot Target in terms of dice malus, with limbs being reduced in Target Size accordance with that.\n";
    t53 =
      "\n53- Oh Shit, A Rat: The Nemesis is accompanied by a small companion, such as a Rat, Bird, Monkey or Lizard, that they may communicate with freely.\n";
    t54 =
      "\n54- Techno Gore: The Nemesis radiates an anti-Technology field extending 10 Units, inside which any 'complex' technology such as guns, electronics and machines fail to work entirely.\n";
    t55 =
      "\n55- Bad Luck Charm: Whenever the Nemesis is rolled *against*, their threshold is increased from 5 to 6.\n";
    t56 =
      "\n56- You Killed My Father, Prepare To Die!: For some reason, you have deeply harmed this person to the point they cater their entire life around killing you. Pick a previous nemesis or enemy the target has faced and choose traits according to their power and build, then optimize said build for killing the Primary Target. You may add an additional Trait roll, raise a Stat to Primary, or an available Skill to Primary for this purpose. RP implications are left up to the presiding GM and circumstances.\n";
    t57 =
      "\n57- Mirror Mirror: The user's Star Rating is raised or lowered to rough parity of that of the target, and all Archetype and trait rolls are automatically overwritten by what would be the closest approximation to the target's power and build.\n";
    t58 =
      "\n58- Custom Weapon: The user has invested in an expensive, special weapon due to their focus on this weapon type, and as such gains +1 ranks in its use. Take the most suitable primary weapon skill the user has and apply Additional Dice and Max Damage boosts. If this is rolled more than once, add weapon tags and other special features, stacking as many times as it is rolled. If the user doesn’t have a primary weapon skill, raise it to primary priority, if the user doesn't have a weapon skill at all, pick one and make it equal to their Star Rating+2.\n";
    t59 =
      "\n59- Beastly Royalty: The monster/user gains an increase to all Primary Stats and Skills as if they were one Star Rating higher and gains one additional Trait roll, putting it above average individuals of its species. And if the user is humanoid, it also gains a Secondary Weapon skill of the GM’s choice. If this trait is rolled a second time, the user gains a star rating increase to all secondary stats and Skills, and the weapon skill gained for humanoid monsters is upgraded to Primary. This trait may only be rolled twice.\n";
    t60 =
      "\n60- Rise From The Ashes: The user goes down 1 Star Rating, minimum 1, and loses the attendant boosts it comes with. However, when they would die, instead rises from the grave at full HP and MP, along with all other Pools they may have had being refilled. They increase the star rating of all Primary Stats and Skills. They also gain an additional Trait Roll when this effect triggers, which may instead be substituted for a C-rank Ability of the presiding GM's choice. This ability may be rolled up to 3 times, giving no additional revives but providing a star rating increase to Secondary stats and skills and an additional trait roll on the second (or the gained ability to be a B rank), and turning all Tertiary skills into Primary as well as another trait roll on the third.\n";
    t61 =
      "\n61- Breaking Bad: The user is equipped with a wild variety of drugs including some drugs that are only found on the black market. As a consequence of prolonged drug use and gene mods, the effects of the drugs are extended by an extra 1d3 rounds, negative effects are decreased by 25%, and the cooldown on usage is decreased by a round.\n";
    t62 =
      "\n62- Riftwoken: The user is a Riftwoken, and as such gets 1d3 extra rounds of duration on shard usage, suffers 25% less from the consequences of shard abuse, and ????.\n";
      t63 =
      "\n63 - Were-Something: This Nemesis is a Lycanthrope of some sort, moving their Primary stats up by 1 star and giving them doubled Passive against non Silvered/Holy attacks.\n";
      t64 =
      "\n64 - Braaaaains...: The Nemesis counts as Undead, unable to go unconscious or bleedout but may make a free Brawling attack on a successful grapple, gaining HP for every 2 points of HP damage dealt to an enemy. Due to their undead nature however, the Nemesis has no Passive to Fire and gain +2 T on all social checks save for Threaten, which gains -1 T.\n";
     t65 =
      "\n65- Shadowborn: The user can meld with shadows, increasing the T of all attacks made against them by 1 whenever they're covered in darkness, and gain access to the Disorientation conditional at half effectiveness with the ability to teleport to shadows they can see.\n";
     t66 =
      "\n66- POCKET SAND: The Nemesis gains access to the Dirty Tricks variant style as a Primary Skill, moving their Convince and Lie skills to Secondary if they weren't already and to Primary if they were already Secondary.\n";
     t67 =
      "\n67- Achilles' Heel: The user gains bonus PD equal to Star Rating2 until a GM determined body part or object is damaged. This spot should be obvious, such as being a body wound, covered in more armor, and such, due to the part/item having completely no passive defense that cannot be remedied by any effects.\n";
     t68 =
      "\n68- Army of Me: The creature gains an army of 1 star versions of themselves equal to their actual Star rating10. They additionally get a priority increase to their charisma and strength stats, or their effective Star Rating for calculating it by one each if they're already Primary.\n";
     t69 =
      "\n69- Slimy Fellow: The creature has been affected by some effect that made their body become ooze-like. This halves all physical damage after passive and they can move under, through, or around objects that aren't sealed.\n";
     t70 =
      "\n70- Scary Motherfucker: The Nemesis’ threaten skill goes up a priority, and if they haven't gotten the skill, it is unlocked as tertiary. When using threaten as a skill they gain a minus 2 to their t. When attacking, they can use Threaten against an opponent's Nerve. Upon success, they take out as many of the opponent's AD dice as they have skill ranks in Threaten.\n";
  
    switch (trait) {
      case 1:
        abilities.value += t1;
        break;
      case 2:
        abilities.value += t2;
        break;
      case 3:
        abilities.value += t3;
        break;
      case 4:
        abilities.value += t4;
        break;
      case 5:
        abilities.value += t5;
        break;
      case 6:
        abilities.value += t6;
        break;
      case 7:
        abilities.value += t7;
        break;
      case 8:
        abilities.value += t8;
        break;
      case 9:
        abilities.value += t9;
        break;
      case 10:
        abilities.value += t10;
        break;
      case 11:
        abilities.value += t11;
        break;
      case 12:
        abilities.value += t12;
        break;
      case 13:
        abilities.value += t13;
        break;
      case 14:
        abilities.value += t14;
        break;
      case 15:
        abilities.value += t15;
        break;
      case 16:
        abilities.value += t16;
        break;
      case 17:
        abilities.value += t17;
        break;
      case 18:
        abilities.value += t18;
        break;
      case 19:
        abilities.value += t19;
        break;
      case 20:
        abilities.value += t20;
        break;
      case 21:
        abilities.value += t21;
        break;
      case 22:
        abilities.value += t22;
        break;
      case 23:
        abilities.value += t23;
        break;
      case 24:
        abilities.value += t24;
        break;
      case 25:
        abilities.value += t25;
        break;
      case 26:
        abilities.value += t26;
        break;
      case 27:
        abilities.value += t27;
        break;
      case 28:
        abilities.value += t28;
        break;
      case 29:
        abilities.value += t29;
        break;
      case 30:
        abilities.value += t30;
        break;
      case 31:
        abilities.value += t31;
        break;
      case 32:
        abilities.value += t32;
        break;
      case 33:
        abilities.value += t33;
        break;
      case 34:
        abilities.value += t34;
        break;
      case 35:
        abilities.value += t35;
        break;
      case 36:
        abilities.value += t36;
        break;
      case 37:
        abilities.value += t37;
        break;
      case 38:
        abilities.value += t38;
        break;
      case 39:
        abilities.value += t39;
      case 40:
        abilities.value += t40;
        break;
      case 41:
        abilities.value += t41;
        break;
      case 42:
        abilities.value += t42;
        break;
      case 43:
        abilities.value += t43;
        break;
      case 44:
        abilities.value += t44;
        break;
      case 45:
        abilities.value += t45;
        break;
      case 46:
        abilities.value += t46;
        break;
      case 47:
        abilities.value += t47;
        break;
      case 48:
        abilities.value += t48;
        break;
      case 49:
        abilities.value += t49;
        break;
      case 50:
        abilities.value += t50;
        break;
      case 51:
        abilities.value += t51;
        break;
      case 52:
        abilities.value += t52;
        break;
      case 53:
        abilities.value += t53;
        break;
      case 54:
        abilities.value += t54;
        break;
      case 55:
        abilities.value += t55;
        break;
      case 56:
        abilities.value += t56;
        break;
      case 57:
        abilities.value += t57;
        break;
      case 58:
        abilities.value += t58;
        break;
      case 59:
        abilities.value += t59;
        break;
      case 60:
        abilities.value += t60;
        break;
      case 61:
        abilities.value += t61;
        break;
      case 62:
        abilities.value += t62;
        break;
      case 63:
        abilities.value += t63;
        break;
      case 64:
        abilities.value += t64;
        break;
      case 65:
        abilities.value += t65;
        break;
      case 66:
        abilities.value += t66;
        break;
      case 67:
        abilities.value += t67;
        break;
      case 68:
        abilities.value += t68;
        break;
      case 69:
        abilities.value += t69;
        break;
      default:
        abilities.value += t70;
    }
  }
  
  //LEGENDARY TRAITS
  function createClick2() {
    trait = Math.floor(Math.random() * 11) + 1;
  
    t1 =
      "\n\n1. Time Lord: The user always goes first in Initiative, and may pause time for a number of rounds up to double their Star Rating as a free action. The cooldown is equal to the number of rounds in which they paused time. They may instead expend rounds to reverse the state of themselves or another target one round per two rounds of Time Stop expended, with the normal cooldown.\n\n";
    t2 =
      "\n\n2. Equalizer: No attack may have dice higher than the user's Active Defense. No target may have higher Passive Defense than the user. No target may have a pool higher than the user's in any form of contested dice roll.\n\n";
    t3 =
      "\n\n3. Unstoppable: The target multiplies their Passive Defense by 4, gains Regeneration per round equal to their Star Rating, and doubles any two physical stats compared to the average for their Star Rating.\n\n";
    t4 =
      "\n\n4. Tulpae: The user's Charisma, Willpower, and Intelligence all become Primary Stats if they weren't already, and Mentalist becomes a primary skill. The user is inhabiting a body not their own, and upon being slain or as a full-round action may infect the mind of a creature within their Star Rating units, making contested Mentalist vs Mentalist, or Mentalist vs Willpower/Charisma if the target doesn't have Mentalist, attacks to attempt to take over. If a target is killed by MP damage, the user now owns their body and may use all their physical stats and skills.\n\n";
    t5 =
      "\n\n5. Primordial: The user gains access to an attack with Max Damage equal to 8xStar Rating and Additional Dice equal to 16xStar Rating. This attack may either be an AoE that hits everything 5xStar Rating units around the user or a line that is 2xStar Rating units wide and 10xStar Rating units long. This ability may have specific abilities as per Elemental Fury, at GM discretion. However, those abilities have their DC doubled.\n\n";
    t6 =
      "\n\n6. Warp: The user may, up to three times per Star Rating per round, move any number of creatures or objects up to their Star Rating a number of units equal to 10xStar Rating in any direction as a free action. They may increase this by a factor of one hundred by changing it to a full-round action.\n\n";
    t7 =
      "\n\n7. Spectral: The user may freely shift to being completely intangible for up to 2xStar Rating rounds, with a cooldown equal to the number of rounds they were intangible. While intangible they are almost completely immune to any attacks that would target HP, and have complete Passive-Ignore on any melee attacks they make.\n\n";
    t8 =
      "\n\n8. Literally, Straight Up Immortal: The user returns to full HP and MP every 5-Star Rating rounds, minimum 1, no matter what. This also extends to any other resource pool they possess.\n\n";
    t9 =
      "\n\n9. Yeah, That Geist: The user can freely duplicate the powers of any target they have seen, with identical dice pools and other effects, limitlessly. This includes Passive effects, but they may only have a number of different powers equal to their Star Rating copied at once.\n\n";
    t10 =
      "\n\n10. Just A Man, After All: No power effect is capable of harming or even affecting the user. Additionally, upon physical contact with them any and every power, Passive or Active, completely shuts off for a number of rounds equal to their Star Rating.\n\n";
    t11 =
      "\n\n11. Fucking Speedsters: The user gains access to the Speed Conditional as a Problem Stat, increasing in priority by each time it is rolled up to a maximum of being a Secondary Stat. (This Trait is exclusive to Shanks, Duelists, and Tricksters.)\n\n";
  
    switch (trait) {
      case 1:
        abilities.value += t1;
        break;
      case 2:
        abilities.value += t2;
        break;
      case 3:
        abilities.value += t3;
        break;
      case 4:
        abilities.value += t4;
        break;
      case 5:
        abilities.value += t5;
        break;
      case 6:
        abilities.value += t6;
        break;
      case 7:
        abilities.value += t7;
        break;
      case 8:
        abilities.value += t8;
        break;
      case 9:
        abilities.value += t9;
        break;
      case 10:
        abilities.value += t10;
        break;
      default:
        abilities.value += t11;
    }
  }
  
  //EQUIPMENT
  function createSelectEH() {
    var field = document.getElementById("harness");
  
    if (field.options[field.selectedIndex].text == "Bare Emitter Harness") {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nBare Emitter Harness - Passive(2), 4/4 HP, Heavy(4), Bubble/Directed Slot: 1\n`;
    } else if (field.options[field.selectedIndex].text == "Threaded Harness") {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nThreaded Harness - Passive(2), 4/4 HP, Heavy(8), Bubble/Directed Slot: 2\n`;
    } else if (field.options[field.selectedIndex].text == "Jacketed Emitter") {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nJacketed Emitter - Passive(2), 4/4 HP, Heavy(12), Bubble Slot: 3\n`;
    } else if (field.options[field.selectedIndex].text == "Emitter Prototype") {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nEmitter Prototype - Passive(2), 4/4 HP, Heavy(16), Bubble Slot: 4\n`;
    } else {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nPortable Shield Generator - Passive(2), 4/4 HP, Heavy(20), Bubble Slot: 5\n`;
    }
  }
  
  function createSelectEAL() {
    var larmor = document.getElementById("lightArmor");
  
    if (larmor.options[larmor.selectedIndex].value == 1) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nStandard-Issue Combat Armour:  Passive 4, 10/10 HP, Resist Energy (3)\n`;
    } else if (larmor.options[larmor.selectedIndex].value == 2) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nLight-Weave Coat: Passive 5,  12/12 HP, Resist Energy (3)\n`;
    } else if (larmor.options[larmor.selectedIndex].value == 3) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nSkirmisher Suit: Passive 6, 14/14 HP, Resist Energy (3)\n`;
    } else if (larmor.options[larmor.selectedIndex].value == 4) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nDrakeling-Class Protector: Passive 7, 16/16 HP, Energy Resist (4), Vacuum-Sealed\n`;
    } else if (larmor.options[larmor.selectedIndex].value == 5) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nSpectre Armour: Passive 8, 18/18 HP, Resist Energy (4),  Chameleon (4), Vacuum-Sealed\n`;
    } else {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nQuicksilver Nanosuit: Passive 9, 20/20 HP, Resist Energy (4), Healing (20),  Chameleon (4), Vacuum-Sealed\n`;
    }
  }
  
  function createSelectEAM() {
    var marmor = document.getElementById("mediumArmor");
    if (marmor.options[marmor.selectedIndex].value == 7) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nRed Crystal Coat : Passive 5, 16 / 16 HP, Resist Energy(3)\n`;
    } else if (marmor.options[marmor.selectedIndex].value == 8) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nSafetree - Core Suit : Passive 7, 17 / 17 HP, Resist Energy(3)\n`;
    } else if (marmor.options[marmor.selectedIndex].value == 9) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nBasic Infantry Armour : Passive 9, 18 / 18 HP, Resist Energy(2), Resist Kinetic(2)\n`;
    } else if (marmor.options[marmor.selectedIndex].value == 10) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nGUTS Defender : Passive 10, 20 / 20 HP, Resist Energy(3), Resist Kinetic(3), Heavy(4), Vacuum - Sealed\n`;
    } else if (marmor.options[marmor.selectedIndex].value == 11) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nAvenger Armour : Passive 10, 22 / 22 HP, Resist Energy(3), Resist Kinetic(3), Heavy(4), Plating, Vacuum - Sealed\n`;
    } else {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nValkyrie Aerial Combat Suit : Passive 10, 24 / 24, Winged(4), Resist Energy(3), Resist Kinetic(3), Heavy(4), Plating, Vacuum - Sealed\n`;
    }
  }
  
  function createSelectEAH() {
    var harmor = document.getElementById("heavyArmor");
    if (harmor.options[harmor.selectedIndex].value == 13) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nHeavy-Duty Ceramic: Passive 7, 10/10 HP, Resist Kinetic (5), Heavy (4), Plated, Vacuum-Sealed\n`;
    } else if (harmor.options[harmor.selectedIndex].value == 14) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nDragon Scale Mail: Passive 9, 15/15 HP, Resist Kinetic (5), Heavy (6), Plated, Vacuum-Sealed\n`;
    } else if (harmor.options[harmor.selectedIndex].value == 15) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nPRIDE Armour: Passive 11, 20/20 HP, Resist Kinetic (5), Heavy (8), Strength-Boost (3), Plated, Vacuum-Sealed\n`;
    } else if (harmor.options[harmor.selectedIndex].value == 16) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nHao Reborn Exosuit: Passive 13, 25/25 HP, Resist Kinetic (5), Heavy (10), Strength-Boost (6), Plated, Vacuum-Sealed\n`;
    } else if (harmor.options[harmor.selectedIndex].value == 17) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nINVICTUS: Passive 15, 30/30 HP, Resist Kinetic (5), Heavy (10), Strength-Boost (6), Plated, Vacuum-Sealed\n`;
    } else {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\nGarm Infantry-Class Power Armor: Passive 17, 40/40, Resist Kinetic (5), Heavy(12), Plated, Strength-Boost(6), Vacuum-Sealed\n`;
    }
  }
  
  function createSelectKF() {
    var kfield = document.getElementById("kineticS");
    if (kfield.options[kfield.selectedIndex].value == 1) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Vest" Low-Grade Force Field - 10/10 KHP, Regeneration(10), Kinetic Resistance(5), Bubble, Slots: 1\n`;
    } else if (kfield.options[kfield.selectedIndex].value == 2) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Kite" Low-Grade Force Field - 14/14 KHP, Regeneration(14), Kinetic Resistance(7), Directed(Arm), Slots: 1`;
    } else if (kfield.options[kfield.selectedIndex].value == 3) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Warden" Standard-Grade Force Field - 14/14 KHP, Regeneration(26), Kinetic Resistance(5), Bubble, Slots: 2
  \n`;
    } else if (kfield.options[kfield.selectedIndex].value == 4) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Target" Standard-Grade Force Field - 19/19 KHP, Regeneration(35), Kinetic Resistance(8), Directed(Arm), Slots: 2
  \n`;
    } else if (kfield.options[kfield.selectedIndex].value == 5) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Kevlar" Mid-Grade Force Field - 18/18 KHP, Regeneration(42), Kinetic Resistance(6), Bubble, Slots: 3
  \n`;
    } else if (kfield.options[kfield.selectedIndex].value == 6) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Tower" Mid-Grade Force Field - 24/24 KHP, Regeneration(56), Kinetic Resistance(8), Directed(Arm), Slots: 3
  \n`;
    } else if (kfield.options[kfield.selectedIndex].value == 7) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Knight" High-Grade Force Field - 22/22 KHP, Regeneration(58), Kinetic Resistance(7), Bubble, Slots: 4\n`;
    } else if (kfield.options[kfield.selectedIndex].value == 8) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Riot" High-Grade Force Field - 29/29 KHP, Regeneration(77), Kinetic Resistance(8), Directed(Arm), Slots: 4\n`;
    } else if (kfield.options[kfield.selectedIndex].value == 9) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Concrete" Great-Grade Force Field - 26/26 KHP, Regeneration(74), Kinetic Resistance(8), Bubble, Slots: 5\n`;
    } else if (kfield.options[kfield.selectedIndex].value == 10) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Deflector" Great-Grade Force Field - 35/35 KHP, Regeneration(98), Kinetic Resistance(9), Directed(Arm), Slots: 5\n`;
    } else if (kfield.options[kfield.selectedIndex].value == 11) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Stonewall" Heavy-Grade Force Field - 30/30 KHP, Regeneration(90), Kinetic Resistance(8), Bubble, Slots: 6\n`;
    } else {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Aegis" Heavy-Grade Force Field - 40/40 KHP, Regeneration(120), Kinetic Resistance(10), Directed(Arm), Slots: 6\n`;
    }
  }
  
  function createSelectEF() {
    var efield = document.getElementById("energyS");
    if (efield.options[efield.selectedIndex].value == 1) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Curtain" Light Shield - 12/12 EHP, Regeneration(12), Energy Resistance(6), Bubble, Slots: 1\n`;
    } else if (efield.options[efield.selectedIndex].value == 2) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Buckler" Light Shield - 16/16 EHP, Regeneration(16), Energy Resistance(8), Directed(Arm), Slots: 1`;
    } else if (efield.options[efield.selectedIndex].value == 3) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Trooper" Standard Shield - 19/19 EHP, Regeneration(29), Energy Resistance(8), Bubble, Slots: 2\n`;
    } else if (efield.options[efield.selectedIndex].value == 4) {
      document.querySelector(".equipment").innerHTML += `\n"Disc" Standard Shield
  - 24/24 EHP, Regeneration(36) Energy Resistance(10), Directed(Arm), Slots: 2\n`;
    } else if (efield.options[efield.selectedIndex].value == 5) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Diversion" Medium Shield - 26/26 EHP, Regeneration(46), Energy Resistance(10), Bubble, Slots: 3\n`;
    } else if (efield.options[efield.selectedIndex].value == 6) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Mirror" Medium Shield - 32/32 EHP, Regeneration(56), Energy Resistance(12), Directed(Arm), Slots: 3\n`;
    } else if (efield.options[efield.selectedIndex].value == 7) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Blank" High Shield - 33/33 EHP, Regeneration(63), Energy Resistance(10), Bubble, Slots: 4\n`;
    } else if (efield.options[efield.selectedIndex].value == 8) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Pool" High Shield- 40/40 EHP, Regeneration(76), Energy Resistance(14), Directed(Arm), Slots: 4\n`;
    } else if (efield.options[efield.selectedIndex].value == 9) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Limiter" Great Shield - 40/40 EHP, Regeneration(80), Energy Resistance(12), Bubble, Slots: 5\n`;
    } else if (efield.options[efield.selectedIndex].value == 10) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Sky Catcher" Great Shield - 60/60 EHP, Regeneration(100), Energy Resistance(15), Directed(Arm), Slots: 5\n`;
    } else if (efield.options[efield.selectedIndex].value == 11) {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Fractal" Heavy Shield - 50/50 EHP, Regeneration(80), Energy Resistance(12), Bubble, Slots: 6\n`;
    } else {
      document.querySelector(
        ".equipment"
      ).innerHTML += `\n"Blast Barrier" Heavy Shield - 70/70 EHP, Regeneration(120), Energy Resistance(15), Directed(Arm), Slots: 6\n`;
    }
  }
  
  function createSelectMWS() {
    var sword = document.getElementById("swords");
  
  switch (sword.options[sword.selectedIndex].text) {
      case "Pointed Rod":
        document.querySelector(".equipment").innerHTML += `\nPointed Rod: +8 Dice, Max 8, Thrusting, Passive Ignore(1), Req 1\n`;
        break;
      case "Rapier":
        document.querySelector(".equipment").innerHTML += `\nRapier: +12 Dice, Max 10,  Thrusting, Passive Ignore(1), Req 3\n`;
        break;
      case "Achille Pricker":
        document.querySelector(".equipment").innerHTML += `\nAchille Pricker: +16 Dice, Max 12, Passive Ignore(2), Thrusting, Req 5\n`;
        break;
      case "Pappenheimer":
        document.querySelector(".equipment").innerHTML += `\nPappenheimer: +20 Dice, Max 14, Passive Ignore(2), Thrusting, Req 7\n`;
        break;
      case "Docciolini's Relic":
        document.querySelector(".equipment").innerHTML += `\nDocciolini's Relic: +24 Dice, Max 15, Passive Ignore(3), Thrusting, Req 9\n`;
        break;
      case "Arming Sword":
        document.querySelector(".equipment").innerHTML += `\nArming Sword: +4 Dice, Max 10, Req 1\n`;
        break;
      case "Makhaira":
        document.querySelector(".equipment").innerHTML += `\nMakhaira: +8 Dice, Max 12, Req 3\n`;
        break;
      case "Cutlass":
        document.querySelector(".equipment").innerHTML += `\nCutlass: +12 Dice, Max 14, Req 5\n`;
        break;
      case "Greatsword":
        document.querySelector(".equipment").innerHTML += `\nGreatsword: +18 Dice, Max 16, Heavy (3), Two-Handed, Cleave (1), Req 7\n`;
        break;
      case "Zweihander":
        document.querySelector(".equipment").innerHTML += `\nZweihander: +24 Dice, Max 17, Heavy (4), Two Handed, Cleave (2), Req 9\n`;
        break;
      case "Longsword":
        document.querySelector(".equipment").innerHTML += `\nLongsword: +2 Dice, Max 12, Heavy (3), Two-Handed, Reach (1), Cleave (1), Passive-Ignore (2), Req 1\n`;
        break;
      case "Zweihander Sr":
        document.querySelector(".equipment").innerHTML += `\nZweihander Sr: +4 Dice, Max 14, Heavy (5), Two-Handed, Reach (2), Cleave (1), Passive-Ignore (2), Req 3\n`;
        break;
      case "Claymore":
        document.querySelector(".equipment").innerHTML += `\nClaymore: +6 Dice, Max 18, Heavy (7), Two-Handed, Reach (2), Cleave (2), Passive-Ignore (3), Req 5\n`;
        break;
      case "Longersword":
        document.querySelector(".equipment").innerHTML += `\nLongersword: +9 Dice, Max 22, Heavy (8), Two-Handed, Reach (3), Cleave (2), Passive-Ignore (3), Req 7\n`;
        break;
      case "Longestsword":
        document.querySelector(".equipment").innerHTML += `\nLongestsword: +12 Dice, Max 26, Heavy (10), Two-Handed, Reach (3), Cleave (3), Passive-Ignore (4), Req 9\n`;
        break;
      default:
        document.querySelector(".equipment").innerHTML += `\nSord: +2 Dice, Max 7, Req 0\n`;
    }
  }
  
  function createSelectMWDAG() {
    var dagger = document.getElementById("daggers");
  
  switch (dagger.options[dagger.selectedIndex].text) {
      case "Parzonium":
        document.querySelector(".equipment").innerHTML += `\nParzonium: +2 Dice, Concealable, Max 11, Req 1\n`;
        break;
      case "Anelace":
        document.querySelector(".equipment").innerHTML += `\nAnelace: +4 Dice, Concealable, Max 13, Req 3\n`;
        break;
      case "Cinquedea":
        document.querySelector(".equipment").innerHTML += `\nCinquedea: +7 Dice, Max 14, Heavy(2), Req 5\n`;
        break;
      case "Pugio":
        document.querySelector(".equipment").innerHTML += `\nPugio: +10 Dice, Max 15, Heavy(2), Req 7\n`;
        break;
      case "The Spike":
        document.querySelector(".equipment").innerHTML += `\nThe Spike: +15 Dice, Max 18, Heavy(3), Req 9\n`;
        break;
      case "Baselard":
        document.querySelector(".equipment").innerHTML += `\nBaselard: +4 Dice, Max 9, Concealable, Finishing(2), Light, Req 1\n`;
        break;
      case "Kukri":
        document.querySelector(".equipment").innerHTML += `\nKukri: +8 Dice, Max 11, Concealable, Finishing(3), Light, Req 3\n`;
        break;
      case "Tanto":
        document.querySelector(".equipment").innerHTML += `\nTanto: +12 Dice, Max 12, Concealable, Finishing(4), Light, Req 5\n`;
        break;
      case "Peshkabz":
        document.querySelector(".equipment").innerHTML += `\nPeshkabz: +16 Dice, Max 13, Concealable, Finishing(5), Light, Req 7\n`;
        break;
      case "Bloodletter":
        document.querySelector(".equipment").innerHTML += `\nBloodletter: +20 Dice, Max 15, Concealable, Finishing(6), Light, Req 9\n`;
        break;
      case "Stiletto":
        document.querySelector(".equipment").innerHTML += `\nStiletto: +3 Dice, Max 8, Concealable, Light, PI(1), Thrusting, Req 1\n`;
        break;
      case "Dirk":
        document.querySelector(".equipment").innerHTML += `\nDirk: +6 Dice, Max 10, Concealable, Light, PI(2), Thrusting, Req 3\n`;
        break;
      case "Gunong":
        document.querySelector(".equipment").innerHTML += `\nGunong: +9 Dice, Max 11, Concealable, Light, PI(2), Thrusting, Req 5\n`;
        break;
      case "Malappuram Kathi":
        document.querySelector(".equipment").innerHTML += `\nMalappuram Kathi: +12 Dice, Max 12, Concealable, Light, PI(3), Thrusting, Req 7\n`;
        break;
      case "Hornet's Kiss":
        document.querySelector(".equipment").innerHTML += `\nHornet's Kiss: + 18 Dice, Max 12, Concealable, Light, PI(5), Thrusting, Req 9\n`;
        break;
      default:
        document.querySelector(".equipment").innerHTML += `\nShank: +4 Dice, Max 6, Concealable, Req 0\n`;
    }
  }
  
  function createSelectMWCL() {
    var club = document.getElementById("clubs");
  
  switch (club.options[club.selectedIndex].text) {
      case "War Baton":
        document.querySelector(".equipment").innerHTML += `\nWar Baton: +6 Dice, Max 9, Light, PI(1), Req 1\n`;
        break;
      case "Blackjack":
        document.querySelector(".equipment").innerHTML += `\nBlackjack: +10 Dice, Max 12, Light, PI(2), Req 3\n`;
        break;
      case "Tonfa":
        document.querySelector(".equipment").innerHTML += `\nTonfa: +14 Dice, Max 14, Light, PI(3), Req 5\n`;
        break;
      case "Jiăn":
        document.querySelector(".equipment").innerHTML += `\nJiăn: +16 Dice, Max 15, Light, PI(4), Req 7\n`;
        break;
      case "Tipstaff":
        document.querySelector(".equipment").innerHTML += `\nTipstaff: +20 Dice, Max 16, Light, PI(5), Req 9\n`;
        break;
      case "Mace":
        document.querySelector(".equipment").innerHTML += `\nMace: +2 Dice, Max 11, Heavy(2), Passive Crush(1), Req 1\n`;
        break;
      case "Greatclub":
        document.querySelector(".equipment").innerHTML += `\nGreatclub:+4 Dice, Max 14, Heavy(3), Passive Crush(2), Req 3\n`;
        break;
      case "Bang":
        document.querySelector(".equipment").innerHTML += `\nBang: +6 Dice,Max 16, Heavy(4), Passive Crush(3), Req 5\n`;
        break;
      case "Kanabo":
        document.querySelector(".equipment").innerHTML += `\nKanabo:+7 Dice,Max 18,  Heavy(5), Passive Crush(4), Req 7\n`;
        break;
      case "Log with a handle":
        document.querySelector(".equipment").innerHTML += `\nLog with a handle:+10 Dice, Max 20,  Heavy(7), Passive Crush(5), Req 9\n`;
        break;
      case "One Pump Chump":
        document.querySelector(".equipment").innerHTML += `\nOne Pump Chump: +4 Dice, Max 8, Spring Loaded (1 PI(1)), Req 1\n`;
        break;
      case "Bonkinator":
        document.querySelector(".equipment").innerHTML += `\nBonkinator: +10 Dice, Max 12, Heavy(2), Spring Loaded(3 , Shrapnel(5)), Req 3\n`;
        break;
      case "12 Gauge Homerun Bat":
        document.querySelector(".equipment").innerHTML += `\n12 Gauge Homerun Bat: +18 Dice, Max 16, Heavy(5), Spring Loaded(5, Buckshot(12)), Req 7\n`;
        break;
      case "Missing":
        document.querySelector(".equipment").innerHTML += `\nMissing\n`;
        break;
      default:
        document.querySelector(".equipment").innerHTML += `\nBaton +2 Dice, Max 7, Req 0\n`;
    }
  }
  
  function createSelectMWHAL() {
    var halberd = document.getElementById("halberds");
  
  switch (halberd.options[halberd.selectedIndex].text) {
      case "Ge":
        document.querySelector(".equipment").innerHTML += `\nGe: +4 Dice, Max 13, Reach (1), Two-Handed, Brace, Req 1\n`;
        break;
      case "Welsh Hook":
        document.querySelector(".equipment").innerHTML += `\nWelsh Hook: +10 Dice, Max 16, Reach (1), Two-Handed, Brace, Req 3\n`;
        break;
      case "Guisarme":
        document.querySelector(".equipment").innerHTML += `\nGuisarme: +16 Dice, Max 19, Reach (1), Two-Handed, Brace, Req 5\n`;
        break;
      case "Naginata":
        document.querySelector(".equipment").innerHTML += `\nNaginata: +22 Dice, Max 22, Reach (1), Two-Handed, Brace, Req 7\n`;
        break;
      case "Ranseur":
        document.querySelector(".equipment").innerHTML += `\nRanseur: + 28 Dice, Max 25, Reach (1), Two-Handed, Brace, Req 9\n`;
        break;
      case "Bardiche":
        document.querySelector(".equipment").innerHTML += `\nBardiche: +2 Dice, Max 15, Heavy(2), Passive Crush(1), Reach (1), Two-Handed, Req 1\n`;
        break;
      case "Swiss Voulge":
        document.querySelector(".equipment").innerHTML += `\nSwiss Voulge: +6 Dice, Max 19,  Heavy(3), Reach (1), Two-Handed, Passive Crush(1),Req 3\n`;
        break;
      case "Woldo":
        document.querySelector(".equipment").innerHTML += `\nWoldo: +10 Dice, Max 23,  Heavy(4), Reach (1), Two-Handed, Passive Crush(2), Req 5\n`;
        break;
      case "Fauchard":
        document.querySelector(".equipment").innerHTML += `\nFauchard: +14 Dice, Max 27, Heavy(5), Reach (1), Two-Handed, Passive Crush(3), Req 7\n`;
        break;
      case "Bill":
        document.querySelector(".equipment").innerHTML += `\nBloodletter: +20 Dice, Max 15, Concealable, Finishing(6), Light, Req 9\n`;
        break;
      default:
        document.querySelector(".equipment").innerHTML += `\nSvardstaff: +2 Dice, Max 8, Req 0, Reach (1)\n`;
    }
  }
  
  function createSelectMWSTA() {
    var stave = document.getElementById("staves");
  
  switch (stave.options[stave.selectedIndex].text) {
      case "Quarterstaff":
        document.querySelector(".equipment").innerHTML += `\nQuarterstaff: +6 Dice,  Max 8, Two-Handed, Unpred(2), Req 1\n`;
        break;
      case "Ghioaga":
        document.querySelector(".equipment").innerHTML += `\nGhioaga: +10 Dice, :Max 10 Two-Handed, Unpred(3), Req 3\n`;
        break;
      case "Jō":
        document.querySelector(".equipment").innerHTML += `\nJō: +14 Dice, Max 12 Reach(2), Two-Handed, Unpred(4), Req 5\n`;
        break;
      case "Tahtib":
        document.querySelector(".equipment").innerHTML += `\nTahtib: +16 Dice, Max 13,  Reach(2), Two-Handed, Unpred(5), Req 7\n`;
        break;
      case "Silverwood Core":
        document.querySelector(".equipment").innerHTML += `\nSilverwood Core: +19 Dice, Max 15, Reach(3), Two-Handed, Unpred(7), Req 9\n`;
        break;
      case "Battering Ram":
        document.querySelector(".equipment").innerHTML += `\nBattering Ram: +3 Dice, Max 10, Heavy(2), Two-Handed, PI(2), Req 1\n`;
        break;
      case "Metalbranch":
        document.querySelector(".equipment").innerHTML += `\nMetalbranch: +5 Dice, Max 13  Heavy(2), Two-Handed, PI(3),Req 3\n`;
        break;
      case "Bō":
        document.querySelector(".equipment").innerHTML += `\nBō: +7 Dice ,Max 15,  Heavy(4), Two-Handed, PI(4),Req 5\n`;
        break;
      case "Jogo do Pau":
        document.querySelector(".equipment").innerHTML += `\nJogo do Pau: +8 Dice, Max 16  Heavy(5), Two-Handed, PI(5),Req 7\n`;
        break;
      case "Pillar of Divinity":
        document.querySelector(".equipment").innerHTML += `\nPillar of Divinity: +10 Dice ,Max 18, Heavy(6, Reach(2), Two-Handed, PI(7),Req 9\n`;
        break;
      default:
        document.querySelector(".equipment").innerHTML += `\nCane: Max +2 Dice, Max 6, Req 0, Concealable\n`;
    }
  }
  
  //Copy Abilities
  function copyAb() {
    // Get the text field
    var copyText = document.getElementById("abilities");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
  }
  
  //Copy Racial Traits
  function copyRb() {
    // Get the text field
    var copyText = document.getElementById("racial");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
  }
  
  //Copy Equipment
  function copyEq() {
    // Get the text field
    var copyText = document.getElementById("equipment");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
  }
  
  //Physiologies
  //==================================================================
  function createSelectPH() {
    //********************* PHYSIOLOGIES **************
    var archPH = document.getElementById("physiology");
  
    var priStatPH = "6";
    var secStatPH = "4";
    var unStatPH = "3";
    var probStatPH = "2";
  
    var priSkillPH = "3";
    var secSkillPH = "2";
  
    if (archPH.options[archPH.selectedIndex].text == "Quadruped(Bulk)") {
      //STATS
      document.querySelector(".strPH").innerText = priStatPH;
      document.querySelector(".dexPH").innerText = probStatPH;
      document.querySelector(".conPH").innerText = priStatPH;
      document.querySelector(".intPH").innerText = unStatPH;
      document.querySelector(".willPH").innerText = secStatPH;
      document.querySelector(".perPH").innerText = unStatPH;
      document.querySelector(".chaPH").innerText = secStatPH;
  
      //SKILLS
      document.querySelector(".prisPH").innerText = priSkillPH;
      document.querySelector(".secsPH").innerText = secSkillPH;
      document.querySelector(
        ".primaryPH"
      ).innerText = `Endurance, Unnatural Weapon, Nerve`;
      document.querySelector(".secondaryPH").innerText = `Spot, Threaten`;
  
      //ABILITIES
      document.querySelector(
        ".abilitiesPH"
      ).innerText += `These creatures cannot fall unconscious, and may use Strength for movement when charging. They also have a Charge rating equal to their Strength for all Unnatural Weapon attacks.\n\n`;
    } else if (archPH.options[archPH.selectedIndex].text == "Quadruped(Lithe)") {
      //STATS
      document.querySelector(".strPH").innerText = secStatPH;
      document.querySelector(".dexPH").innerText = priStatPH;
      document.querySelector(".conPH").innerText = secStatPH;
      document.querySelector(".intPH").innerText = unStatPH;
      document.querySelector(".willPH").innerText = probStatPH;
      document.querySelector(".perPH").innerText = priStatPH;
      document.querySelector(".chaPH").innerText = unStatPH;
  
      //SKILLS
      document.querySelector(".prisPH").innerText = priSkillPH;
      document.querySelector(".secsPH").innerText = secSkillPH;
      document.querySelector(
        ".primaryPH"
      ).innerText = `Stealth, Spot, Unnatural Weapon`;
      document.querySelector(
        ".secondaryPH"
      ).innerText = `Nerve, Endurance, Knowledge; Exploration`;
  
      //ABILITIES
      document.querySelector(
        ".abilitiesPH"
      ).innerText += `These creatures have one of the following two abilities: If they're pack hunters, they may freely combine dice pools for attacks by holding actions. Otherwise, they may Stealth mid-combat and attacks from Stealth always qualify as Assassinations.\n\n`;
    } else if (archPH.options[archPH.selectedIndex].text == "Avian") {
      //STATS
      document.querySelector(".strPH").innerText = priStatPH;
      document.querySelector(".dexPH").innerText = priStatPH;
      document.querySelector(".conPH").innerText = probStatPH;
      document.querySelector(".intPH").innerText = unStatPH;
      document.querySelector(".willPH").innerText = secStatPH;
      document.querySelector(".perPH").innerText = priStatPH;
      document.querySelector(".chaPH").innerText = secStatPH;
  
      //SKILLS
      document.querySelector(".prisPH").innerText = priSkillPH;
      document.querySelector(".secsPH").innerText = secSkillPH;
      document.querySelector(
        ".primaryPH"
      ).innerText = `Fly, Unnatural Weapon, Spot`;
      document.querySelector(".secondaryPH").innerText = `Stealth, Nerve`;
  
      //ABILITIES
      document.querySelector(
        ".abilitiesPH"
      ).innerText += `Birds have a base Fly speed calculated by the highest of their Dexterity or Strength scores, and may grapple targets without losing Active Defense. Pick em' up and drop 'em.\n\n`;
    } else if (archPH.options[archPH.selectedIndex].text == "Insectoid") {
      //STATS
      document.querySelector(".strPH").innerText =
        priStatPH + "/" + secStatPH + "/" + unStatPH;
      document.querySelector(".dexPH").innerText =
        priStatPH + "/" + secStatPH + "/" + unStatPH;
      document.querySelector(".conPH").innerText = priStatPH + "/" + unStatPH;
      document.querySelector(".intPH").innerText = probStatPH;
      document.querySelector(".willPH").innerText = secStatPH + "/" + unStatPH;
      document.querySelector(".perPH").innerText = unStatPH;
      document.querySelector(".chaPH").innerText = unStatPH;
  
      //SKILLS
      document.querySelector(".prisPH").innerText = priSkillPH;
      document.querySelector(".secsPH").innerText = secSkillPH;
      document.querySelector(
        ".primaryPH"
      ).innerText = `Unnatural Weapon, Endurance`;
      document.querySelector(
        ".secondaryPH"
      ).innerText = `Acrobatics, Stealth, Nerve`;
  
      //ABILITIES
      document.querySelector(
        ".abilitiesPH"
      ).innerText += `Insectoids are... just the worst, for most people. They require a Nerve check with a DC of 5*Star Rating upon being first seen by an individual to not go into a panic as per panic rules. Additionally, Insectoids have Plating equal to their Star Rating.\n\n`;
    } else {
      //STATS
      document.querySelector(".strPH").innerText = "-";
      document.querySelector(".dexPH").innerText = "-";
      document.querySelector(".conPH").innerText = "-";
      document.querySelector(".intPH").innerText = "-";
      document.querySelector(".willPH").innerText = "-";
      document.querySelector(".perPH").innerText = "-";
      document.querySelector(".chaPH").innerText = "-";
  
      //SKILLS
      document.querySelector(".prisPH").innerText = "0";
      document.querySelector(".secsPH").innerText = "0";
      document.querySelector(".primaryPH").innerText = `None`;
      document.querySelector(".secondaryPH").innerText = `None`;
  
      //ABILITIES
      document.querySelector(".abilitiesPH").innerText += `None\n\n`;
    }
  }
  
  //STAR RATING PH
  //==================================================================
  function onChangePH() {
    var starRate = document.getElementById("starsPH");
  
    //STAR 1
    if (starRate.options[starRate.selectedIndex].text == "1 Star") {
      //Number of Traits
      document.querySelector(".numOfTPH").innerText = "1";
    } else if (starRate.options[starRate.selectedIndex].text == "2 Star") {
      //STAR 2
      //Number of Traits
      document.querySelector(".numOfTPH").innerText = "2";
  
      //SKILLS
      var sp = parseInt(document.querySelector(".prisPH").innerText);
      var skillPri = sp + 2;
      document.querySelector(".prisPH").innerText = skillPri;
  
      var ss = parseInt(document.querySelector(".secsPH").innerText);
      var skillSec = ss + 1;
      document.querySelector(".secsPH").innerText = skillSec;
  
      //Adding to Stats and Skills
  
      if (document.querySelector(".strPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".strPH").innerText);
        var primary = pri + 3;
        document.querySelector(".strPH").innerText = primary.toString();
      } else if (document.querySelector(".strPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".strPH").innerText);
        var secondary = sec + 2;
        document.querySelector(".strPH").innerText = secondary.toString();
      } else if (document.querySelector(".strPH").innerText == "3") {
        var un = parseInt(document.querySelector(".strPH").innerText);
        var unmod = un + 0;
        document.querySelector(".strPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".strPH").innerText);
        var problem = prob + 0;
        document.querySelector(".strPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".dexPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".dexPH").innerText);
        var primary = pri + 3;
        document.querySelector(".dexPH").innerText = primary.toString();
      } else if (document.querySelector(".dexPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".dexPH").innerText);
        var secondary = sec + 2;
        document.querySelector(".dexPH").innerText = secondary.toString();
      } else if (document.querySelector(".dexPH").innerText == "3") {
        var un = parseInt(document.querySelector(".dexPH").innerText);
        var unmod = un + 0;
        document.querySelector(".dexPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".dexPH").innerText);
        var problem = prob + 0;
        document.querySelector(".dexPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".conPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".conPH").innerText);
        var primary = pri + 3;
        document.querySelector(".conPH").innerText = primary.toString();
      } else if (document.querySelector(".conPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".conPH").innerText);
        var secondary = sec + 2;
        document.querySelector(".conPH").innerText = secondary.toString();
      } else if (document.querySelector(".conPH").innerText == "3") {
        var un = parseInt(document.querySelector(".conPH").innerText);
        var unmod = un + 0;
        document.querySelector(".conPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".conPH").innerText);
        var problem = prob + 0;
        document.querySelector(".conPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".intPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".intPH").innerText);
        var primary = pri + 3;
        document.querySelector(".intPH").innerText = primary.toString();
      } else if (document.querySelector(".intPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".intPH").innerText);
        var secondary = sec + 2;
        document.querySelector(".intPH").innerText = secondary.toString();
      } else if (document.querySelector(".intPH").innerText == "3") {
        var un = parseInt(document.querySelector(".intPH").innerText);
        var unmod = un + 0;
        document.querySelector(".intPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".intPH").innerText);
        var problem = prob + 0;
        document.querySelector(".intPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".willPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".willPH").innerText);
        var primary = pri + 3;
        document.querySelector(".willPH").innerText = primary.toString();
      } else if (document.querySelector(".willPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".willPH").innerText);
        var secondary = sec + 2;
        document.querySelector(".willPH").innerText = secondary.toString();
      } else if (document.querySelector(".willPH").innerText == "3") {
        var un = parseInt(document.querySelector(".willPH").innerText);
        var unmod = un + 0;
        document.querySelector(".willPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".willPH").innerText);
        var problem = prob + 0;
        document.querySelector(".willPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".perPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".perPH").innerText);
        var primary = pri + 3;
        document.querySelector(".perPH").innerText = primary.toString();
      } else if (document.querySelector(".perPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".perPH").innerText);
        var secondary = sec + 2;
        document.querySelector(".perPH").innerText = secondary.toString();
      } else if (document.querySelector(".perPH").innerText == "3") {
        var un = parseInt(document.querySelector(".perPH").innerText);
        var unmod = un + 0;
        document.querySelector(".perPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".perPH").innerText);
        var problem = prob + 0;
        document.querySelector(".perPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".chaPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".chaPH").innerText);
        var primary = pri + 3;
        document.querySelector(".chaPH").innerText = primary.toString();
      } else if (document.querySelector(".chaPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".chaPH").innerText);
        var secondary = sec + 2;
        document.querySelector(".chaPH").innerText = secondary.toString();
      } else if (document.querySelector(".chaPH").innerText == "3") {
        var un = parseInt(document.querySelector(".chaPH").innerText);
        var unmod = un + 0;
        document.querySelector(".chaPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".chaPH").innerText);
        var problem = prob + 0;
        document.querySelector(".chaPH").innerText = problem.toString();
      }
    } else if (starRate.options[starRate.selectedIndex].text == "3 Star") {
      //STAR 3
      //Number of Traits
      document.querySelector(".numOfTPH").innerText = "4";
  
      //SKILLS
      var sp = parseInt(document.querySelector(".prisPH").innerText);
      var skillPri = sp + 4;
      document.querySelector(".prisPH").innerText = skillPri;
  
      var ss = parseInt(document.querySelector(".secsPH").innerText);
      var skillSec = ss + 3;
      document.querySelector(".secsPH").innerText = skillSec;
  
      //Adding to Stats and Skills
  
      if (document.querySelector(".strPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".strPH").innerText);
        var primary = pri + 7;
        document.querySelector(".strPH").innerText = primary.toString();
      } else if (document.querySelector(".strPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".strPH").innerText);
        var secondary = sec + 5;
        document.querySelector(".strPH").innerText = secondary.toString();
      } else if (document.querySelector(".strPH").innerText == "3") {
        var un = parseInt(document.querySelector(".strPH").innerText);
        var unmod = un + 3;
        document.querySelector(".strPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".strPH").innerText);
        var problem = prob + 1;
        document.querySelector(".strPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".dexPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".dexPH").innerText);
        var primary = pri + 7;
        document.querySelector(".dexPH").innerText = primary.toString();
      } else if (document.querySelector(".dexPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".dexPH").innerText);
        var secondary = sec + 5;
        document.querySelector(".dexPH").innerText = secondary.toString();
      } else if (document.querySelector(".dexPH").innerText == "3") {
        var un = parseInt(document.querySelector(".dexPH").innerText);
        var unmod = un + 3;
        document.querySelector(".dexPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".dexPH").innerText);
        var problem = prob + 1;
        document.querySelector(".dexPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".conPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".conPH").innerText);
        var primary = pri + 7;
        document.querySelector(".conPH").innerText = primary.toString();
      } else if (document.querySelector(".conPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".conPH").innerText);
        var secondary = sec + 5;
        document.querySelector(".conPH").innerText = secondary.toString();
      } else if (document.querySelector(".conPH").innerText == "3") {
        var un = parseInt(document.querySelector(".conPH").innerText);
        var unmod = un + 3;
        document.querySelector(".conPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".conPH").innerText);
        var problem = prob + 1;
        document.querySelector(".conPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".intPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".intPH").innerText);
        var primary = pri + 7;
        document.querySelector(".intPH").innerText = primary.toString();
      } else if (document.querySelector(".intPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".intPH").innerText);
        var secondary = sec + 5;
        document.querySelector(".intPH").innerText = secondary.toString();
      } else if (document.querySelector(".intPH").innerText == "3") {
        var un = parseInt(document.querySelector(".intPH").innerText);
        var unmod = un + 3;
        document.querySelector(".intPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".intPH").innerText);
        var problem = prob + 1;
        document.querySelector(".intPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".willPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".willPH").innerText);
        var primary = pri + 7;
        document.querySelector(".willPH").innerText = primary.toString();
      } else if (document.querySelector(".willPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".willPH").innerText);
        var secondary = sec + 5;
        document.querySelector(".willPH").innerText = secondary.toString();
      } else if (document.querySelector(".willPH").innerText == "3") {
        var un = parseInt(document.querySelector(".willPH").innerText);
        var unmod = un + 3;
        document.querySelector(".willPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".willPH").innerText);
        var problem = prob + 1;
        document.querySelector(".willPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".perPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".perPH").innerText);
        var primary = pri + 7;
        document.querySelector(".perPH").innerText = primary.toString();
      } else if (document.querySelector(".perPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".perPH").innerText);
        var secondary = sec + 5;
        document.querySelector(".perPH").innerText = secondary.toString();
      } else if (document.querySelector(".perPH").innerText == "3") {
        var un = parseInt(document.querySelector(".perPH").innerText);
        var unmod = un + 3;
        document.querySelector(".perPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".perPH").innerText);
        var problem = prob + 1;
        document.querySelector(".perPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".chaPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".chaPH").innerText);
  
        var primary = pri + 7;
  
        document.querySelector(".chaPH").innerText = primary.toString();
      } else if (document.querySelector(".chaPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".chaPH").innerText);
        var secondary = sec + 5;
        document.querySelector(".chaPH").innerText = secondary.toString();
      } else if (document.querySelector(".chaPH").innerText == "3") {
        var un = parseInt(document.querySelector(".chaPH").innerText);
        var unmod = un + 3;
        document.querySelector(".chaPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".chaPH").innerText);
        var problem = prob + 1;
        document.querySelector(".chaPH").innerText = problem.toString();
      }
    } else if (starRate.options[starRate.selectedIndex].text == "4 Star") {
      //STAR 4
      //Number of Traits
      document.querySelector(".numOfTPH").innerText = "6";
  
      //SKILLS
      var sp = parseInt(document.querySelector(".prisPH").innerText);
      var skillPri = sp + 8;
      document.querySelector(".prisPH").innerText = skillPri;
  
      var ss = parseInt(document.querySelector(".secsPH").innerText);
      var skillSec = ss + 4;
      document.querySelector(".secsPH").innerText = skillSec;
  
      //Adding to Stats and Skills
  
      if (document.querySelector(".strPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".strPH").innerText);
        var primary = pri + 12;
        document.querySelector(".strPH").innerText = primary.toString();
      } else if (document.querySelector(".strPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".strPH").innerText);
        var secondary = sec + 8;
        document.querySelector(".strPH").innerText = secondary.toString();
      } else if (document.querySelector(".strPH").innerText == "3") {
        var un = parseInt(document.querySelector(".strPH").innerText);
        var unmod = un + 4;
        document.querySelector(".strPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".strPH").innerText);
        var problem = prob + 1;
        document.querySelector(".strPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".dexPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".dexPH").innerText);
        var primary = pri + 12;
        document.querySelector(".dexPH").innerText = primary.toString();
      } else if (document.querySelector(".dexPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".dexPH").innerText);
        var secondary = sec + 8;
        document.querySelector(".dexPH").innerText = secondary.toString();
      } else if (document.querySelector(".dexPH").innerText == "3") {
        var un = parseInt(document.querySelector(".dexPH").innerText);
        var unmod = un + 4;
        document.querySelector(".dexPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".dexPH").innerText);
        var problem = prob + 1;
        document.querySelector(".dexPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".conPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".conPH").innerText);
        var primary = pri + 12;
        document.querySelector(".conPH").innerText = primary.toString();
      } else if (document.querySelector(".conPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".conPH").innerText);
        var secondary = sec + 8;
        document.querySelector(".conPH").innerText = secondary.toString();
      } else if (document.querySelector(".conPH").innerText == "3") {
        var un = parseInt(document.querySelector(".conPH").innerText);
        var unmod = un + 4;
        document.querySelector(".conPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".conPH").innerText);
        var problem = prob + 1;
        document.querySelector(".conPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".intPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".intPH").innerText);
        var primary = pri + 12;
        document.querySelector(".intPH").innerText = primary.toString();
      } else if (document.querySelector(".intPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".intPH").innerText);
        var secondary = sec + 8;
        document.querySelector(".intPH").innerText = secondary.toString();
      } else if (document.querySelector(".intPH").innerText == "3") {
        var un = parseInt(document.querySelector(".intPH").innerText);
        var unmod = un + 4;
        document.querySelector(".intPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".intPH").innerText);
        var problem = prob + 1;
        document.querySelector(".intPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".willPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".willPH").innerText);
        var primary = pri + 12;
        document.querySelector(".willPH").innerText = primary.toString();
      } else if (document.querySelector(".willPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".willPH").innerText);
        var secondary = sec + 8;
        document.querySelector(".willPH").innerText = secondary.toString();
      } else if (document.querySelector(".willPH").innerText == "3") {
        var un = parseInt(document.querySelector(".willPH").innerText);
        var unmod = un + 4;
        document.querySelector(".willPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".willPH").innerText);
        var problem = prob + 1;
        document.querySelector(".willPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".perPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".perPH").innerText);
        var primary = pri + 12;
        document.querySelector(".perPH").innerText = primary.toString();
      } else if (document.querySelector(".perPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".perPH").innerText);
        var secondary = sec + 8;
        document.querySelector(".perPH").innerText = secondary.toString();
      } else if (document.querySelector(".perPH").innerText == "3") {
        var un = parseInt(document.querySelector(".perPH").innerText);
        var unmod = un + 4;
        document.querySelector(".perPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".perPH").innerText);
        var problem = prob + 1;
        document.querySelector(".perPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".chaPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".chaPH").innerText);
        var primary = pri + 12;
        document.querySelector(".chaPH").innerText = primary.toString();
      } else if (document.querySelector(".chaPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".chaPH").innerText);
        var secondary = sec + 8;
        document.querySelector(".chaPH").innerText = secondary.toString();
      } else if (document.querySelector(".chaPH").innerText == "3") {
        var un = parseInt(document.querySelector(".chaPH").innerText);
        var unmod = un + 4;
        document.querySelector(".chaPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".chaPH").innerText);
        var problem = prob + 1;
        document.querySelector(".chaPH").innerText = problem.toString();
      }
    } else if (starRate.options[starRate.selectedIndex].text == "5 Star") {
      //STAR 5
      //Number of Traits
      document.querySelector(".numOfTPH").innerText = "8";
  
      //SKILLS
      var sp = parseInt(document.querySelector(".prisPH").innerText);
      var skillPri = sp + 10;
      document.querySelector(".prisPH").innerText = skillPri;
  
      var ss = parseInt(document.querySelector(".secsPH").innerText);
      var skillSec = ss + 7;
      document.querySelector(".secsPH").innerText = skillSec;
  
      //Adding to Stats and Skills
  
      if (document.querySelector(".strPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".strPH").innerText);
        var primary = pri + 21;
        document.querySelector(".strPH").innerText = primary.toString();
      } else if (document.querySelector(".strPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".strPH").innerText);
        var secondary = sec + 14;
        document.querySelector(".strPH").innerText = secondary.toString();
      } else if (document.querySelector(".strPH").innerText == "3") {
        var un = parseInt(document.querySelector(".strPH").innerText);
        var unmod = un + 9;
        document.querySelector(".strPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".strPH").innerText);
        var problem = prob + 4;
        document.querySelector(".strPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".dexPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".dexPH").innerText);
        var primary = pri + 21;
        document.querySelector(".dexPH").innerText = primary.toString();
      } else if (document.querySelector(".dexPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".dexPH").innerText);
        var secondary = sec + 14;
        document.querySelector(".dexPH").innerText = secondary.toString();
      } else if (document.querySelector(".dexPH").innerText == "3") {
        var un = parseInt(document.querySelector(".dexPH").innerText);
        var unmod = un + 9;
        document.querySelector(".dexPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".dexPH").innerText);
        var problem = prob + 4;
        document.querySelector(".dexPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".conPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".conPH").innerText);
        var primary = pri + 21;
        document.querySelector(".conPH").innerText = primary.toString();
      } else if (document.querySelector(".conPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".conPH").innerText);
        var secondary = sec + 14;
        document.querySelector(".conPH").innerText = secondary.toString();
      } else if (document.querySelector(".conPH").innerText == "3") {
        var un = parseInt(document.querySelector(".conPH").innerText);
        var unmod = un + 9;
        document.querySelector(".conPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".conPH").innerText);
        var problem = prob + 4;
        document.querySelector(".conPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".intPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".intPH").innerText);
        var primary = pri + 21;
        document.querySelector(".intPH").innerText = primary.toString();
      } else if (document.querySelector(".intPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".intPH").innerText);
        var secondary = sec + 14;
        document.querySelector(".intPH").innerText = secondary.toString();
      } else if (document.querySelector(".intPH").innerText == "3") {
        var un = parseInt(document.querySelector(".intPH").innerText);
        var unmod = un + 9;
        document.querySelector(".intPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".intPH").innerText);
        var problem = prob + 4;
        document.querySelector(".intPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".willPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".willPH").innerText);
        var primary = pri + 21;
        document.querySelector(".willPH").innerText = primary.toString();
      } else if (document.querySelector(".willPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".willPH").innerText);
        var secondary = sec + 14;
        document.querySelector(".willPH").innerText = secondary.toString();
      } else if (document.querySelector(".willPH").innerText == "3") {
        var un = parseInt(document.querySelector(".willPH").innerText);
        var unmod = un + 9;
        document.querySelector(".willPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".willPH").innerText);
        var problem = prob + 4;
        document.querySelector(".willPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".perPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".perPH").innerText);
        var primary = pri + 21;
        document.querySelector(".perPH").innerText = primary.toString();
      } else if (document.querySelector(".perPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".perPH").innerText);
        var secondary = sec + 14;
        document.querySelector(".perPH").innerText = secondary.toString();
      } else if (document.querySelector(".perPH").innerText == "3") {
        var un = parseInt(document.querySelector(".perPH").innerText);
        var unmod = un + 9;
        document.querySelector(".perPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".perPH").innerText);
        var problem = prob + 4;
        document.querySelector(".perPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".chaPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".chaPH").innerText);
        var primary = pri + 21;
        document.querySelector(".chaPH").innerText = primary.toString();
      } else if (document.querySelector(".chaPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".chaPH").innerText);
        var secondary = sec + 14;
        document.querySelector(".chaPH").innerText = secondary.toString();
      } else if (document.querySelector(".chaPH").innerText == "3") {
        var un = parseInt(document.querySelector(".chaPH").innerText);
        var unmod = un + 9;
        document.querySelector(".chaPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".chaPH").innerText);
        var problem = prob + 4;
        document.querySelector(".chaPH").innerText = problem.toString();
      }
    } else if (starRate.options[starRate.selectedIndex].text == "6 Star") {
      //STAR 6
      //Number of Traits
      document.querySelector(".numOfTPH").innerText = "14";
  
      //SKILLS
      var sp = parseInt(document.querySelector(".prisPH").innerText);
      var skillPri = sp + 12;
      document.querySelector(".prisPH").innerText = skillPri;
  
      var ss = parseInt(document.querySelector(".secsPH").innerText);
      var skillSec = ss + 10;
      document.querySelector(".secsPH").innerText = skillSec;
  
      //Adding to Stats and Skills
  
      if (document.querySelector(".strPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".strPH").innerText);
        var primary = pri + 30;
        document.querySelector(".strPH").innerText = primary.toString();
      } else if (document.querySelector(".strPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".strPH").innerText);
        var secondary = sec + 18;
        document.querySelector(".strPH").innerText = secondary.toString();
      } else if (document.querySelector(".strPH").innerText == "3") {
        var un = parseInt(document.querySelector(".strPH").innerText);
        var unmod = un + 12;
        document.querySelector(".strPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".strPH").innerText);
        var problem = prob + 7;
        document.querySelector(".strPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".dexPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".dexPH").innerText);
        var primary = pri + 30;
        document.querySelector(".dexPH").innerText = primary.toString();
      } else if (document.querySelector(".dexPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".dexPH").innerText);
        var secondary = sec + 18;
        document.querySelector(".dexPH").innerText = secondary.toString();
      } else if (document.querySelector(".dexPH").innerText == "3") {
        var un = parseInt(document.querySelector(".dexPH").innerText);
        var unmod = un + 12;
        document.querySelector(".dexPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".dexPH").innerText);
        var problem = prob + 7;
        document.querySelector(".dexPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".conPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".conPH").innerText);
        var primary = pri + 30;
        document.querySelector(".conPH").innerText = primary.toString();
      } else if (document.querySelector(".conPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".conPH").innerText);
        var secondary = sec + 18;
        document.querySelector(".conPH").innerText = secondary.toString();
      } else if (document.querySelector(".conPH").innerText == "3") {
        var un = parseInt(document.querySelector(".conPH").innerText);
        var unmod = un + 12;
        document.querySelector(".conPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".conPH").innerText);
        var problem = prob + 7;
        document.querySelector(".conPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".intPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".intPH").innerText);
        var primary = pri + 30;
        document.querySelector(".intPH").innerText = primary.toString();
      } else if (document.querySelector(".intPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".intPH").innerText);
        var secondary = sec + 18;
        document.querySelector(".intPH").innerText = secondary.toString();
      } else if (document.querySelector(".intPH").innerText == "3") {
        var un = parseInt(document.querySelector(".intPH").innerText);
        var unmod = un + 12;
        document.querySelector(".intPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".intPH").innerText);
        var problem = prob + 7;
        document.querySelector(".intPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".willPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".willPH").innerText);
        var primary = pri + 30;
        document.querySelector(".willPH").innerText = primary.toString();
      } else if (document.querySelector(".willPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".willPH").innerText);
        var secondary = sec + 18;
        document.querySelector(".willPH").innerText = secondary.toString();
      } else if (document.querySelector(".willPH").innerText == "3") {
        var un = parseInt(document.querySelector(".willPH").innerText);
        var unmod = un + 12;
        document.querySelector(".willPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".willPH").innerText);
        var problem = prob + 7;
        document.querySelector(".willPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".perPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".perPH").innerText);
        var primary = pri + 30;
        document.querySelector(".perPH").innerText = primary.toString();
      } else if (document.querySelector(".perPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".perPH").innerText);
        var secondary = sec + 18;
        document.querySelector(".perPH").innerText = secondary.toString();
      } else if (document.querySelector(".perPH").innerText == "3") {
        var un = parseInt(document.querySelector(".perPH").innerText);
        var unmod = un + 12;
        document.querySelector(".perPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".perPH").innerText);
        var problem = prob + 7;
        document.querySelector(".perPH").innerText = problem.toString();
      }
  
      if (document.querySelector(".chaPH").innerText == "6") {
        var pri = parseInt(document.querySelector(".chaPH").innerText);
        var primary = pri + 30;
        document.querySelector(".chaPH").innerText = primary.toString();
      } else if (document.querySelector(".chaPH").innerText == "4") {
        var sec = parseInt(document.querySelector(".chaPH").innerText);
        var secondary = sec + 18;
        document.querySelector(".chaPH").innerText = secondary.toString();
      } else if (document.querySelector(".chaPH").innerText == "3") {
        var un = parseInt(document.querySelector(".chaPH").innerText);
        var unmod = un + 12;
        document.querySelector(".chaPH").innerText = unmod.toString();
      } else {
        var prob = parseInt(document.querySelector(".chaPH").innerText);
        var problem = prob + 7;
        document.querySelector(".chaPH").innerText = problem.toString();
      }
    }
  }
  
  //TRAITS PH
  function createClickPH() {
    trait = Math.floor(Math.random() * 21) + 1;
  
    t1 =
      "\n1- Destructive Blood: The user gains access to Innate Attack as a Tertiary Skill that scales off Constitution, and makes an Innate Attack with Max Damage 10+Star Rating and Additional Dice of Star Ratingx2 any time they take slashing or piercing damage. This may be selected up to twice, the second time increasing the user's effective Star Rating for this attack by one.\n";
    t2 =
      "\n2- Doppelganger: The user may split their HP in half to create an identical clone of themselves and their equipment as a full-round action. Each additional time this is rolled both themselves and the clone may split one additional time, with no maximum.\n";
    t3 =
      "\n3- Blink: The user gains access to the Disorientation skill, calculated at half normal for Teleportation, and the ability to use BAMF as per the power. If this ability is gained a second time Disorientation is instead calculated as normal.\n\n";
    t4 =
      "\n4- Elemental Fury: The user gains immunity to a single energy type on the Blaster Table, and access to the stat corresponding to that energy type as a Problem Stat. They may add this stat to any attack and in doing so additionally inflict the Blaster Effect of that given element on their attack, with any DC changing to be equal to four times their Star Rating and any DoT changing to be equal to their Star Rating. Each time this is rolled the user may choose to either gain a second element, increase the priority of an Elemental Stat by one, or increase their Star Rating by one for purposes of DCs and DoT with a single element.\n";
    t5 =
      "\n5- Walking Tank: The user's Passive Defense is uncapped if it wasn't already, and they gain Kinetic or Energy Resistance equal to their Star Rating.\n";
    t6 =
      "\n6- As I Live And Breathe, The Wolverine: The user gains access to the Healing Factor stat as a Problem Stat, and each time they gain this ability they may raise it in Stat priority once, up to a Primary Stat.\n";
    t7 =
      "\n7- Golem: The user increases their Strength and Constitution's Stat Priority by one each, or their effective Star Rating for calculating it by one each if they're already Primary Stats. The user also no longer has reduced Passive Defense on any part of their body.\n";
    t8 =
      "\n8- Sneaky Bugger: The user gains access to Stealth as a Secondary Skill if they did not already have it, and may use the Rupture Dagger Technique on any melee or ranged attack from Stealth.\n";
    t9 =
      "\n9- Blind Bruiser: The user is blind, and thus cannot read or determine color, but is also immune to Eye Shots and any effect that requires sight.\n";
    t10 =
      "\n10- Void Spirit: The user is some form of Void Spirit, and reforms within 10-Star Rating resets when killed unless slain by esoteric means or MP damage.\n";
    t11 =
      "\n11- Reckless Abandon: The user may halve any Active Defense they possess for a round in order to gain the ability to split an attack dice pool in two to make two attacks at once. This stacks with all other forms of multiattack.\n";
    t12 =
      "\n12- Cautious: The user has at least half AD at all times unless physically held down.\n";
    t13 =
      "\n13- Gigantism - All physical, primary stats are halved but the creature calculates damage, movement, and health as if it was a medium sized vehicle with a material tier equal to their Constitution.\n";
    t14 =
      "\n14- Keen Hunter - The creatures Perception stat is moved up to Primary priority and increases to the next Star Rating above their current one if it already is. The creature is impossible to sneak up on within a unit radius equal to Perception x2 as it hears heartbeats and feels disturbances in the air.\n";
    t15 =
      "\n15- Beyond Infrasonic Roar - The creature gains access to Mentalist as a secondary skill and may make a Mentalist attack with Additional Dice equal to their Star Rating and Max Damage equal to four plus double their Star Rating as they let loose a mighty roar.\n";
    t16 =
      "\n16- Killer Instinct - The creature has all called shots they make reduced by one target value.\n";
    t17 =
      "\n17- Like A Lizard's Tail - The creature takes no main HP damage from limb shots and can forgo rolling counter grapple, instead sacrificing a limb to escape one as a movement action.\n";
    t18 =
      "\n18- Achilles' Heel: The user gains bonus PD equal to Star Rating2 until a GM determined body part or object is damaged. This spot should be obvious, such as being a body wound, covered in more armor, and such, due to the part/item having completely no passive defense that cannot be remedied by any effects.\n";
    t19 =
      "\n19- Army of Me: The creature gains an army of 1 star versions of themselves equal to their actual Star rating10. They additionally get a priority increase to their charisma and strength stats, or their effective Star Rating for calculating it by one each if they're already Primary.\n";
    t20 =
      "\n20- Slimy Fellow: The creature has been affected by some effect that made their body become ooze-like. This halves all physical damage after passive and they can move under, through, or around objects that aren't sealed.\n";
    t21 =
      "\n21- Scary Motherfucker: The Nemesis’ threaten skill goes up a priority, and if they haven't gotten the skill, it is unlocked as tertiary. When using threaten as a skill they gain a minus 2 to their t. When attacking, they can use Threaten against an opponent's Nerve. Upon success, they take out as many of the opponent's AD dice as they have skill ranks in Threaten.\n";
  
    switch (trait) {
      case 1:
        abilitiesPH.value += t1;
        break;
      case 2:
        abilitiesPH.value += t2;
        break;
      case 3:
        abilitiesPH.value += t3;
        break;
      case 4:
        abilitiesPH.value += t4;
        break;
      case 5:
        abilitiesPH.value += t5;
        break;
      case 6:
        abilitiesPH.value += t6;
        break;
      case 7:
        abilitiesPH.value += t7;
        break;
      case 8:
        abilitiesPH.value += t8;
        break;
      case 9:
        abilitiesPH.value += t9;
        break;
      case 10:
        abilitiesPH.value += t10;
        break;
      case 11:
        abilitiesPH.value += t11;
        break;
      case 12:
        abilitiesPH.value += t12;
        break;
      case 13:
        abilitiesPH.value += t13;
        break;
      case 14:
        abilitiesPH.value += t14;
        break;
      case 15:
        abilitiesPH.value += t15;
        break;
      case 16:
        abilitiesPH.value += t16;
        break;
      case 17:
        abilitiesPH.value += t17;
        break;
      case 18:
        abilitiesPH.value += t18;
        break;
      case 19:
        abilitiesPH.value += t19;
        break;
      case 20:
        abilitiesPH.value += t20;
        break;
      default:
        abilitiesPH.value += t21;
    }
  }
  
  //LEGENDARY TRAITS PH
  function createClick2PH() {
    trait = Math.floor(Math.random() * 12) + 1;
  
    t1 =
      "\n\n1. Time Lord: The user always goes first in Initiative, and may pause time for a number of rounds up to double their Star Rating as a free action. The cooldown is equal to the number of rounds in which they paused time. They may instead expend rounds to reverse the state of themselves or another target one round per two rounds of Time Stop expended, with the normal cooldown.\n\n";
    t2 =
      "\n\n2. Equalizer: No attack may have dice higher than the user's Active Defense. No target may have higher Passive Defense than the user. No target may have a pool higher than the user's in any form of contested dice roll.\n\n";
    t3 =
      "\n\n3. Unstoppable: The target multiplies their Passive Defense by 4, gains Regeneration per round equal to their Star Rating, and doubles any two physical stats compared to the average for their Star Rating.\n\n";
    t4 =
      "\n\n4. Tulpae: The user's Charisma, Willpower, and Intelligence all become Primary Stats if they weren't already, and Mentalist becomes a primary skill. The user is inhabiting a body not their own, and upon being slain or as a full-round action may infect the mind of a creature within their Star Rating units, making contested Mentalist vs Mentalist, or Mentalist vs Willpower/Charisma if the target doesn't have Mentalist, attacks to attempt to take over. If a target is killed by MP damage, the user now owns their body and may use all their physical stats and skills.\n\n";
    t5 =
      "\n\n5. Primordial: The user gains access to an attack with Max Damage equal to 8xStar Rating and Additional Dice equal to 16xStar Rating. This attack may either be an AoE that hits everything 5xStar Rating units around the user or a line that is 2xStar Rating units wide and 10xStar Rating units long. This ability may have specific abilities as per Elemental Fury, at GM discretion. However, those abilities have their DC doubled.\n\n";
    t6 =
      "\n\n6. Warp: The user may, up to three times per Star Rating per round, move any number of creatures or objects up to their Star Rating a number of units equal to 10xStar Rating in any direction as a free action. They may increase this by a factor of one hundred by changing it to a full-round action.\n\n";
    t7 =
      "\n\n7. Spectral: The user may freely shift to being completely intangible for up to 2xStar Rating rounds, with a cooldown equal to the number of rounds they were intangible. While intangible they are almost completely immune to any attacks that would target HP, and have complete Passive-Ignore on any melee attacks they make.\n\n";
    t8 =
      "\n\n8. Literally, Straight Up Immortal: The user returns to full HP and MP every 5-Star Rating rounds, minimum 1, no matter what. This also extends to any other resource pool they possess.\n\n";
    t9 =
      "\n\n9. Yeah, That Geist: The user can freely duplicate the powers of any target they have seen, with identical dice pools and other effects, limitlessly. This includes Passive effects, but they may only have a number of different powers equal to their Star Rating copied at once.\n\n";
    t10 =
      "\n\n10. Just A Man, After All: No power effect is capable of harming or even affecting the user. Additionally, upon physical contact with them any and every power, Passive or Active, completely shuts off for a number of rounds equal to their Star Rating.\n\n";
    t11 =
      "\n\n11. Fucking Speedsters: The user gains access to the Speed Conditional as a Problem Stat, increasing in priority by each time it is rolled up to a maximum of being a Secondary Stat. (This Trait is exclusive to Shanks, Duelists, and Tricksters.)\n\n";
    t11 =
      "\n\n12- Kaiju - The creature's stats remain the same but they calculate damage, movement, and health as if they were a Tiny spaceship with a material tier equal to their Constitution.\n\n";
  
    switch (trait) {
      case 1:
        abilitiesPH.value += t1;
        break;
      case 2:
        abilitiesPH.value += t2;
        break;
      case 3:
        abilitiesPH.value += t3;
        break;
      case 4:
        abilitiesPH.value += t4;
        break;
      case 5:
        abilitiesPH.value += t5;
        break;
      case 6:
        abilitiesPH.value += t6;
        break;
      case 7:
        abilitiesPH.value += t7;
        break;
      case 8:
        abilitiesPH.value += t8;
        break;
      case 9:
        abilitiesPH.value += t9;
        break;
      case 10:
        abilitiesPH.value += t10;
        break;
      case 11:
        abilitiesPH.value += t11;
        break;
      default:
        abilitiesPH.value += t12;
    }
  }
  
  //Copy Abilities PH
  function copyAbPH() {
    // Get the text field
    var copyText = document.getElementById("abilitiesPH");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
  }
  
