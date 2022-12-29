const readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);

        const radioButtons = Array.from(document.querySelectorAll("span.radio-content")).filter(r => r.innerHTML === "Maven");

        // "Maven Project" 选中 maven
        if (radioButtons.length === 1) {
            console.log("Selecting 'Maven Project'");
            radioButtons[0].click();
        }

        // project 修改
        const time = new Date().getTime()
        const artifact = document.getElementById('input-artifact');
        artifact.value = `demo${time}`
        artifact.dispatchEvent(new Event("input", {bubbles: true}));
    }
}, 10);
