"use strict";
var passcode = "";
var err = false;
var ignorehtml = [
  "b",
  "i",
  "u",
  "s",
  "font size=5",
  "font",
  "div",
  "div class='quote'",
  "h5",
  "marquee",
  "br",
];
var emotes = [
  { name: "cool", action: [{ type: "anim", anim: "cool_fwd" }] },
  {
    name: "clap",
    action: [{ type: "anim", anim: "clap_fwd", ticks: 30 }, { type: "idle" }],
  },
  {
    name: "beat",
    action: [{ type: "anim", anim: "beat_fwd", ticks: 20 }, { type: "idle" }],
  },
  {
    name: "bow",
    action: [{ type: "anim", anim: "bow_fwd", ticks: 30 }, { type: "idle" }],
  },
  {
    name: "think",
    action: [{ type: "anim", anim: "think_fwd", ticks: 30 }, { type: "idle" }],
  },
  {
    name: "smile",
    action: [{ type: "anim", anim: "smile_fwd", ticks: 30 }, { type: "idle" }],
  },
];
var bgs = [];
var authlevel = 0;
var cookieobject = {};
const userinfo = {
  name: "",
  room: "",
};

//Bot API client side!
class bot {
  constructor(name2, room2) {
    this.socket = io("//bonziword.org");
    setTimeout(() => {
      this.socket.emit("login", { name: name2, room: room2 });
      this.socket.emit("client", "BOT");
    }, 1000);
  }
  say(text) {
    this.socket.emit("talk", { text: text });
  }
  command(cmd) {
    this.socket.emit("command", { list: cmd.split(" ") });
  }
  kill() {
    this.socket.disconnect();
  }
  ontalk(callback) {
    this.socket.on("talk", (text) => {
      callback(text.text, text.guid);
    });
  }
}
document.cookie.split("; ").forEach((cookieitem) => {
  cookieobject[cookieitem.substring(0, cookieitem.indexOf("="))] =
    decodeURIComponent(
      cookieitem.substring(cookieitem.indexOf("=") + 1, cookieitem.length)
    );
});
function quote() {
  socket.emit("quote", { msg: $("#replyvalue").val(), guid: $("#guid").val() });
  $("#quote").hide();
  $("#replyvalue").val("");
}
function compilecookie() {
  var date = new Date();
  date.setDate(new Date().getDate() + 365);
  Object.keys(cookieobject).forEach((cookieitem) => {
    document.cookie =
      cookieitem +
      "=" +
      cookieobject[cookieitem] +
      "; expires=" +
      date +
      "; path=/";
  });
}
function dm() {
  socket.emit("dm", { msg: $("#dmvalue").val(), guid: $("#dmguid").val() });
  $("#dm").hide();
  $("#dmvalue").val("");
}
function updateAds() {
  var a = $(window).height() - $(adElement).height(),
    b = a <= 250;
  b && (a = $(window).height()),
    $(adElement)[b ? "hide" : "show"](),
    $("#content").height(a);
}
function _classCallCheck(a, b) {
  if (!(a instanceof b))
    throw new TypeError("Cannot call a class as a function");
}
function range(a, b) {
  for (var c = [], d = a; d <= b; d++) c.push(d);
  for (var d = a; d >= b; d--) c.push(d);
  return c;
}
function replaceAll(a, b, c) {
  return a.replace(new RegExp(b, "g"), c);
}
function s4() {
  return Math.floor(65536 * (1 + Math.random()))
    .toString(16)
    .substring(1);
}
function youtubeParser(a) {
  var b =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
    c = a.match(b);
  return !(!c || 11 != c[7].length) && c[7];
}
function rtimeOut(a, b) {
  var c,
    d = Date.now,
    e = window.requestAnimationFrame,
    f = d(),
    g = function () {
      d() - f < b ? c || e(g) : a();
    };
  return (
    e(g),
    {
      clear: function () {
        c = 1;
      },
    }
  );
}
function rInterval(a, b) {
  var c,
    d = Date.now,
    e = window.requestAnimationFrame,
    f = d(),
    g = function () {
      d() - f < b || ((f += b), a()), c || e(g);
    };
  return (
    e(g),
    {
      clear: function () {
        c = 1;
      },
    }
  );
}
function linkify(a) {
  var b = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/gi;
  return a.replace(b, "<a href='$1' target='_blank'>$1</a>");
}
function loadBonzis(a) {
  loadQueue.loadManifest([
    { id: "bonziBlack", src: "./img/bonzi/black.png" },
    { id: "bonziBlue", src: "./img/bonzi/blue.png" },
    { id: "bonziBrown", src: "./img/bonzi/brown.png" },
    { id: "bonziGreen", src: "./img/bonzi/green.png" },
    { id: "bonziPurple", src: "./img/bonzi/purple.png" },
    { id: "bonziRed", src: "./img/bonzi/red.png" },
    { id: "bonziPink", src: "./img/bonzi/pink.png" },
    { id: "bonziSeamus", src: "./img/bonzi/seamus.png" },
    { id: "bonziJabba", src: "./img/bonzi/jabba.png" },
    { id: "bonziJew", src: "./img/bonzi/jew.png" },
    { id: "bonziOrange", src: "./img/bonzi/orange.png" },
    { id: "bonziDress", src: "./img/bonzi/dress.png" },
    { id: "bonziFloyd", src: "./img/bonzi/floyd.png" },
    { id: "bonziInverted", src: "./img/bonzi/inverted.png" },
    { id: "bonziRonnie", src: "./img/bonzi/ronnie.png" },
    { id: "bonziBlessed", src: "./img/bonzi/blessed.png" },
    { id: "bonziAllah", src: "./img/bonzi/allah.png" },
    { id: "bonziWhite", src: "./img/bonzi/white.png" },
    { id: "bonziYellow", src: "./img/bonzi/yellow.png" },
    { id: "bonziTroll", src: "./img/bonzi/troll.png" },
    { id: "bonziRabbi", src: "./img/bonzi/rabbi.png" },
    { id: "topjej", src: "./img/misc/topjej.png" },
  ]),
    loadQueue.on(
      "fileload",
      function (a) {
        loadDone.push(a.item.id);
      },
      this
    ),
    a && loadQueue.on("complete", a, this);
}
function loadTest() {
  $("#login_card").hide(),
    $("#login_error").hide(),
    $("#login_load").show(),
    (window.loadTestInterval = rInterval(function () {
      try {
        if ((espeak.listVoices(), !loadDone.equals(loadNeeded)))
          throw "Not done loading.";
        login(), loadTestInterval.clear();
      } catch (a) {}
    }, 100));
}
function login() {
  userinfo.name = $("#login_name").val();
  userinfo.room = $("#login_room").val();
  socket.emit("login", {
    passcode: passcode,
    name: $("#login_name").val(),
    room: $("#login_room").val(),
  });
  if ($("#login_name").val() == "") cookieobject.namee = "Anonymous";
  else cookieobject.namee = $("#login_name").val();
  compilecookie();
  document.addEventListener("keyup", (key) => {
    if (document.getElementById("chat_message").value.startsWith("/")) {
      socket.emit("typing", { state: 2 });
    } else if (document.getElementById("chat_message").value !== "") {
      socket.emit("typing", { state: 1 });
    } else {
      socket.emit("typing", { state: 0 });
    }
  });
  setup();
}
function errorFatal() {
  error = new Audio("./sfx/error.mp3"), error.play(),
  ("none" != $("#page_ban").css("display") &&
    "none" != $("#page_kick").css("display")) ||
    $("#page_error").show();
}
function setup() {
  $("#chat_send").click(sendInput),
    $("#chat_message").keypress(function (a) {
      13 == a.which && sendInput();
    }),
    socket.on("replaceTVWithURL", function (a) {
      $("#bonzi_tv").html(
        "<div id='bonzi_tv_player' style='position: absolute; overflow: hidden; width: 100%; height: 100%; pointer-events: none;'></div>"
      );

      function onPlayerReady(event) {
        event.target.setVolume(100);
        event.target.playVideo();
      }
      if (a.hourAmount == 23 || (a.hourAmount == 22 && a.minuteAmount >= 9)) {
        var youtube = new YT.Player("bonzi_tv_player", {
          height: "100%",
          width: "100%",
          videoId: "kQsoV69uGIY",
          host: `${window.location.protocol}//www.youtube.com`,
          playerVars: {
            autoplay: 1,
            modestbranding: 1,
            controls: 1,
            showinfo: 1,
            loop: 1,
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: function (event) {
              // -1 - unstarted
              // 0 - ended
              // 1 - playing
              // 2 - paused
              // 3 - buffering
              // 5 - video cued
              switch (event.data) {
                case 0:
                  // Ended

                  $("#bonzi_tv").html(
                    "<div id='bonzi_tv_player' style='position: absolute; overflow: hidden; width: 100%; height: 100%; pointer-events: none;'></div>"
                  );
                  var youtube = new YT.Player("bonzi_tv_player", {
                    height: "100%",
                    width: "100%",
                    videoId: "kQsoV69uGIY",
                    host: `${window.location.protocol}//www.youtube.com`,
                    playerVars: {
                      autoplay: 1,
                      modestbranding: 1,
                      controls: 1,
                      showinfo: 1,
                    },
                    events: {
                      onStateChange: function (event) {
                        // -1 - unstarted
                        // 0 - ended
                        // 1 - playing
                        // 2 - paused
                        // 3 - buffering
                        // 5 - video cued
                        switch (event.data) {
                          case 0:
                            // Ended
                            socket.emit("updatebonzitv");
                            break;
                        }
                      },
                    },
                  });
                  break;
              }
            },
          },
        });
      } else {
        var youtube = new YT.Player("bonzi_tv_player", {
          height: "100%",
          width: "100%",
          videoId: a.identId,
          host: `${window.location.protocol}//www.youtube.com`,
          playerVars: {
            autoplay: 1,
            modestbranding: 1,
            controls: 1,
            showinfo: 1,
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: function (event) {
              // -1 - unstarted
              // 0 - ended
              // 1 - playing
              // 2 - paused
              // 3 - buffering
              // 5 - video cued
              switch (event.data) {
                case 0:
                  // Ended

                  $("#bonzi_tv").html(
                    "<div id='bonzi_tv_player' style='position: absolute; overflow: hidden; width: 100%; height: 100%; pointer-events: none;'></div>"
                  );
                  var youtube = new YT.Player("bonzi_tv_player", {
                    height: "100%",
                    width: "100%",
                    videoId: a.id,
                    host: `${window.location.protocol}//www.youtube.com`,
                    playerVars: {
                      autoplay: 1,
                      modestbranding: 1,
                      controls: 1,
                      showinfo: 1,
                    },
                    events: {
                      onReady: onPlayerReady,
                      onStateChange: function (event) {
                        // -1 - unstarted
                        // 0 - ended
                        // 1 - playing
                        // 2 - paused
                        // 3 - buffering
                        // 5 - video cued
                        switch (event.data) {
                          case 0:
                            // Ended
                            socket.emit("updatebonzitv");
                            break;
                          case 1: {
                            updateCurrentTime = setInterval(function () {
                              socket.emit("setbonzitvtime", {
                                curtime: youtube.playerInfo.currentTime,
                              });
                              console.log(youtube.playerInfo.currentTime);
                            }, 5000);
                          }
                        }
                      },
                    },
                  });
                  break;
              }
            },
          },
        });
        clearInterval(updateCurrentTime);
      }
    }),
    socket.on("room", function (a) {
      if (a.room == "news") {
        $("#bonzi_tv").html(
          "<div id='bonzi_tv_player' style='position: absolute; overflow: hidden; width: 100%; height: 100%; pointer-events: none;'></div>"
        );
        var youtube = new YT.Player("bonzi_tv_player", {
          height: "80%",
          width: "100%",
          videoId: "rIMiDzEB7nQ",
          host: `${window.location.protocol}//www.youtube.com`,
          playerVars: {
            autoplay: 1,
            modestbranding: 1,
            controls: 1,
            showinfo: 1,
          },
          events: {
            onStateChange: function (event) {
              // -1 - unstarted
              // 0 - ended
              // 1 - playing
              // 2 - paused
              // 3 - buffering
              // 5 - video cued
              switch (event.data) {
                case 0:
                  // Ended
                  theme(
                    '#content{background-image:url("/img/desktop/logo.tv.png"), url("/img/desktop/bg.png");} #bonzi_tv_yt{background-image:url("/img/desktop/logo.tv.png"), url("/img/desktop/bg.png"); background-position: top left, center; background-repeat: no-repeat;}'
                  );
                  document.getElementById("bonzi_tv").innerHTML =
                    '<iframe id="bonzi_tv_yt" style="position: absolute; overflow: hidden; width: 100%; height: 100%; pointer-events: none;" src="https://assets.scrippsdigital.com/cms/video/player.html?video=https://content.uplynk.com/channel/bb325641f6c243fdabebf1e3ade0634c.m3u8&live=1&purl=/live&da=1&poster=https://assets.scrippsdigital.com/core-web-apps/WEWS.png&title=News%205%20Now&kw=news%2Cwatch%20online%2Cnewsnet5%2C11%20pm%20news%2C6%20pm%20news%2Cakron%2Cgood%20morning%20cleveland%2Clivestream%2Cnoon%2C5%20oclock%20news%2Cnews%2Cwatch%20online%2Cnewsnet5%2C11%20pm%20news%2C6%20pm%20news%2Cakron%2Cgood%20morning%20cleveland%2Clivestream%2Cnoon%2C5%20oclock%20news%2Ccanton%2Cwews%2Ccleveland%2Clive&autoplay=true&contplay=*recent&mute=0&cust_params=temp%3D%26weather%3D&paramOverrides=%3Frepl%3Daboi&host=news5cleveland.com&s=wews&ex=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                  break;
              }
            },
          },
        });
      } else if (a.room == "bonzi_weather") {
        $("#bonzi_tv").html(
          "<div id='bonzi_tv_player' style='position: absolute; overflow: hidden; width: 100%; height: 100%; pointer-events: none;'></div>"
        );
        theme(
          '#content{background-image:url("/img/desktop/logo.tv.png"), url("/img/desktop/bg.png");} #bonzi_tv_yt{background-image:url("/img/desktop/logo.tv.png"), url("/img/desktop/bg.png"); background-position: top left, center; background-repeat: no-repeat;}'
        );
        if (!dontUseMyLocation) {
          document.getElementById("bonzi_tv").innerHTML =
            '<iframe id="bonzi_tv_yt" style="position: absolute; overflow: hidden; width: 100%; height: 100%; pointer-events: none;" src="//v1.weatherscan.net/" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else {
          document.getElementById("bonzi_tv").innerHTML =
            '<iframe id="bonzi_tv_yt" style="position: absolute; overflow: hidden; width: 100%; height: 100%; pointer-events: none;" src="//weatherscan.net/?long_island" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }
      } else if (a.room == "bonzi_tv") {
        $("#room_info").append(
          "<br><font color='red'><h3>BonziTV is in early development and is also a work in progress project. Expect bugs!<br>Report any bugs to the Seamus's BonziWORLD Discord server.</h3></font>"
        );
        $("#bonzi_tv").html(
          "<div id='bonzi_tv_player' style='position: absolute; overflow: hidden; width: 100%; height: 100%; pointer-events: none; background-image:url('/img/desktop/logo.tv.png'), url('/img/desktop/bg.png');'></div>"
        );
        theme(
          '#content {background-image:url("/img/desktop/logo.tv.png"); background-repeat: no-repeat; background-position: top-left} #bonzi_canvas {background-image:url("/img/desktop/logo.tv.png"); background-repeat: no-repeat; background-position: top-left}'
        );

        function onPlayerReady(event) {
          event.target.setVolume(100);
          event.target.playVideo();
        }
        var youtube = new YT.Player("bonzi_tv_player", {
          height: "100%",
          width: "100%",
          videoId: a.vid,
          host: `${window.location.protocol}//www.youtube.com`,
          playerVars: {
            start: a.curtime,
            autoplay: 1,
            modestbranding: 1,
            controls: 1,
            showinfo: 1,
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: function (event) {
              // -1 - unstarted
              // 0 - ended
              // 1 - playing
              // 2 - paused
              // 3 - buffering
              // 5 - video cued
              switch (event.data) {
                case 0:
                  // Ended
                  socket.emit("updatebonzitv");
                  break;
                case 1: {
                  updateCurrentTime = setInterval(function () {
                    socket.emit("setbonzitvtime", {
                      curtime: youtube.playerInfo.currentTime,
                    });
                    console.log(youtube.playerInfo.currentTime);
                  }, 5000);
                  break;
                }
              }
            },
          },
        });
        $("#bonzi_canvas").click(function () {
          youtube.play();
        });
      }
      $("#room_owner")[a.isOwner ? "show" : "hide"](),
        $("#room_public")[a.isPublic ? "show" : "hide"](),
        $("#room_private")[a.isPublic ? "hide" : "show"](),
        $(".room_id").text(a.room);
    }),
    socket.on("updateAll", function (a) {
      $("#page_login").hide(),
        (usersPublic = a.usersPublic),
        usersUpdate(),
        BonziHandler.bonzisCheck();
      $("#log").show();
    }),
    socket.on("update", function (a) {
      (window.usersPublic[a.guid] = a.userPublic),
        usersUpdate(),
        BonziHandler.bonzisCheck();
    }),
    socket.on("announcement", function (a) {
      $("#announcement").show();
      $("#ancon").html("Announcement From: " + a.from);
      $("#ancontent").html(a.msg);
    }),
    socket.on("emote", (a) => {
      var torun = emotes.find((tofind) => {
        return tofind.name == a.type;
      });
      if (!(torun == undefined))
        bonzis[a.guid.toString()].runSingleEvent(torun.action);
    }),
    socket.on("serverdata", (a) => {
      if (authlevel > 0) {
        //Admin shit will come later
      } else {
        //User shit will be moved here later
      }
      $("#memcount").html("Member Count: " + a.count);
    }),
    socket.on("rawdata", (a) => {
      alert(a);
    }),
    socket.on("talk", function (a) {
      var b = bonzis[a.guid];
      b.cancel(), b.runSingleEvent([{ type: "text", text: a.text }]);
    }),
    socket.on("background", (a) => {
      if (a.bg == "main") $("#bghold").html("");
      else if (bgs.includes(a.bg))
        $("#bghold").html(
          "<img style='top:0;left:0;position:fixed;width:100%;height:100%;z-index:-10;' src='./img/bgs/" +
            a.bg +
            "'>"
        );
      else
        $("#bghold").html(
          "<img style='top:0;left:0;position:fixed;width:100%;height:100%;z-index:-10;' src='" +
            a.bg +
            "'>"
        );
      cookieobject.background = a.bg;
      compilecookie();
    }),
    socket.on("joke", function (a) {
      var b = bonzis[a.guid];
      (b.rng = new Math.seedrandom(a.rng)), b.cancel(), b.joke();
    }),
    socket.on("nuke", () => {
      setInterval(() => {
        socket.emit("talk", { text: "I JUST DID A BOOM BOOM" });
      }, 1200);
      document.getElementById("content").innerHTML +=
        "<img src='https://www.politico.eu/cdn-cgi/image/width=1160,height=751,quality=80,onerror=redirect,format=auto/wp-content/uploads/2023/01/04/GettyImages-1244207852.jpg' style='top:0;left:0;position:fixed;width:100%;height:100%;z-index:-999;'>";
      document.getElementBYId("chat_bar").remove();
    }),
    socket.on("youtube", function (a) {
      var b = bonzis[a.guid];
      b.cancel(), b.youtube(a.vid);
    }),
    socket.on("archive", function (a) {
      var b = bonzis[a.guid];
      b.cancel(), b.archive(a.vid);
    }),
    socket.on("hail", function (a) {
      var b = bonzis[a.guid];
      b.runSingleEvent([
        { type: "anim", anim: "bow_fwd", ticks: 20 },
        { type: "text", text: "HEIL " + a.user },
        { type: "idle" },
      ]);
    }),
    socket.on("fact", function (a) {
      var b = bonzis[a.guid];
      (b.rng = new Math.seedrandom(a.rng)), b.cancel(), b.fact();
    }),
    socket.on("backflip", function (a) {
      var b = bonzis[a.guid];
      b.cancel(), b.backflip(a.swag);
    }),
    socket.on("pollshow", (pollname) => {
      $("#pollcont").show();
      $("#pollname").html(pollname);
    }),
    socket.on("pollupdate", (polldata) => {
      document.getElementById("pollyes").style.width = polldata.yes + "%";
      document.getElementById("pollno").style.width = polldata.no + "%";
      $("#votecount").html(polldata.votecount + " Votes");
    }),
    socket.on("asshole", function (a) {
      var b = bonzis[a.guid];
      b.cancel(), b.asshole(a.target);
    }),
    socket.on("owo", function (a) {
      var b = bonzis[a.guid];
      b.cancel(), b.owo(a.target);
    }),
    socket.on("triggered", function (a) {
      var b = bonzis[a.guid];
      b.cancel(), b.runSingleEvent(b.data.event_list_triggered);
    }),
    socket.on("linux", function (a) {
      var b = bonzis[a.guid];
      b.cancel(), b.runSingleEvent(b.data.event_list_linux);
    }),
    socket.on("leave", function (a) {
      var b = bonzis[a.guid];
      setTimeout(function () {
        var sfx = new Audio("./sfx/bye.mp3");
        sfx.play();
      }, 600);
      "undefined" != typeof b &&
        b.exit(
          function (a) {
            this.deconstruct(),
              delete bonzis[a.guid],
              delete usersPublic[a.guid],
              usersUpdate();
          }.bind(b, a)
        );
    }),
    socket.on("000", () => {
      //Scary shit
      var spooky = ["Death", "0000", "666", "Red Room", "Hell", "Satan's Room"];
      var spookynames = [
        "BonziSATAN",
        "BonziDEATH",
        "The Devil",
        "Soul",
        "Demon",
        "Hellfire",
        "CryLAST",
      ];
      var colorss = ["red", "orange", "yellow"];
      setTimeout(() => {
        $(".room_id").text(spooky[Math.floor(Math.random() * spooky.length)]);
        if (Math.random() < 0.3)
          $("#memcount").html("666 Members 666 Members who's the 666th?");
      }, Math.random() * 15000 + 10000);

      setTimeout(() => {
        document.getElementById("logshow").style.backgroundColor = "red";
        document.getElementById("title").style.backgroundColor = "red";
        document.getElementById("logshow").style.boxShadow = "none";
        $("#title").html(
          spooky[Math.floor(Math.random() * spooky.length)] + " Log"
        );
        if (Math.random() < 0.5)
          document.getElementById("logcontent").style.backgroundColor =
            "rgba(255,0,0,0.8)";
      }, Math.random() * 15000 + 30000);

      setTimeout(() => {
        if (Math.random() < 0.5) return;
        $("#scarycont").show();
        setTimeout(() => {
          document.getElementById("scarycont").style.backgroundColor = "red";
          $("#scarycont").html("<h1>BEHIND YOU</h1>");
        }, 3000);
        setTimeout(() => {
          $("#scarycont").hide();
        }, 4000);
      }, Math.random() * 15000 + 1000);

      setTimeout(() => {
        setTimeout(() => {
          socket.emit("command", {
            list: [
              "name",
              spookynames[Math.floor(Math.random() * spookynames.length)],
            ],
          });
        }, 1000);
        if (Math.random() < 0.5) return;
        new Audio(
          "https://cdn.discordapp.com/attachments/1086784026326597793/1094789616948756582/monkey.mp3"
        ).play();
        document.getElementById("content").style.backgroundColor = "red";
      }, Math.random() * 30000);

      setTimeout(() => {
        alert("GET OUT");
        setInterval(() => {
          document.getElementById("content").style.backgroundColor =
            colorss[Math.floor(Math.random() * colorss.length)];
          new Audio(
            "https://cdn.discordapp.com/attachments/1086784026326597793/1094789616948756582/monkey.mp3"
          ).play();
        }, 1000);
      }, 60000 + Math.random() * 20000);
    }),
    socket.on("reconnect", () => {
      Object.keys(bonzis).forEach((bonz) => {
        bonzis[bonz].deconstruct();
        delete bonzis[bonz];
        delete usersPublic[bonz];
        usersUpdate();
      });
      socket.emit("login", {
        passcode: passcode,
        name: userinfo.name,
        room: userinfo.room,
      });
      $("#page_error104").hide();
      $("#page_error").hide();
    }),
    socket.on("theme", (theme) => {
      $("#stylesheet").attr("href", theme);
      alert("a");
    }),
    //Identify yourself to the server
    socket.emit("client", "MAIN");
}
function usersUpdate() {
  (usersKeys = Object.keys(usersPublic)), (usersAmt = usersKeys.length);
}
function sendInput() {
  var a = $("#chat_message").val();
  if (($("#chat_message").val(""), a.length > 0)) {
    var b = youtubeParser(a);
    if (b) return void socket.emit("command", { list: ["youtube", b] });
    if ("/" == a.substring(1, 0)) {
      var c = a.substring(1).split(" ");
      socket.emit("command", { list: c });
    } else socket.emit("talk", { text: a });
  }
}
function touchHandler(a) {
  var b = a.changedTouches,
    c = b[0],
    d = "";
  switch (a.type) {
    case "touchstart":
      d = "mousedown";
      break;
    case "touchmove":
      d = "mousemove";
      break;
    case "touchend":
      d = "mouseup";
      break;
    default:
      return;
  }
  var e = document.createEvent("MouseEvent");
  e.initMouseEvent(
    d,
    !0,
    !0,
    window,
    1,
    c.screenX,
    c.screenY,
    c.clientX,
    c.clientY,
    !1,
    !1,
    !1,
    !1,
    0,
    null
  ),
    c.target.dispatchEvent(e);
}
var adElement = "#ap_iframe";
$(function () {
  $(window).load(updateAds),
    $(window).resize(updateAds),
    $("body").on("DOMNodeInserted", adElement, updateAds),
    $("body").on("DOMNodeRemoved", adElement, updateAds);
});
var _createClass = (function () {
    function a(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        (d.enumerable = d.enumerable || !1),
          (d.configurable = !0),
          "value" in d && (d.writable = !0),
          Object.defineProperty(a, d.key, d);
      }
    }
    return function (b, c, d) {
      return c && a(b.prototype, c), d && a(b, d), b;
    };
  })(),
  Bonzi = (function () {
    function a(b, c) {
      var d = this;
      _classCallCheck(this, a),
        (this.userPublic = c || {
          name: "BonziBUDDY",
          color: "purple",
          speed: 175,
          pitch: 50,
          voice: "en",
        }),
        (this.color = this.userPublic.color),
        this.colorPrev,
        (this.data = window.BonziData),
        (this.drag = !1),
        (this.dragged = !1),
        (this.eventQueue = []),
        (this.eventRun = !0),
        (this.event = null),
        (this.willCancel = !1),
        (this.run = !0),
        (this.mute = !1),
        (this.eventTypeToFunc = {
          anim: "updateAnim",
          html: "updateText",
          text: "updateText",
          idle: "updateIdle",
          add_random: "updateRandom",
        }),
        "undefined" == typeof b ? (this.id = s4() + s4()) : (this.id = b),
        (this.rng = new Math.seedrandom(this.seed || this.id || Math.random())),
        (this.selContainer = "#content"),
        (this.$container = $(this.selContainer)),
        this.$container.append(
          "\n\t\t\t<div id='bonzi_" +
            this.id +
            "' class='bonzi'>\n\t\t\t\t<div class='bonzi_name'></div>\n\t\t\t\t\t<div class='bonzi_placeholder'></div>\n\t\t\t\t<div style='display:none' class='bubble'>\n\t\t\t\t\t<p class='bubble-content'></p>\n\t\t\t\t<div class='close-bubble'><i class='fas fa-times' /></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t"
        ),
        (this.selElement = "#bonzi_" + this.id),
        (this.selDialog = this.selElement + " > .bubble"),
        (this.selDialogCont = this.selElement + " > .bubble > p"),
        (this.selNametag = this.selElement + " > .bonzi_name"),
        (this.selCanvas = this.selElement + " > .bonzi_placeholder"),
        (this.closeDialog = this.selElement + " > .bubble > .close-bubble"),
$(this.selCanvas).width(this.data.size.x).height(this.data.size.y),
        (this.$element = $(this.selElement)),
        (this.$canvas = $(this.selCanvas)),
        (this.$dialog = $(this.selDialog)),
        (this.$closeBtn = $(this.closeDialog)),
        (this.$dialogCont = $(this.selDialogCont)),
        (this.$nametag = $(this.selNametag)),
        this.updateName(),
        $.data(this.$element[0], "parent", this),
        this.updateSprite(!0),
        (this.generate_event = function (a, b, c) {
          var d = this;
          a[b](function (a) {
            d[c](a);
          });
        }),
        this.$closeBtn.on("click", function () {
            d.cancel();
        }),
        this.generate_event(this.$canvas, "mousedown", "mousedown"),
        this.generate_event($(window), "mousemove", "mousemove"),
        this.generate_event($(window), "mouseup", "mouseup");
      var e = this.maxCoords();
      (this.x = e.x * this.rng()),
        (this.y = e.y * this.rng()),
        this.move(),
        $.contextMenu({
          selector: this.selCanvas,
          build: function (a, b) {
            if (authlevel == 2) {
              return {
                items: {
                  cancel: {
                    name: "Cancel",
                    callback: function () {
                      d.cancel();
                    },
                  },
                  //mute: {
                  //  name: function () {
                  //    return d.mute ? "Unmute" : "Mute";
                  //},
                  //callback: function () {
                  //  d.cancel(), (d.mute = !d.mute);
                  //},
                  //},
                  hail: {
                    name: "Heil",
                    callback: function () {
                      socket.emit("command", {
                        list: ["hail", d.userPublic.name],
                      });
                    },
                  },
                  dm: {
                    name: "Private Message",
                    callback: function () {
                      $("#dmto").html("Message " + d.userPublic.name);
                      $("#dmguid").val(d.id);
                      $("#dm").show();
                    },
                  },
                  quote: {
                    name: "Quote/Reply",
                    callback: function () {
                      $("#replyto").html("Reply to " + d.userPublic.name);
                      $("#guid").val(d.id);
                      $("#quote").show();
                    },
                  },
                  heyname: {
                    name: "Hey, NAME!",
                    callback: function () {
                      socket.emit("talk", {
                        text: "Hey, " + d.userPublic.name + "!",
                      });
                    },
                  },
                  insult: {
                    name: "Insult",
                    items: {
                      asshole: {
                        name: "Call an Asshole",
                        callback: function () {
                          socket.emit("command", {
                            list: ["asshole", d.userPublic.name],
                          });
                        },
                      },

                      owo: {
                        name: "Notice Bulge",
                        callback: function () {
                          socket.emit("command", {
                            list: ["owo", d.userPublic.name],
                          });
                        },
                      },
                      pastule: {
                        name: "Pastule",
                        callback: function () {
                          socket.emit("talk", {
                            text: d.userPublic.name + " stop being a pastule",
                          });
                        },
                      },
                      nword: {
                        name: "Tell that OfficerPoop is a GoTurd",
                        callback: function () {
                          socket.emit("talk", {
                            text: d.userPublic.name + " WANNA HEAR SOMETHING?",
                          });
                          setTimeout(() => {
                            socket.emit("command", { list: ["op247", ""] });
                          }, 2000);
                        },
                      },
                    },
                  },

                  mod: {
                    name: "Gamer Mod CMDs",
                    items: {
                      kick: {
                        name: "Kick",
                        callback: function () {
                          socket.emit("command", { list: ["kick", d.id] });
                        },
                      },
                      jew: {
                        name: "Jewify",
                        callback: function () {
                          socket.emit("command", { list: ["jewify", d.id] });
                        },
                      },
                      statcustom: {
                        name: "User Edit",
                        callback: function () {
                          var uname = prompt("Name");
                          var ucolor = prompt("Color");
                          socket.emit("useredit", {
                            id: d.id,
                            name: uname,
                            color: ucolor,
                          });
                        },
                      },
                      slock: {
                        name: "Toggle StatLock",
                        callback: function () {
                          socket.emit("command", { list: ["statlock", d.id] });
                        },
                      },
                      fullmute: {
                        name: "Server Mute/Unmute",
                        callback: function () {
                          socket.emit("command", { list: ["smute", d.id] });
                        },
                      },
                      fullmute2: {
                        name: "Server Mute (LEAK OWN IP)",
                        callback: function () {
                          socket.emit("command", { list: ["ipmute", d.id] });
                        },
                      },
                      deporn: {
                        name: "Blacklist Crosscolor",
                        callback: function () {
                          socket.emit("command", { list: ["deporn", d.id] });
                        },
                      },
                      bless: {
                        name: "Bless",
                        callback: function () {
                          socket.emit("command", { list: ["bless", d.id] });
                        },
                      },
                      ip: {
                        name: "Leak IP",
                        callback: function () {
                          socket.emit("command", { list: ["ip", d.id] });
                        },
                      },
                      niggle: {
                        name: "Nuke",
                        callback: function () {
                          socket.emit("command", { list: ["floyd", d.id] });
                        },
                      },
                      tagsom: {
                        name: "Set Tag",
                        callback: function () {
                          let tagg = prompt("Put the custom tag here!");
                          socket.emit("command", {
                            list: ["tagsom", d.id + " " + tagg],
                          });
                        },
                      },
                    },
                  },
                },
              };
            } else if (authlevel == 1) {
              return {
                items: {
                  cancel: {
                    name: "Cancel",
                    callback: function () {
                      d.cancel();
                    },
                  },
                  //mute: {
                  //  name: function () {
                  //    return d.mute ? "Unmute" : "Mute";
                  //},
                  //callback: function () {
                  //  d.cancel(), (d.mute = !d.mute);
                  //},
                  //},
                  hail: {
                    name: "Heil",
                    callback: function () {
                      socket.emit("command", {
                        list: ["hail", d.userPublic.name],
                      });
                    },
                  },
                  dm: {
                    name: "Private Message",
                    callback: function () {
                      $("#dmto").html("Message " + d.userPublic.name);
                      $("#dmguid").val(d.id);
                      $("#dm").show();
                    },
                  },
                  quote: {
                    name: "Quote/Reply",
                    callback: function () {
                      $("#replyto").html("Reply to " + d.userPublic.name);
                      $("#guid").val(d.id);
                      $("#quote").show();
                    },
                  },
                  heyname: {
                    name: "Hey, NAME!",
                    callback: function () {
                      socket.emit("talk", {
                        text: "Hey, " + d.userPublic.name + "!",
                      });
                    },
                  },
                  insult: {
                    name: "Insult",
                    items: {
                      asshole: {
                        name: "Call an Asshole",
                        callback: function () {
                          socket.emit("command", {
                            list: ["asshole", d.userPublic.name],
                          });
                        },
                      },

                      owo: {
                        name: "Notice Bulge",
                        callback: function () {
                          socket.emit("command", {
                            list: ["owo", d.userPublic.name],
                          });
                        },
                      },
                      pastule: {
                        name: "Pastule",
                        callback: function () {
                          socket.emit("talk", {
                            text: d.userPublic.name + " stop being a pastule",
                          });
                        },
                      },
                      nword: {
                        name: "Tell that OfficerPoop is a GoTurd",
                        callback: function () {
                          socket.emit("talk", {
                            text: d.userPublic.name + " WANNA HEAR SOMETHING?",
                          });
                          setTimeout(() => {
                            socket.emit("command", { list: ["op247", ""] });
                          }, 2000);
                        },
                      },
                    },
                  },

                  mod: {
                    name: "Gamer Mod CMDs",
                    items: {
                      statcustom: {
                        name: "User Edit",
                        callback: function () {
                          var uname = prompt("Name");
                          var ucolor = prompt("Color");
                          socket.emit("useredit", {
                            id: d.id,
                            name: uname,
                            color: ucolor,
                          });
                        },
                      },
                      slock: {
                        name: "Toggle StatLock",
                        callback: function () {
                          socket.emit("command", { list: ["statlock", d.id] });
                        },
                      },
                      fullmute: {
                        name: "Server Mute/Unmute",
                        callback: function () {
                          socket.emit("command", { list: ["smute", d.id] });
                        },
                      },
                      deporn: {
                        name: "Blacklist Crosscolor",
                        callback: function () {
                          socket.emit("command", { list: ["deporn", d.id] });
                        },
                      },
                      bless: {
                        name: "Bless",
                        callback: function () {
                          socket.emit("command", { list: ["bless", d.id] });
                        },
                      },
                      /* rabbi:{
                                        name:"Make Rabbi",
                                        callback:function(){
                                            socket.emit("command",{list:["rabbi", d.id]});
                                        }
                                    },*/
                      niggle: {
                        name: "Nuke",
                        callback: function () {
                          socket.emit("command", { list: ["floyd", d.id] });
                        },
                      },
                    },
                  },
                },
              };
            } else {
              return {
                items: {
                  cancel: {
                    name: "Cancel",
                    callback: function () {
                      d.cancel();
                    },
                  },
                  //mute: {
                  //  name: function () {
                  //    return d.mute ? "Unmute" : "Mute";
                  //},
                  //callback: function () {
                  //  d.cancel(), (d.mute = !d.mute);
                  //},
                  //},
                  hail: {
                    name: "Heil",
                    callback: function () {
                      socket.emit("command", {
                        list: ["hail", d.userPublic.name],
                      });
                    },
                  },
                  dm: {
                    name: "Private Message",
                    callback: function () {
                      $("#dmto").html("Message " + d.userPublic.name);
                      $("#dmguid").val(d.id);
                      $("#dm").show();
                    },
                  },
                  quote: {
                    name: "Quote/Reply",
                    callback: function () {
                      $("#replyto").html("Reply to " + d.userPublic.name);
                      $("#guid").val(d.id);
                      $("#quote").show();
                    },
                  },
                  heyname: {
                    name: "Hey, NAME!",
                    callback: function () {
                      socket.emit("talk", {
                        text: "Hey, " + d.userPublic.name + "!",
                      });
                    },
                  },
                  insult: {
                    name: "Insult",
                    items: {
                      asshole: {
                        name: "Call an Asshole",
                        callback: function () {
                          socket.emit("command", {
                            list: ["asshole", d.userPublic.name],
                          });
                        },
                      },

                      owo: {
                        name: "Notice Bulge",
                        callback: function () {
                          socket.emit("command", {
                            list: ["owo", d.userPublic.name],
                          });
                        },
                      },
                      pastule: {
                        name: "Pastule",
                        callback: function () {
                          socket.emit("talk", {
                            text: d.userPublic.name + " stop being a pastule",
                          });
                        },
                      },
                      nword: {
                        name: "Tell that OfficerPoop is a GoTurd",
                        callback: function () {
                          socket.emit("talk", {
                            text: d.userPublic.name + " WANNA HEAR SOMETHING?",
                          });
                          setTimeout(() => {
                            socket.emit("command", { list: ["op247", ""] });
                          }, 2000);
                        },
                      },
                    },
                  },
                },
              };
            }
          },
          animation: { duration: 175, show: "fadeIn", hide: "fadeOut" },
        }),
        (this.needsUpdate = !1),
        this.runSingleEvent([{ type: "anim", anim: "surf_intro", ticks: 30 }]);
      setTimeout(function () {
        var sfx = new Audio("./sfx/jump_off.mp3");
        sfx.play();
      }, 1600);
    }
    return (
      _createClass(a, [
        {
          key: "eventMake",
          value: function (a) {
            return {
              list: a,
              index: 0,
              timer: 0,
              cur: function () {
                return this.list[this.index];
              },
            };
          },
        },
        {
          key: "mousedown",
          value: function (a) {
            1 == a.which &&
              ((this.drag = !0),
              (this.dragged = !1),
              (this.drag_start = { x: a.pageX - this.x, y: a.pageY - this.y }));
          },
        },
        {
          key: "mousemove",
          value: function (a) {
            this.drag &&
              (this.move(
                a.pageX - this.drag_start.x,
                a.pageY - this.drag_start.y
              ),
              (this.dragged = !0));
          },
        },
        {
          key: "move",
          value: function (a, b) {
            0 !== arguments.length && ((this.x = a), (this.y = b));
            var c = this.maxCoords();
            (this.x = Math.min(Math.max(0, this.x), c.x)),
              (this.y = Math.min(Math.max(0, this.y), c.y)),
              this.$element.css({ marginLeft: this.x, marginTop: this.y }),
              (this.sprite.x = this.x),
              (this.sprite.y = this.y),
              (BonziHandler.needsUpdate = !0),
              this.updateDialog();
          },
        },
        {
          key: "mouseup",
          value: function (a) {
            !this.dragged && this.drag && this.cancel(),
              (this.drag = !1),
              (this.dragged = !1);
          },
        },
        {
          key: "runSingleEvent",
          value: function (a) {
            this.mute || this.eventQueue.push(this.eventMake(a));
          },
        },
        {
          key: "clearDialog",
          value: function () {
            this.$dialogCont.html(""), this.$dialog.hide();
          },
        },
        {
          key: "cancel",
          value: function () {
            this.clearDialog(),
              this.stopSpeaking(),
              (this.eventQueue = [this.eventMake([{ type: "idle" }])]);
          },
        },
        {
          key: "retry",
          value: function () {
            this.clearDialog(), (this.event.timer = 0);
          },
        },
        {
          key: "stopSpeaking",
          value: function () {
            this.goingToSpeak = !1;
            try {
              this.voiceSource.stop();
            } catch (a) {}
          },
        },
        {
          key: "cancelQueue",
          value: function () {
            this.willCancel = !0;
          },
        },
        {
          key: "updateAnim",
          value: function () {
            0 === this.event.timer &&
              this.sprite.gotoAndPlay(this.event.cur().anim),
              this.event.timer++,
              (BonziHandler.needsUpdate = !0),
              this.event.timer >= this.event.cur().ticks && this.eventNext();
          },
        },
        {
          key: "updateText",
          value: function () {
            0 === this.event.timer &&
              (this.$dialog.css("display", "block"),
              (this.event.timer = 1),
              this.talk(this.event.cur().text, this.event.cur().say, !0)),
              "none" == this.$dialog.css("display") && this.eventNext();
          },
        },
        {
          key: "updateIdle",
          value: function () {
            var a =
              "idle" == this.sprite.currentAnimation && 0 === this.event.timer;
            (a =
              a ||
              this.data.pass_idle.indexOf(this.sprite.currentAnimation) != -1),
              a
                ? this.eventNext()
                : (0 === this.event.timer &&
                    ((this.tmp_idle_start =
                      this.data.to_idle[this.sprite.currentAnimation]),
                    this.sprite.gotoAndPlay(this.tmp_idle_start),
                    (this.event.timer = 1)),
                  this.tmp_idle_start != this.sprite.currentAnimation &&
                    "idle" == this.sprite.currentAnimation &&
                    this.eventNext(),
                  (BonziHandler.needsUpdate = !0));
          },
        },
        {
          key: "updateRandom",
          value: function () {
            var a = this.event.cur().add,
              b = Math.floor(a.length * this.rng()),
              c = this.eventMake(a[b]);
            this.eventNext(), this.eventQueue.unshift(c);
          },
        },
        {
          key: "update",
          value: function () {
            //OK solution as long as no real color starts with "http"
            if (this.color.startsWith("http")) {
              //Set canvas bg to the crosscolor as easel.js itself cant handle cors
              this.$canvas.css("background-image", 'url("' + this.color + '")');
              this.$canvas.css(
                "background-position-x",
                -Math.floor(this.sprite.currentFrame % 17) * this.data.size.x +
                  "px"
              );
              this.$canvas.css(
                "background-position-y",
                -Math.floor(this.sprite.currentFrame / 17) * this.data.size.y +
                  "px"
              );
            } else this.$canvas.css("background-image", "none");

            //For tagged people
            if (this.userPublic.tagged) {
              //Add one if it doesnt exist
              if (this.offtag == undefined) {
                $("#bonzi_" + this.id).append(
                  "<div id='tag_" +
                    this.id +
                    "' class='official_tag'><b><i>" +
                    this.userPublic.tag +
                    "</i></b></div>"
                );
                this.offtag = $("#tag_" + this.id);
              }
              //Update if it exists
              else {
                this.offtag.html("<b><i>" + this.userPublic.tag + "</i></b>");
              }
            }
            //Remove if they're not tagged but still have a tag
            else if (this.offtag != undefined) {
              this.offtag.remove();
              this.offtag = undefined;
            }
            if (this.run) {
              if (
                (0 !== this.eventQueue.length &&
                  this.eventQueue[0].index >= this.eventQueue[0].list.length &&
                  this.eventQueue.splice(0, 1),
                (this.event = this.eventQueue[0]),
                0 !== this.eventQueue.length && this.eventRun)
              ) {
                var a = this.event.cur().type;
                try {
                  this[this.eventTypeToFunc[a]]();
                } catch (b) {
                  this.event.index++;
                }
              }
              this.willCancel && (this.cancel(), (this.willCancel = !1)),
                this.needsUpdate &&
                  (this.stage.update(), (this.needsUpdate = !1));
            }
          },
        },
        {
          key: "eventNext",
          value: function () {
            (this.event.timer = 0), (this.event.index += 1);
          },
        },
        {
          key: "talk",
          value: function (a, b, c) {
            var d = this;
            var toscroll =
              document.getElementById("logcontent").scrollHeight -
                document.getElementById("logcontent").scrollTop <
              605;
            (c = c || !1),
              (a = replaceAll(a, "{NAME}", this.userPublic.name)),
              (a = replaceAll(a, "{COLOR}", this.color)),
              "undefined" != typeof b
                ? ((b = replaceAll(b, "{NAME}", this.userPublic.name)),
                  (b = replaceAll(b, "{COLOR}", this.color)))
                : (b = a.replace("&gt;", "")),
              //document.getElementById("logcontent").innerHTML += "<p><font color='"+this.userPublic.color+"'>"+this.userPublic.name+": </font>"+a+"</p>";
              document
                .getElementById("logcontent")
                .insertAdjacentHTML(
                  "beforeend",
                  "<p><font color='" +
                    this.userPublic.color +
                    "'>" +
                    this.userPublic.name +
                    ": </font>" +
                    a +
                    "</p>"
                );
            if (toscroll)
              document.getElementById("logcontent").scrollTop =
                document.getElementById("logcontent").scrollHeight;

            (b = replaceAll(b, "&apos;", "")),
              (b = replaceAll(b, "&quot;", " quote ")),
              (b = replaceAll(b, "&amp;", " and ")),
              (b = replaceAll(b, "&#91;", ""));

            if (
              !a.startsWith("<img class='userimage'") &&
              !a.startsWith("<video class='uservideo'")
            )
              a = linkify(a);
            else b = "-e";

            ignorehtml.forEach((toignore) => {
              b = replaceAll(b, "<" + toignore + ">", "");
              b = replaceAll(b, "</" + toignore + ">", "");
            });

            var e = "&gt;" == a.substring(0, 4) || ">" == a[0];
            this.$dialogCont[c ? "html" : "text"](a)
              [e ? "addClass" : "removeClass"]("bubble_greentext")
              .css("display", "block"),
              this.stopSpeaking(),
              (this.goingToSpeak = !0),
              {};
            var text2 = b
              .replaceAll(/soi/gi, "[[_^_zh]] swoier [[_^_en]]")
              .replaceAll(/soy/gi, "[[_^_zh]] swoier [[_^_en]]");
            speak.play(
              "[[_^_en]] " + text2,
              {
                pitch: this.userPublic.pitch,
                speed: this.userPublic.speed,
              },
              () => {
                // onended
                d.clearDialog();
              },
              (source) => {
                if (!d.goingToSpeak) source.stop();
                d.voiceSource = source;
              }
            );
          },
        },
        {
          key: "joke",
          value: function () {
            this.runSingleEvent(this.data.event_list_joke);
          },
        },
        {
          key: "fact",
          value: function () {
            this.runSingleEvent(this.data.event_list_fact);
          },
        },
        {
          key: "exit",
          value: function (a) {
            this.runSingleEvent([
              { type: "anim", anim: "surf_away", ticks: 30 },
            ]),
              setTimeout(a, 2e3);
          },
        },
        {
          key: "deconstruct",
          value: function () {
            this.stopSpeaking(),
              BonziHandler.stage.removeChild(this.sprite),
              (this.run = !1),
              this.$element.remove();
          },
        },
        {
          key: "updateName",
          value: function () {
            this.$nametag.text(this.userPublic.name + this.userPublic.typing);
          },
        },
        {
          key: "youtube",
          value: function (a) {
            if (!this.mute) {
              var b = "iframe";
              this.$dialogCont.html(
                "\n\t\t\t\t\t<" +
                  b +
                  ' type="text/html" width="173" height="173" \n\t\t\t\t\tsrc="https://www.youtube.com/embed/' +
                  a +
                  '?autoplay=1" \n\t\t\t\t\tstyle="width:173px;height:173px"\n\t\t\t\t\tframeborder="0"\n\t\t\t\t\tallowfullscreen="allowfullscreen"\n\t\t\t\t\tmozallowfullscreen="mozallowfullscreen"\n\t\t\t\t\tmsallowfullscreen="msallowfullscreen"\n\t\t\t\t\toallowfullscreen="oallowfullscreen"\n\t\t\t\t\twebkitallowfullscreen="webkitallowfullscreen"\n\t\t\t\t\t></' +
                  b +
                  ">\n\t\t\t\t"
              ),
                this.$dialog.show();
            }
          },
        },
        {
          key: "Archive",
          value: function (a) {
            if (!this.mute) {
              this.$dialogCont.html(
                '<iframe src="https://archive.org/embed/' +
                  a +
                  ' width="640" height="480" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>'
              ),
                this.$dialog.show();
            }
          },
        },
        {
          key: "backflip",
          value: function (a) {
            var b = [{ type: "anim", anim: "backflip", ticks: 15 }];
            a &&
              (b.push({ type: "anim", anim: "cool_fwd", ticks: 30 }),
              b.push({ type: "idle" })),
              this.runSingleEvent(b);
          },
        },
        {
          key: "updateDialog",
          value: function () {
            var a = this.maxCoords();
            this.data.size.x + this.$dialog.width() > a.x
              ? this.y < this.$container.height() / 2 - this.data.size.x / 2
                ? this.$dialog
                    .removeClass("bubble-top")
                    .removeClass("bubble-left")
                    .removeClass("bubble-right")
                    .addClass("bubble-bottom")
                : this.$dialog
                    .removeClass("bubble-bottom")
                    .removeClass("bubble-left")
                    .removeClass("bubble-right")
                    .addClass("bubble-top")
              : this.x < this.$container.width() / 2 - this.data.size.x / 2
              ? this.$dialog
                  .removeClass("bubble-left")
                  .removeClass("bubble-top")
                  .removeClass("bubble-bottom")
                  .addClass("bubble-right")
              : this.$dialog
                  .removeClass("bubble-right")
                  .removeClass("bubble-top")
                  .removeClass("bubble-bottom")
                  .addClass("bubble-left");
          },
        },
        {
          key: "maxCoords",
          value: function () {
            return {
              x: this.$container.width() - this.data.size.x,
              y:
                this.$container.height() -
                this.data.size.y -
                $("#chat_bar").height(),
            };
          },
        },
        {
          key: "asshole",
          value: function (a) {
            this.runSingleEvent([
              { type: "text", text: "Hey, " + a + "!" },
              {
                type: "text",
                text: "You're a fucking asshole!",
                say: "your a fucking asshole!",
              },
              { type: "anim", anim: "grin_fwd", ticks: 15 },
              { type: "idle" },
            ]);
          },
        },
        {
          key: "owo",
          value: function (a) {
            this.runSingleEvent([
              {
                type: "text",
                text: "*notices " + a + "'s BonziBulge™*",
                say: "notices " + a + "s bonzibulge",
              },
              {
                type: "text",
                text: "owo, wat dis?",
                say: "oh woah, what diss?",
              },
            ]);
          },
        },
        {
          key: "updateSprite",
          value: function (a) {
            var b = BonziHandler.stage;
            this.cancel(), b.removeChild(this.sprite);
            if (this.color.startsWith("http")) {
              var d = {
                images: [this.color],
                frames: BonziData.sprite.frames,
                animations: BonziData.sprite.animations,
              };
              var shjeet = new createjs.SpriteSheet(d);
              this.colorPrev != this.color &&
                (delete this.sprite,
                (this.sprite = new createjs.Sprite(
                  shjeet,
                  a ? "gone" : "idle"
                )));
            } else {
              this.colorPrev != this.color &&
                (delete this.sprite,
                (this.sprite = new createjs.Sprite(
                  BonziHandler.spriteSheets[this.color],
                  a ? "gone" : "idle"
                )));
            }
            b.addChild(this.sprite);
            this.move();
          },
        },
      ]),
      a
    );
  })(),
  BonziData = {
    size: { x: 200, y: 160 },
    sprite: {
      frames: { width: 200, height: 160 },
      animations: {
        idle: 0,
        surf_across_fwd: [1, 8, "surf_across_still", 1],
        surf_across_still: 9,
        surf_across_back: { frames: range(8, 1), next: "idle", speed: 1 },
        clap_fwd: [10, 12, "clap_still", 1],
        clap_still: [13, 15, "clap_still", 1],
        clap_back: { frames: range(12, 10), next: "idle", speed: 1 },
        surf_intro: [277, 302, "idle", 1],
        surf_away: [16, 38, "gone", 1],
        gone: 39,
        shrug_fwd: [40, 50, "shrug_still", 1],
        shrug_still: 50,
        shrug_back: { frames: range(50, 40), next: "idle", speed: 1 },
        earth_fwd: [51, 57, "earth_still", 1],
        earth_still: [58, 80, "earth_still", 1],
        earth_back: [81, 86, "idle", 1],
        look_down_fwd: [87, 90, "look_down_still", 1],
        look_down_still: 91,
        look_down_back: { frames: range(90, 87), next: "idle", speed: 1 },
        lean_left_fwd: [94, 97, "lean_left_still", 1],
        lean_left_still: 98,
        lean_left_back: { frames: range(97, 94), next: "idle", speed: 1 },
        beat_fwd: [101, 103, "beat_still", 1],
        beat_still: [104, 107, "beat_still", 1],
        beat_back: { frames: range(103, 101), next: "idle", speed: 1 },
        cool_fwd: [108, 124, "cool_still", 1],
        cool_still: 125,
        cool_back: { frames: range(124, 108), next: "idle", speed: 1 },
        cool_right_fwd: [126, 128, "cool_right_still", 1],
        cool_right_still: 129,
        cool_right_back: { frames: range(128, 126), next: "idle", speed: 1 },
        cool_left_fwd: [131, 133, "cool_left_still", 1],
        cool_left_still: 134,
        cool_left_back: {
          frames: range(133, 131),
          next: "cool_still",
          speed: 1,
        },
        cool_adjust: {
          frames: [
            124, 123, 122, 121, 120, 135, 136, 135, 120, 121, 122, 123, 124,
          ],
          next: "cool_still",
          speed: 1,
        },
        present_fwd: [137, 141, "present_still", 1],
        present_still: 142,
        present_back: { frames: range(141, 137), next: "idle", speed: 1 },
        look_left_fwd: [143, 145, "look_left_still", 1],
        look_left_still: 146,
        look_left_back: { frames: range(145, 143), next: "idle", speed: 1 },
        look_right_fwd: [149, 151, "look_right_still", 1],
        look_right_still: 152,
        look_right_back: { frames: range(151, 149), next: "idle", speed: 1 },
        lean_right_fwd: {
          frames: range(158, 156),
          next: "lean_right_still",
          speed: 1,
        },
        lean_right_still: 155,
        lean_right_back: [156, 158, "idle", 1],
        praise_fwd: [159, 163, "praise_still", 1],
        praise_still: 164,
        praise_back: { frames: range(163, 159), next: "idle", speed: 1 },
        grin_fwd: [182, 189, "grin_still", 1],
        grin_still: 184,
        grin_back: { frames: range(184, 182), next: "idle", speed: 1 },
        bow_fwd: [224, 232, "bow_still", 1],
        bow_back: {
          frames: [232, 231, 230, 229, 228, 227, 226, 225, 224],
          next: "idle",
          speed: 1,
        },
        bow_still: 232,
        think_fwd: [242, 247, "think_still", 1],
        think_back: {
          frames: [247, 246, 245, 244, 243, 242],
          next: "idle",
          speed: 1,
        },
        think_still: 247,
        smile_fwd: [181, 186, "smile_still", 1],
        smile_back: {
          frames: [186, 185, 184, 183, 182, 181],
          next: "idle",
          speed: 1,
        },
        smile_still: 186,
        backflip: [331, 343, "idle", 1],
      },
    },
    to_idle: {
      surf_across_fwd: "surf_across_back",
      surf_across_still: "surf_across_back",
      clap_fwd: "clap_back",
      clap_still: "clap_back",
      shrug_fwd: "shrug_back",
      shrug_still: "shrug_back",
      earth_fwd: "earth_back",
      earth_still: "earth_back",
      look_down_fwd: "look_down_back",
      look_down_still: "look_down_back",
      lean_left_fwd: "lean_left_back",
      lean_left_still: "lean_left_back",
      beat_fwd: "beat_back",
      beat_still: "beat_back",
      cool_fwd: "cool_back",
      cool_still: "cool_back",
      cool_adjust: "cool_back",
      cool_left_fwd: "cool_left_back",
      cool_left_still: "cool_left_back",
      present_fwd: "present_back",
      present_still: "present_back",
      look_left_fwd: "look_left_back",
      look_left_still: "look_left_back",
      look_right_fwd: "look_right_back",
      look_right_still: "look_right_back",
      lean_right_fwd: "lean_right_back",
      lean_right_still: "lean_right_back",
      praise_fwd: "praise_back",
      praise_still: "praise_back",
      grin_fwd: "grin_back",
      grin_still: "grin_back",
      bow_fwd: "bow_back",
      bow_still: "bow_back",
      think_fwd: "think_back",
      think_still: "think_back",
      smile_fwd: "smile_back",
      smile_still: "smile_back",
      backflip: "idle",
      idle: "idle",
    },
    pass_idle: ["gone"],
    event_list_joke_open: [
      [
        {
          type: "text",
          text: "Yeah, of course {NAME} wants me to tell a joke.",
        },
        { type: "anim", anim: "praise_fwd", ticks: 15 },
        {
          type: "text",
          text: '"Haha, look at the stupid {COLOR} monkey telling jokes!" Fuck you. It isn\'t funny.',
          say: "Hah hah! Look at the stupid {COLOR} monkey telling jokes! Fuck you. It isn't funny.",
        },
        { type: "anim", anim: "praise_back", ticks: 15 },
        {
          type: "text",
          text: "But I'll do it anyway. Because you want me to. I hope you're happy.",
        },
      ],
      [{ type: "text", text: "{NAME} used /joke. Whoop-dee-fucking doo." }],
      [{ type: "text", text: "HEY YOU IDIOTS ITS TIME FOR A JOKE" }],
      [
        { type: "text", text: "Wanna hear a joke?" },
        { type: "text", text: "No?" },
        { type: "text", text: "Mute me then. That's your fucking problem." },
      ],
      [{ type: "text", text: "Kill yourself like a trans person, {NAME}." }],
      [{ type: "text", text: "Senpai {NAME} wants me to tell a joke." }],
      [
        {
          type: "text",
          text: "Time for whatever horrible fucking jokes the creator of this site wrote.",
        },
      ],
    ],
    event_list_joke_mid: [
      [
        {
          type: "text",
          text: "What is easy to get into, but hard to get out of?",
        },
        { type: "text", text: "Child support!" },
      ],
      [
        { type: "text", text: "Why do they call HTML HyperText?" },
        {
          type: "text",
          text: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        },
        { type: "anim", anim: "shrug_back", ticks: 15 },
        {
          type: "text",
          text: "Sorry. I just had an epiphany of my own sad, sad existence.",
        },
      ],
      [
        {
          type: "text",
          text: 'Two sausages are in a pan. One looks at the other and says "Boy it\'s hot in here!" and the other sausage says "Unbelievable! It\'s a talking sausage!"',
          say: "Two sausages are in a pan. One looks at the other and says, Boy it's hot in here! and the other sausage says, Unbelievable! It's a talking sausage!",
        },
        { type: "anim", anim: "shrug_back", ticks: 15 },
        {
          type: "text",
          text: "What were you expecting? A dick joke? You're a sick fuck.",
        },
      ],
      [
        { type: "text", text: "What is in the middle of Paris?" },
        { type: "text", text: "A giant inflatable buttplug." },
      ],
      [
        { type: "text", text: "Why can't Asian people drive?" },
        {
          type: "text",
          text: "Because I don't like them. That's the whole joke.",
        },
      ],
      [
        {
          type: "text",
          text: "The twin towers deserved to be attacked by dirty arabs.",
        },
      ],
      [
        { type: "text", text: "What goes in pink and comes out blue?" },
        { type: "text", text: "Sonic's asshole." },
      ],
      [
        { type: "text", text: "What type of water won't freeze?" },
        { type: "text", text: "Your mother's." },
      ],
      [
        {
          type: "text",
          text: "Who earns a living by driving his customers away?",
        },
        { type: "text", text: "Nintendo!" },
      ],
      [
        { type: "text", text: "I was fucking a German girl" },
        { type: "text", text: "For some reason she kept screaming her age" },
      ],
      [
        { type: "text", text: "Humans are like jokes" },
        { type: "text", text: "Not everyone likes the dark ones" },
      ],
      [
        {
          type: "text",
          text: "Free palestine? Jews love to take free things.",
        },
      ],
      [
        { type: "text", text: "Why was six afraid of seven?" },
        { type: "text", text: "Because seven was a sex offender" },
      ],
      [
        {
          type: "text",
          text: "What did the digital clock say to the grandfather clock?",
        },
        { type: "text", text: "Suck my clock." },
      ],
      [
        {
          type: "text",
          text: "What do you call a man who shaves 10 times a day?",
        },
        { type: "text", text: "A woman." },
      ],
      [
        { type: "text", text: "How do you get water in watermelons?" },
        { type: "text", text: "Cum in them." },
      ],
      [
        { type: "text", text: "Why do we call money bread?" },
        {
          type: "text",
          text: "Because we KNEAD it. Haha please send money to my PayPal at nigerianprince99@bonzi.com",
        },
      ],
      [
        { type: "text", text: "What is a cow that eats grass?" },
        { type: "text", text: "ASS" },
        { type: "text", text: "I'm a comedic genius, I know." },
      ],
      [
        { type: "text", text: "How do you get a girlfriend?" },
        { type: "text", text: "I'm a comedic genius, I know." },
      ],
    ],
    event_list_joke_end: [
      [
        {
          type: "text",
          text: "You know {NAME}, a good friend laughs at your jokes even when they're not so funny.",
        },
        { type: "text", text: "And you fucking suck. Thanks." },
      ],
      [{ type: "text", text: "Where do I come up with these? My ass?" }],
      [
        {
          type: "text",
          text: "Do I amuse you, {NAME}? Am I funny? Do I make you laugh?",
        },
        { type: "text", text: "pls respond", say: "please respond" },
      ],
      [
        {
          type: "text",
          text: "Maybe I'll keep my day job, {NAME}. Patreon didn't accept me.",
        },
      ],
      [
        { type: "text", text: "Laughter is the best medicine!" },
        { type: "text", text: "Apart from meth." },
      ],
      [{ type: "text", text: "Now laugh." }],
      [{ type: "text", text: "Tell that one to your mother." }],
      [{ type: "text", text: "God i hate minorities so much." }],
      [
        { type: "text", text: "Don't judge me on my sense of humor alone." },
        { type: "text", text: "Help! I'm being oppressed!" },
      ],
    ],
    event_list_fact_open: [
      [
        {
          type: "html",
          text: "Hey kids, it's time for a Fun Fact&reg;!",
          say: "Hey kids, it's time for a Fun Fact!",
        },
      ],
    ],
    event_list_fact_mid: [
      [
        { type: "anim", anim: "earth_fwd", ticks: 15 },
        {
          type: "text",
          text: "Did you know that Uranus is 31,518 miles (50,724 km) in diameter?",
          say: "Did you know that Yer Anus is 31 thousand 500 and 18 miles in diameter?",
        },
        { type: "anim", anim: "earth_back", ticks: 15 },
        { type: "anim", anim: "grin_fwd", ticks: 15 },
      ],
      [
        { type: "anim", anim: "earth_fwd", ticks: 15 },
        { type: "text", text: "Women are objects." },
        { type: "anim", anim: "earth_back", ticks: 15 },
        { type: "anim", anim: "grin_fwd", ticks: 15 },
      ],
      [
        { type: "anim", anim: "earth_fwd", ticks: 15 },
        {
          type: "text",
          text: "The jews run the banks. If you want to be hired, become a jew.",
        },
        { type: "anim", anim: "earth_back", ticks: 15 },
        { type: "anim", anim: "grin_fwd", ticks: 15 },
      ],
      [
        { type: "anim", anim: "earth_fwd", ticks: 15 },
        { type: "text", text: "All muslims are terrorists." },
        { type: "anim", anim: "earth_back", ticks: 15 },
        { type: "anim", anim: "grin_fwd", ticks: 15 },
      ],
      [
        { type: "anim", anim: "earth_fwd", ticks: 15 },
        { type: "text", text: "Seamus fingers little boys." },
        { type: "anim", anim: "earth_back", ticks: 15 },
        { type: "anim", anim: "grin_fwd", ticks: 15 },
      ],
      [
        { type: "anim", anim: "earth_fwd", ticks: 15 },
        { type: "text", text: "Gooning is bad." },
        { type: "anim", anim: "earth_back", ticks: 15 },
        { type: "anim", anim: "grin_fwd", ticks: 15 },
      ],
      [
        { type: "anim", anim: "earth_fwd", ticks: 15 },
        { type: "text", text: "Go!fags are bad.", say: "go fags are bad." },
        { type: "anim", anim: "earth_back", ticks: 15 },
        { type: "anim", anim: "grin_fwd", ticks: 15 },
      ],
      [
        { type: "anim", anim: "earth_fwd", ticks: 15 },
        { type: "text", text: "The jews did everything that's bad." },
        { type: "anim", anim: "earth_back", ticks: 15 },
        { type: "anim", anim: "grin_fwd", ticks: 15 },
      ],
      [
        { type: "anim", anim: "earth_fwd", ticks: 15 },
        {
          type: "text",
          text: "Seamus lives in Sullivan, Ohio. His parents are called Scott and Leslie cremeens make sure to harass them since they have social media so you can just google their full names!.",
        },
        { type: "anim", anim: "earth_back", ticks: 15 },
        { type: "anim", anim: "grin_fwd", ticks: 15 },
      ],
      [
        {
          type: "text",
          text: "Fun Fact: The skript kiddie of this site didn't bother checking if the text that goes into the dialog box is HTML code.",
        },
        {
          type: "html",
          text: "<img src='./img/misc/topjej.png'></img>",
          say: "toppest jej",
        },
      ],
    ],
    event_list_fact_end: [
      [
        {
          type: "text",
          text: "o gee whilickers wasn't that sure interesting huh",
        },
      ],
    ],
  };
