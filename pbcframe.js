window.onload = function () {

  $(document).on('click', function () {

    let targetprog = parseInt(document.getElementById("total").innerText);

    if (targetprog > 0 && targetprog < 51) {
      document.getElementById("starrating").innerText = 0;
    } else if (targetprog > 50 && targetprog < 101) {
      document.getElementById("starrating").innerText = 1;
    } else if (targetprog > 100 && targetprog < 201) {
      document.getElementById("starrating").innerText = 2;
    } else if (targetprog > 200 && targetprog < 401) {
      document.getElementById("starrating").innerText = 3;
    } else if (targetprog > 400 && targetprog < 801) {
      document.getElementById("starrating").innerText = 4;
    } else if (targetprog > 800 && targetprog < 1601) {
      document.getElementById("starrating").innerText = 5;
    } else if (targetprog > 1600 && targetprog < 3201) {
      document.getElementById("starrating").innerText = 6;
    } else if (targetprog > 3200) {
      document.getElementById("starrating").innerText = 7;
    } else {

    }

  });

  function numAlter(a) {
    switch (a) {
      case 0:
        a = 0;
        break;
      case 1:
        a = 1;
        break;
      case 2:
        a = 3;
        break;
      case 3:
        a = 7;
        break;
      case 4:
        a = 15;
        break;
      case 5:
        a = 31;
        break;
      case 6:
        a = 63;
        break;
      case 7:
        a = 127;
        break;
      case 8:
        a = 227;
        break;
      case 9:
        a = 427;
        break;
      case 10:
        a = 727;
        break;
      case 11:
        a = 1127;
        break;
      case 12:
        a = 1627;
        break;
      case 13:
        a = 2227;
        break;
      case 14:
        a = 2927;
        break;
      case 15:
        a = 3727;
        break;
      case 16:
        a = 4627;
        break;
      case 17:
        a = 5627;
        break;
      case 18:
        a = 6727;
        break;
      case 19:
        a = 7927;
        break;
      case 20:
        a = 9227;
        break;
      default:
        a = 0;
    }

    return a;
  }

  function numAlterF(b) {
    switch (b) {
      case 0:
        b = 0;
        break;
      case 1:
        b = 2;
        break;
      case 2:
        b = 6;
        break;
      case 3:
        b = 14;
        break;
      case 4:
        b = 30;
        break;
      case 5:
        b = 62;
        break;
      case 6:
        a = 126;
        break;
      case 7:
        a = 226;
        break;
      case 8:
        a = 426;
        break;
      case 9:
        a = 726;
        break;
      case 10:
        a = 1126;
        break;
      case 11:
        a = 1626;
        break;
      case 12:
        a = 2226;
        break;
      case 13:
        a = 2926;
        break;
      case 14:
        a = 3726;
        break;
      case 15:
        a = 4626;
        break;
      case 16:
        a = 5626;
        break;
      case 17:
        a = 6726;
        break;
      case 18:
        a = 7926;
        break;
      case 19:
        a = 9226;
        break;
      case 20:
        a = 10626;
        break;
      default:
        b = 0;
    }

    return b;
  }

  document.getElementById("numUp1").onclick = function () { raiseFunction('strnum') };
  document.getElementById("numUp2").onclick = function () { raiseFunction('spdnum') };
  document.getElementById("numUp3").onclick = function () { raiseFunction('dexnum') };
  document.getElementById("numUp5").onclick = function () { raiseFunction('endnum') };
  document.getElementById("numUp6").onclick = function () { raiseFunction('intnum') };
  document.getElementById("numUp7").onclick = function () { raiseFunction('wilnum') };
  document.getElementById("numUp8").onclick = function () { raiseFunction('sennum') };
  document.getElementById("numUp9").onclick = function () { raiseFunction('chanum') };
  document.getElementById("numUp25").onclick = function () { raiseFunction('connum') };
  document.getElementById("numUp26").onclick = function () { raiseFunction('mignum') };
  // The Break Between Stat Arrows
  document.getElementById("numDown1").onclick = function () { lowerFunction('strnum') };
  document.getElementById("numDown2").onclick = function () { lowerFunction('spdnum') };
  document.getElementById("numDown3").onclick = function () { lowerFunction('dexnum') };
  document.getElementById("numDown5").onclick = function () { lowerFunction('endnum') };
  document.getElementById("numDown6").onclick = function () { lowerFunction('intnum') };
  document.getElementById("numDown7").onclick = function () { lowerFunction('wilnum') };
  document.getElementById("numDown8").onclick = function () { lowerFunction('sennum') };
  document.getElementById("numDown9").onclick = function () { lowerFunction('chanum') };
  document.getElementById("numDown25").onclick = function () { lowerFunction('connum') };
  document.getElementById("numDown26").onclick = function () { lowerFunction('mignum') };

  // BIG
  // BREAK

  document.getElementById("numUp10").onclick = function () { raiseFunction('prof1') };
  document.getElementById("numUp11").onclick = function () { raiseFunction('spec1') };
  document.getElementById("numUp12").onclick = function () { raiseFunction('face1') };

  document.getElementById("numUp13").onclick = function () { raiseFunction('prof2') };
  document.getElementById("numUp14").onclick = function () { raiseFunction('spec2') };
  document.getElementById("numUp15").onclick = function () { raiseFunction('face2') };

  document.getElementById("numUp16").onclick = function () { raiseFunction('prof3') };
  document.getElementById("numUp17").onclick = function () { raiseFunction('spec3') };
  document.getElementById("numUp18").onclick = function () { raiseFunction('face3') };

  document.getElementById("numUp19").onclick = function () { raiseFunction('prof4') };
  document.getElementById("numUp20").onclick = function () { raiseFunction('spec4') };
  document.getElementById("numUp21").onclick = function () { raiseFunction('face4') };

  document.getElementById("numUp22").onclick = function () { raiseFunction('prof5') };
  document.getElementById("numUp23").onclick = function () { raiseFunction('spec5') };
  document.getElementById("numUp24").onclick = function () { raiseFunction('face5') };

  document.getElementById("numDown10").onclick = function () { lowerFunction('prof1') };
  document.getElementById("numDown11").onclick = function () { lowerFunction('spec1') };
  document.getElementById("numDown12").onclick = function () { lowerFunction('face1') };

  document.getElementById("numDown13").onclick = function () { lowerFunction('prof2') };
  document.getElementById("numDown14").onclick = function () { lowerFunction('spec2') };
  document.getElementById("numDown15").onclick = function () { lowerFunction('face2') };

  document.getElementById("numDown16").onclick = function () { lowerFunction('prof3') };
  document.getElementById("numDown17").onclick = function () { lowerFunction('spec3') };
  document.getElementById("numDown18").onclick = function () { lowerFunction('face3') };

  document.getElementById("numDown19").onclick = function () { lowerFunction('prof4') };
  document.getElementById("numDown20").onclick = function () { lowerFunction('spec4') };
  document.getElementById("numDown21").onclick = function () { lowerFunction('face4') };

  document.getElementById("numDown22").onclick = function () { lowerFunction('prof5') };
  document.getElementById("numDown23").onclick = function () { lowerFunction('spec5') };
  document.getElementById("numDown24").onclick = function () { lowerFunction('face5') };

  function raiseFunction(abc) {

    var down = 0;

    switch (abc) {
      case 'face1': {

        down = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'face2': {

        down = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'face3': {

        down = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'face4': {

        down = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'face5': {

        down = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'connum': {

        down = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'mignum': {

        down = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      default:
        down = numAlter(parseInt(document.getElementById(abc).value));
        break;
    }

    document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

    document.getElementById(abc).value = parseInt(document.getElementById(abc).value) + 1;

    var up = 0;

    switch (abc) {
      case 'face1': {

        up = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'face2': {

        up = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'face3': {

        up = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'face4': {

        up = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'face5': {

        up = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'connum': {

        up = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'mignum': {

        up = numAlterF(parseInt(document.getElementById(abc).value));

        document.getElementById('durnum').value = parseInt(document.getElementById('durnum').value) + 1;

        break;
      }

      default:
        up = numAlter(parseInt(document.getElementById(abc).value));
        break;
    }

    document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;

    if (parseInt(document.getElementById(abc).value) < 0) {
      document.getElementById(abc).value = 0;
    }

  }

  function lowerFunction(abc) {

    var down = 0;

    switch (abc) {
      case 'face1': {

        down = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'face2': {

        down = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'face3': {

        down = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'face4': {

        down = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'face5': {

        down = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'connum': {

        down = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'mignum': {

        down = numAlterF(parseInt(document.getElementById(abc).value));

        if (parseInt(document.getElementById('durnum').value) > 2) {
          document.getElementById('durnum').value = parseInt(document.getElementById('durnum').value) - 1;
        }

        break;
      }

      default:
        down = numAlter(parseInt(document.getElementById(abc).value));
        break;
    }

    document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

    document.getElementById(abc).value = parseInt(document.getElementById(abc).value) - 1;

    var up = 0;

    switch (abc) {
      case 'face1': {

        up = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'face2': {

        up = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'face3': {

        up = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'face4': {

        up = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'face5': {

        up = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'connum': {

        up = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      case 'mignum': {

        up = numAlterF(parseInt(document.getElementById(abc).value));

        break;
      }

      default:
        up = numAlter(parseInt(document.getElementById(abc).value));
        break;
    }

    document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;

    if (parseInt(document.getElementById(abc).value) < 0) {
      document.getElementById(abc).value = 0;
    }

  }

  document.getElementById("copy").onclick = function () { copySheet() };

  function copySheet() {
    let msg = "";
    msg += `${document.getElementById("starrating").innerText} Star\n`;
    msg += `${document.getElementById("total").innerText} Prog Invested\n`;

    msg += `Strength: ${document.getElementById("strnum").value}\n`; // \n will signify a new line
    msg += `Speed: ${document.getElementById("spdnum").value}\n`;
    msg += `Dexterity: ${document.getElementById("dexnum").value}\n`;
    msg += `Durability: ${document.getElementById("durnum").value}\n`;
    msg += `Endurance: ${document.getElementById("endnum").value}\n`;
    msg += `Senses: ${document.getElementById("sennum").value}\n`;
    msg += `Intellect: ${document.getElementById("intnum").value}\n`;
    msg += `Willpower: ${document.getElementById("wilnum").value}\n`;
    msg += `Charisma: ${document.getElementById("chanum").value}\n`;
    msg += `Conditional: ${document.getElementById("connum").value}\n`;
    msg += `Might: ${document.getElementById("mignum").value}\n`;

    msg += `\nSkills:\n`;
    msg += `${document.getElementById("pro1").value} ${document.getElementById("prof1").value} ${document.getElementById("spe1").value} ${document.getElementById("spec1").value} ${document.getElementById("fac1").value} ${document.getElementById("face1").value}\n`;
    msg += `${document.getElementById("pro2").value} ${document.getElementById("prof2").value} ${document.getElementById("spe2").value} ${document.getElementById("spec2").value} ${document.getElementById("fac2").value} ${document.getElementById("face2").value}\n`;
    msg += `${document.getElementById("pro3").value} ${document.getElementById("prof3").value} ${document.getElementById("spe3").value} ${document.getElementById("spec3").value} ${document.getElementById("fac3").value} ${document.getElementById("face3").value}\n`;
    msg += `${document.getElementById("pro4").value} ${document.getElementById("prof4").value} ${document.getElementById("spe4").value} ${document.getElementById("spec4").value} ${document.getElementById("fac4").value} ${document.getElementById("face4").value}\n`;
    msg += `${document.getElementById("pro5").value} ${document.getElementById("prof5").value} ${document.getElementById("spe5").value} ${document.getElementById("spec5").value} ${document.getElementById("fac5").value} ${document.getElementById("face5").value}`;

    navigator.clipboard.writeText(msg);
  }

}
