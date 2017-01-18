import deepcopy from 'deepcopy';
const filterJobs = (jobs, searchTerms)=>{
  let filteredJobs = deepcopy(jobs);
  const titleValues = searchTerms.filter(term => term.type == 'title')
                                 .map(term => term.value);
  if (titleValues.length)
  {
    filteredJobs = filteredJobs.filter(job => {
        const jobs = job.restaurant.jobs;
        job.restaurant.jobs = jobs.filter((jobItem)=>{
          return (titleValues.indexOf(jobItem.title) >= 0);
        });
        return job.restaurant.jobs.length;
      });
  }

  const locationValues = searchTerms.filter(term => term.type == 'location')
                                    .map(term => term.value);
  if (locationValues.length)
  {
    filteredJobs = filteredJobs.filter(job => {
        const jobs = job.restaurant.jobs;
        job.restaurant.jobs = jobs.filter((jobItem)=>{
          return (locationValues.filter((value)=>{
            return jobItem.location.indexOf(value) >= 0;
          }).length);
        });
        return job.restaurant.jobs.length;
      });

  }

  const jobTypeValues = searchTerms.filter(term => term.type == 'jobType')
                             .map(term => term.value);
   if (jobTypeValues.length)
   {
     filteredJobs = filteredJobs.filter(job => {
         const jobs = job.restaurant.jobs;
         job.restaurant.jobs = jobs.filter((jobItem)=>{
           return (jobTypeValues.indexOf(jobItem.jobType) >= 0);
         });
         return job.restaurant.jobs.length;
       });
   }

   const restaurantTypeValues = searchTerms.filter(term => term.type == 'restaurantType')
                              .map(term => term.value);
    if (restaurantTypeValues.length)
    {
      filteredJobs = filteredJobs.filter(job => {
          return (restaurantTypeValues.indexOf(job.restaurant.restaurantType) >= 0);
        });
    }

    const nameTypeValues = searchTerms.filter(term => term.type == 'name')
                               .map(term => term.value);
     if (nameTypeValues.length)
     {
       filteredJobs = filteredJobs.filter(job => {
           return (nameTypeValues.indexOf(job.restaurant.name) >= 0);
         });
     }
   return filteredJobs;
};

export default filterJobs;
