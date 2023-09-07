//****************************************************
// File: nemgenscript.js
//
// Purpose: Handled the creation of people Nemesis sheets.
//
// Written By: Blonk
//
// Compiler: Visual Studio Code
//
// Update Information
// ------------------
//
// Name: Blonk
// Date: 8/29/2023
// Description: Added comments and updated copyStats
// function.
//
//****************************************************

//****************************************************
// Function: archetype
//
// Purpose: Load the relevant skills, equipment, and base line stats of a given archetype
// when the user clicks one from the dropdown menu.
//
// Update Information
// ------------------
//
// Name: Blonk
// Date: 8/29/2023
// Description: Add Comment
//
//****************************************************
$(document).ready(function () {
  $("#archetype").on("change", function () {
    var a = this.value;

    switch (a) {
      case "Bulwark":
        $("#skills-text-area").val(
          "Primary Skills: Serenity \nSecondary Skills: Polearms, Long Guns \nTertiary Skills: Investigation"
        );
        $("#trait-text-area").val(
          "Bulwarks can wield two-handed weapons with a shield, though not with another weapon."
        );

        break;

      case "Berserker":
        $("#trait-text-area").val(
          "Berserkers may ignore Stagger unless they are instantly Taken Out for a number of rounds equal to their Charisma."
        );
        $("#skills-text-area").val(
          "Primary Skills: Blunts, Blades, Unarmed Combat \nSecondary Skills: Threaten, Investigation, Serenity \nTertiary Skills: Acrobatics, Athletics"
        );

        break;

      case "Trickster":

        $("#trait-text-area").val(
          "Tricksters may add their Intellect or Charisma to the attack dice of any creature, machine, or other entity under their command. They may also add their Lie or Convince skills to Active Defense. They also gain access to the 'Trickster Specialty' category when rolling for Traits."
        );

        $("#skills-text-area").val(
          "Primary Skills: Investigation, Convince \nSecondary Skills: Small Guns, Blades \nTertiary Skills: All Non-Combat"
        );

        break;

      case "Duelist":

        $("#trait-text-area").val(
          "Each round a Duelist is in direct combat with a target after the first, they permanently get 10% higher dice pools against that target for all combat related checks, up to a 100% bonus. This bonus never fades on its own, but all dice pool bonuses count towards the same cap. (10% against 10 different people, 20 against 5, etc)"
        );

        $("#skills-text-area").val(
          "Primary Skills: Polearms/Blades, Small Guns \nSecondary Skills: Serenity, Stealth, Convince, Athletics \nTertiary Skills: Craft, Pilot, Knowledge"
        );

        break;

      case "Shank":

        $("#trait-text-area").val(
          "Shanks gain doubled stealth bonuses from cover of all kinds, and may Stealth as a move or standard action mid-combat."
        );

        $("#skills-text-area").val(
          "Primary Skills: Blades, Small Guns, Stealth \nSecondary Skills: Convince, Acrobatics, Investigation, Athletics \nTertiary Skills: Knowledge, Lie"
        );

        break;

      case "Ranger":

        $("#trait-text-area").val(
          "Rangers have access to a pool of 20 Skill Points they can, as a move action, assign anywhere. Rangers may not assign more Skill Points to a single skill than twice their Star Rating and gain half as many extra Skill Ranks per Star Rating above the first."
        );

        $("#skills-text-area").val("Special, See Traits");

        break;

      case "Marksman":

        $("#trait-text-area").val(
          "Marksmen may double the effectiveness of the Aimed tag and ignore the Heavy rating for weapons that have been Aimed."
        );

        $("#skills-text-area").val(
          "Primary Skills: Long Guns, Heavy Guns, Investigation \nSecondary Skills: Serenity, Stealth \nTertiary Skills: Lie, Acrobatics"
        );

        break;

      case "Speedster":

        $("#trait-text-area").val(
          "Speedsters may use Speed for Unarmed Combat and add half of it to Strength for DT purposes. They also use Speed for Initiative."
        );

        $("#skills-text-area").val(
          "Primary: Blades, Unarmed Combat \nSecondary: Investigation, Serenity, Acrobatics \nTertiary: Stealth"
        );

        break;

      case "Blaster":

        $("#trait-text-area").val(
          "Blasters gain access to an Elemental Stat and the abilities that come from that. They have 2 Ability Points, doubling for every Star Rating, to spread between powers. They also unlock Innate Attack."
        );

        $("#skills-text-area").val(
          "Primary Skills: Innate Attack, Investigation \nSecondary Skills: Serenity, Insight \nTertiary Skills: Stealth"
        );

        break;

      case "Brute":

        $("#trait-text-area").val(
          "Brutes gain access to the Might stat as a Problem Stat, and may sacrifice 3 Traits in order to raise it to a Tertiary Stat, 5 to a Secondary Stat, and 15 to a Primary Stat."
        );

        $("#skills-text-area").val(
          "Primary Skills: Unarmed Combat, Blades, Blunts \nSecondary Skills: Investigation, Athletics \nTertiary Skills: Serenity, Threaten"
        );

        break;

      default:
        alert("Invalid Choice");
    }
  });

//****************************************************
// Function: stars
//
// Purpose: Increase and decrease stats in accordance to the currently selected stat priority.
//
// Update Information
// ------------------
//
// Name: Blonk
// Date: 8/29/2023
// Description: Add Comment
//
//****************************************************
  $("#stars").on("change", function () {
    var a = this.value;

    var exemplary = 0;
    var primary = 0;
    var secondary = 0;
    var unmodified = 0;
    var problem = 0;

    var b = $("#archetype").find(":selected").text();

    switch (a) {
      case "1":
        exemplary = 5;
        primary = 3;
        secondary = 2;
        unmodified = 1;
        problem = 1;

        $("#skillca-num").text("2 Novice, 2 Journeyman");
        break;

      case "2":
        exemplary = 7;
        primary = 5;
        secondary = 3;
        unmodified = 2;
        problem = 1;

        $("#skillca-num").text("3 Novice, 2 Journeyman");
        break;

      case "3":
        exemplary = 9;
        primary = 7;
        secondary = 4;
        unmodified = 3;
        problem = 2;

        $("#skillca-num").text("4 Novice, 2 Journeyman, 1 Adept");
        break;

      case "4":
        exemplary = 11;
        primary = 9;
        secondary = 5;
        unmodified = 4;
        problem = 3;

        $("#skillca-num").text("5 Novice, 3 Journeyman, 1 Adept");
        break;

      case "5":
        exemplary = 14;
        primary = 12;
        secondary = 7;
        unmodified = 5;
        problem = 4;

        $("#skillca-num").text("6 Novice, 4 Journeyman, 2 Adept or 1 Expert");
        break;

      default:
    }

    switch (b) {
      case "Bulwark":
        $("#str").text(secondary);
        $("#sta").text(unmodified);
        $("#agi").text(problem);
        $("#dur").text("2");
        $("#hea").text(primary);
        $("#per").text(secondary);
        $("#int").text(unmodified);
        $("#wil").text(primary);
        $("#cha").text(unmodified);

        break;

      case "Berserker":
        $("#str").text(primary);
        $("#sta").text(primary);
        $("#agi").text(unmodified);
        $("#dur").text("2");
        $("#hea").text(secondary);
        $("#per").text(unmodified);
        $("#int").text(problem);
        $("#wil").text(unmodified);
        $("#cha").text(secondary);

        break;

      case "Trickster":
        $("#str").text(unmodified);
        $("#sta").text(unmodified);
        $("#agi").text(secondary);
        $("#dur").text("2");
        $("#hea").text(problem);
        $("#per").text(secondary);
        $("#int").text(primary);
        $("#wil").text(primary);
        $("#cha").text(primary);

        break;

      case "Duelist":
        $("#str").text(problem);
        $("#sta").text(primary);
        $("#agi").text(primary);
        $("#dur").text("2");
        $("#hea").text(secondary);
        $("#per").text(secondary);
        $("#int").text(secondary);
        $("#wil").text(unmodified);
        $("#cha").text(secondary);

        break;

      case "Shank":
        $("#str").text(unmodified);
        $("#sta").text(secondary);
        $("#agi").text(primary);
        $("#dur").text("2");
        $("#hea").text(problem);
        $("#per").text(primary);
        $("#int").text(unmodified);
        $("#wil").text(secondary);
        $("#cha").text(secondary);

        break;

      case "Ranger":
        $("#str").text(secondary);
        $("#sta").text(secondary);
        $("#agi").text(secondary);
        $("#dur").text("2");
        $("#hea").text(secondary);
        $("#per").text(secondary);
        $("#int").text(secondary);
        $("#wil").text(secondary);
        $("#cha").text(secondary);

        $("#skillca-num").text("Special");

        break;

      case "Marksman":
        $("#str").text(problem);
        $("#sta").text(unmodified);
        $("#agi").text(primary);
        $("#dur").text("2");
        $("#hea").text(unmodified);
        $("#per").text(primary);
        $("#int").text(secondary);
        $("#wil").text(secondary);
        $("#cha").text(unmodified);

        break;

      case "Speedster":
        $("#str").text(problem);
        $("#sta").text(exemplary);
        $("#agi").text(secondary);
        $("#dur").text("2");
        $("#hea").text(problem);
        $("#per").text(secondary);
        $("#int").text(unmodified);
        $("#wil").text(unmodified);
        $("#cha").text(unmodified);

        break;

      case "Blaster":
        $("#str").text(unmodified);
        $("#sta").text(secondary);
        $("#agi").text(secondary);
        $("#dur").text("2");
        $("#hea").text(problem);
        $("#per").text(primary);
        $("#int").text(secondary);
        $("#wil").text(unmodified);
        $("#cha").text(unmodified);

        break;

      case "Brute":
        $("#str").text(primary);
        $("#sta").text(secondary);
        $("#agi").text(unmodified);
        $("#dur").text("2");
        $("#hea").text(primary);
        $("#per").text(problem);
        $("#int").text(problem);
        $("#wil").text(secondary);
        $("#cha").text(secondary);

        break;

      default:
    }
  });
});

