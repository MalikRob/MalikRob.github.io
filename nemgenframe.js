$(document).ready(function () {
  $("#archetype").on("change", function () {
    var a = this.value;

    switch (a) {
      case "Bulwark":
        $("#skillra-num").text("7");
        $("#skills-text-area").val(
          "Primary Skills: Serenity \nSecondary Skills: Polearms, Long Guns \nTertiary Skills: Investigation"
        );
        $("#trait-text-area").val(
          "Bulwarks can wield two-handed weapons with a shield, though not with another weapon."
        );

        break;

      case "Berserker":
        $("#skillra-num").text("6");
        $("#trait-text-area").val(
          "Berserkers may ignore Stagger unless they are instantly Taken Out for a number of rounds equal to their Charisma."
        );
        $("#skills-text-area").val(
          "Primary Skills: Blunts, Blades, Unarmed Combat \nSecondary Skills: Threaten, Investigation, Serenity \nTertiary Skills: Acrobatics, Athletics"
        );

        break;

      case "Trickster":
        $("#skillra-num").text("10");

        $("#trait-text-area").val(
          "Tricksters may add their Intellect or Charisma to the attack dice of any creature, machine, or other entity under their command. They may also add their Lie or Convince skills to Active Defense. They also gain access to the 'Trickster Specialty' category when rolling for Traits."
        );

        $("#skills-text-area").val(
          "Primary Skills: Investigation, Convince \nSecondary Skills: Small Guns, Blades \nTertiary Skills: All Non-Combat"
        );

        break;

      case "Duelist":
        $("#skillra-num").text("8");

        $("#trait-text-area").val(
          "Each round a Duelist is in direct combat with a target after the first, they permanently get 10% higher dice pools against that target for all combat related checks, up to a 100% bonus. This bonus never fades on its own, but all dice pool bonuses count towards the same cap. (10% against 10 different people, 20 against 5, etc)"
        );

        $("#skills-text-area").val(
          "Primary Skills: Polearms/Blades, Small Guns \nSecondary Skills: Serenity, Stealth, Convince, Athletics \nTertiary Skills: Craft, Pilot, Knowledge"
        );

        break;

      case "Shank":
        $("#skillra-num").text("8");

        $("#trait-text-area").val(
          "Shanks gain doubled stealth bonuses from cover of all kinds, and may Stealth as a move or standard action mid-combat."
        );

        $("#skills-text-area").val(
          "Primary Skills: Blades, Small Guns, Stealth \nSecondary Skills: Convince, Acrobatics, Investigation, Athletics \nTertiary Skills: Knowledge, Lie"
        );

        break;

      case "Ranger":
        $("#skillra-num").text("Special");

        $("#trait-text-area").val(
          "Rangers have access to a pool of 20 Skill Points they can, as a move action, assign anywhere. Rangers may not assign more Skill Points to a single skill than twice their Star Rating and gain half as many extra Skill Ranks per Star Rating above the first."
        );

        $("#skills-text-area").val("Special, See Traits");

        break;

      case "Marksman":
        $("#skillra-num").text("8");

        $("#trait-text-area").val(
          "Marksmen may double the effectiveness of the Aimed tag and ignore the Heavy rating for weapons that have been Aimed."
        );

        $("#skills-text-area").val(
          "Primary Skills: Long Guns, Heavy Guns, Investigation \nSecondary Skills: Serenity, Stealth \nTertiary Skills: Lie, Acrobatics"
        );

        break;

      case "Speedster":
        $("#skillra-num").text("6");

        $("#trait-text-area").val(
          "Speedsters may use Speed for Unarmed Combat and add half of it to Strength for DT purposes. They also use Speed for Initiative."
        );

        $("#skills-text-area").val(
          "Primary: Blades, Unarmed Combat \nSecondary: Investigation, Serenity, Acrobatics \nTertiary: Stealth"
        );

        break;

      case "Blaster":
        $("#skillra-num").text("6");

        $("#trait-text-area").val(
          "Blasters gain access to an Elemental Stat and the abilities that come from that. They have 2 Ability Points, doubling for every Star Rating, to spread between powers. They also unlock Innate Attack."
        );

        $("#skills-text-area").val(
          "Primary Skills: Innate Attack, Investigation \nSecondary Skills: Serenity, Insight \nTertiary Skills: Stealth"
        );

        break;

      case "Brute":
        $("#skillra-num").text("6");

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
        exemplary = 3;
        primary = 2;
        secondary = 1;
        unmodified = 1;
        problem = 1;

        $("#skillca-num").text("1");
        break;

      case "2":
        exemplary = 9;
        primary = 6;
        secondary = 4;
        unmodified = 3;
        problem = 2;

        $("#skillca-num").text("2");
        break;

      case "3":
        exemplary = 21;
        primary = 14;
        secondary = 9;
        unmodified = 7;
        problem = 3;

        $("#skillca-num").text("3");
        break;

      case "4":
        exemplary = 27;
        primary = 18;
        secondary = 12;
        unmodified = 9;
        problem = 4;

        $("#skillca-num").text("4");
        break;

      case "5":
        exemplary = 39;
        primary = 26;
        secondary = 17;
        unmodified = 14;
        problem = 5;

        $("#skillca-num").text("5");
        break;

      case "6":
        exemplary = 51;
        primary = 34;
        secondary = 23;
        unmodified = 18;
        problem = 7;

        $("#skillca-num").text("6");
        break;

      case "7":
        exemplary = 66;
        primary = 44;
        secondary = 30;
        unmodified = 23;
        problem = 9;

        $("#skillca-num").text("7");
        break;

      default:

    }

    switch (b) {
      case "Bulwark":
        $("#str").text(secondary);
        $("#spd").text(unmodified);
        $("#dex").text(problem);
        $("#dur").text("2");
        $("#end").text(primary);
        $("#sen").text(secondary);
        $("#int").text(unmodified);
        $("#wil").text(primary);
        $("#cha").text(unmodified);

        break;

      case "Berserker":
        $("#str").text(primary);
        $("#spd").text(primary);
        $("#dex").text(unmodified);
        $("#dur").text("2");
        $("#end").text(secondary);
        $("#sen").text(unmodified);
        $("#int").text(problem);
        $("#wil").text(unmodified);
        $("#cha").text(secondary);

        break;

      case "Trickster":
        $("#str").text(unmodified);
        $("#spd").text(unmodified);
        $("#dex").text(secondary);
        $("#dur").text("2");
        $("#end").text(problem);
        $("#sen").text(secondary);
        $("#int").text(primary);
        $("#wil").text(primary);
        $("#cha").text(primary);

        break;

      case "Duelist":
        $("#str").text(problem);
        $("#spd").text(primary);
        $("#dex").text(primary);
        $("#dur").text("2");
        $("#end").text(secondary);
        $("#sen").text(secondary);
        $("#int").text(secondary);
        $("#wil").text(unmodified);
        $("#cha").text(secondary);

        break;

      case "Shank":
        $("#str").text(unmodified);
        $("#spd").text(secondary);
        $("#dex").text(primary);
        $("#dur").text("2");
        $("#end").text(problem);
        $("#sen").text(primary);
        $("#int").text(unmodified);
        $("#wil").text(secondary);
        $("#cha").text(secondary);

        break;

      case "Ranger":
        $("#str").text(secondary);
        $("#spd").text(secondary);
        $("#dex").text(secondary);
        $("#dur").text("2");
        $("#end").text(secondary);
        $("#sen").text(secondary);
        $("#int").text(secondary);
        $("#wil").text(secondary);
        $("#cha").text(secondary);

        $("#skillra-num").text("Special");

        $("#skillca-num").text("Special");

        break;

      case "Marksman":
        $("#str").text(problem);
        $("#spd").text(unmodified);
        $("#dex").text(primary);
        $("#dur").text("2");
        $("#end").text(unmodified);
        $("#sen").text(primary);
        $("#int").text(secondary);
        $("#wil").text(secondary);
        $("#cha").text(unmodified);

        break;

      case "Speedster":
        $("#str").text(problem);
        $("#spd").text(exemplary);
        $("#dex").text(secondary);
        $("#dur").text("2");
        $("#end").text(problem);
        $("#sen").text(secondary);
        $("#int").text(unmodified);
        $("#wil").text(unmodified);
        $("#cha").text(unmodified);

        break;

      case "Blaster":
        $("#str").text(unmodified);
        $("#spd").text(secondary);
        $("#dex").text(secondary);
        $("#dur").text("2");
        $("#end").text(problem);
        $("#sen").text(primary);
        $("#int").text(secondary);
        $("#wil").text(unmodified);
        $("#cha").text(unmodified);

        break;

      case "Brute":
        $("#str").text(primary);
        $("#spd").text(secondary);
        $("#dex").text(unmodified);
        $("#dur").text("2");
        $("#end").text(primary);
        $("#sen").text(problem);
        $("#int").text(problem);
        $("#wil").text(secondary);
        $("#cha").text(secondary);

        break;

      default:

    }
  });

});

