console.clear();

interface Contact {
	name: string;
	phone: string;
	email?: string;
}

const newContact: Contact = {
	name: "Ttest",
	phone: "12413213"
};

function send(email: string) {}

if (newContact.email) {
	send(newContact.email);
}

console.log(newContact)
