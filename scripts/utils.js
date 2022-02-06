async function displayErrorMessage(message, timed=true, time=2500) {
    if (!($("#error-popup").length)) {
        let fakeJSX = `<div id="error-popup"><p>${message}</p></div>`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-error' style="height:${height}px"></div>`);
        if (timed) {
            await sleep(time);
            $("#error-popup").remove();
            $("#block-screen-error").remove();
        }
    }
}

async function displayLoading() {
    if (!($("#loading-popup").length)) {
        let fakeJSX = `<img id="loading-popup" src="./images/cyborg-loading.gif">`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-loading' style="height:${height}px"></div>`);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}