function miscConditions() {

  switch (document.querySelector("#stars").value) {
    case "1":
      document.querySelector("#numt").innerText = "1";
      document.querySelector("#lv").innerText = "Street(ie12)";
      break;

    case "2":
      document.querySelector("#numt").innerText = "2";
      document.querySelector("#lv").innerText = "Street(ie12)";
      break;

    case "3":
      document.querySelector("#numt").innerText = "4";
      document.querySelector("#lv").innerText = "Street(ie12)";
      break;

    case "4":
      document.querySelector("#numt").innerText = "6";
      document.querySelector("#lv").innerText = "Adventurer(ie10)";
      break;

    case "5":
      document.querySelector("#numt").innerText = "8";
      document.querySelector("#lv").innerText = "Spandex(ie8)";
      break;

    case "6":
      document.querySelector("#numt").innerText = "14";
      document.querySelector("#lv").innerText = "Cosmic(ie6)";
      break;

    case "7":
      document.querySelector("#numt").innerText = "14";
      document.querySelector("#lv").innerText = "Cosmic(ie6)";
      break;

    default:

  }
}

async function accessRaceDoc() {

  const url1 = 'https://malikrob.github.io/testload.txt'
  const response = await fetch(url1);
  const data = await response.text();
  console.log(data);
}

