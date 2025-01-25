import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JobSeekerDashboard from './Dashboard';

import CreateProfile from './ProfileManagement/CreateProfile';
import ViewProfile from './ProfileManagement/ViewProfile';

function JobSeekerModule(){
    return(
        <Routes>
            <Route index element={<JobSeekerDashboard/>} />
            <Route path="create-profile" element={<CreateProfile />} />
            <Route path="view-profile" element={<ViewProfile />} />
        </Routes>
    )
}
export default JobSeekerModule;