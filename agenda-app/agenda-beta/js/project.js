class DayCard {
    constructor(date) {
        this.id = date.replaceAll('-', '');
        this.date = date;
        this.tasks = [];
    }

    addTask(text) {
        this.tasks.push(new Task(text));
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(t => t.id !== taskId);
    }
}

class Task {
    constructor(text) {
        this.id = Date.now();
        this.text = text;
        this.completed = false;
        this.note = "";
    }
}

export { DayCard, Task };
