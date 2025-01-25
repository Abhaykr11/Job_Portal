import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JobSeekerDashboard from './Dashboard';

import CreateProfile from './ProfileManagement/CreateProfile';
import ViewProfile from './ProfileManagement/ViewProfile';
import JobSearch from './JobManagement/JobSearch';
import UpoladResume from './ResumeManagement/UpoladResume';
import EditResume from './ResumeManagement/EditResume';
import ApplicationStatus from './ApplicationStatus/ApplicationStatus';

function JobSeekerModule(){
    return(
        <Routes>
            <Route index element={<JobSeekerDashboard/>} />
            <Route path="create-profile" element={<CreateProfile />} />
            <Route path="view-profile" element={<ViewProfile />} />
            <Route path="search-job" element={<JobSearch/>} />
            <Route path="upload-resume" element={<UpoladResume/>} />
            <Route path="edit-resume" element={<EditResume/>} />
            <Route path="application-status" element={<ApplicationStatus/>} />
            
        </Routes>
    )
}
export default JobSeekerModule;