//TRAITS
function selectTraits() {
  trait = Math.floor(Math.random() * 74) + 1;

  t1 =
    "\n1- Posse: The user is surrounded with a number of Mercenaries two Star Ratings below them equal to their own Star Rating, with a minimum Star Rating of 1. This may be rolled up to three times, each time after the first increasing the Star Rating of the posse by one.\n";
  t2 =
    "\n2- Shard Addict: The user is in possession of a number of Orange or Yellow Shards equal to double their Star Rating, which can be in any combination of sizes, maximum Small. Each time this ability is selected, the user may either double the amount of Shards they have or increase their color rarity by 1.\n";
  t3 =
    "\n3- Gun Nut: The user increases their Star Rating for purposes of calculating a single Firearms Primary or Secondary Specialty skill by one, and may select Variant Firearms rather than standard ones if they so wish. This ability may be rolled multiple times, each time applying to a different Firearms Specialty.\n";
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
    "\n23-Airborne: The user gains a Flight speed equal to the higher priority of their Dexterity or Willpower stats, with ties going to Dexterity. They additionally gain access to Fly as a Tertiary Skill, and may add it to their Active Defense while flying.\n";
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
    "\n29- Bestial Brute: The user gains access to Unnatural Weapon as a Secondary Skill and increases one of Strength, Dexterity, Endurance, or Senses by one in terms of stat priority, to a maximum of Primary. This trait also increase Durability by a flat 2.\n";
  t30 =
    "\n30- Golem: The user increases their Strength and Endurance Stat Priority by one each, or their effective Star Rating for calculating it by one each if they're already Primary Stats. This trait also increases Durability by 2 and turns it into Material Quality.\n";

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
    "\n41- WHY DID IT HAVE TO BE FUCKING SUPERMAN? The user is a hybrid Sunblood Eternal, and cannot select any other power-based or magic-based Traits, but they have 200 Charge per Star Rating they possess and the normal Eternal milestones for reaching them.\n";
  t42 =
    "\n42- The Big Guns: The user's main weapon, should it be two-handed, counts as Large for purposes of dealing damage.\n";
  t43 =
    "\n43- Oh Great, A Flesh Slime: The user is considered Uplifted, gaining their racial traits.\n";
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
    "\n62- Riftwoken: The user has been touched by the void gaining the Voidwalkers Out of touch ability, a mana stat of 2 and gets 1d3 extra rounds of duration on shard usage, suffers 25% less from the consequences of shard abuse, and ????.\n";
  t63 =
    "\n63 - Were-Something: This Nemesis is a Lycanthrope of some sort, moving their Primary stats up by 1 star and giving them doubled Durability against non Silvered/Holy attacks.\n";
  t64 =
    "\n64 - Braaaaains...: The Nemesis counts as Undead, their t does not increase while Staggered unless they take damage and they may make a free Unarmed Combat attack on a successful grapple, gaining 1HL for every 2 points of HL damage dealt to an enemy. Due to their undead nature however, the Nemesis has no durability to Fire and gains +2T on all social checks save for Threaten, which gains -1T.\n";
  t65 =
    "\n65- Shadowborn: The user can meld with shadows, increasing the T of all attacks made against them by 1 whenever they're covered in darkness, and gain access to the Disorientation conditional at half effectiveness with the ability to teleport to shadows they can see.\n";
  t66 =
    "\n66- POCKET SAND: The Nemesis gains access to the Dirty Tricks variant style as a Primary Skill, moving their Convince and Lie skills to Secondary if they weren't already and to Primary if they were already Secondary.\n";
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
    "\n72- Smoke Bomb!: The nemesis has access to a smoke-bomb in case they need to escape. Activating it is a main action that fills the area around them, Splash equal to x2 Star Rating, and gives them Full Cover and the ability to roll Stealth while in combat for 2d2 rounds.\n";
  t73 =
    "\n73- Neurotoxin: The nemesis has their melee weapons and ammo coated in a potent toxin. Upon dealing HL damage to a target, an Endurance or First Aid check must be made with a DC equal to x2 their Star Rating that stacks with each hit up to 4 times. This toxin causes 1dStarRating damage per round until the target hits -Max HL or they pass the DC. The DC goes down by 1 every time a target meets the resist DC.  (Trickster Specialty)\n";
  t74 =
    "\n74- Feint: The Nemesis gains Sleight of Hand as a secondary skill and, upon a successful bluff against the target's Insight or Investigation, reduces the target's AD by an amount equal to their ranks in the skill. (Trickster Specialty)\n";

  switch (trait) {
    case 1:
      document.querySelector("#trait-text-area").value += t1;
      break;
    case 2:
      document.querySelector("#trait-text-area").value += t2;
      break;
    case 3:
      document.querySelector("#trait-text-area").value += t3;
      break;
    case 4:
      document.querySelector("#trait-text-area").value += t4;
      break;
    case 5:
      document.querySelector("#trait-text-area").value += t5;
      break;
    case 6:
      document.querySelector("#trait-text-area").value += t6;
      break;
    case 7:
      document.querySelector("#trait-text-area").value += t7;
      break;
    case 8:
      document.querySelector("#trait-text-area").value += t8;
      break;
    case 9:
      document.querySelector("#trait-text-area").value += t9;
      break;
    case 10:
      document.querySelector("#trait-text-area").value += t10;
      break;
    case 11:
      document.querySelector("#trait-text-area").value += t11;
      break;
    case 12:
      document.querySelector("#trait-text-area").value += t12;
      break;
    case 13:
      document.querySelector("#trait-text-area").value += t13;
      break;
    case 14:
      document.querySelector("#trait-text-area").value += t14;
      break;
    case 15:
      document.querySelector("#trait-text-area").value += t15;
      break;
    case 16:
      document.querySelector("#trait-text-area").value += t16;
      break;
    case 17:
      document.querySelector("#trait-text-area").value += t17;
      break;
    case 18:
      document.querySelector("#trait-text-area").value += t18;
      break;
    case 19:
      document.querySelector("#trait-text-area").value += t19;
      break;
    case 20:
      document.querySelector("#trait-text-area").value += t20;
      break;
    case 21:
      document.querySelector("#trait-text-area").value += t21;
      break;
    case 22:
      document.querySelector("#trait-text-area").value += t22;
      break;
    case 23:
      document.querySelector("#trait-text-area").value += t23;
      break;
    case 24:
      document.querySelector("#trait-text-area").value += t24;
      break;
    case 25:
      document.querySelector("#trait-text-area").value += t25;
      break;
    case 26:
      document.querySelector("#trait-text-area").value += t26;
      break;
    case 27:
      document.querySelector("#trait-text-area").value += t27;
      break;
    case 28:
      document.querySelector("#trait-text-area").value += t28;
      break;
    case 29:
      document.querySelector("#trait-text-area").value += t29;
      break;
    case 30:
      document.querySelector("#trait-text-area").value += t30;
      break;
    case 31:
      document.querySelector("#trait-text-area").value += t31;
      break;
    case 32:
      document.querySelector("#trait-text-area").value += t32;
      break;
    case 33:
      document.querySelector("#trait-text-area").value += t33;
      break;
    case 34:
      document.querySelector("#trait-text-area").value += t34;
      break;
    case 35:
      document.querySelector("#trait-text-area").value += t35;
      break;
    case 36:
      document.querySelector("#trait-text-area").value += t36;
      break;
    case 37:
      document.querySelector("#trait-text-area").value += t37;
      break;
    case 38:
      document.querySelector("#trait-text-area").value += t38;
      break;
    case 39:
      document.querySelector("#trait-text-area").value += t39;
      break;
    case 40:
      document.querySelector("#trait-text-area").value += t40;
      break;
    case 41:
      document.querySelector("#trait-text-area").value += t41;
      break;
    case 42:
      document.querySelector("#trait-text-area").value += t42;
      break;
    case 43:
      document.querySelector("#trait-text-area").value += t43;
      break;
    case 44:
      document.querySelector("#trait-text-area").value += t44;
      break;
    case 45:
      document.querySelector("#trait-text-area").value += t45;
      break;
    case 46:
      document.querySelector("#trait-text-area").value += t46;
      break;
    case 47:
      document.querySelector("#trait-text-area").value += t47;
      break;
    case 48:
      document.querySelector("#trait-text-area").value += t48;
      break;
    case 49:
      document.querySelector("#trait-text-area").value += t49;
      break;
    case 50:
      document.querySelector("#trait-text-area").value += t50;
      break;
    case 51:
      document.querySelector("#trait-text-area").value += t51;
      break;
    case 52:
      document.querySelector("#trait-text-area").value += t52;
      break;
    case 53:
      document.querySelector("#trait-text-area").value += t53;
      break;
    case 54:
      document.querySelector("#trait-text-area").value += t54;
      break;
    case 55:
      document.querySelector("#trait-text-area").value += t55;
      break;
    case 56:
      document.querySelector("#trait-text-area").value += t56;
      break;
    case 57:
      document.querySelector("#trait-text-area").value += t57;
      break;
    case 58:
      document.querySelector("#trait-text-area").value += t58;
      break;
    case 59:
      document.querySelector("#trait-text-area").value += t59;
      break;
    case 60:
      document.querySelector("#trait-text-area").value += t60;
      break;
    case 61:
      document.querySelector("#trait-text-area").value += t61;
      break;
    case 62:
      document.querySelector("#trait-text-area").value += t62;
      break;
    case 63:
      document.querySelector("#trait-text-area").value += t63;
      break;
    case 64:
      document.querySelector("#trait-text-area").value += t64;
      break;
    case 65:
      document.querySelector("#trait-text-area").value += t65;
      break;
    case 66:
      document.querySelector("#trait-text-area").value += t66;
      break;
    case 67:
      document.querySelector("#trait-text-area").value += t67;
      break;
    case 68:
      document.querySelector("#trait-text-area").value += t68;
      break;
    case 69:
      document.querySelector("#trait-text-area").value += t69;
      break;
    case 70:
      document.querySelector("#trait-text-area").value += t67;
      break;
    case 71:
      document.querySelector("#trait-text-area").value += t68;
      break;
    case 72:
      document.querySelector("#trait-text-area").value += t69;
      break;
    case 73:
      document.querySelector("#trait-text-area").value += t69;
      break;
    default:
      document.querySelector("#trait-text-area").value += t74;
  }

}

