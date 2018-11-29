import Rehive from 'rehive'

let r = new Rehive({ apiVersion: 3, storageMethod: 'local' });

export const getCompany = () => (
	r.company.get()
		.then(data => data, err => err)
)


export const login = data => (
	r.auth.login(data)
		.then(user => user, err => err)
)
