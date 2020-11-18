const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", async () => {
    const res = await fetch("/sendButton", {
        method: "POST",
        body: "hjhjhjh",
    });
    console.log(res);
    const body = await res.text();
    console.log(body);
});
