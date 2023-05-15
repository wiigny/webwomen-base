function removeToCart() {
  const buttonsTrash = document.querySelectorAll(".button__trash");
  const buttonsJobs = document.querySelectorAll("#apply");

  buttonsTrash.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let button = Number(e.target.id);
      listApplyJobs = listApplyJobs.filter((obj) => obj.id !== button);

      buttonsJobs.forEach((btnJobs) => {
        let id = Number(btnJobs.parentNode.parentNode.id);
        if (id == button) {
          btnJobs.innerText = "Candidatar";
        }
      });

      addApplyJobsInList();
      addApplyPref();
    });
  });
}

function addApplyPref() {
  const jobsApply = [];
  jobsApply.push(JSON.stringify(listApplyJobs));
  const cartJobs = localStorage.getItem("cartApplyJobs");

  if (!cartJobs) {
    localStorage.setItem("cartApplyJobs", jobsApply);
  }

  localStorage.setItem("cartApplyJobs", jobsApply);
}
