const firebaseConfig = {
  apiKey: "AIzaSyAy0cS2jSi87qZS2anfNxCW1VWsog02wto",
  authDomain: "raceto100-89d5b.firebaseapp.com",
  databaseURL: "https://raceto100-89d5b-default-rtdb.firebaseio.com/",
  projectId: "raceto100-89d5b",
  storageBucket: "raceto100-89d5b.appspot.com",
  messagingSenderId: "844266038345",
  appId: "1:844266038345:web:8f2591989462b484148b98"
};

firebase.initializeApp(firebaseConfig);

function submitUserData() {
  const discordUsername = document.getElementById("discordUsernameInput").value;
  const blooketUsername = document.getElementById("blooketUsernameInput").value;
  const timezone = document.getElementById("timezoneInput").value;
  const qualifierSet = document.getElementById("setInput").value;
  console.warn(discordUsername);

  if (discordUsername == "") {
    alert("Make sure to fill out your Discord Username!");
  } else if (blooketUsername == "") {
    alert("Make sure to fill out your Blooket Username!");
  } else if (timezone == "") {
    alert("Make sure to fill out your Timezone!");
  } else if (qualifierSet == "") {
    alert("Make sure to fill out the link for your Qualifier Set!");
  } else if (!document.getElementById("rulesCheck").checked) {
    alert("Make sure to read the Rules!");
  } else if (!document.getElementById("discordCheck").checked) {
    alert("Make sure to join the Discord!");
  } else {
    firebase
      .database()
      .ref("/")
      .child("UserData")
      .child(discordUsername)
      .update({
        discordUsername: discordUsername,
        blooketUsername: blooketUsername,
        points: 0,
        timezone: timezone,
        timeAvailability: [
          {
            mondays: [
              {
                0: document.getElementById("Monday_0").checked,
                1: document.getElementById("Monday_1").checked,
                2: document.getElementById("Monday_2").checked,
                3: document.getElementById("Monday_3").checked,
                4: document.getElementById("Monday_4").checked,
                5: document.getElementById("Monday_5").checked,
                6: document.getElementById("Monday_6").checked,
                7: document.getElementById("Monday_7").checked,
                8: document.getElementById("Monday_8").checked,
                9: document.getElementById("Monday_9").checked,
                10: document.getElementById("Monday_10").checked,
                11: document.getElementById("Monday_11").checked,
                12: document.getElementById("Monday_12").checked,
                13: document.getElementById("Monday_13").checked,
                14: document.getElementById("Monday_14").checked,
                15: document.getElementById("Monday_15").checked,
                16: document.getElementById("Monday_16").checked,
                17: document.getElementById("Monday_17").checked,
                18: document.getElementById("Monday_18").checked,
                19: document.getElementById("Monday_19").checked,
                20: document.getElementById("Monday_20").checked,
                21: document.getElementById("Monday_21").checked,
                22: document.getElementById("Monday_22").checked,
                23: document.getElementById("Monday_23").checked
              }
            ],
            tuesdays: [
              {
                0: document.getElementById("Tuesday_0").checked,
                1: document.getElementById("Tuesday_1").checked,
                2: document.getElementById("Tuesday_2").checked,
                3: document.getElementById("Tuesday_3").checked,
                4: document.getElementById("Tuesday_4").checked,
                5: document.getElementById("Tuesday_5").checked,
                6: document.getElementById("Tuesday_6").checked,
                7: document.getElementById("Tuesday_7").checked,
                8: document.getElementById("Tuesday_8").checked,
                9: document.getElementById("Tuesday_9").checked,
                10: document.getElementById("Tuesday_10").checked,
                11: document.getElementById("Tuesday_11").checked,
                12: document.getElementById("Tuesday_12").checked,
                13: document.getElementById("Tuesday_13").checked,
                14: document.getElementById("Tuesday_14").checked,
                15: document.getElementById("Tuesday_15").checked,
                16: document.getElementById("Tuesday_16").checked,
                17: document.getElementById("Tuesday_17").checked,
                18: document.getElementById("Tuesday_18").checked,
                19: document.getElementById("Tuesday_19").checked,
                20: document.getElementById("Tuesday_20").checked,
                21: document.getElementById("Tuesday_21").checked,
                22: document.getElementById("Tuesday_22").checked,
                23: document.getElementById("Tuesday_23").checked
              }
            ],
            wednesdays: [
              {
                0: document.getElementById("Wednesday_0").checked,
                1: document.getElementById("Wednesday_1").checked,
                2: document.getElementById("Wednesday_2").checked,
                3: document.getElementById("Wednesday_3").checked,
                4: document.getElementById("Wednesday_4").checked,
                5: document.getElementById("Wednesday_5").checked,
                6: document.getElementById("Wednesday_6").checked,
                7: document.getElementById("Wednesday_7").checked,
                8: document.getElementById("Wednesday_8").checked,
                9: document.getElementById("Wednesday_9").checked,
                10: document.getElementById("Wednesday_10").checked,
                11: document.getElementById("Wednesday_11").checked,
                12: document.getElementById("Wednesday_12").checked,
                13: document.getElementById("Wednesday_13").checked,
                14: document.getElementById("Wednesday_14").checked,
                15: document.getElementById("Wednesday_15").checked,
                16: document.getElementById("Wednesday_16").checked,
                17: document.getElementById("Wednesday_17").checked,
                18: document.getElementById("Wednesday_18").checked,
                19: document.getElementById("Wednesday_19").checked,
                20: document.getElementById("Wednesday_20").checked,
                21: document.getElementById("Wednesday_21").checked,
                22: document.getElementById("Wednesday_22").checked,
                23: document.getElementById("Wednesday_23").checked
              }
            ],
            thursdays: [
              {
                0: document.getElementById("Thursday_0").checked,
                1: document.getElementById("Thursday_1").checked,
                2: document.getElementById("Thursday_2").checked,
                3: document.getElementById("Thursday_3").checked,
                4: document.getElementById("Thursday_4").checked,
                5: document.getElementById("Thursday_5").checked,
                6: document.getElementById("Thursday_6").checked,
                7: document.getElementById("Thursday_7").checked,
                8: document.getElementById("Thursday_8").checked,
                9: document.getElementById("Thursday_9").checked,
                10: document.getElementById("Thursday_10").checked,
                11: document.getElementById("Thursday_11").checked,
                12: document.getElementById("Thursday_12").checked,
                13: document.getElementById("Thursday_13").checked,
                14: document.getElementById("Thursday_14").checked,
                15: document.getElementById("Thursday_15").checked,
                16: document.getElementById("Thursday_16").checked,
                17: document.getElementById("Thursday_17").checked,
                18: document.getElementById("Thursday_18").checked,
                19: document.getElementById("Thursday_19").checked,
                20: document.getElementById("Thursday_20").checked,
                21: document.getElementById("Thursday_21").checked,
                22: document.getElementById("Thursday_22").checked,
                23: document.getElementById("Thursday_23").checked
              }
            ],
            fridays: [
              {
                0: document.getElementById("Friday_0").checked,
                1: document.getElementById("Friday_1").checked,
                2: document.getElementById("Friday_2").checked,
                3: document.getElementById("Friday_3").checked,
                4: document.getElementById("Friday_4").checked,
                5: document.getElementById("Friday_5").checked,
                6: document.getElementById("Friday_6").checked,
                7: document.getElementById("Friday_7").checked,
                8: document.getElementById("Friday_8").checked,
                9: document.getElementById("Friday_9").checked,
                10: document.getElementById("Friday_10").checked,
                11: document.getElementById("Friday_11").checked,
                12: document.getElementById("Friday_12").checked,
                13: document.getElementById("Friday_13").checked,
                14: document.getElementById("Friday_14").checked,
                15: document.getElementById("Friday_15").checked,
                16: document.getElementById("Friday_16").checked,
                17: document.getElementById("Friday_17").checked,
                18: document.getElementById("Friday_18").checked,
                19: document.getElementById("Friday_19").checked,
                20: document.getElementById("Friday_20").checked,
                21: document.getElementById("Friday_21").checked,
                22: document.getElementById("Friday_22").checked,
                23: document.getElementById("Friday_23").checked
              }
            ],
            saturdays: [
              {
                0: document.getElementById("Saturday_0").checked,
                1: document.getElementById("Saturday_1").checked,
                2: document.getElementById("Saturday_2").checked,
                3: document.getElementById("Saturday_3").checked,
                4: document.getElementById("Saturday_4").checked,
                5: document.getElementById("Saturday_5").checked,
                6: document.getElementById("Saturday_6").checked,
                7: document.getElementById("Saturday_7").checked,
                8: document.getElementById("Saturday_8").checked,
                9: document.getElementById("Saturday_9").checked,
                10: document.getElementById("Saturday_10").checked,
                11: document.getElementById("Saturday_11").checked,
                12: document.getElementById("Saturday_12").checked,
                13: document.getElementById("Saturday_13").checked,
                14: document.getElementById("Saturday_14").checked,
                15: document.getElementById("Saturday_15").checked,
                16: document.getElementById("Saturday_16").checked,
                17: document.getElementById("Saturday_17").checked,
                18: document.getElementById("Saturday_18").checked,
                19: document.getElementById("Saturday_19").checked,
                20: document.getElementById("Saturday_20").checked,
                21: document.getElementById("Saturday_21").checked,
                22: document.getElementById("Saturday_22").checked,
                23: document.getElementById("Saturday_23").checked
              }
            ],
            sundays: [
              {
                0: document.getElementById("Sunday_0").checked,
                1: document.getElementById("Sunday_1").checked,
                2: document.getElementById("Sunday_2").checked,
                3: document.getElementById("Sunday_3").checked,
                4: document.getElementById("Sunday_4").checked,
                5: document.getElementById("Sunday_5").checked,
                6: document.getElementById("Sunday_6").checked,
                7: document.getElementById("Sunday_7").checked,
                8: document.getElementById("Sunday_8").checked,
                9: document.getElementById("Sunday_9").checked,
                10: document.getElementById("Sunday_10").checked,
                11: document.getElementById("Sunday_11").checked,
                12: document.getElementById("Sunday_12").checked,
                13: document.getElementById("Sunday_13").checked,
                14: document.getElementById("Sunday_14").checked,
                15: document.getElementById("Sunday_15").checked,
                16: document.getElementById("Sunday_16").checked,
                17: document.getElementById("Sunday_17").checked,
                18: document.getElementById("Sunday_18").checked,
                19: document.getElementById("Sunday_19").checked,
                20: document.getElementById("Sunday_20").checked,
                21: document.getElementById("Sunday_21").checked,
                22: document.getElementById("Sunday_22").checked,
                23: document.getElementById("Sunday_23").checked
              }
            ]
          }
        ],
        qualifierSet: qualifierSet,
        hostSignUp: document.getElementById("hostSignUp").checked
      });
  }
}

