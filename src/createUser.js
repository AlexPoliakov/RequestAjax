'use strict';

export default class CreateFormUser {
    constructor(option) {
        this.elem = option.elem;
        this.listUsers = document.querySelector('.list_users');

        this.createUser();
    }

    createUser() {
        this.container = document.createElement('div');
        this.container.classList.add('container_form');
        this.container.setAttribute('data-id', 'new');

        this.createForm();
        this.listUsers.appendChild(this.container);
    }

    createForm() {
        this.formElem = document.createElement('form');
        this.formElem.classList.add('form_users');

        this.pElemName = document.createElement('p');
        this.pElemName.classList.add('nameInput');
        this.pElemName.innerHTML = 'First name: ';

        this.pElemLastName = document.createElement('p');
        this.pElemLastName.classList.add('lastNameInput');
        this.pElemLastName.innerHTML = 'Last name: ';

        this.lastNameElem = document.createElement('input');
        this.lastNameElem.classList.add('form_lastName');

        this.nameElem = document.createElement('input');
        this.nameElem.classList.add('form_name');

        this.buttonAdd = document.createElement('button');
        this.buttonAdd.classList.add('add_user');
        this.buttonAdd.classList.add('buttonElem');
        this.buttonAdd.innerHTML = 'Add User';

        this.buttonDelete = document.createElement('button');
        this.buttonDelete.classList.add('delete_user');
        this.buttonDelete.classList.add('buttonElem');
        this.buttonDelete.innerHTML = 'Delete User';

        this.container.appendChild(this.formElem);
        this.formElem.appendChild(this.pElemName);
        this.pElemName.appendChild(this.nameElem);

        this.formElem.appendChild(this.pElemLastName);
        this.pElemLastName.appendChild(this.lastNameElem);
        this.formElem.appendChild(this.buttonAdd);
        this.formElem.appendChild(this.buttonDelete);
    }
}