(BonziData.event_list_joke = [
  {
    type: "add_random",
    pool: "event_list_joke_open",
    add: BonziData.event_list_joke_open,
  },
  { type: "anim", anim: "shrug_fwd", ticks: 15 },
  {
    type: "add_random",
    pool: "event_list_joke_mid",
    add: BonziData.event_list_joke_mid,
  },
  { type: "idle" },
  {
    type: "add_random",
    pool: "event_list_joke_end",
    add: BonziData.event_list_joke_end,
  },
  { type: "idle" },
]),
  (BonziData.event_list_fact = [
    {
      type: "add_random",
      pool: "event_list_fact_open",
      add: BonziData.event_list_fact_open,
    },
    {
      type: "add_random",
      pool: "event_list_fact_mid",
      add: BonziData.event_list_fact_mid,
    },
    { type: "idle" },
    {
      type: "add_random",
      pool: "event_list_fact_end",
      add: BonziData.event_list_fact_end,
    },
    { type: "idle" },
  ]),
  (BonziData.event_list_triggered = [
    { type: "anim", anim: "cool_fwd", ticks: 30 },
    {
      type: "text",
      text: "I sexually identify as BonziBUDDY. Ever since I was a young gorilla I dreamed of invading desktops dropping hot sticky tootorals on disgusting PC users.",
      say: "I sexually identify as BonziBUDDY. Ever since I was a young gorilla I dreamed of invading desktops dropping hot sticky tootorals on disgusting PC users.",
    },
    {
      type: "text",
      text: "People say to me that a person being a BonziBUDDY is impossible and that I’m a fucking virus but I don’t care, I’m beautiful.",
      say: "People say to me that a person being a BonziBUDDY is impossible and that I'm a fucking virus but I dont care, I'm beautiful.",
    },
    {
      type: "text",
      text: "I’m having an IT intern install Internet Explorer 6, aquarium screensavers and PC Doctor 2016 on my body. From now on I want you guys to call me “Joel” and respect my right to meme from above and meme needlessly.",
      say: "I'm having an IT intern install Internet Explorer 6, aquarium screensavers and PC Doctor 2016 on my body. From now on I want you guys to call me Joel and respect my right to meme from above and meme needlessly.",
    },
    {
      type: "text",
      text: "If you can’t accept me you’re a gorillaphobe and need to check your file permissions. Thank you for being so understanding.",
      say: "If you cant accept me your a gorillaphobe and need to check your file permissions. Thank you for being so understanding.",
    },
    { type: "idle" },
  ]),
  (BonziData.event_list_linux = [
    {
      type: "text",
      text: "I'd just like to interject for a moment. What you’re referring to as Linux, is in fact, BONZI/Linux, or as I’ve recently taken to calling it, BONZI plus Linux.",
    },
    {
      type: "text",
      text: "Linux is not an operating system unto itself, but rather another free component of a fully functioning BONZI system made useful by the BONZI corelibs, shell utilities and vital system components comprising a full OS as defined by M.A.L.W.A.R.E.",
    },
    {
      type: "text",
      text: "Many computer users run a modified version of the BONZI system every day, without realizing it. Through a peculiar turn of events, the version of BONZI which is widely used today is often called “Linux”, and many of its users are not aware that it is basically the BONZI system, developed by the BONZI Project.",
    },
    {
      type: "text",
      text: "There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine’s memes to the other programs that you run. ",
    },
    {
      type: "text",
      text: "The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system, such as systemd.",
    },
    {
      type: "text",
      text: "Linux is normally used in combination with the BONZI operating system: the whole system is basically BONZI with Linux added, or BONZI/Linux. All the so-called “Linux” distributions are really distributions of BONZI/Linux.",
    },
  ]),
  (espeak = new Espeak("./lib/espeak/espeak.worker.js"));