function makeLeaderboard() {
  document.getElementById("leaderboard").innerHTML =
    '<div class="section main leaderboardEntree"><h3>Discord</h3><h3>Blooket</h3><h3>Points</h3></div>';
  let textnode;
  let P;

  let pointsList = [];
  const pointsMap = new Map();

  firebase
    .database()
    .ref("/")
    .child("UserData")
    .on("value", function (snapshot) {
      document.getElementById("leaderboard").innerHTML =
        '<div class="section main leaderboardEntree"><h3>Discord</h3><h3>Blooket</h3><h3>Points</h3></div>';
      let a = 0;
      snapshot.forEach(function (childSnapshot) {
        pointsList[a] = childSnapshot.val().points + a * 0.001;
        pointsMap.set(pointsList[a], {
          discord: childSnapshot.val().discordUsername,
          blooket: childSnapshot.val().blooketUsername,
          points: childSnapshot.val().points
        });
        console.log(pointsMap.get(pointsList[a]));
        console.log(pointsList[a]);
        a++;
      });
      pointsList.sort(function (a, b) {
        return b - a;
      });
      console.log(pointsList);
      for (let i = 0; i < pointsList.length; i++) {
        const MAP = pointsMap.get(pointsList[i]);
        console.log(MAP.points);
        makeLeaderboardRow(MAP.discord, MAP.blooket, MAP.points);
      }
    });
}

