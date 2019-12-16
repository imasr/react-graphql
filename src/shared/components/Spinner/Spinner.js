import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './Spinner.scss';

const Spinner = (props) => (
    <div className="text-center">
        <CircularProgress />
        <p className="loading">Loading...</p>
    </div>

);

export default Spinner;