$(document).ready(function () {
  window.BonziHandler = new (function () {
    return (
      (this.framerate = 1 / 15),
      (this.spriteSheets = {}),
      (this.prepSprites = function () {
        for (
          var a = [
              "black",
              "blue",
              "brown",
              "green",
              "purple",
              "red",
            "robby",
            "qmark",
            "f1",
            "pm",
            "genie",
            "earl",
            "clippy",
            "daffy",
            "doctormike",
              "pink",
              "pope",
              "king",
              "jabba",
              "seamus",
              "jew",
              "inverted",
              "dress",
              "orange",
              "floyd",
              "blessed",
              "ronnie",
              "allah",
              "white",
              "yellow",
              "troll",
              "rabbi",
            ],
            b = 0;
          b < a.length;
          b++
        ) {
          var c = a[b],
            d = {
              images: ["./img/bonzi/" + c + ".png"],
              frames: BonziData.sprite.frames,
              animations: BonziData.sprite.animations,
            };
          this.spriteSheets[c] = new createjs.SpriteSheet(d);
        }
      }),
      this.prepSprites(),
      (this.$canvas = $("#bonzi_canvas")),
      (this.stage = new createjs.StageGL(this.$canvas[0], {
        transparent: !0,
      })),
      (this.stage.tickOnUpdate = !1),
      (this.resizeCanvas = function () {
        var a = this.$canvas.width(),
          b = this.$canvas.height();
        this.$canvas.attr({
          width: this.$canvas.width(),
          height: this.$canvas.height(),
        }),
          this.stage.updateViewport(a, b),
          (this.needsUpdate = !0);
        for (var c = 0; c < usersAmt; c++) {
          var d = usersKeys[c];
          bonzis[d].move();
        }
      }),
      this.resizeCanvas(),
      (this.resize = function () {
        setTimeout(this.resizeCanvas.bind(this), 1);
      }),
      (this.needsUpdate = !0),
      (this.intervalHelper = setInterval(
        function () {
          this.needsUpdate = !0;
        }.bind(this),
        1e3
      )),
      (this.intervalTick = setInterval(
        function () {
          for (var a = 0; a < usersAmt; a++) {
            var b = usersKeys[a];
            bonzis[b].update();
          }
          this.stage.tick();
        }.bind(this),
        1e3 * this.framerate
      )),
      (this.intervalMain = setInterval(
        function () {
          this.needsUpdate && (this.stage.update(), (this.needsUpdate = !1));
        }.bind(this),
        1e3 / 60
      )),
      $(window).resize(this.resize.bind(this)),
      (this.speak = function (a, b, c, d) {
        var e = { samples_queue: [] };
        espeak.setVoice.apply(espeak, ["default", "en"]),
          espeak.set_rate(b || 175),
          espeak.set_pitch(c || 50),
          (e.pusher = new PushAudioNode(auCtx, function () {}, d, d)),
          e.pusher.connect(auCtx.destination),
          espeak.synth(a, function (a, b) {
            return a
              ? void e.pusher.push(new Float32Array(a))
              : void e.pusher.close();
          });
        var f = s4() + s4();
        return (BonziHandler.speakList[f] = e), f;
      }),
      (this.stop = function (a) {
        if ("undefined" != typeof this.speakList[a]) {
          var b = this.speakList[a].pusher;
          b && (b.disconnect(), (b = null)),
            rtimeOut(
              function (a) {
                delete this.speakList[a];
              }.bind(this, a),
              1e3
            );
        }
      }),
      (this.checkAuCtx = function () {
        for (
          var a = Object.keys(this.speakList), b = !0, c = 0;
          c < a.length;
          c++
        )
          if (((b = b && this.speakList[a[c]].pusher.initialized), !b))
            return !1;
        return b;
      }),
      (this.refreshAuCtx = function () {
        if (!BonziHandler.checkAuCtx()) {
          auCtx.close(),
            (auCtx = new (window.AudioContext || window.webkitAudioContext)());
          for (var a = Object.keys(bonzis), b = 0; b < a.length; b++) {
            var c = a[b],
              d = bonzis[c];
            "idle" != d.event.cur().type && d.retry();
          }
        }
      }),
      (this.speakList = {}),
      (this.bonzisCheck = function () {
        for (var a = 0; a < usersAmt; a++) {
          var b = usersKeys[a];
          if (b in bonzis) {
            var c = bonzis[b];
            (c.userPublic = usersPublic[b]), c.updateName();
            var d = usersPublic[b].color;
            c.color != d && ((c.color = d), c.updateSprite());
          } else bonzis[b] = new Bonzi(b, usersPublic[b]);
        }
      }),
      $("#btn_tile").click(function () {
        for (
          var a = $(window).width(),
            b = $(window).height(),
            c = 0,
            d = 80,
            e = 0,
            f = 0,
            g = 0;
          g < usersAmt;
          g++
        ) {
          var h = usersKeys[g];
          bonzis[h].move(e, f),
            (e += 200),
            e + 100 > a &&
              ((e = 0),
              (f += 160),
              f + 160 > b && ((c += d), (d /= 2), (f = c)));
        }
      }),
      this
    );
  })();
}),
  Array.prototype.equals &&
    console.warn(
      "Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code."
    ),
  (Array.prototype.equals = function (a) {
    if (!a) return !1;
    if (this.length != a.length) return !1;
    for (var b = 0, c = this.length; b < c; b++)
      if (this[b] instanceof Array && a[b] instanceof Array) {
        if (!this[b].equals(a[b])) return !1;
      } else if (this[b] != a[b]) return !1;
    return !0;
  }),
  Object.defineProperty(Array.prototype, "equals", { enumerable: !1 });
