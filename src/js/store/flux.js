import avatar from "../../img/avatar.jpeg"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{
				  name: "Julian",
				  address: "Somewhere in the UK",
				  phone: "123456000",
				  email: "julian@4geeks.com",
				  img: avatar,
				},
				{
					name: "Marco",
					address: "Somewhere in the Nederlands",
					phone: "123456000",
					email: "marco@4geeks.com",
					img: avatar,
				},
				{
					name: "Andres",
					address: "Somewhere in the Portugal",
					phone: "123456000",
					email: "andres@4geeks.com",
					img: avatar,
				},
			  ],
			},
		actions: {
			// Use getActions to call a function within a fuction
			addContact: (contact) => {
				let store = getStore();
				let newContacts = [...getStore().contacts, contact];
				setStore({ contacts: newContacts });
			  },
			  delContact: (index) => {
				let newContacts = [...getStore().contacts];
				newContacts.splice(index, 1);
				setStore({ contacts: newContacts });
			  },
			  updateContact: (data, index) => {
				let newContacts = [...getStore().contacts];
				newContacts[index] = {
				  ...data,
				  img: badguys,
				};
				setStore({ contacts: newContacts });
			}
		}
	};
};

export default getState;
