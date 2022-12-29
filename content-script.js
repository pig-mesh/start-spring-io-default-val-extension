const readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);

        const radioButtons = Array.from(document.querySelectorAll("span.radio-content")).filter(r => r.innerHTML === "Maven");

        // "Maven Project" 选中 maven
        if (radioButtons.length === 1) {
            console.log("Selecting 'Maven Project'");
            radioButtons[0].click();
        }

        // group 修改为 com.pig4cloud
        document.getElementById('input-group').value = 'com.pig4cloud'
        document.getElementById('input-packageName').value = 'com.pig4cloud.demo'
    }
}, 10);