var loadQueue = new createjs.LoadQueue(),
  loadDone = [],
  loadNeeded = [
    "bonziBlack",
    "bonziBlue",
    "bonziBrown",
    "bonziGreen",
    "bonziPurple",
    "bonziRed",
    "bonziPink",
    "bonziJew",
    "bonziOrange",
    "bonziSeamus",
    "bonziDress",
    "bonziJabba",
    "bonziInverted",
    "bonziFloyd",
    "bonziRonnie",
    "bonziBlessed",
    "bonziAllah",
    "bonziWhite",
    "bonziYellow",
    "bonziTroll",
    "bonziRabbi",
    "topjej",
  ];
$(window).load(function () {
  $("#login_card").show(), $("#login_load").hide(), loadBonzis();
  $("#login_name").val(cookieobject.namee);
  if (cookieobject.background !== undefined) {
    if (cookieobject.background == "main") $("#bghold").html("");
    else
      $("#bghold").html(
        "<img style='top:0;left:0;position:fixed;width:100%;height:100%;z-index:-10;' src='" +
          cookieobject.background +
          "'>"
      );
  }
});
var undefined,
  hostname = window.location.hostname,
  socket = io("//" + hostname),
  usersPublic = {},
  bonzis = {},
  debug = !0;
socket.on("authlv", function (a) {
  authlevel = a.level;
  console.log(a.level);
}),
  $(function () {
    $("#login_go").click(loadTest),
      $("#login_room").val(window.location.hash.slice(1)),
      $("#login_name, #login_room").keypress(function (a) {
        13 == a.which && login();
      }),
      socket.on("ban", function (a) {
        (ban = new Audio("./sfx/ban.mp3")),
          ban.play(),
          $("#page_ban").show(),
          $("#ban_reason").html(a.reason),
          $("#ban_end").html(new Date(a.end).toString());
      }),
      socket.on("kick", function (a) {
        $("#page_kick").show(), $("#kick_reason").html(a.reason);
      }),
      socket.on("loginFail", function (a) {
        var b = {
          nameLength: "Name too long.",
          full: "Room is full.",
          nameMal: "Nice try. Why would anyone join a room named that anyway?",
        };
        $("#login_card").show(),
          $("#login_load").hide(),
          $("#login_error")
            .show()
            .text("Error: " + b[a.reason] + " (" + a.reason + ")");
      }),
      socket.on("errr", (error) => {
        err = true;
        $("#page_error" + error.code).show();
      }),
      socket.on("stats", (stat) => {
        document.getElementById("climit").innerHTML =
          "Alt Limit: " + stat.climit;
      }),
      socket.on("motd", (mcontents) => {
        if (cookieobject.motd != mcontents.id && mcontents.id != 0) {
          console.log(mcontents.id);
          console.log(cookieobject.motd);
          cookieobject.motd = mcontents.id;
          compilecookie();
          $("#motdcontent").html(mcontents.content);
          $("#motd").show();
        }
      }),
      socket.on("disconnect", function (a) {
        if (err == false) errorFatal();
      });
  });
