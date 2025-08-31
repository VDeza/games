// Write code below 💖
function chose() {
    document.getElementById("chose").style.display = "block";
}

function avatar1() {
    let avatar = document.getElementById("pilihAvatar").value;

    let avatarpp;
    if (avatar == "Kucing") {
        avatarpp = "/Games/images/kucheng.jpg";
    } else if (avatar == "Anjing") {
        avatarpp = "/Games/images/puppy.jpg";
    } else if (avatar == "Burung") {
        avatarpp = "/Games/images/birb.jpg"
    } else {
        avatarpp = "/codingcamp-14-jul-25-VDeza/Images/pancasila.jpg"
    }
    document.getElementById("avatar").src = avatarpp;
}

function avatar2() {
    document.getElementById("chose").style.display = "none";
}

function vs() {
    let player = document.getElementById("bentuk").value;
    let hasil;
    if (player == "Batu") {
        player = "Rock";
        hasil = "";
        document.getElementById("bpemain").src = "/games/images/rocks.png";
        document.getElementById("bbot").src = "/games/images/question.png";

    } else if (player == "Gunting") {
        player = "Scissor";
        hasil = "";
        document.getElementById("bpemain").src = "/games/images/scissor.png";
        document.getElementById("bbot").src = "/games/images/question.png";

    } else if (player == "Kertas") {
        player = "Paper";
        hasil = "";
        document.getElementById("bpemain").src = "/games/images/paper.png";
        document.getElementById("bbot").src = "/games/images/question.png";

    }
    else {
        player = "???";
        hasil = "";
        document.getElementById('bot').innerHTML = "???";
        document.getElementById("bpemain").src = "/games/images/question.png";
        document.getElementById("bbot").src = "/games/images/question.png";

    }
    document.getElementById("pemain").innerHTML = player;
    document.getElementById("Hasil").innerHTML = hasil;
}

function rPS() {
    let player = document.getElementById("bentuk").value;
    let bot = Math.floor(Math.random() * 3);

    if (player == "Batu") {
        player = "Rock";
        document.getElementById("bpemain").src = "/games/images/rocks.png";
    } else if (player == "Gunting") {
        player = "Scissor";
        document.getElementById("bpemain").src = "/games/images/scissor.png";
    } else if (player == "Kertas") {
        player = "Paper";
        document.getElementById("bpemain").src = "/games/images/paper.png";
    }
    else {
        player = "";

    }

    if (bot == 0) {
        bot = "Rock";
        document.getElementById("bbot").src = "/games/images/rocks.png";
    } else if (bot == 1) {
        bot = "Scissor";
        document.getElementById("bbot").src = "/games/images/scissor.png";
    } else {
        bot = "Paper";
        document.getElementById("bbot").src = "/games/images/paper.png";
    }
    document.getElementById("bot").innerHTML = bot;

    let hasil;

    if (player == "Rock" && bot == "Scissor") {
        hasil = "Player Win!";
    } else if (player == "Rock" && bot == "Paper") {
        hasil = "Bot Win!";
    } else if (player == "Scissor" && bot == "Rock") {
        hasil = "Bot Win!";
    } else if (player == "Scissor" && bot == "Paper") {
        hasil = "Player Win!";
    } else if (player == "Paper" && bot == "Scissor") {
        hasil = "Bot Win!";
    } else if (player == "Paper" && bot == "Rock") {
        hasil = "Player Win!";
    } else if (player == "") {
        hasil = "Pilih Bentuk!";
        document.getElementById('bot').innerHTML = "???";
        document.getElementById('pemain').innerHTML = "???";
        document.getElementById("bpemain").src = "/games/images/question.png";
        document.getElementById("bbot").src = "/games/images/question.png";
    } else {
        hasil = "Draw!";
    }
    document.getElementById("Hasil").innerHTML = hasil;
    if (hasil == "Player Win!") {
        document.getElementById("ppoint").innerHTML = Number(document.getElementById("ppoint").innerHTML) + 10;
    } else if (hasil == "Bot Win!") {
        document.getElementById("bpoint").innerHTML = Number(document.getElementById("bpoint").innerHTML) + 10;
    } else {

    }
    
}
