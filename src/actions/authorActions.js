import toastr from 'toastr';
import { 
	LOAD_AUTHORS_SUCCESS,
	ISLOADING_AUTHORS,
	DELETE_AUTHOR_SUCCESS,
	CREATE_AUTHOR_SUCCESS,
	UPDATE_AUTHOR_SUCCESS,
} from './actionTypes';
import authorApi from '../api/mockAuthorApi';

export const loadAuthorsSuccess = authors => ({
	type: LOAD_AUTHORS_SUCCESS, authors
});

export const isLoadingAuthors = status => ({ 
	type: ISLOADING_AUTHORS,
	status
});

export const deleteAuthorSuccess = authorId => ({
	type: DELETE_AUTHOR_SUCCESS, authorId
});

export const updateAuthorSuccess = author => ({ 
	type: UPDATE_AUTHOR_SUCCESS, author
});

export const createAuthorSuccess = author => ({
	type: CREATE_AUTHOR_SUCCESS, author
});


export const loadAuthors = () => dispatch => {
	dispatch(isLoadingAuthors(true));
	return authorApi
		.getAllAuthors().then(authors => {
			dispatch(loadAuthorsSuccess(authors));
			dispatch(isLoadingAuthors(false));
		}).catch(error => {
			dispatch(isLoadingAuthors(false));
			throw (error);
		});
};

export const saveAuthor = author => dispatch => authorApi
	.saveAuthor(author)
	.then(savedAuthor => {
		if (author.id) {
			dispatch(updateAuthorSuccess(savedAuthor));
			toastr.success('Updated Successfully');
		} else {
			dispatch(createAuthorSuccess(savedAuthor));
			toastr.success('Created Successfully');
		}
	}).catch(error => {
		throw (error);
	});


export const deleteAuthor = (authorId) => dispatch => authorApi
	.deleteAuthor(authorId).then(() => {
		dispatch(deleteAuthorSuccess(authorId));
		toastr.success('Deleted Successfully');
	}).catch(error => {
		throw (error);
	});