//****************************************************
// Function: miscConditions
//
// Purpose: Raises or lowers number of allowed traits and Power Level when Star Rating
// is selected from it's dropdown menu.
//
// Update Information
// ------------------
//
// Name: Blonk
// Date: 8/29/2023
// Description: Add Comment
//
//****************************************************
function miscConditions() {
  switch (document.querySelector("#stars").value) {
    case "1":
      document.querySelector("#numt").innerText = "1-2";
      document.querySelector("#lv").innerText = "Street(ie12)";
      break;

    case "2":
      document.querySelector("#numt").innerText = "3-4";
      document.querySelector("#lv").innerText = "Street(ie12)";
      break;

    case "3":
      document.querySelector("#numt").innerText = "6-8";
      document.querySelector("#lv").innerText = "Street(ie12)";
      break;

    case "4":
      document.querySelector("#numt").innerText = "10-12";
      document.querySelector("#lv").innerText = "Adventurer(ie10)";
      break;

    case "5":
      document.querySelector("#numt").innerText = "12+";
      document.querySelector("#lv").innerText = "Spandex(ie8)";
      break;

    default:
  }
}

//****************************************************
// Function: accessRaceDoc
//
// Purpose: To access and extract racial trait descriptions.
//
// Update Information
// ------------------
//
// Name: Blonk
// Date: 8/29/2023
// Description: Add Comment
//
//****************************************************
async function accessRaceDoc() {
  const url1 =
    "https://raw.githubusercontent.com/MalikRob/MalikRob.github.io/main/races.txt";
  const response = await fetch(url1);
  const data = await response.text();

  //Need to split "data" into specific lines somehow

  const myArray = data.split("#");

  var c = $("#race").find(":selected").text();

  $("#racial-trait-text-area").text(myArray[1]);

  switch (c) {
    case "Arachnoid: Spider":
      $("#racial-trait-text-area").text(myArray[0] + "\n" + myArray[1]);
      break;
    case "Arachnoid: Scorpion":
      $("#racial-trait-text-area").text(myArray[0] + "\n" + myArray[2]);
      break;
    case "Basker":
      $("#racial-trait-text-area").text(myArray[3]);
      break;
    case "Goblins/Chaos Incarnates":
      $("#racial-trait-text-area").text(myArray[4]);
      break;

    case "Chitterling":
      $("#racial-trait-text-area").text(myArray[5]);
      break;
    case "Clones":
      $("#racial-trait-text-area").text(myArray[6]);
      break;
    case "Dryads":
      $("#racial-trait-text-area").text(myArray[7]);
      break;
    case "Halflings":
      $("#racial-trait-text-area").text(myArray[8]);
      break;

    case "Hao":
      $("#racial-trait-text-area").text(myArray[9]);
      break;
    case "Humans":
      $("#racial-trait-text-area").text(myArray[10]);
      break;
    case "Earth Incarnate":
      $("#racial-trait-text-area").text(myArray[11]);
      break;
    case "Fire Incarnate":
      $("#racial-trait-text-area").text(myArray[12]);
      break;

    case "Air Incarnate":
      $("#racial-trait-text-area").text(myArray[13]);
      break;
    case "Water Incarnate":
      $("#racial-trait-text-area").text(myArray[14]);
      break;
    case "Light Incarnate":
      $("#racial-trait-text-area").text(myArray[15]);
      break;
    case "Lightning Incarnate":
      $("#racial-trait-text-area").text(myArray[16]);
      break;

    case "Force Incarnate":
      $("#racial-trait-text-area").text(myArray[17]);
      break;
    case "Inari-Blessed Mitra, aka Kitsune":
      $("#racial-trait-text-area").text(myArray[18]);
      break;
    case "Mahntral":
      $("#racial-trait-text-area").text(myArray[19]);
      break;
    case "Menehune":
      $("#racial-trait-text-area").text(myArray[20]);
      break;

    case "Minotaurs":
      $("#racial-trait-text-area").text(myArray[21]);
      break;
    case "Mitra":
      $("#racial-trait-text-area").text(myArray[22]);
      break;
    case "Necromen":
      $("#racial-trait-text-area").text(myArray[23]);
      break;
    case "Orks":
      $("#racial-trait-text-area").text(myArray[24]);
      break;

    case "Piscine: The Blubberkin":
      $("#racial-trait-text-area").text(myArray[25] + "\n" + myArray[26]);
      break;
    case "Piscine: The Lurker":
      $("#racial-trait-text-area").text(myArray[25] + "\n" + myArray[27]);
      break;
    case "Piscine: The Fragile Death":
      $("#racial-trait-text-area").text(myArray[25] + "\n" + myArray[28]);
      break;
    case "Piscine: Leapers":
      $("#racial-trait-text-area").text(myArray[25] + "\n" + myArray[29]);
      break;

    case "Piscine: The Undying":
      $("#racial-trait-text-area").text(myArray[25] + "\n" + myArray[30]);
      break;
    case "Saurian: Scout Caste":
      $("#racial-trait-text-area").text(myArray[31] + "\n" + myArray[34]);
      break;
    case "Saurian: Warrior Caste":
      $("#racial-trait-text-area").text(myArray[32] + "\n" + myArray[34]);
      break;
    case "Saurian: Shaman Caste":
      $("#racial-trait-text-area").text(myArray[33] + "\n" + myArray[34]);
      break;

    case "Serpentines: Lamia":
      $("#racial-trait-text-area").text(myArray[35]);
      break;
    case "Serpentines: Cobrakin":
      $("#racial-trait-text-area").text(myArray[36]);
      break;
    case "The Squall":
      $("#racial-trait-text-area").text(myArray[37]);
      break;
    case "Squats":
      $("#racial-trait-text-area").text(myArray[38]);
      break;

    case "Squidhats":
      $("#racial-trait-text-area").text(myArray[39]);
      break;
    case "Titans":
      $("#racial-trait-text-area").text(myArray[40]);
      break;

    default:
      $("#racial-trait-text-area").text(" ");
  }
}

