'use strict';

import '../style/style.css';
import CreateFormUser from './createUser';
import EventUsers from './eventUsers';

class ListUsers {
  constructor(elem) {
    this.elem = elem;

    this.eventOfUsers = this.eventOfUsers.bind(this);
    this.elem.addEventListener('click', this.eventOfUsers);
  }

  eventOfUsers(event) {
    this.target = event.target;
    this.event = event;

    if (this.target.classList.contains('create_user')) {
      new CreateFormUser({ elem: document.querySelector('.create_user') });
      this.user = new EventUsers();
    } else if (this.target.classList.contains('buttonElem')) {
      event.preventDefault();
      this.user.eventWithUsers({ event: this.event });
    }
  }
}

new ListUsers(document.body);
