
const jobsCountEl = document.querySelector(".count");
const jobsContainerEl = document.querySelector(".job-container");

// let jobs = getJobsFromStorage();
let jobs = [
    {
        name: "Comp",
        description: "description goes here",
        date: "Feb 25, 2026",
        link: "https://google.com",
    },
    {
        name: "Comp",
        description: "description goes here",
        date: "Feb 25, 2026",
        link: "https://google.com",
    },
];

renderJobs();

function getJobsFromStorage () {
    let jobs =  localStorage.getItem("jobs");
    if (!jobs) {
        return [];
    }
    return jobs;
}

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
                    <button>Delete</button>
                </div>
            </div> 
        `
    });
    jobsContainerEl.innerHTML = jobElements;
    jobsCountEl.textContent = jobs.length;
}

