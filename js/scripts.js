// Business logic for AddressBook

function AddressBook() {
  this.contacts = {};
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts[contact.firstName] = contact;
}

// Business logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


