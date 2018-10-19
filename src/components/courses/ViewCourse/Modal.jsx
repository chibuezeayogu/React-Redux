import React, { Component } from 'react';
import {
	func, string, array, bool, shape 
} from 'prop-types';

const Modal = ({
	closeModal, deleteCourse, modalContent, displayModal
}) => (
	<div 
		className="modal" 
		id="delete-course-modal"
		style={(displayModal) ? { display: 'block' } : { display: 'none' }}
	>
		<div className="modal-content">
			<div className="modal-header">
				<div className="header-title">Delete Course</div>
			</div>
			<h3>{'Are you sure you want to delete'}</h3>
			<span className="warning">{modalContent.title}</span>
			<div className="modal-footer">
				<div className="">
					<button 
						className="grayed upper" 
						type="button"
						onClick={closeModal}
					>
                Cancel
					</button>
					<button
						className="fill upper delete-course" 
						type="button" 
						tabIndex={0}
						onClick={() => deleteCourse(modalContent.id)}
					>
                Delete
					</button>
				</div>
			</div>
		</div>
	</div>
);

Modal.propTypes = {
	closeModal: func,
	displayModal: bool,
	deleteCourse: func,
	modalContent: shape({
		id: string,
		title: string,
	})
};

export default Modal;