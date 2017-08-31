export default function PhoneBookService() {
    const contacts = [
        {
            name: 'Ann',
            phoneNumber: '+375(33)4366445'
        },
        {
            name: 'Max',
            phoneNumber: '+375(29)4562387'
        },
        {
            name: 'Brom',
            phoneNumber: '+375(44)4562786'
        },
        {
            name: 'Dave',
            phoneNumber: '+375(22)3453455'
        },
        {
            name: 'Alonso',
            phoneNumber: '+375(33)6767674'
        },
        {
            name: 'Biber',
            phoneNumber: '+375(33)2347876'
        },
        {
            name: 'Joe',
            phoneNumber: '+375(25)4366445'
        },
        {
            name: 'Bucket',
            phoneNumber: '+375(25)7777654'
        },
        {
            name: 'Donald',
            phoneNumber: '+375(44)4366445'
        },
        {
            name: 'Aloha',
            phoneNumber: '+375(44)234567'
        },
        {
            name: 'Chip',
            phoneNumber: '+375(29)4562345'
        }
    ];

    this.contacts = localStorage.getItem("contacts");
    this.contacts = this.contacts ? JSON.parse(this.contacts) : contacts;

    console.log(this.contacts);

    this.addContact = function(name, phoneNumber) {
        if (name && phoneNumber) {
            const contacts = JSON.parse(localStorage.contacts);
            contacts.push({
                name: name,
                phoneNumber: phoneNumber
            });
            localStorage.setItem("contacts", JSON.stringify(contacts));
            this.contacts = JSON.parse(localStorage.getItem("contacts"));
        }
        this.contactName = '';
        this.contactPhoneNumber = null;
    };

    this.removeContact = function(name, phoneNumber) {

    };

    this.getAll = function() {
        return this.contacts;
    };


}
