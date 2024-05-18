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
    firebase
      .database()
      .ref("/")
      .child("UserData")
      .child("Leonidas")
      .update({
        discordUsername: "Leo",
        blooketUsername: ".Leonidas",
        points: 101,
        timeAvailability: [
          {
            mondays: [
              {
                0: false,
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false,
                10: false,
                11: true,
                12: false,
                13: false,
                14: false,
                15: true,
                16: true,
                17: false,
                18: false,
                19: false,
                20: true,
                21: true,
                22: true,
                23: true
              }
            ],
            tuesdays: [
              {
                0: false,
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false,
                10: false,
                11: true,
                12: false,
                13: false,
                14: false,
                15: false,
                16: false,
                17: false,
                18: true,
                19: true,
                20: true,
                21: true,
                22: true,
                23: true
              }
            ],
            wednesdays: [
              {
                0: false,
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false,
                10: false,
                11: true,
                12: false,
                13: false,
                14: false,
                15: true,
                16: true,
                17: false,
                18: false,
                19: false,
                20: true,
                21: true,
                22: true,
                23: true
              }
            ],
            thursdays: [
              {
                0: false,
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false,
                10: false,
                11: true,
                12: false,
                13: false,
                14: false,
                15: true,
                16: true,
                17: false,
                18: false,
                19: false,
                20: true,
                21: true,
                22: true,
                23: true
              }
            ],
            fridays: [
              {
                0: false,
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false,
                10: false,
                11: true,
                12: false,
                13: false,
                14: false,
                15: true,
                16: true,
                17: false,
                18: false,
                19: false,
                20: true,
                21: true,
                22: true,
                23: true
              }
            ],
            saturdays: [
              {
                0: false,
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false,
                10: false,
                11: true,
                12: false,
                13: false,
                14: false,
                15: true,
                16: true,
                17: false,
                18: false,
                19: false,
                20: true,
                21: true,
                22: true,
                23: true
              }
            ],
            sundays: [
              {
                0: false,
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false,
                10: false,
                11: true,
                12: false,
                13: false,
                14: false,
                15: true,
                16: true,
                17: false,
                18: false,
                19: false,
                20: true,
                21: true,
                22: true,
                23: true
              }
            ]
          }
        ],
        qualifierSet: "blooket.games",
        hostSignUp: true
      });
  }
  
  function makeLeaderboard() {
    document.getElementById("leaderboard").innerHTML =
      '<div class="section main leaderboardEntree"><h3>Discord</h3><h3>Blooket</h3><h3>Points</h3></div>';
    let textnode;
    let P;
    firebase
      .database()
      .ref("/")
      .child("UserData")
      .on("value", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          const LEADERBOARD = document.getElementById("leaderboard");
  
          const ROW = document.createElement("div");
          ROW.classList.add("section");
          ROW.classList.add("main");
          ROW.classList.add("leaderboardEntree");
  
          P = document.createElement("p");
          textnode = document.createTextNode(childSnapshot.val().discordUsername);
          P.appendChild(textnode);
          ROW.appendChild(P);
  
          P = document.createElement("p");
          textnode = document.createTextNode(childSnapshot.val().blooketUsername);
          P.appendChild(textnode);
          ROW.appendChild(P);
  
          P = document.createElement("p");
          textnode = document.createTextNode(childSnapshot.val().points);
          P.appendChild(textnode);
          ROW.appendChild(P);
  
          LEADERBOARD.appendChild(ROW);
        });
      });
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
          "Hey everyone! If you see this, just testing a feature to add announcements to the website remotely!",
        title: "Epic Test!",
        admin: "Leo"
      });
  }
  
  function updateAnnouncements() {
    const announcementList = new Map();
    firebase
      .database()
      .ref("/")
      .child("Announcements")
      .on("value", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          console.log(childSnapshot.val().date);
          createBoard(
            childSnapshot.val().title,
            childSnapshot.val().admin,
            childSnapshot.val().date,
            childSnapshot.val().text
          );
        });
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
  
  makeLeaderboard();
  updateAnnouncements();