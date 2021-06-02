$(document).ready(function () {
  
  let cards = ["images/rat.png", "images/rat.png",
              "images/ox.png", "images/ox.png",
              "images/tiger.png", "images/tiger.png",
              "images/rabbit.png", "images/rabbit.png",
              "images/dragon.png", "images/dragon.png",
              "images/snake.png", "images/snake.png",
              "images/horse.png", "images/horse.png",
              "images/goat.png", "images/goat.png",
              "images/monkey.png", "images/monkey.png",
              "images/rooster.png", "images/rooster.png",
              "images/dog.png", "images/dog.png",
              "images/pig.png", "images/pig.png"];

  let newArr = [];
  function shuffle() {
    let orinArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    for (let i = 0; i < 24; i++) {
      let random = Math.floor(Math.random() * orinArr.length);
      newArr.push(orinArr[random]);
      orinArr.splice(random, 1);
    }
    console.log(newArr);
  }
  
  function isBack(img) {
    if ($(img).attr("src") === "images/back.png") {
      return true;
    }
    return false;
  }

  function isPair(arr) {
    if (arr[0].src === arr[1].src) {
      return true;
    }
    return false;
  }

  let count = 0;
  let focus = [];
  let pairs = [];
  let times = 1;

  $("img").click(function(e) {
    let i = $(this).attr("id").split("img")[1];
    if (count === 0) {
      console.log("點第一個");
      if (isBack(this)) {
        $(this).attr("src", cards[newArr[i]]);
        focus.push(this);
        count++;
      }
    } else if (count === 1) {
      console.log("點第二個");
      if (isBack(this)) {
        $("#times span").text(times++);
        $(this).attr("src", cards[newArr[i]]);
        focus.push(this);
        let firstId = "#" + focus[0].id;
        let secondId = "#" + focus[1].id;
        if (isPair(focus)) {
          pairs.push($(firstId));
          pairs.push($(secondId));
          if (pairs.length === 24) {
            setTimeout(function() {
              $("#pass").show();
            }, 800);
          }
        } else {
          console.log("Not!!!!");
          setTimeout(function() {
            $(firstId).attr("src", "images/back.png");
            $(secondId).attr("src", "images/back.png");
          }, 1000);
        }
        count = 0;
        focus = [];
      }
    }
  });

  

 
  $("#startBtn").click(function(e) {
    $("#home").hide();
    shuffle();
    $("#start").show();
  });

  $(".homeBtn").click(function(e) {
    $("#home").show();
    $("#start").hide();
    $("#pass").hide();
    newArr = [];
    pairs = [];
    $("#times span").text(0);
    times = 1;
    $("#cards img").attr("src", "images/back.png");
  });

  $("#tryAgainBtn").click(function(e) {
    $("#pass").hide();
    $("#times span").text(0);
    times = 1;
    newArr = [];
    pairs = [];
    shuffle();
    $("#cards img").attr("src", "images/back.png");
  });


  


});
