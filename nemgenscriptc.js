$(document).ready(function () {
  $("#physiologies").on("change", function () {
    var a = this.value;

    switch (a) {
      case "Quadruped(Bulk)":
        $("#c-skills").val(
          "Primary Skills: Serenity, Unarmed Combat\nSecondary Skills: Investigation, Threaten");
        $("#crtrait-text-area").val(
          "These creatures have +2 Durability and may use Strength for movement. And should their Unarmed Combat attacks breach the Protection rating of armor, the full attack will be considered as Fall Damage for the purpose of applying to both the armor and the target.\n"
        );

        break;

      case "Quadruped(Lithe)":
        $("#crtrait-text-area").val(
          "These creatures have one of the following two abilities: If they're pack hunters, they may hold actions to reduce the t of another pack member’s attack, this stacks only once. Otherwise, they may Stealth mid-combat, and attacks from Stealth always qualify as Assassinations.\n"
        );
        $("#c-skills").val(
          "Primary Skills: Stealth, Investigation, Unarmed Combat\nSecondary Skills: Serenity, Knowledge, Knowledge: Exploration"
        );

        break;

      case "Avian":

        $("#crtrait-text-area").val(
          "Birds have a base Fly speed calculated by the highest of their Dexterity or Strength scores, and may grapple targets without losing Active Defense. Pick em' up and drop 'em.\n"
        );

        $("#c-skills").val(
          "Primary Skills: Fly, Unarmed Combat, Investigation\nSecondary Skills: Stealth, Serenity"
        );

        break;

      case "Insectoid":

        $("#crtrait-text-area").val(
          "Insectoids are... just the worst, for most people. They require a Serenity check with a DC of Star Rating upon being first seen by an individual to not become Terrified for the first round of combat. Additionally, Insectoids have +1 Durability and Plating equal to half their Star Rating, minimum 1.\n"
        );

        $("#c-skills").val(
          "Primary Skills: Unarmed Combat, Unarmed Combat: Mandibles\nSecondary Skills: Acrobatics, Stealth, Serenity"
        );

        break;

      default:

    }
  });

  $("#stars-creature").on("change", function () {
    var a = this.value;

    var exemplary = 0;
    var primary = 0;
    var secondary = 0;
    var unmodified = 0;
    var problem = 0;

    var b = $("#physiologies").find(":selected").text();

    switch (a) {
      case "1":
        exemplary = 5;
        primary = 3;
        secondary = 2;
        unmodified = 1;
        problem = 1;

        $("#cskillca-num").text("2 Novice, 2 Journeyman");
        break;

      case "2":
        exemplary = 7;
        primary = 5;
        secondary = 3;
        unmodified = 2;
        problem = 1;

        $("#cskillca-num").text("3 Novice, 2 Journeyman");
        break;

      case "3":
        exemplary = 9;
        primary = 7;
        secondary = 4;
        unmodified = 3;
        problem = 2;

        $("#cskillca-num").text("4 Novice, 2 Journeyman, 1 Adept");
        break;

      case "4":
        exemplary = 11;
        primary = 9;
        secondary = 5;
        unmodified = 4;
        problem = 3;

        $("#cskillca-num").text("5 Novice, 3 Journeyman, 1 Adept");
        break;

      case "5":
        exemplary = 14;
        primary = 12;
        secondary = 7;
        unmodified = 5;
        problem = 4;

        $("#cskillca-num").text("6 Novice, 4 Journeyman, 2 Adept or 1 Expert");
        break;

      default:
    }

    switch (b) {
      case "Quadruped(Bulk)":
        $("#cstr").text(primary);
        $("#csta").text(problem);
        $("#cagi").text(problem);
        $("#cdur").text("2");
        $("#chea").text(primary);
        $("#cper").text(unmodified);
        $("#cint").text(unmodified);
        $("#cwil").text(secondary);
        $("#ccha").text(secondary);

        break;

      case "Quadruped(Lithe)":
        $("#cstr").text(secondary);
        $("#csta").text(secondary);
        $("#cagi").text(primary);
        $("#cdur").text("2");
        $("#chea").text(secondary);
        $("#cper").text(primary);
        $("#cint").text(unmodified);
        $("#cwil").text(problem);
        $("#ccha").text(unmodified);

        break;

      case "Avian":
        $("#cstr").text(primary);
        $("#csta").text(unmodified);
        $("#cagi").text(primary);
        $("#cdur").text("2");
        $("#chea").text(problem);
        $("#cper").text(primary);
        $("#cint").text(unmodified);
        $("#cwil").text(secondary);
        $("#ccha").text(secondary);

        break;

      case "Insectoid":
        $("#cstr").text(primary + `/` + secondary);
        $("#csta").text(primary);
        $("#cagi").text(primary + `/` + secondary);
        $("#cdur").text("2");
        $("#chea").text(primary);
        $("#cper").text(unmodified);
        $("#cint").text(problem);
        $("#cwil").text(secondary);
        $("#ccha").text(unmodified);

        break;
    }
  });

});

