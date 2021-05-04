false && setTimeout(function () { location = location }, 3000)
document.addEventListener('keydown', function (e) {
    if (e.key === 'F6') return location = location
    if (e.altKey && e.key === 'r') return location = location
    if (e.ctrlKey && e.key === 'r') return location = location
    if (e.altKey && e.key === 'a') addKeyAsk()
    if (e.key === 'a') addKeyAsk()
    if (e.ctrlKey && e.shiftKey && e.key === 'v') addKeysAsk()
})

function addKeyAsk() {
    var folderTextMulti = prompt(
        'Add your folders as: \n\n' +
        'C:\\btsync\\ AXX..., \n\n' +
        'You can add multi-folder by seperate them by "|"',
        'E:\\s\\')
    if (typeof folderTextMulti !== 'string')
        return alert('canceled')
    return folderTextMulti.split('|').map(function (folderText) {
        folderText = folderText.trim()
        var match, path, key
        if (match = folderText.match(/^(.*) ([A|B|R|S][0-9a-zA-Z]{32})$/))
            path = match[1], key = match[2]
        else if (match = folderText.match(/^(.*)[\/\\]\.sync[\/\\]([A|B|R|S][0-9a-zA-Z]{32})$/))
            path = match[1], key = match[2]
        else if (match = folderText.match(/^"(.*)[\/\\]\.sync[\/\\]([A|B|R|S][0-9a-zA-Z]{32})"$/))
            path = match[1], key = match[2]
        else if (match = folderText.match(/^(.*#([A|B|R|S][0-9a-zA-Z]{32}))$/))
            path = match[1], key = match[2]
        else if (match = folderText.match(/^"(.*#([A|B|R|S][0-9a-zA-Z]{32}))"$/))
            path = match[1], key = match[2]
        else if (match = folderText.match(/^"(.*#([A|B|R|S][0-9a-zA-Z]{32}))"$/))
            path = match[1], key = match[2]
        else if (match = folderText.match(/^(([A|B|R|S][0-9a-zA-Z]{32}))$/))
            path = match[1], key = match[2]
        else
            return alert('fails: path and keys doesnt match')
        return addKey(path, key)
    })

}
function addKeyFromString() {

}
function addKey(n, s) {
    var name = encodeURIComponent(n);
    var secret = encodeURIComponent(s);
    const _this = app.view
    utWebUI.request("action=addsyncfolder&path=" + name + (s ? ("&secret=" + secret) : '') + "&force=true"
        , function (resp) {
            alert(JSON.stringify(resp))
        });
}

function patch() {
    document.write('btsyncEnhance/Launched/v0.1.1')
    document.write('<button onclick="addKeyAsk()">AddKeys</button>')
    document.querySelector('button').focus()
    utWebUI.request('', function (result, error) {
        document.write('R/')
        document.write(str)
    })
}
patch()