//LEGENDARY TRAITS
function selectLegendaryTraits() {
  trait = Math.floor(Math.random() * 12) + 1;

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
    "\n12. Elastic Man: The nemesis' body is rubbery in nature, giving them equalized Durability across their body and Reach to all melee attacks equal to their Dexterity. They are immune to physical damage but being hit by ice attacks removes all the benefits of this trait and halves their Durability for 10 - Star Rating rounds.\n";

  switch (trait) {
    case 1:
      document.querySelector("#trait-text-area").value += t1;
      break;
    case 2:
      document.querySelector("#trait-text-area").value += t2;
      break;
    case 3:
      document.querySelector("#trait-text-area").value += t3;
      break;
    case 4:
      document.querySelector("#trait-text-area").value += t4;
      break;
    case 5:
      document.querySelector("#trait-text-area").value += t5;
      break;
    case 6:
      document.querySelector("#trait-text-area").value += t6;
      break;
    case 7:
      document.querySelector("#trait-text-area").value += t7;
      break;
    case 8:
      document.querySelector("#trait-text-area").value += t8;
      break;
    case 9:
      document.querySelector("#trait-text-area").value += t9;
      break;
    case 10:
      document.querySelector("#trait-text-area").value += t10;
      break;
    case 11:
      document.querySelector("#trait-text-area").value += t11;
      break;
    default:
      document.querySelector("#trait-text-area").value += t12;
  }
}

