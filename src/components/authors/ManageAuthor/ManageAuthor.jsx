import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Prompt } from 'react-router-dom';

import { saveAuthor } from '../../../actions/authorActions';
import AuthorsForm from '../authorsForm/AuthorsForm';
import getById from '../../../helpers/getCourseById';
import inputValidation from '../../../helpers/inputValidation';


/**
 * @class ManageAuthors
 * @extends Component
 */
class ManageAuthor extends Component {
  static initialState = () => ({
  	author: {
  		id: '',
  		firstName: '',
  		lastName: ''
  	},
  	hasUnsavedChanges: false,
  	loading: false,
  	errors: {}
  })

  state = ManageAuthor.initialState();

  static getDerivedStateFromProps(nextProps, prevState) {
  	if (nextProps.author.id && !prevState.author.id) {
  		return {
  			...ManageAuthor.initialState(),
  			author: nextProps.author
  		};
  	}
    
  	return null;
  }
  
  /**
   * 
   * @memberof ManageAuthor
   * @param {Object} event
   * @returns {void}
   */
  onChange = (event) => {
  	const { errors, author } = this.state;
  
  	if (Object.entries(errors).length > 0) {
  		this.setState({ errors: {} });
  	}
  	author[event.target.name] = event.target.value;
    
  	this.setState({ 
  		author,
  		hasUnsavedChanges: true
  	});
  }
  
  /**
   * 
   * @memberof ManageAuthors
   * @param {Object} evt
   * @returns {void}
   */
  saveAuthor = (evt) => {
  	evt.preventDefault();
  	const err = inputValidation(this.state.author);
  	if (!err.isEmpty) {
  		this.setState({ errors: err.errors });
  	} else {
  		this.setState({ loading: true });
  		this.props.saveAuthor(this.state.author)
  			.then(() => {
  				this.setState({ 
  					hasUnsavedChanges: false,
  					loading: false
  				});
  				this.props.history.push('/authors');
  			});
  	}
  }
  
  /**
   * @memberof render
   * @return {void} JSX element
   */
  render() {
  	const {
  		author, hasUnsavedChanges, loading, errors 
  	} = this.state;
  	return (
  		<Fragment>
  			<Prompt
  				when={hasUnsavedChanges}
  				message="Your unsaved data will be lost"
  			/>
  			<div className="jumbotron">
  				<h1 className="display-4">Manage Author</h1>
  			</div>
  			<AuthorsForm
  				author={author}
  				onChange={this.onChange}
  				errors={errors}
  				onSave={this.saveAuthor}
  				loading={loading}
  			/>
  		</Fragment>
  	);
  }
}

const mapStateToProps = ({ coursesReducer, authorsReducer }, props) => {
	const { id } = props.match.params;
	let author = ManageAuthor.initialState();
  
	if (id && authorsReducer.authors.length > 0) {
		author = Object.assign({}, getById(authorsReducer.authors, id));
	}
  
	return {
		author,
		courses: coursesReducer.courses
	};
}; 

export default connect(mapStateToProps, { saveAuthor })(ManageAuthor);