//****************************************************
// Function: selectTraits
//
// Purpose: To roll a random number, load each trait into a single variable
// and then load that variable into a static array. A trait is outputed depending on the number rolled.
//
// Update Information
// ------------------
//
// Name: Blonk
// Date: 8/29/2023
// Description: Add Comment
//
//****************************************************
function selectTraits() {
  trait = Math.floor(Math.random() * 75) - 1;

  t1 =
    "\n1- Posse: The user is surrounded with a number of people two Star Ratings below them equal to their own Star Rating, with a minimum Star Rating of 1. This may be rolled up to three times, each time after the first increasing the Star Rating of the posse by one. The Posse is also one Category of Character tier lower than them, minimum Mook.\n";
  t2 =
    "\n2- Shard Addict: The user is in possession of a number of Orange or Yellow Shards equal to double their Star Rating, which can be in any combination of sizes, maximum Small. Each time this ability is selected, the user may either double the amount of Shards they have or increase their color rarity by 1.\n";
  t3 =
    "\n3- Gun Nut: The user increases the tier of a single gun skill they have by one, maximum Expert. Each time this trait is taken, it can stack on a gun skill that hasn’t hit the cap or be put on another.\n";
  t4 =
    "\n4- Laser Loon: The user may gain access to energy weapons rather than a standard weapon.\n";
  t5 =
    "\n5- Armored: The user's armor increases by 1 Tier. This may only be rolled a total of twice, but they also may fill the new armor with Force Fields or Energy Shields as normal.\n";
  t6 =
    "\n6- Buckler: The user gains access to the Shields skill as a Secondary Specialty Skill if they did not already have it, and may add a mundane Shield they can use to their equipment.\n";
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
    "\n14- Destructive Blood: The user gains access to Innate Attack as a Tertiary Skill that scales off Endurance, and makes an Innate Attack with Medium DT 5+Star Rating any time they take slashing or piercing damage. This may be selected up to twice, the second time increasing the user's effective Star Rating for this attack by one.\n";
  t15 =
    "\n15- Lesser Illusionist: The user increases the t of a target’s active defense against all their attacks by an amount equal to (Star Rating-1) and decreases the t of their own active defense by an equal amount.\n";
  t16 =
    "\n16- Doppelganger: The user may split their HL in half to create an identical clone of themselves and their equipment by using all their base actions. Each additional time this is rolled both themselves and the clone may split one additional time, with no maximum.\n";
  t17 =
    "\n17- Blink: The user gains access to the Disorientation skill, calculated at half normal for Teleportation, and the ability to use BAMF as per the power. If this ability is gained a second time Disorientation is instead calculated as normal.\n";
  t18 =
    "\n18- Dabbling Cultivator: The user gains Initiate 1 on a single Primary Stat. Each time after the first this is selected an additional stat gains Initiate 1 and every two times this is rolled the total level of Initiate the user is increased by one.\n";
  t19 =
    "\n19- Mirror Image: The user may as a full-round action summon 1d4 Illusory Duplicates that function as the Mirror Image power. Each time this is rolled, the die size increases by 1 (d6, d8, etc)\n";
  t20 =
    "\n20- Karia: The user is actually a Karia variant of whatever race they are.\n";

  t21 =
    "\n21- Mind Spike: The user gains access to the Mentalist skill as a Tertiary that scales off of Charisma, and may make a Mentalist attack with a Medium DT equal to two plus their Star Rating.\n";
  t22 =
    "\n22- Elemental Fury: The user gains immunity to a single energy type on the Blaster Table, and access to the stat corresponding to that energy type as a Problem Stat. They may add this stat to any attack and in doing so additionally inflict the Blaster Effect of that given element on their attack, with any DC changing to be equal to double their Star Rating and any DoT changing to be equal to their Star Rating. Each time this is rolled the user may choose to either gain a second element, increase the priority of an Elemental Stat by one, or increase their Star Rating by one for purposes of DCs and DoT with a single element.\n";
  t23 =
    "\n23-Airborne: The user gains a Flight speed equal to the higher priority of their Agility or Willpower stats, with ties going to Agility. They additionally gain access to Fly as a Tertiary Skill, and may add it to their Active Defense while flying.\n";
  t24 =
    "\n24- Unstoppable Machine: The user is a Hao rather than their original race, and uses all non-stat related racial traits of the Torchbearer Initiative 1 Hao race, rather than the Collective.\n";
  t25 =
    "\n25- ...A Fucking Turtle? The user is a Basker instead of their original race. All weapons they are proficient with are assumed to be cybernetically implanted, and they lose access to armor in favor of their shell.\n";
  t26 =
    "\n26- Signature Skill: The user may move a Secondary Skill to a Primary Skill, or increase a Primary Skill by one Star Rating. This may be selected any number of times, but may only apply to a given skill once at most.\n";
  t27 =
    "\n27- Walking Tank: The user's Durability is uncapped if it wasn't already, and they gain Kinetic or Energy Resistance equal to their Star Rating.\n";
  t28 =
    "\n28- As I Live And Breathe, The Wolverine: The user gains access to the Healing Factor stat as a Problem Stat, and each time they gain this ability they may raise it in Stat priority once, up to a Primary Stat.\n";
  t29 =
    "\n29- Bestial Brute: The user gains access to Unnatural Weapon as a Secondary Skill and increases one of Strength, Agility, Endurance, or Senses by one in terms of stat priority, to a maximum of Primary. This trait also increase Durability by a flat 2.\n";
  t30 =
    "\n30- Golem: The user increases Strength & Health by 1, Durability is considered Tough(4 Passive Defense as their skin is stony), and Converts Health into Weight. Every time this trait is taken, the user’s PD is increased by 2, capping out at 8.\n";

  t31 =
    "\n31- My Specialty: The user gains access to a Facet related to one of their Primary or Secondary Skills with a number of Ranks equal to half their Star Rating.\n";
  t32 =
    "\n32- From The Hip: The user may aim a weapon as a free action rather than a standard action, or may aim a weapon without the Aim tag as an action.\n";
  t33 =
    "\n33- Nuclear Option: Upon death, the user detonates as an uncapped attack that adds their two highest stats together and hits everything within ((4xStar Rating)x5)). This explosion has a DT of Light at Star Rating 1, increasing by one category for every rating above the first.\n";
  t34 =
    "\n34- Fighting a Shadow: The user's Star Rating is reduced by one until the first time they are killed, after which it is revealed that the slain version of the user was in some way an impostor or clone or minion and the real user is both alive and witnessed the entire fight.\n";
  t35 =
    "\n35- Ghaz's Paramour: The user gains access to Ghaz's Echoes despite not being an Ork, but they only rise up to 1/2 the user's Endurance stat.\n";
  t36 =
    "\n36- Puppeteer: The user gains Charisma as a Secondary stat if it is not already there or higher, and may make a skill-less opposed Charisma check on a non-Mentalist immune target as an action, being able to dictate their actions for a number of rounds equal to their Star Rating, though they cannot force a target to do anything directly suicidal. The user or an ally attacking the target removes the control, and one can only be successfully controlled once per Reset.\n";
  t37 =
    "\n37- Void Spirit: The user is some form of Void Spirit, and reforms within 10-Star Rating resets when killed unless slain by esoteric means or SL damage.\n";
  t38 =
    "\n38- Sneaky Bugger: The user gains access to Stealth as a Secondary Skill if they did not already have it, and any attack from stealth halves the threshold for inflicting the Bleeding condition. This does not stack with called shots.\n";
  t39 =
    "\n39- Blind Bruiser: The user is blind, and thus cannot read or determine color, but is also immune to Eye Shots and any effect that requires sight.\n";
  t40 =
    "\n40- Vat-Grown: The user's race is also considered Clone, adding a clone trait as well as granting them +1 to all physical stats except durability.\n";

  t41 =
    "\n41- WHY DID IT HAVE TO BE FUCKING SUPERMAN?: The user is distantly related to a Sunblooded Eternal. They have access to the Solar Battery Conditional (2 points per rank in the stat) and can only use it to spend points to increase a physical stat at a 1-to-1 ratio for a round at no action cost. Solar Battery is counted as an Unmodified stat.\n";
  t42 =
    "\n42- The Big Guns: The user's main weapon, should it be two-handed, counts as Large for purposes of dealing damage.\n";
  t43 =
    "\n43- Oh Great, A Flesh Slime: The user is a flesh slime in the shape of a person. HP pool is calculated as if Health were an Elemental Conditional, they have fiat immunity to most purely kinetic injuries, and their Durability is set to 0.\n";
  t44 =
    "\n44- Born Lucky: The user has a pool of rerolls equal to their Star Rating, which they may use to force the reroll of any check at will. These rerolls restore upon impressive rolls or per Reset.\n";
  t45 = "\n45- Just That Good: The target has t5.\n";
  t46 =
    "\n46- Fucking Nullifiers: The user gains access to the Templar ability, and their Charisma is upgraded to a Secondary Stat if it isn't already there or higher.\n";
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
    "\n52- Why Are They So Small: The user has been magically minimized, and is now considered 2 Smaller than normal race's size, this can't go under tiny.\n";
  t53 =
    "\n53- Oh Shit, A Rat: The Nemesis is accompanied by a small companion, such as a Rat, Bird, Monkey or Lizard, that they may communicate with freely and is considered Tiny.\n";
  t54 =
    "\n54- Techno Gore: The Nemesis radiates an anti-Technology field extending 50 feet, inside which any 'complex' technology such as guns, electronics and machines fail to work entirely.\n";
  t55 =
    "\n55- Bad Luck Charm: All roll's against the nemesis gain +1t, including initiative, attacks and ability's.\n";
  t56 =
    "\n56- You Killed My Father, Prepare To Die!: For some reason, you have deeply harmed this person to the point they cater their entire life around killing you. Pick a previous nemesis or enemy the target has faced and choose traits according to their power and build, then optimize said build for killing the Primary Target. You may add an additional Trait roll, raise a Stat to Primary, or an available Skill to Primary for this purpose. RP implications are left up to the presiding GM and circumstances.\n";
  t57 =
    "\n57- Mirror Mirror: The user's Star Rating is raised or lowered to rough parity of that of the target, and all Archetype and trait rolls are automatically overwritten by what would be the closest approximation to the target's power and build.\n";
  t58 =
    "\n58- Custom Weapon: The user has invested in an expensive, special weapon due to their focus on this weapon type, and as such gains +1 ranks in its use that doesn’t count against their skill pool. Take the most suitable primary weapon skill the user has and apply an equivalent DT boost as well. If this is rolled more than once, add weapon tags and other special features, stacking as many times as it is rolled. If the user doesn’t have a primary weapon skill, raise it to primary priority, if the user doesn't have a weapon skill at all, pick one and make it equal to their Star Rating+2.\n";
  t59 =
    "\n59- Beastly Royalty: The monster/user gains an increase to all Primary Stats and Skills as if they were one Star Rating higher and gains one additional Trait roll, putting it above average individuals of its species. And if the user is humanoid, it also gains a Secondary Weapon skill of the GM’s choice. If this trait is rolled a second time, the user gains a star rating increase to all secondary stats and Skills, and the weapon skill gained for humanoid monsters is upgraded to Primary. This trait may only be rolled twice.\n";
  t60 =
    "\n60- Rise From The Ashes: The user goes down 1 Star Rating, minimum 1, and loses the attendant boosts it comes with. However, when they die they instead rise from the grave at full HL and SL, along with all other Pools they may have had being refilled. They increase the star rating of all Primary Stats and Skills. They also gain an additional Trait Roll when this effect triggers, which may instead be substituted for a C-rank Ability of the presiding GM's choice. This ability may be rolled up to 3 times, giving no additional revives but providing a star rating increase to Secondary stats and skills and an additional trait roll on the second (or the gained ability to be a B rank), and turning all Tertiary skills into Primary as well as another trait roll on the third.\n";

  t61 =
    "\n61- Breaking Bad: The user is equipped with a wild variety of drugs including some drugs that are only found on the black market. As a consequence of prolonged drug use and gene mods, the effects of the drugs are extended by an extra 1d3 rounds, negative effects are decreased by 25%, and the cooldown on usage is decreased by a round.\n";
  t62 =
    "\n62- Rift-Attuned: The user has been touched by the void, gaining Mana as a Problem stat and a flat number of extra rounds on the duration of shard abilities equal to their Mana stat. Grant them 2 Miniscule sized shards of your choice to their Equipment.\n";
  t63 =
    "\n63 - Were-Something: This Nemesis is a Lycanthrope of some sort, moving their Primary stats up by 1 star and giving them doubled Durability against non Silvered/Holy attacks.\n";
  t64 =
    "\n64 - Braaaaains...: The Nemesis counts as Undead, their t does not increase while Staggered unless they take damage and they may make a free Unarmed Combat attack on a successful grapple, gaining 1HL for every 2 points of HL damage dealt to an enemy. Due to their undead nature however, the Nemesis has no durability to Fire and gains +2T on all social checks save for Threaten, which gains -1T.\n";
  t65 =
    "\n65- Shadowborn: The user can meld with shadows, increasing the T of all attacks made against them by 1 whenever they're covered in darkness, and gain access to the Disorientation conditional at half effectiveness with the ability to teleport to shadows they can see.\n";
  t66 =
    "\n66- POCKET SAND/RANDOM BULLSHIT: The user has -2t to the Sleight of Hand skill and upon a success against a target's Investigation/Insight, their next attack counts as a Blindside. Every time this trait is used on a target, pass or fail, the target gains -1t to their Insight/Investigation against the user for the duration of the encounter.\n";
  t67 =
    "\n67- Achilles' Heel: The user gains bonus Durability equal to Star Rating2 until a GM determined body part or object is damaged. This spot should be obvious, such as being a body wound, covered in more armor, and such, due to the part/item having completely no passive defense that cannot be remedied by any effects.\n";
  t68 =
    "\n68- Army of Me: The creature gains a hoard army of themselves equal to star rating x 10, and is considered a leader of the hoard.\n";
  t69 =
    "\n69- Slimy Fellow: The creature has been affected by some effect that made their body become ooze-like. This halves all physical damage after durability and they can move under, through, or around objects that aren't sealed.\n";
  t70 =
    "\n70- Scary Motherfucker: The Nemesis' threaten skill goes up a priority, and if they haven't gotten the skill, it is unlocked as tertiary. When using threaten as a skill they gain a minus 2 to their t. When attacking, they can use Threaten against an opponent's serenity. Upon success, they take out as many of the opponent's AD dice as they have skill ranks in Threaten.\n";

  t71 =
    "\n71- Why Are You A Criminal?: The nemesis has a potent and extremely profitable healing ability. They can heal themselves, or any one they are within physical contact with for 2d[StarRating] HLs or target a number of people within 50 feet equal to their Star Rating for half the healing dice.\n";
  t72 =
    "\n72- Smoke Bomb!: The user has a smoke-bomb, that when activated as an action, automatically fills a circular, Short Range area with vision-obscuring smoke. This cover grants +4t to Perception checks and attacks dependent on seeing a target.\n";
  t73 =
    "\n73- Neurotoxin: The nemesis has their melee weapons and ammo coated in a potent toxin. Upon dealing HP damage to a target, they must pass a DC 5 Middling Health check. Upon a failure, they will continuously gain +1t to all physical checks at the end of their turn. This toxin does not stack and has a duration of rounds equal to half the HP damage dealt with the inflicting strike, minimum 1. (Trickster Specialty)\n";
  t74 =
    "\n74- Perfect Feint: The has exceptional mastery over the Sleight of Hand skill, having a base -2t to all checks with it. Additionally, when used to Feint someone (a Tricky check), they completely nullify the ability to parry their next strike against them. Every time this trait is used on a target, pass or fail, the target gains -1t to their Insight/Investigation against the user for the duration of the encounter. (Trickster Specialty)\n";
  t75 =
    "\n75- The Power of Friendship: The user is almost always found with another that also possesses this trait, and while both of them are in the same combat they have -2t to all offensive and defensive checks, as well as any other checks that would relate to teamwork. If one of them is Taken Out, the other increases in Power Level by one until the end of combat. [This counts as 2 Traits instead of 1.]\n";
  t76 =
    "\n76- Tunnel Vision: The user can select a single individual as their Target as an action, which cannot be changed unless the Target is slain. They have -2t to all checks against them, but +1t to all checks against anyone else in the combat. If the Nemesis succeeds in Taking Out their Target, they temporarily rise by one Power Level until combat is over. This trait is rendered inert after use.\n";
  t77 =
    "\n77- I'm Feeling Invincible: The user is considered one size larger than they actually are for purposes of HP calculation. Additionally, they may gain Prot equal to their current HP as a reaction, losing one HP each time they do this.\n";
  t78 =
    "\n78- My Favorite Knife: This Nemesis is considered one Power Level higher specifically for checks that use a single preferred weapon.\n";
  t79 =
    "\n79- The People's Champion: The user gains Might equal to their Strength +2 and has their Health stat raised to be equal to Might if it wasn’t that or higher already. If the user already has Might, they just gain +2 to the stat along with the aforementioned Health increase. [This counts as 2 Traits instead of 1.]\n";
  t80 =
    "\n80- Amorphous: This user loses their base +2HP in exchange for their Health stat functioning like an Elementalist Conditional for pool calculation. They are also immune to purely Kinetic injuries. [This counts as 2 Traits instead of 1.]\n";
  t81 =
    "\n81- I'm Pulling Myself Together: The user may restore their HP as a Channeling check that scales off their choice of Health or Willpower. Every two successes restores one HP, and this check may be made even while Taken Out so long as they are not completely destroyed.\n";
  t82 =
    "\n82- Brain Punch: The user's physical attacks target MP and Mental Defenses, but do not ignore armor and can be avoided with physical AD, along with dropping one level of Severity to a minimum of Light.\n";
  t83 =
    "\n83- For The Sake Of The World: The user is a Shonen Protagonist and gets restored to full HP/MP, rises one Power Level, and gains 25 SP to assign amongst skills and stats after the first time they're Taken Out. [This counts as 2 Traits instead of 1.]\n";
  t84 =
    "\n84- Collateral Damage Is My Middle Name: Every attack made by the user either has a Splash rating equal to 20*Star Rating or is considered one size larger for the purpose of damage modification, their choice. [This counts as 3 traits instead of 1.]\n";
  t85 =
    "\n85- Just Call Me A Superhero: When fighting for wounded comrades, to rescue civilians, or for any other traditionally heroic reason, the user has the t of all checks reduced by 2. They may nullify this bonus in order to rise to the Spandex Power Level for a number of rounds equal to their Star Rating, after which this ability is entirely inactive for a number of days equal to 10-Star Rating. [This counts as 3 traits instead of 1.]\n";
  t86 =
    "\n86- A Good Day To Die: Upon death, the user raises the Power Level of all other enemies in the area by one for the rest of the encounter, as they are compelled to avenge their fallen friend. [This counts as 2 traits instead of 1.]\n";
  t87 =
    "\n87- Half As Long, Twice As Bright: The user may drain 1 HP and MP per round to subtract 1 from the t of all checks. Both the drain and the subtraction increase by one every round. HP and MP drained this way are considered to be lost to Heavy damage but do not inflict Injuries. [This counts as 2 traits instead of 1.]\n";
  t88 =
    "\n88- Born Unlucky: The t of everyone else in this combat is increased by 2, and the user’s t is increased by 1 due to their long experience managing their bad luck field.\n";
  t89 =
    "\n89- Our Battle Will Be Legendary: This Nemesis is at the Cosmic Power Level, and elevates anyone fighting with or against them to the Cosmic Power Level as well, along with multiplying their Health and Willpower by 3. Their very presence brings out the greatest potential in everyone around them, friend or foe.\n";
  t90 =
    "\n90- Deflected Blame: The user may transfer all damage it has taken to another target within 100 feet as an action. This includes any and all Injuries inflicted by Damage Severity less than Divine. This may be used an unlimited number of times. [This counts as 2 traits instead of 1.]\n";
  
  const traits = [];
  traits[0] = t1;
  traits[1] = t2;
  traits[2] = t3;
  traits[3] = t4;
  traits[4] = t5;
  traits[5] = t6;
  traits[6] = t7;
  traits[7] = t8;
  traits[8] = t9;
  traits[9] = t10;
  traits[10] = t11;
  traits[11] = t12;
  traits[12] = t13;
  traits[13] = t14;
  traits[14] = t15;
  traits[15] = t16;
  traits[16] = t17;
  traits[17] = t18;
  traits[18] = t19;
  traits[19] = t20;
  traits[20] = t21;
  traits[21] = t22;
  traits[22] = t23;
  traits[23] = t24;
  traits[24] = t25;
  traits[25] = t26;
  traits[26] = t27;
  traits[27] = t28;
  traits[28] = t29;
  traits[29] = t30;
  traits[30] = t31;
  traits[31] = t32;
  traits[32] = t33;
  traits[33] = t34;
  traits[34] = t35;
  traits[35] = t36;
  traits[36] = t37;
  traits[37] = t38;
  traits[38] = t39;
  traits[39] = t40;
  traits[40] = t41;
  traits[41] = t42;
  traits[42] = t43;
  traits[43] = t44;
  traits[44] = t45;
  traits[45] = t46;
  traits[46] = t47;
  traits[47] = t48;
  traits[48] = t49;
  traits[49] = t50;
  traits[50] = t51;
  traits[51] = t52;
  traits[52] = t53;
  traits[53] = t54;
  traits[54] = t55;
  traits[55] = t56;
  traits[56] = t57;
  traits[57] = t58;
  traits[58] = t59;
  traits[59] = t60;
  traits[60] = t61;
  traits[61] = t62;
  traits[62] = t63;
  traits[63] = t64;
  traits[64] = t65;
  traits[65] = t66;
  traits[66] = t67;
  traits[67] = t68;
  traits[68] = t69;
  traits[69] = t70;
  traits[70] = t71;
  traits[71] = t72;
  traits[72] = t73;
  traits[73] = t74;
  traits[74] = t75;
  traits[75] = t76;
  traits[76] = t77;
  traits[77] = t78;
  traits[78] = t79;
  traits[79] = t80;
  traits[80] = t81;
  traits[81] = t82;
  traits[82] = t83;
  traits[83] = t84;
  traits[84] = t85;
  traits[85] = t86;
  traits[86] = t87;
  traits[87] = t88;
  traits[88] = t89;
  traits[89] = t90;

  document.querySelector("#trait-text-area").value += traits[trait];
}

