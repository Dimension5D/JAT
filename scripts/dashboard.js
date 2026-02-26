import getJobsFromStorage from "./storage.js";

const jobsCountEl = document.querySelector(".count");
const jobsContainerEl = document.querySelector(".job-container");
const clearBtnEl = document.querySelector(".clear-btn");

let jobs = getJobsFromStorage();
renderJobs();

function renderJobs () {
    let jobElements = "";
    jobs.map((job) => {
        jobElements += `
            <div class="job-item">
                <h1> ${job.name} </h1>
                <p> ${job.description} </p>
                <time datetime="2026-02-25"> ${job.date} </time>
                <div class="bottom-jobItem-container">
                    <a href="${job.link}" target="_blank">View Job Posting</a>
                </div>
            </div> 
        `
    });
    jobsContainerEl.innerHTML = jobElements;
    jobsCountEl.textContent = jobs.length;
}

clearBtnEl.addEventListener("click", () => {
    localStorage.clear();
    jobsContainerEl.innerHTML = "";
    jobsCountEl.textContent = 0;
});
