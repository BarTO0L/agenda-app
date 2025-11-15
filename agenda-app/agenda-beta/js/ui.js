class UI {
    static renderCard(card) {
        const dayColumn = UI.getDayColumn(card.date);
        if (!dayColumn) return;

        const wrapper = dayColumn.querySelector(".cards-wrapper");

        const cardDiv = document.createElement("div");
        cardDiv.className = "card p-2 mb-2";
        cardDiv.id = card.id;

        const dateObj = new Date(card.date);
        const day = dateObj.getDate();
        const month = dateObj.toLocaleString('en-US', { month: 'long' });
        const year = dateObj.getFullYear();
        const formattedDate = `${day} ${month} ${year}`;

        cardDiv.innerHTML = `
            <h5>${formattedDate}</h5>
            <div class="d-flex justify-content-between mb-2">
                <button class="btn btn-success btn-sm add-task-btn">Add Task</button>
                <button class="btn btn-danger btn-sm delete-card-btn">Delete Card</button>
            </div>
            <div class="tasks-container"></div>
        `;

        wrapper.appendChild(cardDiv);
    }

    static renderTasks(card) {
        const cardDiv = document.getElementById(card.id);
        const container = cardDiv.querySelector(".tasks-container");
        container.innerHTML = "";

        card.tasks.forEach(task => {
            const div = document.createElement("div");
            div.className = `task-item ${task.completed ? "completed" : ""}`;
            div.dataset.id = task.id;

            div.innerHTML = `
                <div class="task-main">
                <span>${task.text}</span>
                <div class="note-container">${task.note}</div>
                </div>
                <div class="task-buttons">
                    <button class="btn btn-primary btn-sm complete-btn">✔</button>
                    <button class="btn btn-warning btn-sm edit-btn">✎</button>
                    <button class="btn btn-info btn-sm note-btn">📝</button>
                    <button class="btn btn-danger btn-sm delete-task-btn">🗑</button>
                </div>
                
            `;

            container.appendChild(div);
        });
    }

    static getDayColumn(dateStr) {
        const day = new Date(dateStr).getDay();
        const ids = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        return document.getElementById(ids[day]);
    }

    static removeCard(cardId) {
        const card = document.getElementById(cardId);
        if (card) card.remove();
    }
}

export { UI };
