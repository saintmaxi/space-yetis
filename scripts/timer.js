const countdowntimer = () => {
    let countDownDate = new Date("2021-12-23T01:20:00.000+00:00").getTime();
    let x = setInterval(function() {
        let now = new Date().getTime();
        let diff = countDownDate - now;
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);
        days >= 10 ? days = days : days = `0${days}`;
        hours >= 10 ? hours = hours : hours = `0${hours}`;
        minutes >= 10 ? minutes = minutes : minutes = `0${minutes}`;
        seconds >= 10 ? seconds = seconds : seconds = `0${seconds}`;
        $("#minting-countdown").text(`${days} : ${hours} : ${minutes} : ${seconds} - until whitelist minting begins`);
        if (diff < 0) {
            clearInterval(x);
            $("#minting-countdown").hide()
            $("#mint-enabled").show();
        };
    }, 1000);
};
countdowntimer();