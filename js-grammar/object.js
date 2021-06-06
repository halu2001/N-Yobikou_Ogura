var game = {
    startTime: null,
    displayArea: document.getElementById('display-area'),
    start: function () {
        document.body.onkeydown = game.stop;
        game.startTime = Date.now();
    },
    stop: function () {
        var currentTime = Date.now();
        var seconds = (currentTime - game.startTime) / 1000;
        if (9.5 <= seconds && seconds <= 10.5) {
            game.displayArea.innerText = seconds + '秒でした。すごい。';
        } else {
            game.displayArea.innerText = seconds + '秒でした。残念。';
        }
    }
};

// function stop() {
//     var currentTime = Date.now();
//     var seconds = (currentTime - game.startTime) / 1000;
//     if (9.5 <= seconds && seconds <= 10.5) {
//         game.displayArea.innerText = seconds + '秒でした。すごい。';
//     } else {
//         game.displayArea.innerText = seconds + '秒でした。残念。';
//     }
// }

if (confirm('OKを押して10秒だと思ったら何かキーを押してください')) {
    game.start();
}