function copyStats() {
  let msg = "";
  msg += `${document.getElementById("stars").value} Star\n`;
  msg += `${document.getElementById("race").value}\n`;
  msg += `Power Level: ${document.getElementById("lv").innerText}\n`;
  msg += `${document.getElementById("archetype").value}\n\n`;

  msg += `Strength: ${document.getElementById("str").innerText}\n`; // \n will signify a new line
  msg += `Speed: ${document.getElementById("spd").innerText}\n`;
  msg += `Dexterity: ${document.getElementById("dex").innerText}\n`;
  msg += `Durability: ${document.getElementById("dur").innerText}\n`;
  msg += `Endurance: ${document.getElementById("end").innerText}\n`;
  msg += `Senses: ${document.getElementById("sen").innerText}\n`;
  msg += `Intellect: ${document.getElementById("int").innerText}\n`;
  msg += `Willpower: ${document.getElementById("wil").innerText}\n`;
  msg += `Charisma: ${document.getElementById("cha").innerText}\n`;

  msg += `\nSkills:\n`;
  msg += `Ranks Per Star Rating - ${document.getElementById("skillra-num").innerText}\n`;
  msg += `Rank Cap - ${document.getElementById("skillca-num").innerText}\n`;
  msg += `${document.getElementById("skills-text-area").value}`;
  msg += `\nEquipment:\n`;
  msg += `${document.getElementById("equipment-text-area").value}\n`;

  msg += `Abilities:\n`;
  msg += `${document.getElementById("trait-text-area").value}`;

  navigator.clipboard.writeText(msg);
}