function crmiscConditions() {

  switch (document.querySelector("#stars-creature").value) {
    case "1":
      document.querySelector("#cnumt").innerText = "1-2";
      document.querySelector("#clv").innerText = "Street(ie12)";
      break;

    case "2":
      document.querySelector("#cnumt").innerText = "3-4";
      document.querySelector("#clv").innerText = "Street(ie12)";
      break;

    case "3":
      document.querySelector("#cnumt").innerText = "6-8";
      document.querySelector("#clv").innerText = "Street(ie12)";
      break;

    case "4":
      document.querySelector("#cnumt").innerText = "10-12";
      document.querySelector("#clv").innerText = "Adventurer(ie10)";
      break;

    case "5":
      document.querySelector("#cnumt").innerText = "12+";
      document.querySelector("#clv").innerText = "Spandex(ie8)";
      break;

    default:

  }
}

//TRAITS
function selectCrTraits() {
  trait = Math.floor(Math.random() * 23) - 1;

  t1 =
    "\n1- Destructive Blood: The user gains access to Innate Attack as a Tertiary Skill that scales off Endurance, and makes an Innate Attack with Medium DT 5+Star Rating any time they take slashing or piercing damage. This may be selected up to twice, the second time increasing the user's effective Star Rating for this attack by one.\n";
  t2 =
    "\n2- Doppelganger: The user may split their HL in half to create an identical clone of themselves and their equipment by using all their base actions. Each additional time this is rolled both themselves and the clone may split one additional time, with no maximum.\n";
  t3 =
    "\n3- Blink: The user gains access to the Disorientation skill, calculated at half normal for Teleportation, and the ability to use BAMF as per the power. If this ability is gained a second time Disorientation is instead calculated as normal.\n";
  t4 =
    "\n4- Elemental Fury: The user gains immunity to a single energy type on the Blaster Table, and access to the stat corresponding to that energy type as a Problem Stat. They may add this stat to any attack and in doing so additionally inflict the Blaster Effect of that given element on their attack, with any DC changing to be equal to double their Star Rating and any DoT changing to be equal to their Star Rating. Each time this is rolled the user may choose to either gain a second element, increase the priority of an Elemental Stat by one, or increase their Star Rating by one for purposes of DCs and DoT with a single element.\n";
  t5 =
    "\n5- Walking Tank: The user's Durability is uncapped if it wasn't already, and they gain Kinetic or Energy Resistance equal to their Star Rating.\n";
  t6 =
    "\n6- As I Live And Breathe, The Wolverine: The user gains access to the Healing Factor stat as a Problem Stat, and each time they gain this ability they may raise it in Stat priority once, up to a Primary Stat.\n";
  t7 =
    "\n7- Golem: The user increases Strength & Health by 1, Durability is considered Tough(4 Passive Defense as their skin is stony), and Converts Health into Weight. Every time this trait is taken, the user’s PD is increased by 2, capping out at 8.\n";
  t8 =
    "\n8- Sneaky Bugger: The user gains access to Stealth as a Secondary Skill if they did not already have it, and any attack from stealth halves the threshold for inflicting the Bleeding condition. This does not stack with called shots.\n";
  t9 =
    "\n9- Blind Bruiser: The user is blind, and thus cannot read or determine color, but is also immune to Eye Shots and any effect that requires sight.\n";
  t10 =
    "\n10- Void Spirit: The user is some form of Void Spirit, and reforms within 10-Star Rating resets when killed unless slain by esoteric means or SL damage.\n";

  t11 =
    "\n11- Reckless Abandon: The user may halve any Active Defense they possess for a round in order to gain the ability to split an attack dice pool in two to make two attacks at once. This stacks with all other forms of multiattack.\n";
  t12 =
    "\n12- Cautious: The user has at least half AD at all times unless physically held down.\n";
  t13 =
    "\n13- Gigantism - The creature is considered two size categories larger than it normally is, capping out at Gigantic.\n";
  t14 =
    "\n14- Keen Hunter - The creature's Senses stat is moved up to Primary priority and increases to the next Star Rating above their current one if it already is. The creature is impossible to sneak up on within a radius equal to Senses x2 feet as it hears heartbeats and feels disturbances in the air.\n";
  t15 =
    "\n15- Beyond Infrasonic Roar - The creature gains access to Mentalist as a secondary skill and may make a Mentalist attack with DT equal to four plus their Star Rating that is Light as they let loose a mighty roar against targets that are within 50 feet of it.\n";
  t16 =
    "\n16- Killer Instinct - The creature has all called shots they make reduced by one target value.\n";
  t17 =
    "\n17- Like A Lizard's Tail - The creature can forgo rolling counter grapple, instead sacrificing a limb to escape one as a free action.\n";
  t18 =
    "\n18- Shadowborn: The user can meld with shadows, increasing the T of all attacks made against them by 1 whenever they're covered in darkness, and gain access to the Disorientation conditional at half effectiveness with the ability to teleport to shadows they can see.\n";
  t19 =
    "\n19- Achilles' Heel: The user gains bonus Durability equal to Star Rating until a GM determined body part or object is damaged. This spot should be obvious, such as being a body wound, covered in more armor, and such, due to the part/item having completely no passive defense that cannot be remedied by any effects.\n";
  t20 =
    "\n20- Army of Me: The creature gains an army of 1 star versions of themselves equal to their actual Star ratingx10. They additionally get a priority increase to their charisma and strength stats, or their effective Star Rating for calculating it by one each if they're already Primary.\n";
  t21 =
    "\n21- Slimy Fellow: The creature has been affected by some effect that made their body become ooze-like. This halves all physical damage after Durability and they can move under, through, or around objects that aren't sealed.\n";
  t22 =
    "\n22- Scary Motherfucker: The Nemesis' threaten skill goes up a priority, and if they haven't gotten the skill, it is unlocked as tertiary. When using threaten as a skill they gain a minus 2 to their t. When attacking, they can use Threaten against an opponent's Serenity. Upon success, they take out as many of the opponent's AD dice as they have skill ranks in Threaten.\n";
  t23 =
    "\n23- Neurotoxin: The nemesis has their unnatural weapons and bodily fluids coated in a potent toxin. Upon dealing HL damage to a target, a Endurance or Medicine check must be made with a DC equal to 2 their Star Rating that stacks with each hit up to 4 times. This toxin causes 1dStarRating damage per round until the target hits -Max HL or they pass the DC. The DC goes down by 1 every time a target meets the resist DC.\n";

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

  document.querySelector("#crtrait-text-area").value += traits[trait];

}

