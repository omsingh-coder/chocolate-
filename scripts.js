// पेज नेविगेशन फ़ंक्शन
function navigateTo(page) {
    window.location.href = page;
  }
  
  // "Surprise Me" बटन के लिए फ़ंक्शन
  function showSurprise() {
    // सरप्राइज मैसेज डिव बनाएँ
    let surpriseDiv = document.createElement("div");
    surpriseDiv.innerHTML = "<h2>Surprise! Enjoy a Chocolate Treat!</h2>";
    surpriseDiv.style.position = "fixed";
    surpriseDiv.style.top = "50%";
    surpriseDiv.style.left = "50%";
    surpriseDiv.style.transform = "translate(-50%, -50%)";
    surpriseDiv.style.background = "rgba(0,0,0,0.8)";
    surpriseDiv.style.color = "#fff";
    surpriseDiv.style.padding = "20px";
    surpriseDiv.style.borderRadius = "10px";
    surpriseDiv.style.zIndex = "1000";
    surpriseDiv.classList.add("animateanimated", "animateheartBeat");
    document.body.appendChild(surpriseDiv);
    
    // 3 सेकंड बाद मैसेज हटाएँ (fadeOut के साथ)
    setTimeout(() => {
      surpriseDiv.classList.add("animate__fadeOut");
      setTimeout(() => {
        document.body.removeChild(surpriseDiv);
      }, 1000);
    }, 3000);
  }
  
  // हर पेज पर 100 एनिमेटेड चॉकलेट पीस जनरेट करें
  window.onload = function() {
    let container = document.getElementById("animationContainer");
    if (container) {
      for (let i = 0; i < 100; i++) {
        let choco = document.createElement("div");
        choco.classList.add("choco-piece");
        choco.style.left = Math.random() * 100 + "%";
        choco.style.top = "-50px";
        // रैंडम एनिमेशन ड्यूरेशन और डिले
        let duration = 5 + Math.random() * 5;
        choco.style.animationDuration = duration + "s";
        choco.style.animationDelay = Math.random() * 5 + "s";
        container.appendChild(choco);
      }
    }
  };

  
  
  // Function to add floating chocolates randomly on screen
  function createFloatingChocolates() {
    for (let i = 0; i < 10; i++) {
      let chocolate = document.createElement("div");
      chocolate.className = "chocolate";
      chocolate.style.left = Math.random() * 100 + "vw";
      chocolate.style.top = Math.random() * 100 + "vh";
      chocolate.style.animationDelay = Math.random() * 5 + "s";
      document.body.appendChild(chocolate);
    }
  }
  
  // Function for Surprise Me button
  function showSurprise() {
    const effects = [
      "animate__bounce",
      "animate__flash",
      "animate__pulse",
      "animate__shakeX",
      "animate__shakeY",
      "animate__swing",
      "animate__tada",
      "animate__wobble"
    ];
  
    let randomEffect = effects[Math.floor(Math.random() * effects.length)];
    let content = document.querySelector(".content");
  
    content.classList.add("animate__animated", randomEffect);
  
    // Remove effect after animation completes
    setTimeout(() => {
      content.classList.remove("animate__animated", randomEffect);
    }, 1000);
  }
  
  // Call floating chocolates on page load
  document.addEventListener("DOMContentLoaded", createFloatingChocolates);

 