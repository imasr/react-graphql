import React, { Component } from 'react';
import './Loader.scss';
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

class Loader extends Component {
    render() {
        return (
            <Modal
                className="modal"
                open={this.props.show}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={this.props.show}>
                    <CircularProgress />
                </Fade>
            </Modal>
        )
    }
}

export default Loader;