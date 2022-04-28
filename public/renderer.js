window.onload = function()
{
    handleWindowControls()
}

window.onbeforeunload = function()
{
    window.removeAllListeners()
}

function handleWindowControls()
{
    window.document.getElementById('minButton').addEventListener("click", function()
    {
        window.api.send("minimize")
    })

    window.document.getElementById('maxButton').addEventListener("click", function()
    {
        window.api.send("maximize")
    })

    window.document.getElementById('restoreButton').addEventListener("click", function()
    {
        window.api.send("unmaximize")
    })

    window.document.getElementById('closeButton').addEventListener("click", function()
    {
        window.api.send("close")
    })

    toggleMaxRestoreButtons()
    window.addEventListener('resize', function() {toggleMaxRestoreButtons()})
}

function toggleMaxRestoreButtons()
{
    let maxButton = window.document.getElementById("maxButton")
    let restoreButton = window.document.getElementById("restoreButton")
    let body = window.document.body

    if (screen.availHeight <= window.outerHeight && screen.availWidth <= window.outerWidth) {
        body.classList.add("maximized")

        restoreButton.classList.remove("windowControlButtonHidden")
        restoreButton.classList.add("windowControlButton")

        maxButton.classList.remove("windowControlButton")
        maxButton.classList.add("windowControlButtonHidden")
    }
    else
    {
        if (body.classList.contains("maximized"))
        {
            body.classList.remove("maximized")
        }

        maxButton.classList.remove("windowControlButtonHidden")
        maxButton.classList.add("windowControlButton")

        restoreButton.classList.remove("windowControlButton")
        restoreButton.classList.add("windowControlButtonHidden")
    }
}