//LEGENDARY TRAITS
function selectCrLegendaryTraits() {
  trait = Math.floor(Math.random() * 13) - 1;

  t1 =
    "1. Time Lord: The user always goes first in Initiative, and may pause time for a number of rounds up to double their Star Rating as a free action. The cooldown is equal to the number of rounds in which they paused time. They may instead expend rounds to reverse the state of themselves or another target one round per two rounds of Time Stop expended, with the normal cooldown.\n";
  t2 =
    "2. Equalizer: No attack may have dice higher than the user's Active Defense. No target may have higher Durability than the user. No target may have a pool higher than the user's in any form of contested dice roll.\n";
  t3 =
    "3. Unstoppable: The target multiplies their Durability by 4, gains Regeneration per round equal to their Star Rating, and doubles any two physical stats compared to the average for their Star Rating.\n";
  t4 =
    "4. Tulpae: The user's Charisma, Willpower, and Intelligence all become Primary Stats if they weren't already, and Mentalist becomes a primary skill. The user is inhabiting a body not their own, and upon being slain or as a full-round action may infect the mind of a creature within their Star Rating x 5 Feet, making contested Mentalist vs Mentalist, or Mentalist vs Willpower/Charisma if the target doesn't have Mentalist, attacks with DT equal to double their Star Rating to attempt to take over. If a target is killed by SL damage, the user now owns their body and may use all their physical stats and skills.\n";
  t5 =
    "5. Primordial: The user gains access to an attack with DT equal to 4xStar Rating that is Heavy. This attack may either be an AoE that hits everything (5xStar Rating(x5 feet)) around the user or a line that is (2xStar Rating(x5 feet)) wide and (10xStar Rating(x5 feet)) long. This ability may have specific abilities as per Elemental Fury, at GM discretion. However, those abilities have their DC doubled.\n";
  t6 =
    "6. Warp: The user may, up to three times per Star Rating per round, move any number of creatures or objects up to their Star Rating a distance equal to (10xStar Rating(x5 feet)) in any direction as a free action. They may increase this by a factor of one hundred by changing it to a full-round action.\n";
  t7 =
    "7. Spectral: The user may freely shift to being completely intangible for up to Star Rating rounds, with a cooldown equal to the number of rounds they were intangible. While intangible they are almost completely immune to any attacks that would target HL, and have complete Protect & Durability ignore on any melee attacks they make.\n";
  t8 =
    "8. Literally, Straight Up Immortal: The user returns to full HL and MP every 5-Star Rating rounds, minimum 1, no matter what. This also extends to any other resource pool they possess.\n";
  t9 =
    "9. Yeah, That Geist: The user can freely duplicate the powers of any target they have seen, with identical dice pools and other effects, limitlessly. This includes Passive effects, but they may only have a number of different powers equal to their Star Rating copied at once.\n";
  t10 =
    "10. Just A Man, After All: No power effect is capable of harming or even affecting the user. Additionally, upon physical contact with them any and every power, Passive or Active, completely shuts off for a number of rounds equal to their Star Rating.\n";
  t11 =
    "11. Fucking Speedsters: The user gains access to the Speed Conditional as a Problem Stat, increasing in priority by each time it is rolled up to a maximum of being a Secondary Stat. (This Trait is exclusive to Shanks, Duelists, and Tricksters.)\n";
  t12 =
    "12- Kaiju - The creature's stats remain the same but their size is increased to Titanic.\n";

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

  document.querySelector("#crtrait-text-area").value += traits[trait];
}

