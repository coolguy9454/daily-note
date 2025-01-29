document.addEventListener("DOMContentLoaded", loadEntries);

function saveEntry() {
    const date = document.getElementById("date").value;
    const mood = document.getElementById("mood").value;
    const notes = document.getElementById("notes").value;
    
    if (!date || !mood || !notes) {
        alert("Please fill in all fields!");
        return;
    }
    
    const entry = { date, mood, notes };
    let entries = JSON.parse(localStorage.getItem("dailyEntries")) || [];
    entries.push(entry);
    localStorage.setItem("dailyEntries", JSON.stringify(entries));
    
    document.getElementById("date").value = "";
    document.getElementById("mood").value = "";
    document.getElementById("notes").value = "";
    
    loadEntries();
}

function loadEntries() {
    const entriesDiv = document.getElementById("entries");
    entriesDiv.innerHTML = "";
    let entries = JSON.parse(localStorage.getItem("dailyEntries")) || [];
    
    entries.forEach(entry => {
        const entryDiv = document.createElement("div");
        entryDiv.classList.add("entry");
        entryDiv.innerHTML = `<strong>${entry.date}</strong><br> Mood: ${entry.mood} <br> Notes: ${entry.notes}`;
        entriesDiv.appendChild(entryDiv);
    });
}