//****************************************************
// Function: selectLegendaryTraits
//
// Purpose: To roll a random number, load each trait into a single variable
// and then load that variable into a static array. A trait is outputed depending on the number rolled.
//
// Update Information
// ------------------
//
// Name: Blonk
// Date: 8/29/2023
// Description: Add Comment
//
//****************************************************
function selectLegendaryTraits() {
  trait = Math.floor(Math.random() * 13) - 1;

  t1 =
    "\n1. Time Lord: The user always goes first in Initiative, and may pause time for a number of rounds up to double their Star Rating as a free action. The cooldown is equal to the number of rounds in which they paused time. They may instead expend rounds to reverse the state of themselves or another target one round per two rounds of Time Stop expended, with the normal cooldown.\n";
  t2 =
    "\n2. Equalizer: No attack may have dice higher than the user's Active Defense. No target may have higher Durability than the user. No target may have a pool higher than the user's in any form of contested dice roll.\n";
  t3 =
    "\n3. Unstoppable: The target multiplies their Durability by 4, gains Regeneration per round equal to their Star Rating, and doubles any two physical stats compared to the average for their Star Rating.\n";
  t4 =
    "\n4. Tulpae: The user's Charisma, Willpower, and Intelligence all become Primary Stats if they weren't already, and Mentalist becomes a primary skill. The user is inhabiting a body not their own, and upon being slain or as a full-round action may infect the mind of a creature within their Star Rating x 5 Feet, making contested Mentalist vs Mentalist, or Mentalist vs Willpower/Charisma if the target doesn't have Mentalist, attacks with DT equal to double their Star Rating to attempt to take over. If a target is killed by SL damage, the user now owns their body and may use all their physical stats and skills.\n";
  t5 =
    "\n5. Primordial: The user gains access to an attack with DT equal to 4xStar Rating that is Heavy. This attack may either be an AoE that hits everything (5xStar Rating(x5 feet)) around the user or a line that is (2xStar Rating(x5 feet)) wide and (10xStar Rating(x5 feet)) long. This ability may have specific abilities as per Elemental Fury, at GM discretion. However, those abilities have their DC doubled.\n";
  t6 =
    "\n6. Warp: The user may, up to three times per Star Rating per round, move any number of creatures or objects up to their Star Rating a distance equal to (10xStar Rating(x5 feet)) in any direction as a free action. They may increase this by a factor of one hundred by changing it to a full-round action.\n";
  t7 =
    "\n7. Spectral: The user may freely shift to being completely intangible for up to Star Rating rounds, with a cooldown equal to the number of rounds they were intangible. While intangible they are almost completely immune to any attacks that would target HL, and have complete Protect & Durability ignore on any melee attacks they make.\n";
  t8 =
    "\n8. Literally, Straight Up Immortal: The user returns to full HL and MP every 5-Star Rating rounds, minimum 1, no matter what. This also extends to any other resource pool they possess.\n";
  t9 =
    "\n9. Yeah, That Geist: The user can freely duplicate the powers of any target they have seen, with identical dice pools and other effects, limitlessly. This includes Passive effects, but they may only have a number of different powers equal to their Star Rating copied at once.\n";
  t10 =
    "\n10. Just A Man, After All: No power effect is capable of harming or even affecting the user. Additionally, upon physical contact with them any and every power, Passive or Active, completely shuts off for a number of rounds equal to their Star Rating.\n";
  t11 =
    "\n11. Fucking Speedsters: The user gains access to the Speed Conditional as a Problem Stat, increasing in priority by each time it is rolled up to a maximum of being a Secondary Stat. (This Trait is exclusive to Shanks, Duelists, and Tricksters.)\n";
  t12 =
    "\n12. Elastic Man: The nemesis' body is rubbery in nature, giving them equalized Durability across their body and Reach to all melee attacks equal to their Agility. They are immune to physical damage but being hit by ice attacks removes all the benefits of this trait and halves their Durability for 10 - Star Rating rounds.\n";
  t13 =
    "\n13. The Weight of Your Sins: This Nemesis may, as an action, cause an individual to suffer one point of Extreme HP damage for each sapient being they have slain in their lifetime. Every point of HL damage past what is required to kill an individual adds a Splash Rating of 5.\n";
  t14 =
    "\n14. Dark Ritual: The user is in possession of the Mana Stat, treated as if it were a Primary. Their Mana pool restores 50% of itself every turn and automatically succeeds all casting checks as needed as they tap into otherworldly powers.\n";

  const traits = [];
  traits[0] = t1;
  traits[1] = t2;
  traits[2] = t3;
  traits[3] = t4;
  traits[4] = t5;
  traits[5] = t6;
  traits[6] = t7;
  traits[7] = t8;
  traits[8] = t9;
  traits[9] = t10;
  traits[10] = t11;
  traits[11] = t12;
  traits[12] = t13;
  traits[13] = t14;

  document.querySelector("#trait-text-area").value += traits[trait];
}

