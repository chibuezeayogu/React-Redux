import delay from './delay';

const authors = [
	{
		id: 'cory-house',
		firstName: 'Cory',
		lastName: 'House'
	},
	{
		id: 'scott-allen',
		firstName: 'Scott',
		lastName: 'Allen'
	},
	{
		id: 'dan-wahlin',
		firstName: 'Dan',
		lastName: 'Wahlin'
	}
];

const generateId = (author) => (
	`${author.firstName.toLowerCase()}-${author.lastName.toLowerCase()}`
);

/**
 * @class AuthorApi
 */
class AuthorApi {
	static getAllAuthors() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], authors));
			}, delay);
		});
	}
  
	/**
  * @static
  * @param {*} author
  * 
  * @returns {void}
  */
	static saveAuthor(author) {
		author = Object.assign({}, author);
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulate server-side validation
				const minAuthorNameLength = 3;
				if (author.firstName.length < minAuthorNameLength) {
					reject(new Error(
						`First Name must be at least ${minAuthorNameLength} characters.`
					));
				}

				if (author.lastName.length < minAuthorNameLength) {
					reject(new Error(
						`Last Name must be at least ${minAuthorNameLength} characters.`
					));
				}

				if (author.id) {
					const existingAuthorIndex = authors
						.findIndex(a => a.id === author.id);
					authors.splice(existingAuthorIndex, 1, author);
				} else {
					/* Just simulating creation here.
					The server would generate ids for new authors in a real app.
					Cloning so copy returned is passed by value rather than by reference.
					author.id = generateId(author);
					authors.push(author); */
				}

				resolve(author);
			}, delay);
		});
	}

	/**
  * @static
  * @param {*} authorId
  * 
  * @returns {void}
  */
	static deleteAuthor(authorId) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const indexOfAuthorToDelete = authors
					.findIndex(author => author.id === authorId);
				authors.splice(indexOfAuthorToDelete, 1);
				resolve();
			}, delay);
		});
	}
}

export default AuthorApi;