function makeLeaderboardRow(discord, blooket, points) {
  const LEADERBOARD = document.getElementById("leaderboard");
  const ROW = document.createElement("div");
  ROW.classList.add("section");
  ROW.classList.add("main");
  ROW.classList.add("leaderboardEntree");

  P = document.createElement("p");
  textnode = document.createTextNode(discord);
  P.appendChild(textnode);
  ROW.appendChild(P);

  P = document.createElement("p");
  textnode = document.createTextNode(blooket);
  P.appendChild(textnode);
  ROW.appendChild(P);

  P = document.createElement("p");
  textnode = document.createTextNode(points);
  P.appendChild(textnode);
  ROW.appendChild(P);

  LEADERBOARD.appendChild(ROW);
}

function submitAnnouncements() {
  const date = new Date();

  let time = date.getTime();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${time}`;
  let DMY = `${day}-${month}-${year}`;
  firebase
    .database()
    .ref("/")
    .child("Announcements")
    .child(currentDate)
    .update({
      date: DMY,
      time: time,
      text:
        "Morning Everyone! I'll be making sure the most recent announcements are going up to the top, rather than the bottom.",
      title: "Order Testing!",
      admin: "Leo"
    });
}

function updateAnnouncements() {
  document.getElementById("announcementsBoard").innerHTML = "";
  const announcementMap = new Map();
  let announcementList = [];
  let a = 0;
  firebase
    .database()
    .ref("/")
    .child("Announcements")
    .on("value", function (snapshot) {
      document.getElementById("announcementsBoard").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        console.log(childSnapshot.val().date);
        announcementList[a] = childSnapshot.val().time;
        announcementMap.set(announcementList[a], {
          title: childSnapshot.val().title,
          admin: childSnapshot.val().admin,
          date: childSnapshot.val().date,
          text: childSnapshot.val().text
        });
        a++;
      });
      console.log(announcementList);
      function removeDuplicates(arr) {
        return arr.filter((item, index) => arr.indexOf(item) === index);
      }
      announcementList = removeDuplicates(announcementList);
      console.log(announcementList);
      const LENGTH = announcementList.length;
      document.getElementById("announcementsBoard").innerHTML = "";
      for (let i = LENGTH - 1; i > -1; i--) {
        console.log("test");
        console.log(i);
        const MAP = announcementMap.get(announcementList[i]);
        createBoard(MAP.title, MAP.admin, MAP.date, MAP.text);
      }
    });
}

function createBoard(title, admin, date, text) {
  const aBoard = document.getElementById("announcementsBoard");
  let textnode;

  const BOARD = document.createElement("div");
  BOARD.classList.add("section");
  BOARD.classList.add("main");

  const TITLE_BOX = document.createElement("div");
  TITLE_BOX.classList.add("section");
  TITLE_BOX.classList.add("intro");
  const H2 = document.createElement("h2");
  textnode = document.createTextNode(title);
  H2.appendChild(textnode);
  TITLE_BOX.appendChild(H2);

  const MESSAGE_BOX = document.createElement("div");
  MESSAGE_BOX.classList.add("section");
  MESSAGE_BOX.classList.add("main");
  const P1 = document.createElement("p");
  textnode = document.createTextNode(text);
  P1.appendChild(textnode);
  MESSAGE_BOX.appendChild(P1);

  const BR = document.createElement("br");

  const DATE_ADMIN = document.createElement("p");
  textnode = document.createTextNode(date + " - " + admin);
  DATE_ADMIN.appendChild(textnode);

  BOARD.appendChild(TITLE_BOX);
  BOARD.appendChild(MESSAGE_BOX);
  BOARD.appendChild(BR);
  BOARD.appendChild(DATE_ADMIN);
  aBoard.appendChild(BOARD);
}

function tese() {
  console.log("test");
  firebase
    .database()
    .ref("/")
    .child("Rounds")
    .child("R1")
    .child("Groups")
    .child("G2")
    .update({
      Group: "G2",
      Settings: {
        date: "June 3",
        time: "07:00 EST"
      },
      players: ["_Mystic_:)", "Rombus_158"]
    });
}
//tese();

let currentRound;

function makeRoundBoards() {
  firebase
    .database()
    .ref("/Settings")
    .on("value", function (snapshot) {
      console.log(snapshot.val().currentRound);
      localStorage.setItem("currentRound", `${snapshot.val().currentRound}`);
    });

  document.getElementById("boardSection").innerHTML = "";

  makeCurrentRound();
  makeGroups();
}

function makeCurrentRound() {
  let textnode;
  const currentRoundBoard = document.getElementById("currentRoundBoard");
  let DATE, MODE, SET, SET_MAKER, SET_TITLE, TIME;

  currentRound = localStorage.getItem("currentRound");
  firebase
    .database()
    .ref("/Rounds")
    .child(`${currentRound}`)
    .child("Settings")
    .on("value", function (snapshot) {
      DATE = snapshot.val().date;
      MODE = snapshot.val().mode;
      SET = snapshot.val().set;
      SET_MAKER = snapshot.val().setMaker;
      SET_TITLE = snapshot.val().setTitle;
      TIME = snapshot.val().time;

      const DIV1 = document.createElement("div");
      DIV1.classList.add("section");
      DIV1.classList.add("main");
      const H3 = document.createElement("h3");
      textnode = document.createTextNode(`Current Round: ${currentRound}`);
      H3.appendChild(textnode);
      DIV1.appendChild(H3);
      currentRoundBoard.appendChild(DIV1);

      const DIV2 = document.createElement("div");
      DIV2.classList.add("section");
      DIV2.classList.add("main");

      makePara(`Mode: ${MODE}`);
      makeBreak();
      makePara(`Time: ${TIME}`);
      makeBreak();
      makePara(`Date: ${DATE}`);
      makeBreak();

      const P = document.createElement("p");
      textnode = document.createTextNode(`Set: `);
      P.appendChild(textnode);

      const A = document.createElement("a");
      A.setAttribute("href", `${SET}`);
      A.setAttribute("target", "_blank");
      A.classList.add("textLink");
      textnode = document.createTextNode(`${SET_TITLE}`);
      A.appendChild(textnode);
      P.appendChild(A);

      textnode = document.createTextNode(`  -  ${SET_MAKER}`);
      P.appendChild(textnode);

      DIV2.appendChild(P);

      currentRoundBoard.appendChild(DIV2);

      function makePara(text) {
        const P = document.createElement("p");
        textnode = document.createTextNode(text);
        P.appendChild(textnode);
        DIV2.appendChild(P);
      }
      function makeBreak() {
        const BR = document.createElement("br");
        DIV2.appendChild(BR);
      }
    });
}

function makeGroups() {
  let textnode;
  const boardSection = document.getElementById("boardSection");

  currentRound = localStorage.getItem("currentRound");

  firebase
    .database()
    .ref("/Rounds")
    .child(`${currentRound}`)
    .child("Groups")
    .on("value", function (snapshot) {
      const MAIN_DIV = document.createElement("div");
      MAIN_DIV.classList.add("section");
      MAIN_DIV.classList.add("main");
      snapshot.forEach(function (childSnapshot) {
        console.log(childSnapshot.val());
        const BR = document.createElement("br");

        const DIV = document.createElement("div");
        DIV.classList.add("section");
        DIV.classList.add("main");

        const H3 = document.createElement("h3");
        textnode = document.createTextNode(`${childSnapshot.val().Group}`);
        H3.appendChild(textnode);
        DIV.appendChild(H3);

        makeBR();

        let H4 = document.createElement("h4");
        textnode = document.createTextNode(
          `${childSnapshot.val().Settings.date} - ${
            childSnapshot.val().Settings.time
          }`
        );
        H4.appendChild(textnode);
        DIV.appendChild(H4);

        makeBR();

        childSnapshot.val().players.forEach(function (player) {
          console.log(player);

          const SPAN = document.createElement("span");
          textnode = document.createTextNode(`${player}, `);
          SPAN.appendChild(textnode);
          DIV.appendChild(SPAN);
        });

        MAIN_DIV.appendChild(DIV);

        function makeBR() {
          const BR = document.createElement("br");
          DIV.appendChild(BR);
        }
      });
      boardSection.appendChild(MAIN_DIV);
    });
}
