function addTask() {
    const t = taskInput.value.trim();
    if (!t) return alert("Please enter a task");

    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";

    const task = document.createElement("span");
    task.textContent = t;

    const date = document.createElement("span");
    date.textContent = dateInput.value || "No Date";

    const done = document.createElement("button");
    done.innerHTML = "✔";
    done.onclick = () => task.classList.toggle("completed");

    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.onclick = () => li.remove();

    li.append(done, task, date, remove);
    taskList.appendChild(li);

    taskInput.value = "";
    dateInput.value = "";
}