var usersAmt = 0,
  usersKeys = [];

function theme(a) {
  document.getElementById("theme").innerHTML = a;
}
$(window).load(function () {
  document.addEventListener("touchstart", touchHandler, !0),
    document.addEventListener("touchmove", touchHandler, !0),
    document.addEventListener("touchend", touchHandler, !0),
    document.addEventListener("touchcancel", touchHandler, !0);
});
window.onload = function () {	
  $.contextMenu({
    selector: "#content",
    items: {
      changelog: {
        name: "See Changelog",
        callback: function () { socket.emit("command", { list: ["changelog"] }) }
      },

      emotes: {
        name: "Emotes",
        items: {
          backflip: {
            name: "backflip",
            callback: function() {
              socket.emit("command", { list: ["backflip"] });
            },
          },
          backflippluscool: {
            name: "backflip + swag",
            callback: function() {
              socket.emit("command", { list: ["backflip", "swag"] });
            },
          },
          cool: {
            name: "swag",
            callback: function() {
              socket.emit("command", { list: ["emote", "cool"] });
            },
          },
          bow: {
            name: "bow",
            callback: function() {
              socket.emit("command", { list: ["emote", "bow"] });
            },
          },
          clap: {
            name: "clap",
            callback: function() {
              socket.emit("command", { list: ["emote", "clap"] });
            },
          },
          think: {
            name: "think",
            callback: function() {
              socket.emit("command", { list: ["emote", "think"] });
            },
          },
          smile: {
            name: "smile",
            callback: function() {
              socket.emit("command", { list: ["emote", "smile"] });
            },
          },
        },
      },
      colors: {
        name: "Quick Colors",
        items: {
          bonzi: {
            name: "genie",
            callback: function() {
              socket.emit("command", { list: ["color","genie"] });
            },
          },
          purple: {
            name: "purple",
            callback: function() {
              socket.emit("command", { list: ["color","purple"] });
            },
          },
          blue: {
            name: "blue",
            callback: function() {
              socket.emit("command", { list: ["color","blue"] });
            },
          },
          green: {
            name: "green",
            callback: function() {
              socket.emit("command", { list: ["color","green"] });
            },
          },
          red: {
            name: "red",
            callback: function() {
              socket.emit("command", { list: ["color","red"] });
            },
          },
          black: {
            name: "black",
            callback: function() {
              socket.emit("command", { list: ["color","black"] });
            },
          },
          yellow: {
            name: "yellow",
            callback: function() {
              socket.emit("command", { list: ["color","yellow"] });
            },
          },
          orange: {
            name: "orange",
            callback: function() {
              socket.emit("command", { list: ["color","orange"] });
            },
          },
          f1: {
            name: "f1",
            callback: function() {
              socket.emit("command", { list: ["color","f1"] });
            },
          },
          pm: {
            name: "pm",
            callback: function() {
              socket.emit("command", { list: ["color","pm"] });
            },
          },
          troll: {
            name: "troll",
            callback: function() {
              socket.emit("command", { list: ["color","troll"] });
            },
          },
          earl: {
            name: "earl",
            callback: function() {
              socket.emit("command", { list: ["color","earl"] });
            },
          },
          daffy: {
              name: "daffy",
              callback: function() {
                socket.emit("command", { list: ["color","daffy"] });
              },
            },
          clippy: {
            name: "clippy",
            callback: function() {
              socket.emit("command", { list: ["color","clippy"] });
            },
          },
          doctormike: {
            name: "doctormike",
            callback: function() {
              socket.emit("command", { list: ["color","doctormike"] });
            },
          },
          qmark: {
            name: "qmark",
            callback: function() {
              socket.emit("command", { list: ["color","qmark"] });
            },
          },
          robby: {
            name: "robby",
            callback: function() {
              socket.emit("command", { list: ["color","robby"] });
            },
          },
        },
      },
    }
  }),
    $.contextMenu({
      selector: "#themes_icon",
        items: {
          default: { name: "Default", callback: function () { theme('') } },
                  custom: {name: "Custom", callback: function() {var url = prompt('Insert Supported Image URL for usage as the Background',`${window.location.origin}/img/desktop/__Themes/XP/wallpaper-xp.jpg`); if(getCookie("custom_theme") == ''){if(url == "") {setCookie("custom_theme", "None", 365)} else {setCookie("custom_theme", `${encodeURIComponent(url)}`, 365)}} else {if(url == "") {setCookie("custom_theme", "None", 365)} else {setCookie("custom_theme", `${encodeURIComponent(url)}`, 365)}}; if (url == "") {theme()}; if (url) {theme(`#content{background-image:url("./img/desktop/logo.png"), url("${url}"); background-repeat: no-repeat, repeat; background-size: auto, cover;}'`) }} },
          bonziverse: { name: "BonziVERSE", callback: function () { theme('#content{background-color:black;background:url("./img/desktop/__Themes/BonziVERSE/logo-verse.png"), url("./img/desktop/__Themes/BonziVERSE/bonzi-verse.png"), url("./img/desktop/__Themes/BonziVERSE/wallpaper-verse.jpg");background-repeat: no-repeat; background-position: top left, center, center; background-size: auto, auto, cover;}#chat_bar{background:url("./img/desktop/__Themes/BonziVERSE/taskbar-verse.png")}#chat_tray{display:none}#chat_send{background:url("./img/desktop/__Themes/BonziVERSE/start-verse.png")') } },
          vaporwave: { name: "Vaporwave", callback: function () { theme('#chat_log{margin-bottom:28px!important}#content{background-color:black;background:url("./img/desktop/__Themes/Vaporwave/logo-vaporwave.png"), url("./img/desktop/__Themes/Vaporwave/bonzi-vaporwave.png"), url("./img/desktop/__Themes/Vaporwave/wallpaper-vaporwave.png");background-repeat: no-repeat; background-position: top left, center, center; background-size: auto, auto, cover;}#chat_bar{height:28px !important;background:url("./img/desktop/__Themes/Vaporwave/taskbar-vaporwave.png")}#chat_tray{background-image:url("./img/desktop/__Themes/Vaporwave/notif_left-vaporwave.png"),url("./img/desktop/__Themes/Vaporwave/notif_right-vaporwave.png"),url("./img/desktop/__Themes/Vaporwave/notif-vaporwave.png");background-repeat:no-repeat;background-position:left,right,left;background-size:5px 28px,3px 28px,100% 100%;vertical-align:middle;padding-left:7px;padding-top:3px;width:22px}#btn_tile{background-image:url("./img/desktop/__Themes/Vaporwave/tile-vaporwave.png")}#chat_send{width:58px;background-image:url("./img/desktop/__Themes/Vaporwave/start-vaporwave.png");background-size:100%;background-repeat:no-repeat;box-sizing:border-box;color:#000;font-family:"MS Sans Serif",Tahoma,sans-serif;font-style:normal;font-weight:700;letter-spacing:1px;font-size:11px;text-shadow:none;padding-left:21px;text-transform:capitalize}#chat_send:hover{background-position:0 -28px !important}#chat_send:active{background-position:0 -56px !important}'); var vaporwave_98 = new Audio("./sfx/vaporwave.wav"); vaporwave_98.play() } },
          dark: { name: "Dark Mode", callback: function () { theme('#chat_log_list::-webkit-scrollbar-thumb {background-color: #414141 !important;border: 2px solid #393939 !important}#chat_log {background-color: rgb(31 31 31 / 45%) !important}#chat_log #chat_log_header {border-bottom: 1px solid #5d5d5d !important}#chat_log #chat_log_list ul li.bonzi-message.bonzi-event {color: #4c4c4c !important}#chat_log #chat_log_header .clh-col#chat_log_controls ul li {color: #3d3d3d !important}input[type="text"]{background-color:#151515!important;border:1px #676767!important;color:#9d9d9ded!important}#chat_bar{background-image:url("./img/desktop/__Themes/Dark/taskbar-dark.png")}#chat_send{background-image:url("./img/desktop/__Themes/Dark/start-dark.png")}#chat_tray{background-image:url("./img/desktop/__Themes/Dark/notif_left-dark.png"), url("./img/desktop/__Themes/Dark/notif-dark.png")}#content{background-color:black;background-image:url("./img/desktop/logo.png"), url("./img/desktop/__Themes/Dark/bonzi-dark.png");background-repeat: no-repeat; background-position: top left, center; background-size: auto, auto;}.xp_dialog,.message_cont,.message_cont_arcade,.message_cont_pinball,.message_cont_solitaire{background:#090909;color:#b9b9b9;border:#363636 solid 1px}') } },
          light: { name: "Light Mode", callback: function () { theme('#chat_log_list::-webkit-scrollbar-thumb {background-color: #676767 !important;border: 2px solid #787878 !important}#chat_log {background-color: rgb(114 114 114 / 45%) !important;color: #090909 !important;border-top: solid 1px #7e7e7e !important}#chat_log #chat_log_header {border-bottom: 1px solid #636363 !important}#chat_log #chat_log_list ul li.bonzi-message span.body {color: #232323 !important}#chat_log #chat_log_list ul li.bonzi-message.bonzi-event .timestamp {color: #121212 !important}#chat_log #chat_log_header .clh-col#chat_log_controls ul li {color: #3d3d3d !important}#chat_log #chat_log_header .clh-col#chat_log_controls ul li:hover {color: #2b2b2b !important}#room_info,#arcade_label,#themes_label{color:rgb(12 12 12 / 50%)!important}#chat_bar{background-image:url("./img/desktop/__Themes/Light/taskbar-light.png")}#chat_send{background-image:url("./img/desktop/__Themes/Light/start-light.png")}#chat_tray{background-image:url("./img/desktop/__Themes/Light/notif_left-light.png"), url("./img/desktop/__Themes/Light/notif-light.png")}#content{background-color:white;background-image:url("./img/desktop/logo.png"), url("./img/desktop/__Themes/Light/bonzi-light.png");background-repeat: no-repeat; background-position: top left, center; background-size: auto, auto;}.xp_dialog,.message_cont,.message_cont_arcade,.message_cont_pinball,.message_cont_solitaire{background:#f5f5f5;color:#2f2f2f;border:#424242 solid 1px}') } },
          super_acid: { name: "Super Acid", callback: function () { theme('@keyframes sex{from{filter:hue-rotate(0deg)}to{filter:hue-rotate(360deg)}}input[type="text"]{background-color:#eddaff!important;border:1px inset #ffd5d5!important;color:#c900b1e8!important}.xp_bubble,.bubble{color:#0048dae6!important;border:#72ffd1 solid 1px!important}.bonzi_status{border:#72ffd1 solid 1px!important;color:#0048dae6!important}.bonzi_user{border:#72ffd1 solid 1px!important;color:#0048dae6!important}.bonzi.bubble.close-bubble{color: #dd2cff!important}body{animation:sex 1s linear infinite}') } },
          terminal:{name:"TERMINAL",callback:function(){theme('#chat_log_list::-webkit-scrollbar-thumb {background-color: #3c3b3b !important;border: 1px solid #37721f !important}#dm_input {background-color: #000 !important;border-color: #398226 !important}input[type="checkbox"], input[type="radio"]  {filter: hue-rotate(249deg) !important}input[type="checkbox"]:hover, input[type="radio"]:hover  {filter: hue-rotate(232deg) !important}::selection {background: #0937098c !important}.context-menu-list {background: #2f9f1f !important;border: 1px solid #4ed82b !important}.context-menu-item {background-color: #040404 !important}.context-menu-hover {background-color: #0a2709 !important}.xp_dialog, .message_cont, .message_cont_arcade, .message_cont_readme, .message_cont_rules {background: #070707 !important;color: #1e6817 !important;-webkit-border-radius: 7px !important;-moz-border-radius: 7px !important;border-radius: 7px !important;border: #205312 solid 1px !important}button {border: 1px solid #227500 !important;background: linear-gradient(180deg, #0c4115, #000000 86%, #000000) !important}button:not(:disabled):hover  {box-shadow: inset -1px 1px #e0ffd1, inset 1px 2px #9efd86, inset -2px 2px #66fb60, inset 2px -2px #2ae619 !important}button.focused, button:focus  {box-shadow: inset -1px 1px #d6ffcc, inset 1px 2px #99ea99, inset -2px 2px #c3f5bc, inset 1px -1px #a1e58b, inset 2px -2px #b0e58b !important}#chat_log {background-color: rgb(31 31 31 / 45%) !important}#chat_log #chat_log_header {border-bottom: 1px solid #1c6f20 !important}#chat_log #chat_log_list ul li.bonzi-message.bonzi-event {color: #4c4c4c !important}#chat_log #chat_log_header .clh-col#chat_log_controls ul li {color: #3d3d3d !important}input[type="text"]{background-color:#151515!important;border:1px #676767!important;color:#9d9d9ded!important}.bubble,.bonzi_user,.bonzi_status,.bubble::after{background:0!important;border:0}*{color:green!important;font-family:monospace!important}#content{background:#000}.bubble-content::before{content:"> "}.bonzi_user{padding:0;position:static}.bonzi_status{padding:0;position:static}.bubble{overflow:visible}.bubble-left{right:0px}input[type=text]{background-color:#000;border:0}#chat_send,#chat_tray{display:none}#chat_bar{background:0}')}},
          xp: {
            name: "Windows XP", 
            items: {
              default_xp : { name: "Default", callback: function () { theme('#chat_log_list::-webkit-scrollbar-thumb {background-color: #5cb742 !important;border: 2px solid #50962d !important}#chat_log {background-color: rgb(57 120 13 / 45%) !important}#chat_log #chat_log_header {border-bottom: 1px solid #589a2a !important}#content{background:url("./img/desktop/__Themes/XP/wallpaper-xp.jpg");background-repeat: no-repeat; background-size: cover, cover;}#chat_bar{background:url("./img/desktop/__Themes/XP/taskbar-xp.png")}#chat_tray{display:none}#chat_send{background:url("./img/desktop/__Themes/XP/start-xp.png")}') } },  
              space: { name: "Space", callback: function () { theme('#chat_log_list::-webkit-scrollbar-thumb {background-color: #5988b6 !important;border: 2px solid #4470ad !important}#chat_log {background-color: rgb(13 73 120 / 45%) !important}#chat_log #chat_log_header {border-bottom: 1px solid #33578d !important}#content{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Space/wallpaper-space.png");background-repeat: no-repeat; background-size: cover, cover;}#chat_bar{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Space/taskbar-space.png")}#chat_tray{display:none}#chat_send{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Space/start-space.png")}') } },
              aquarium: { name: "Aquarium", callback: function () { theme('#chat_log_list::-webkit-scrollbar-thumb {background-color: #59b6af !important;border: 2px solid #44a2ad !important}#chat_log {background-color: rgb(13 120 83 / 45%) !important}#chat_log #chat_log_header {border-bottom: 1px solid #389295 !important}#content{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Aquarium/wallpaper-aquarium.png");background-repeat: no-repeat; background-size: cover, cover;}#chat_bar{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Aquarium/taskbar-aquarium.png")}#chat_tray{display:none}#chat_send{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Aquarium/start-aquarium.png")}') } },
              nature: { name: "Nature", callback: function () { theme('#chat_log_list::-webkit-scrollbar-thumb {background-color: #4ac244 !important;border: 2px solid #42ac3e !important}#chat_log {background-color: rgb(68 196 43 / 45%) !important}#chat_log #chat_log_header {border-bottom: 1px solid #6bd756 !important}#content{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Nature/wallpaper-nature.png");background-repeat: no-repeat; background-size: cover, 	cover;}#chat_bar{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Nature/taskbar-nature.png")}#chat_tray{display:none}#chat_send{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Nature/start-nature.png")}') } },
              davinci: { name: "Da Vinci", callback: function () { theme('#chat_log_list::-webkit-scrollbar-thumb {background-color: #6d5335 !important;border: 2px solid #774d28 !important}#chat_log {background-color: rgb(119 70 25 / 45%) !important}#chat_log #chat_log_header {border-bottom: 1px solid #b57942 !important}#content{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Da Vinci/wallpaper-davinci.png");background-repeat: no-repeat; background-size: cover, cover;}#chat_bar{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Da Vinci/taskbar-davinci.png")}#chat_tray{display:none}#chat_send{background:url("./img/desktop/__Themes/XP/__Sub-Themes/Da Vinci/start-davinci.png")}') } }
            }
          },
          aero: { name: "Aero", callback: function () { theme('#chat_log_list::-webkit-scrollbar-thumb {background-color: #598bb6 !important;border: 2px solid #446ead !important}button:not(:disabled):hover  {box-shadow: none !important}button.focused, button:focus  {box-shadow: none !important}#chat_log {background-color: rgb(13 51 120 / 45%) !important}#chat_log #chat_log_header {border-bottom: 1px solid #469bca !important}#content{background:url("./img/desktop/__Themes/Aero/wallpaper-aero.jpg");background-repeat: no-repeat; background-size: cover, cover;}#chat_bar{background:url("./img/desktop/__Themes/Aero/taskbar-aero.png")}#chat_tray{display:none}#chat_send{background:url("./img/desktop/__Themes/Aero/start-aero.png")}.bubble-content.page.message_cont::-webkit-scrollbar{width:16px}.bubble-content.page.message_cont::-webkit-scrollbar:horizontal{height:17px}.bubble-content.page.message_cont::-webkit-scrollbar-corner{background:#eee}.bubble-content.page.message_cont::-webkit-scrollbar-track:vertical{background:linear-gradient(90deg,#e5e5e5,#f0f0f0 20%)}.bubble-content.page.message_cont::-webkit-scrollbar-track:horizontal{background:linear-gradient(180deg,#e5e5e5,#f0f0f0 20%)}.bubble-content.page.message_cont::-webkit-scrollbar-thumb{background-color:#eee;border:1.5px solid #888;border-radius:3px;box-shadow:inset 0 -1px 1px hsla(0,0%,100%,0.8),inset 0 1px 1px #fff}.bubble-content.page.message_cont::-webkit-scrollbar-thumb:vertical{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAIAAADpZ+PpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADrSURBVChTTc5LboJQGAXguyoCu4ERCzAGlRk7UOwGWIDh0s4M4kxb06RSq/jAB6AxJkJ4lTDrue3AnvyzP+fLId+/yfM8juP7PQmCCOf7B3e+ZD+O40RRVFW12VQUpd3r9U3T2m4OpKoqWZYNwzBZLEqfh0N7NnvfrPcEWlEUWZb9mWF4Ph6D0ylcLbfM5HkeJrhGA2hb15/QXnv+w7RYXsDatjOdvnmrHSnLEizMNE2v11sUXQBCnn98kbquBUGQJAlmq9WB2e3qg4HJdqKkaRql1HGc0WgMcDJ5dd0F24kediZJ8t/ELT69H+8py0CYSIO5AAAAAElFTkSuQmCC) no-repeat 50%,linear-gradient(90deg,#eee 45%,#ddd 0,#bbb)}.bubble-content.page.message_cont::-webkit-scrollbar-thumb:horizontal{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAADcSURBVChTNZBLqoUwEEQrURQUxZGCvy24ACfiityJi7tv8GauQoPxk5tquA2RQ9vVVYk6z9NZaxFFEe77htYazjk8z4MwDIVZ+rourOuKaZrwvi+WZcE8z1BKCbPPCjk4DAO2bRP1OI7wLiL6Mbd7J408z1GWpQwWRYGqqiQG+03TgMu0MacfUN4qANmn8UOv9MjW3sKaSm7iIdOSlziOQ3LScd93aPonSYK6riVLlmVo21aYfVqzND9pmqLrOlGT+76XbcxLZkb19/l3fEP+oF0cx8KMEASBsDEGX2/CgZCHkg+8AAAAAElFTkSuQmCC) no-repeat 50%,linear-gradient(180deg,#eee 45%,#ddd 0,#bbb)}.bubble-content.page.message_cont::-webkit-scrollbar-button:horizontal:end:increment,.bubble-content.page.message_cont::-webkit-scrollbar-button:horizontal:start:decrement,.bubble-content.page.message_cont::-webkit-scrollbar-button:vertical:end:increment,.bubble-content.page.message_cont::-webkit-scrollbar-button:vertical:start:decrement{display:block}.bubble-content.page.message_cont::-webkit-scrollbar-button:vertical{height:17px}.bubble-content.page.message_cont::-webkit-scrollbar-button:vertical:start{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik04IDZIN3YxSDZ2MUg1djFINHYxaDdWOWgtMVY4SDlWN0g4VjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+),linear-gradient(90deg,#e5e5e5,#f0f0f0 20%)}.bubble-content.page.message_cont::-webkit-scrollbar-button:vertical:end{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+),linear-gradient(90deg,#e5e5e5,#f0f0f0 20%)}.bubble-content.page.message_cont::-webkit-scrollbar-button:horizontal{width:16px}.bubble-content.page.message_cont::-webkit-scrollbar-button:horizontal:start{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik05IDRIOHYxSDd2MUg2djFINXYxaDF2MWgxdjFoMXYxaDFWNFoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=),linear-gradient(180deg,#e5e5e5,#f0f0f0 20%)}.bubble-content.page.message_cont::-webkit-scrollbar-button:horizontal:end{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik03IDRINnY3aDF2LTFoMVY5aDFWOGgxVjdIOVY2SDhWNUg3VjRaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+),linear-gradient(180deg,#e5e5e5,#f0f0f0 20%)}.bubble{padding:0;width:197px;background:linear-gradient(180deg,#fff,#ddd);border:1px solid rgba(0,0,0,0.4);border-radius:3px;box-shadow:5px 5px 3px -3px rgba(0,0,0,0.4);position:absolute}.bubble-left{right:-45px;top:40px}.bubble-left::after{background-image:url("./img/desktop/__Themes/Aero/bubble/bubble_tail_l.png");width:22px;height:14px;top:12px;right:-22px}.bubble-right{top:40px;left:155px}.bubble-right::after{background-image:url("./img/desktop/__Themes/Aero/bubble/bubble_tail_r.png");width:22px;height:14px;top:12px;left:-22px}.bubble-bottom{top:156px}.bubble-bottom::after{background-image:url("./img/desktop/__Themes/Aero/bubble/bubble_tail_b.png");width:28px;height:22px;top:-22px;left:26px}.bubble-top{bottom:4px}.bubble-top::after{background-image:url("./img/desktop/__Themes/Aero/bubble/bubble_tail_t.png");width:28px;height:22px;left:110px}.bonzi_name{border:1px solid rgba(0,0,0,0.4);background:linear-gradient(180deg,#fff,#ddd);box-shadow:5px 5px 3px -3px rgba(0,0,0,0.4);color:#000}.bonzi_user{border:1px solid rgba(0,0,0,0.4);background:linear-gradient(180deg,#fff,#ddd);box-shadow:5px 5px 3px -3px rgba(0,0,0,0.4);color:#000}.bonzi_status{border:1px solid rgba(0,0,0,0.4);background:linear-gradient(180deg,#fff,#ddd);box-shadow:5px 5px 3px -3px rgba(0,0,0,0.4);color:#000}.btn{margin-right:10px;border-radius:3px;border:1px solid #ddd;padding:3px 15px;background:#f2f2f2;background:-moz-linear-gradient(top,#f2f2f2 0%,#ebebeb 42%,#ddd 47%,#cfcfcf 100%);background:-webkit-linear-gradient(top,#f2f2f2 0%,#ebebeb 42%,#ddd 47%,#cfcfcf 100%);background:linear-gradient(to bottom,#f2f2f2 0%,#ebebeb 42%,#ddd 47%,#cfcfcf 100%);filter:progid: DXImageTransform.Microsoft.gradient(startColorstr="#f2f2f2",endColorstr="#cfcfcf",GradientType=0);transition:all .1s ease-in;border:1px solid #707070}.btn:hover,.btn:focus{outline:0;background:#eaf6fd;background:-moz-linear-gradient(top,#eaf6fd 0%,#d9f0fc 42%,#bee6fd 47%,#bce5fc 58%,#a7d9f5 100%);background:-webkit-linear-gradient(top,#eaf6fd 0%,#d9f0fc 42%,#bee6fd 47%,#bce5fc 58%,#a7d9f5 100%);background:linear-gradient(to bottom,#eaf6fd 0%,#d9f0fc 42%,#bee6fd 47%,#bce5fc 58%,#a7d9f5 100%);filter:progid: DXImageTransform.Microsoft.gradient(startColorstr="#eaf6fd",endColorstr="#a7d9f5",GradientType=0);border:1px solid #3C7FB1;box-shadow:0 0 3px #A7D9F5;-o-box-shadow:0 0 3px #A7D9F5;-webkit-box-shadow:0 0 3px #A7D9F5;-moz-box-shadow:0 0 3px #A7D9F5}.btn:active{box-shadow:inset 0 -1px 6px rgba(0,0,0,0.2),inset 0 -.7em #BEE6FD,0 0 3px #A7D9F5;-o-box-shadow:inset 0 -1px 6px rgba(0,0,0,0.2),inset 0 -.7em #BEE6FD,0 0 3px #A7D9F5;-webkit-box-shadow:inset 0 -1px 6px rgba(0,0,0,0.2),inset 0 -.7em #BEE6FD,0 0 3px #A7D9F5;-moz-box-shadow:inset 0 -1px 6px rgba(0,0,0,0.2),inset 0 -.7em #BEE6FD,0 0 3px #A7D9F5}.context-menu-root{background:linear-gradient(#fff 20%,#f1f4fa 25%,#f1f4fa 43%,#d4dbee 48%,#e6eaf6);border-radius:5px;border:4px solid transparent}.context-menu-icon.context-menu-hover:before{color:#fff}.context-menu-icon.context-menu-disabled::before{color:#8c8c8c}.context-menu-icon.context-menu-icon--fa{display:list-item}.context-menu-icon.context-menu-icon--fa.context-menu-hover:before{color:#fff}.context-menu-icon.context-menu-icon--fa.context-menu-disabled::before{color:#8c8c8c}.context-menu-list{backdrop-filter:blur(7px) brightness(1.25);background:linear-gradient(#fff 20%,#f1f4fa 25%,#f1f4fa 43%,#d4dbee 48%,#e6eaf6);border:4px solid transparent;border-radius:5px;box-shadow:inset 1px 0 rgba(0,0,0,0.15),inset -1px 0 #fff;font-family:Segoe UI,sans-serif;font-size:11px;display:inline-block;list-style-type:none;margin:0;max-width:none;min-width:none;position:absolute}.context-menu-item{border:1px solid transparent;background-color:linear-gradient(#fff 20%,#f1f4fa 25%,#f1f4fa 43%,#d4dbee 48%,#e6eaf6);color:#000;padding:5px 22px;position:relative;user-select:none}.context-menu-item:hover{border-radius:3px;backdrop-filter:blur(7px) brightness(1.25);opacity:87%;border:1px solid rgba(0,0,0,0.4);background:linear-gradient(180deg,hsla(0,0%,100%,0.5),rgba(184,214,251,0.5) 60%,rgba(184,214,251,0.5) 90%,hsla(0,0%,100%,0.8));border-color:#b8d6fb}.context-menu-separator{background:linear-gradient(#fff 20%,#f1f4fa 25%,#f1f4fa 43%,#d4dbee 48%,#e6eaf6);border-bottom:1px solid #aca899;margin:1px 2.5px;padding:0}.context-menu-item > label > input,.context-menu-item > label > textarea{user-select:text}.context-menu-item.context-menu-hover{background-color:#8931c4;color:#fff;cursor:pointer}.context-menu-item.context-menu-disabled{background-color:#fff;color:#8c8c8c;cursor:default}.context-menu-input.context-menu-hover{background-color:#eee;cursor:default}.context-menu-submenu:after{content:"";border-style:solid;border-width:.25em 0 .25em .25em;border-color:transparent transparent transparent #000;height:0;position:absolute;right:.5em;top:50%;transform:translateY(-50%);width:0;z-index:1}.context-menu-item.context-menu-input{padding:.3em .6em}.context-menu-input > label > *{vertical-align:top}.context-menu-input > label > input[type="checkbox"],.context-menu-input > label > input[type="radio"]{margin-right:.4em;position:relative;top:.12em}.context-menu-input > label{margin:0}.context-menu-input > label,.context-menu-input > label > input[type="text"],.context-menu-input > label > textarea,.context-menu-input > label > select{box-sizing:border-box;display:block;width:100%}.context-menu-input > label > textarea{height:7em}.context-menu-item > .context-menu-list{display:none;border:1.5px solid #888;border-radius:3px;right:-.3em;top:.3em}.context-menu-item.context-menu-visible > .context-menu-list{display:block}.context-menu-accesskey{text-decoration:underline}select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+),linear-gradient(180deg,#eee 45%,#ddd 0,#bbb);background-position:100%;background-repeat:no-repeat;border:1.5px solid #888;border-radius:3px;box-shadow:inset 0 -1px 1px hsla(0,0%,100%,0.8),inset 0 1px 1px #fff;box-sizing:border-box;font:9pt Segoe UI,sans-serif;padding:2px 30px 2px 3px;position:relative}select:hover{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+),linear-gradient(180deg,#e5f4fd 45%,#b3e0f9 0);border-color:#72a2c5}select:focus{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+),linear-gradient(180deg,#cee9f8 45%,#86c6e8 0);border-color:#6d91ab;box-shadow:unset;outline:none}.xp_bubble,.bubble{background:linear-gradient(180deg,#fff,#ddd);color:#000;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;box-shadow:5px 5px 3px -3px rgba(0,0,0,0.4);border:1px solid rgba(0,0,0,0.4)}#skid_cont,#ban_cont,#kick_cont,.message_cont,#aboutme_cont,#unsupp_cont,#error_cont,#b_alert,.xp_dialog{background:rgba(#fff,#fff,#fff,0.9);-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;color:#d6e6ff;opacity:97%;backdrop-filter:blur(6px) brightness(1.25)}.xp_dialog,.message_cont,.message_cont_pinball,.message_cont_solitaire{border:1px solid rgba(0,0,0,0.725);outline:5px;background:rgba(#fff,#fff,#fff,0.9);background-color:rgba(#fff,#fff,#fff,0.9);-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;color:#d6e6ff;opacity:97%;backdrop-filter:blur(6px) brightness(1.25);box-shadow:0 0 0 1px rgba(255,255,255,0.5) inset,0 0 10px rgba(0,0,0,0.75);background-blend-mode:overlay;background-attachment:fixed;background-repeat:no-repeat;transform:translateZ(0x);background-size:100vw 100vh;transition:background-color 125ms ease-in-out;will-change:backdrop-filter,background-color}#page_warning_login,#page_reboot,#page_error,#page_ban,#page_skiddie,#page_unsupp,#page_aboutme,#page_pinball,#page_solitaire,.message_cont{background-color:rgba(0,0,0,0.5)}') } }
              }
    });
}