function copycrPage() {
  let msg = "";

  msg += `${document.getElementById("stars-creature").value} Star\n`;
  msg += `Power Level: ${document.getElementById("clv").innerText}\n`;
  msg += `${document.getElementById("physiologies").value}\n\n`;

  msg += `Strength: ${document.getElementById("cstr").innerText}\n`; // \n will signify a new line
  msg += `Stamina: ${document.getElementById("csta").innerText}\n`;
  msg += `Agility: ${document.getElementById("cagi").innerText}\n`;
  msg += `Durability: ${document.getElementById("cdur").innerText}\n`;
  msg += `Health: ${document.getElementById("chea").innerText}\n`;
  msg += `Perception: ${document.getElementById("cper").innerText}\n`;
  msg += `Intellect: ${document.getElementById("cint").innerText}\n`;
  msg += `Willpower: ${document.getElementById("cwil").innerText}\n`;
  msg += `Charisma: ${document.getElementById("ccha").innerText}\n`;

  msg += `\nSkills:\n`;
  msg += `Skill Tiers - ${document.getElementById("cskillca-num").innerText}\n`;
  msg += `${document.getElementById("c-skills").value}\n`;
  msg += `\nAbilities:\n`;
  msg += `${document.getElementById("crtrait-text-area").value}`;

  navigator.clipboard.writeText(msg);
}
