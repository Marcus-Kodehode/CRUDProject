document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Forhindre standard innsending av skjema

    // Hente verdier fra inputfeltene
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let status = document.getElementById("status").value;

    // Opprette et nytt listeelement for oppgaven
    let taskItem = document.createElement("li");
    taskItem.innerHTML = `<strong>${title}</strong>: ${description} 
        <button class="delete-btn">Slett</button>`;

    // Legge oppgaven til riktig liste basert på status
    if (status === "Ikke påbegynt") {
        document.getElementById("notStartedList").appendChild(taskItem);
    } else if (status === "I gang") {
        document.getElementById("inProgressList").appendChild(taskItem);
    } else if (status === "Fullført") {
        document.getElementById("completedList").appendChild(taskItem);
    }

    // Nullstille skjemaet etter at oppgaven er lagt til
    document.getElementById("taskForm").reset();

    // Legge til funksjonalitet for sletting av oppgaven
    taskItem.querySelector(".delete-btn").addEventListener("click", function() {
        taskItem.remove(); // Fjerner oppgaven fra listen
    });
});
