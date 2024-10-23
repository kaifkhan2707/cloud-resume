const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://x6cefh3qrrts3nepuvws4p6aue0yujqp.lambda-url.ap-south-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `👀 Views: ${data}`;
}
updateCounter();