import { DayCard, Task } from "./project.js";
import { UI } from "./ui.js";
import { Storage } from "./storage.js";

document.addEventListener("DOMContentLoaded", () => {
    const addCardBtn = document.getElementById("addCardButton");
    const datePicker = document.getElementById("datePicker");

    Storage.getCards().forEach(card => {
        UI.renderCard(card);
        UI.renderTasks(card);
    });

    addCardBtn.addEventListener("click", () => {
        const date = datePicker.value;
        if (!date) return alert("Please select a date!");

        const id = date.replaceAll('-', '');
        const existing = Storage.getCards().find(c => c.id === id);

        if (existing) return alert("This date already exists!");

        const newCard = new DayCard(date);
        Storage.addCard(newCard);

        UI.renderCard(newCard);
    });

    document.body.addEventListener("click", (e) => {
        const cardDiv = e.target.closest(".card");
        if (!cardDiv) return;

        const cardId = cardDiv.id;
        const cards = Storage.getCards();
        const card = cards.find(c => c.id === cardId);

        if (e.target.classList.contains("delete-card-btn")) {
            if (confirm("Delete this card?")) {
                Storage.deleteCard(cardId);
                UI.removeCard(cardId);
            }
        }

        if (e.target.classList.contains("add-task-btn")) {
            const text = prompt("Task:");
            if (!text) return;

            card.tasks.push(new Task(text));
            Storage.updateCard(card);
            UI.renderTasks(card);
        }

        if (e.target.classList.contains("delete-task-btn")) {
            const taskDiv = e.target.closest(".task-item");
            const taskId = Number(taskDiv.dataset.id);

            card.tasks = card.tasks.filter(t => t.id !== taskId);

            Storage.updateCard(card);
            UI.renderTasks(card);
        }

        if (e.target.classList.contains("complete-btn")) {
            const taskDiv = e.target.closest(".task-item");
            const taskId = Number(taskDiv.dataset.id);

            const task = card.tasks.find(t => t.id === taskId);
            task.completed = !task.completed;

            Storage.updateCard(card);
            UI.renderTasks(card);
        }

        if (e.target.classList.contains("edit-btn")) {
            const taskDiv = e.target.closest(".task-item");
            const taskId = Number(taskDiv.dataset.id);

            const task = card.tasks.find(t => t.id === taskId);
            const newText = prompt("Edit task:", task.text);

            if (newText) {
                task.text = newText;
                Storage.updateCard(card);
                UI.renderTasks(card);
            }
        }

        if (e.target.classList.contains("note-btn")) {
            const taskDiv = e.target.closest(".task-item");
            const taskId = Number(taskDiv.dataset.id);

            const task = card.tasks.find(t => t.id === taskId);
            const note = prompt("Add / Edit Note:", task.note);

            if (note !== null) {
                task.note = note;
                Storage.updateCard(card);
                UI.renderTasks(card);
            }
        }
    });
});
