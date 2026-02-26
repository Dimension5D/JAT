import getJobsFromStorage from "./storage.js";

const nameInputEl = document.querySelector("#name");
const urlInputEl = document.querySelector("#url");
const descriptionInputEl = document.querySelector("#description");
const dateInputEl = document.querySelector("#date");
const formEl = document.querySelector(".newJob-form");
const messageEl = document.querySelector(".message");

let jobs = getJobsFromStorage();

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const job = {
        name: nameInputEl.value,
        url: urlInputEl.value,
        description: descriptionInputEl.value,
        date: dateInputEl.value,
    }
    jobs.push(job);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    nameInputEl.value = "";
    urlInputEl.value = "";
    descriptionInputEl.value = "";
    dateInputEl.value = "";
    messageEl.textContent = "New Job Added Successfully.";
});
