const sendButton = document.getElementById("sendButton");

console.log(sendButton);

sendButton.addEventListener("click", () => {
    fetch("http://localhost:3000/sendButton", {
        method: "POST",
        body: "text body data wedrwe fdgdfgdf dfgdfg dfgdfgdfgfdgdf dfgdfgd dfgdfgdfgd dfgdfgdgfd",
    })
        .then(() => {
            //
        });
});
