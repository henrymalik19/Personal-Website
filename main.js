const terminal = document.getElementById('output');


document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    let message = ' LOAD-WEBSITE("Malikhenry.me");';

    new TypeIt(terminal, {
        speed: 50,
        waitUntilVisible: true
    })
    .type(message)
    .pause(500)
    .options({speed: 0.1})
    .type(`<br><br>Copying Files to Memory...`)
    .pause(1000)
    .type(`<br>Starting Server on Port: 443...`)
    .pause(1000)
    .type(`<br>Server Started! <a href="google.com">https://localhost:443</a>`)
    .go();

  });