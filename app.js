let tg = window.Telegram.WebApp;

tg.expand();

let btns = document.querySelectorAll('[id^="btn"]');

btns.forEach(btn => {
    btn.addEventListener("click", function(){
        // Ваш код для обработки события click
        tg.sendData(btn.id);
    });
});
