const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", async () => {
    const res = await fetch("/sendButton", {
        method: "POST",
        body: "text body data wedrwe fdgdfgdf dfgdfg dfgdfgdfgfdgdf dfgdfgd dfgdfgdfgd dfgdfgdgfd",
    });
    const body = await res.text();
    console.log(body);
});