//****************************************************
// Function: copyStats
//
// Purpose: Copy Star Rating, Race, Power Level, 
// Archetype, Stats, and every text field upon button press.
//
// Update Information
// ------------------
//
// Name: Blonk
// Date: 8/29/2023
// Description: Add Comment & Included Racial Traits Section
//
//****************************************************
function copyStats() {
  let msg = "";
  msg += `${document.getElementById("stars").value} Star\n`;
  msg += `${document.getElementById("race").value}\n`;
  msg += `Power Level: ${document.getElementById("lv").innerText}\n`;
  msg += `${document.getElementById("archetype").value}\n\n`;

  msg += `Strength: ${document.getElementById("str").innerText}\n`;
  msg += `Stamina: ${document.getElementById("sta").innerText}\n`;
  msg += `Agility: ${document.getElementById("agi").innerText}\n`;
  msg += `Durability: ${document.getElementById("dur").innerText}\n`;
  msg += `Health: ${document.getElementById("hea").innerText}\n`;
  msg += `Perception: ${document.getElementById("per").innerText}\n`;
  msg += `Intellect: ${document.getElementById("int").innerText}\n`;
  msg += `Willpower: ${document.getElementById("wil").innerText}\n`;
  msg += `Charisma: ${document.getElementById("cha").innerText}\n`;

  msg += `\nSkills:\n`;
  msg += `${document.getElementById("skillca-num").innerText}\n`;
  msg += `${document.getElementById("skills-text-area").value}\n`;

  msg += `\nEquipment:\n`;
  msg += `${document.getElementById("equipment-text-area").value}\n`;

  msg += `\nAbilities:\n`;
  msg += `${document.getElementById("trait-text-area").value}\n`;

  msg += `Racial Traits:\n`;
  msg += `${document.getElementById("racial-trait-text-area").value}`;


  navigator.clipboard.writeText(msg);
}
