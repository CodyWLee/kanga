
const messages = [];
let count = 0;

function send() {
    let input = document.getElementById('input');
    let prompt = input.value;

    if (prompt === '') {
        alert('Type something!');
        return;
    }

    count++;
    messages.push(prompt);

    let chat = document.getElementById('chat');
    chat.innerHTML += '<div class="message user">You: ' + prompt + '</div>';
    input.value = '';

    // Simulated bot response
    setTimeout(function () {
        let replies = ["Cool!", "Awesome!", "Noice", "Killer idea", "Lowkey fire", "Fire", "Goated idea", "I hear you...", "Sounds like a plan"];
        let reply = replies[Math.floor(Math.random() * replies.length)];
        chat.innerHTML += '<div class="message bot">Bot: ' + reply + '</div>';
        chat.scrollTop = chat.scrollHeight;
    }, 500);
}

let appVersion = "1.0";
let appName = "GloboCorp's GPT Genie";
console.log(appName + " " + appVersion + " loaded @ " + new Date());
