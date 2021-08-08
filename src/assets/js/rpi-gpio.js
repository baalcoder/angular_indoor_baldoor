var firebase = require('firebase');
var app = firebase.initializeApp({
    apiKey: "AIzaSyBBQDOmPMcXgfyRb-GKEZ3K-4qJp6JHE7g",
    authDomain: "indoor-baldoor.firebaseapp.com",
    databaseURL: "https://indoor-baldoor.firebaseio.com",
    projectId: "indoor-baldoor",
    storageBucket: "indoor-baldoor.appspot.com",
    messagingSenderId: "358349572237",
    appId: "1:358349572237:web:1057073e2dfdb72d75bac4"
});
var database = firebase.database();

var gpio = require("gpio");
var switch1, switch2, switch3, switch4

switch1 = gpio.export(4, {
    direction: "out",
    ready: function () {
        switch1.set(1)
        console.log("switch 1 ready")
    }
})

switch2 = gpio.export(17, {
    direction: "out",
    ready: function () {
        switch2.set(1)
        console.log("switch 2 ready")
    }
})

switch3 = gpio.export(27, {
    direction: "out",
    ready: function () {
        switch3.set(1)
        console.log("switch 3 ready")
    }
})

switch4 = gpio.export(22, {
    direction: "out",
    ready: function () {
        switch4.set(1)
        console.log("switch 4 ready")
    }
});

var switch1Status = firebase.database().ref('/switchStatus/switch1');
switch1Status.on('value', function (snapshot) {
    console.log("switch1 value changed to " + snapshot.val())
    if (snapshot.val() === true) {
        switch1.set(1)
    } else {
        switch1.set(0)
    }
});

var switch3Status = firebase.database().ref('/switchStatus/switch2');
switch3Status.on('value', function (snapshot) {
    console.log("switch 2 value changed to " + snapshot.val())
    if (snapshot.val() === true) {
        switch2.set(1)
    } else {
        switch2.set(0)
    }
});

var switch3Status = firebase.database().ref('/switchStatus/switch3');
switch3Status.on('value', function (snapshot) {
    console.log("switch 3 value changed to " + snapshot.val())
    if (snapshot.val() === true) {
        switch3.set(1)
    } else {
        switch3.set(0)
    }
});

var switch4Status = firebase.database().ref('/switchStatus/switch4');
switch4Status.on('value', function (snapshot) {
    console.log("switch 4 value changed to " + snapshot.val())
    if (snapshot.val() === true) {
        switch4.set(1)
    } else {
        switch4.set(0)
    }
});