
export default function getJobsFromStorage () {
    let jobs = localStorage.getItem("jobs");
    if (!jobs) {
        return [];
    }
    return JSON.parse(jobs);
}
