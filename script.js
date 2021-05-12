var currentText = '';
window.addEventListener('keydown', function(){updateInfoBar(event)});

document.getElementById("button2").addEventListener("click", function(){runCommand('x', 'clear')});

var r=255,g=0,b=0;

setInterval(function(){
    if(r > 0 && b == 0){
        r--;
        g++;
    }
    if(g > 0 && r == 0){
        g--;
        b++;
    }
    if(b > 0 && g == 0){
        r++;
        b--;
    }
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}, 30);

function updateInfoBar(event) {
    if (event.key.length == 1) {
        currentText = currentText + event.key;
    } else if (event.keyCode == 8) {
        currentText = currentText.substring(0, currentText.length-1);
    } else if (event.keyCode == 13) {
        runCommand('client~ ', currentText);
        currentText = '';
    } else {
        window.alert(event.key + ", " + event.keyCode);
    }
    document.getElementById('current-line').innerHTML = 'client~ ' + currentText;
   
}

function runCommand(prefix, text) {
    var line = document.createElement('P');
    line.classList.add('terminal-line');
    line.innerHTML = prefix + text;
    document.getElementById('terminal-lines').appendChild(line);
    if (text == 'cls' || text == 'clear') {
        document.getElementById('terminal-lines').innerHTML = '';
        currentText = '';
        document.getElementById('current-line').innerHTML = 'client~ ';
    }
}