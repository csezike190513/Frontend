function keyboardadd(){
    // add keyboard to page
    
    for (let i = 97; i <= 122; i++) {
        const key = document.createElement("div");
        key.classList.add("key");
        key.id = ("key_"+String(i));
        key.textContent = String.fromCharCode(i);
        key.addEventListener("click", () => makeGuess(String.fromCharCode(i),i));
        keyboard.appendChild(key);
    }
}