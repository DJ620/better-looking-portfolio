(function() {
    emailjs.init('user_HRpuwBHjAKteVvrKCOZrz');
})();

$("#contact-form").on("submit", event => {
    event.preventDefault();
    $("#contact_number").val(Math.random() * 100000 | 0);
    emailjs.sendForm('service_c7rxoqk', 'template_dia2ck5', event.currentTarget).then(() => {
        console.log("success!");
    }, error => {
        console.log("Failed...", error);
    });
    $("#nameInput").val("");
    $("#emailInput").val("");
    $("#messageInput").val("");
});