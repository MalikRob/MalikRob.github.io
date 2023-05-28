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
  document.getElementById("numUp4").onclick = function () { raiseFunction('durnum') };
  document.getElementById("numUp5").onclick = function () { raiseFunction('endnum') };
  document.getElementById("numUp6").onclick = function () { raiseFunction('intnum') };
  document.getElementById("numUp7").onclick = function () { raiseFunction('wilnum') };
  document.getElementById("numUp8").onclick = function () { raiseFunction('sennum') };
  document.getElementById("numUp9").onclick = function () { raiseFunction('chanum') };
  // The Break Between Stat Arrows
  document.getElementById("numDown1").onclick = function () { lowerFunction('strnum') };
  document.getElementById("numDown2").onclick = function () { lowerFunction('spdnum') };
  document.getElementById("numDown3").onclick = function () { lowerFunction('dexnum') };
  document.getElementById("numDown4").onclick = function () { lowerFunction('durnum') };
  document.getElementById("numDown5").onclick = function () { lowerFunction('endnum') };
  document.getElementById("numDown6").onclick = function () { lowerFunction('intnum') };
  document.getElementById("numDown7").onclick = function () { lowerFunction('wilnum') };
  document.getElementById("numDown8").onclick = function () { lowerFunction('sennum') };
  document.getElementById("numDown9").onclick = function () { lowerFunction('chanum') };

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

    switch (abc) {
      case 'strnum': {
        let down = numAlter(parseInt(document.getElementById("strnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("strnum").value = parseInt(document.getElementById("strnum").value) + 1;

        let up = numAlter(parseInt(document.getElementById("strnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;

        break;
      }
      case 'spdnum': {
        let down = numAlter(parseInt(document.getElementById("spdnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("spdnum").value = parseInt(document.getElementById("spdnum").value) + 1;

        let up = numAlter(parseInt(document.getElementById("spdnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'dexnum': {
        let down = numAlter(parseInt(document.getElementById("dexnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("dexnum").value = parseInt(document.getElementById("dexnum").value) + 1;

        let up = numAlter(parseInt(document.getElementById("dexnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'durnum': {
        let down = numAlter(parseInt(document.getElementById("durnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("durnum").value = parseInt(document.getElementById("durnum").value) + 1;

        let up = numAlter(parseInt(document.getElementById("durnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'endnum': {
        let down = numAlter(parseInt(document.getElementById("endnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("endnum").value = parseInt(document.getElementById("endnum").value) + 1;

        let up = numAlter(parseInt(document.getElementById("endnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'intnum': {
        let down = numAlter(parseInt(document.getElementById("intnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("intnum").value = parseInt(document.getElementById("intnum").value) + 1;

        let up = numAlter(parseInt(document.getElementById("intnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'wilnum': {
        let down = numAlter(parseInt(document.getElementById("wilnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("wilnum").value = parseInt(document.getElementById("wilnum").value) + 1;

        let up = numAlter(parseInt(document.getElementById("wilnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'sennum': {
        let down = numAlter(parseInt(document.getElementById("sennum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("sennum").value = parseInt(document.getElementById("sennum").value) + 1;

        let up = numAlter(parseInt(document.getElementById("sennum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'chanum': {
        let down = numAlter(parseInt(document.getElementById("chanum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("chanum").value = parseInt(document.getElementById("chanum").value) + 1;

        let up = numAlter(parseInt(document.getElementById("chanum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'prof1': {
        let down = numAlter(parseInt(document.getElementById("prof1").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("prof1").value = parseInt(document.getElementById("prof1").value) + 1;

        let up = numAlter(parseInt(document.getElementById("prof1").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'prof2': {
        let down = numAlter(parseInt(document.getElementById("prof2").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("prof2").value = parseInt(document.getElementById("prof2").value) + 1;

        let up = numAlter(parseInt(document.getElementById("prof2").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'prof3': {
        let down = numAlter(parseInt(document.getElementById("prof3").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("prof3").value = parseInt(document.getElementById("prof3").value) + 1;

        let up = numAlter(parseInt(document.getElementById("prof3").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'prof4': {
        let down = numAlter(parseInt(document.getElementById("prof4").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("prof4").value = parseInt(document.getElementById("prof4").value) + 1;

        let up = numAlter(parseInt(document.getElementById("prof4").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'prof5': {
        let down = numAlter(parseInt(document.getElementById("prof5").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("prof5").value = parseInt(document.getElementById("prof5").value) + 1;

        let up = numAlter(parseInt(document.getElementById("prof5").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'spec1': {
        let down = numAlter(parseInt(document.getElementById("spec1").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("spec1").value = parseInt(document.getElementById("spec1").value) + 1;

        let up = numAlter(parseInt(document.getElementById("spec1").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'spec2': {
        let down = numAlter(parseInt(document.getElementById("spec2").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("spec2").value = parseInt(document.getElementById("spec2").value) + 1;

        let up = numAlter(parseInt(document.getElementById("spec2").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'spec3': {
        let down = numAlter(parseInt(document.getElementById("spec3").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("spec3").value = parseInt(document.getElementById("spec3").value) + 1;

        let up = numAlter(parseInt(document.getElementById("spec3").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'spec4': {
        let down = numAlter(parseInt(document.getElementById("spec4").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("spec4").value = parseInt(document.getElementById("spec4").value) + 1;

        let up = numAlter(parseInt(document.getElementById("spec4").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'spec5': {
        let down = numAlter(parseInt(document.getElementById("spec5").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("spec5").value = parseInt(document.getElementById("spec5").value) + 1;

        let up = numAlter(parseInt(document.getElementById("spec5").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'face1': {
        let down = numAlterF(parseInt(document.getElementById("face1").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("face1").value = parseInt(document.getElementById("face1").value) + 1;

        let up = numAlterF(parseInt(document.getElementById("face1").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'face2': {
        let down = numAlterF(parseInt(document.getElementById("face2").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("face2").value = parseInt(document.getElementById("face2").value) + 1;

        let up = numAlterF(parseInt(document.getElementById("face2").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'face3': {
        let down = numAlterF(parseInt(document.getElementById("face3").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("face3").value = parseInt(document.getElementById("face3").value) + 1;

        let up = numAlterF(parseInt(document.getElementById("face3").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'face4': {
        let down = numAlterF(parseInt(document.getElementById("face4").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("face4").value = parseInt(document.getElementById("face4").value) + 1;

        let up = numAlterF(parseInt(document.getElementById("face4").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'face5': {
        let down = numAlterF(parseInt(document.getElementById("face5").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("face5").value = parseInt(document.getElementById("face5").value) + 1;

        let up = numAlterF(parseInt(document.getElementById("face5").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }

      default:

    }

  }

  function lowerFunction(abc) {

    switch (abc) {
      case 'strnum': {
        let down = numAlter(parseInt(document.getElementById("strnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("strnum").value = parseInt(document.getElementById("strnum").value) - 1;

        let up = numAlter(parseInt(document.getElementById("strnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'spdnum': {
        let down = numAlter(parseInt(document.getElementById("spdnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("spdnum").value = parseInt(document.getElementById("spdnum").value) - 1;

        let up = numAlter(parseInt(document.getElementById("spdnum").value));

        break;
      } document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
      case 'dexnum': {
        let down = numAlter(parseInt(document.getElementById("dexnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("dexnum").value = parseInt(document.getElementById("dexnum").value) - 1;

        let up = numAlter(parseInt(document.getElementById("dexnum").value));

        break;
      } document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
      case 'durnum': {
        let down = numAlter(parseInt(document.getElementById("durnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("durnum").value = parseInt(document.getElementById("durnum").value) - 1;

        let up = numAlter(parseInt(document.getElementById("durnum").value));

        break;
      } document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
      case 'endnum': {
        let down = numAlter(parseInt(document.getElementById("endnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("endnum").value = parseInt(document.getElementById("endnum").value) - 1;

        let up = numAlter(parseInt(document.getElementById("endnum").value));

        break;
      } document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
      case 'intnum': {
        let down = numAlter(parseInt(document.getElementById("intnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("intnum").value = parseInt(document.getElementById("intnum").value) - 1;

        let up = numAlter(parseInt(document.getElementById("intnum").value));

        break;
      } document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
      case 'wilnum': {
        let down = numAlter(parseInt(document.getElementById("wilnum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("wilnum").value = parseInt(document.getElementById("wilnum").value) - 1;

        let up = numAlter(parseInt(document.getElementById("wilnum").value));

        break;
      } document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
      case 'sennum': {
        let down = numAlter(parseInt(document.getElementById("sennum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("sennum").value = parseInt(document.getElementById("sennum").value) - 1;

        let up = numAlter(parseInt(document.getElementById("sennum").value));

        break;
      } document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
      case 'chanum': {
        let down = numAlter(parseInt(document.getElementById("chanum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("chanum").value = parseInt(document.getElementById("chanum").value) - 1;

        let up = numAlter(parseInt(document.getElementById("chanum").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
      }
      case 'prof1': {
        let down = numAlter(parseInt(document.getElementById("prof1").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("prof1").value = parseInt(document.getElementById("prof1").value) - 1;

        let up = numAlter(parseInt(document.getElementById("prof1").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'prof2': {
        let down = numAlter(parseInt(document.getElementById("prof2").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("prof2").value = parseInt(document.getElementById("prof2").value) - 1;

        let up = numAlter(parseInt(document.getElementById("prof2").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'prof3': {
        let down = numAlter(parseInt(document.getElementById("prof3").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("prof3").value = parseInt(document.getElementById("prof3").value) - 1;

        let up = numAlter(parseInt(document.getElementById("prof3").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'prof4': {
        let down = numAlter(parseInt(document.getElementById("prof4").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("prof4").value = parseInt(document.getElementById("prof4").value) - 1;

        let up = numAlter(parseInt(document.getElementById("prof4").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'prof5': {
        let down = numAlter(parseInt(document.getElementById("prof5").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("prof5").value = parseInt(document.getElementById("prof5").value) - 1;

        let up = numAlter(parseInt(document.getElementById("prof5").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'spec1': {
        let down = numAlter(parseInt(document.getElementById("spec1").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("spec1").value = parseInt(document.getElementById("spec1").value) - 1;

        let up = numAlter(parseInt(document.getElementById("spec1").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'spec2': {
        let down = numAlter(parseInt(document.getElementById("spec2").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("spec2").value = parseInt(document.getElementById("spec2").value) - 1;

        let up = numAlter(parseInt(document.getElementById("spec2").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'spec3': {
        let down = numAlter(parseInt(document.getElementById("spec3").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("spec3").value = parseInt(document.getElementById("spec3").value) - 1;

        let up = numAlter(parseInt(document.getElementById("spec3").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'spec4': {
        let down = numAlter(parseInt(document.getElementById("spec4").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("spec4").value = parseInt(document.getElementById("spec4").value) - 1;

        let up = numAlter(parseInt(document.getElementById("spec4").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'spec5': {
        let down = numAlter(parseInt(document.getElementById("spec5").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("spec5").value = parseInt(document.getElementById("spec5").value) - 1;

        let up = numAlter(parseInt(document.getElementById("spec5").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'face1': {
        let down = numAlterF(parseInt(document.getElementById("face1").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("face1").value = parseInt(document.getElementById("face1").value) - 1;

        let up = numAlterF(parseInt(document.getElementById("face1").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'face2': {
        let down = numAlterF(parseInt(document.getElementById("face2").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("face2").value = parseInt(document.getElementById("face2").value) - 1;

        let up = numAlterF(parseInt(document.getElementById("face2").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'face3': {
        let down = numAlterF(parseInt(document.getElementById("face3").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("face3").value = parseInt(document.getElementById("face3").value) - 1;

        let up = numAlterF(parseInt(document.getElementById("face3").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'face4': {
        let down = numAlterF(parseInt(document.getElementById("face4").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("face4").value = parseInt(document.getElementById("face4").value) - 1;

        let up = numAlterF(parseInt(document.getElementById("face4").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }
      case 'face5': {
        let down = numAlterF(parseInt(document.getElementById("face5").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) - down;

        document.getElementById("face5").value = parseInt(document.getElementById("face5").value) - 1;

        let up = numAlterF(parseInt(document.getElementById("face5").value));

        document.getElementById("total").innerText = parseInt(document.getElementById("total").innerText) + up;
        break;
      }

      default:

    }
  }

  document.getElementById("copy").onclick = function () { copySheet() };

  function copySheet() {
    let msg = "";
    msg += `${document.getElementById("starrating").innerText} Star\n`;
    msg += `${document.getElementById("starrating").innerText} Prog Invested\n`;
  
    msg += `Strength: ${document.getElementById("strnum").innerText}\n`; // \n will signify a new line
    msg += `Speed: ${document.getElementById("spdnum").innerText}\n`;
    msg += `Dexterity: ${document.getElementById("dexnum").innerText}\n`;
    msg += `Durability: ${document.getElementById("durnum").innerText}\n`;
    msg += `Endurance: ${document.getElementById("endnum").innerText}\n`;
    msg += `Senses: ${document.getElementById("sennum").innerText}\n`;
    msg += `Intellect: ${document.getElementById("intnum").innerText}\n`;
    msg += `Willpower: ${document.getElementById("wilnum").innerText}\n`;
    msg += `Charisma: ${document.getElementById("chanum").innerText}\n`;
  
    msg += `\nSkills:\n`;
    msg += `${document.getElementById("pro1").value} ${document.getElementById("prof1").value} ${document.getElementById("spe1").value} ${document.getElementById("spec1").value} ${document.getElementById("fac1").value} ${document.getElementById("face1").value}\n`;
    msg += `${document.getElementById("pro2").value} ${document.getElementById("prof2").value} ${document.getElementById("spe2").value} ${document.getElementById("spec2").value} ${document.getElementById("fac2").value} ${document.getElementById("face2").value}\n`;
    msg += `${document.getElementById("pro3").value} ${document.getElementById("prof3").value} ${document.getElementById("spe3").value} ${document.getElementById("spec3").value} ${document.getElementById("fac3").value} ${document.getElementById("face3").value}\n`;
    msg += `${document.getElementById("pro4").value} ${document.getElementById("prof4").value} ${document.getElementById("spe4").value} ${document.getElementById("spec4").value} ${document.getElementById("fac4").value} ${document.getElementById("face4").value}\n`;
    msg += `${document.getElementById("pro5").value} ${document.getElementById("prof5").value} ${document.getElementById("spe5").value} ${document.getElementById("spec5").value} ${document.getElementById("fac5").value} ${document.getElementById("face5").value}\n`;
  
    navigator.clipboard.writeText(msg);
  }

}
