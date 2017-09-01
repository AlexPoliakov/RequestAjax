'use strict';

import ajaxRequest from './request';

export default class EventUsers {
  constructor() {


    this.eventWithUsers = this.eventWithUsers.bind(this);
  }

  eventWithUsers(options) {
    this.target = options.event.target;
    this.conteiner = this.target.closest('.container_form');
    this.way = this.conteiner.dataset.id;

    if (this.target.classList.contains('add_user')) {
      this.name = this.target.parentNode.querySelector('.form_name').value;
      this.surname = this.target.parentNode.querySelector(
        '.form_lastName',
      ).value;

      if (this.way !== 'new') {
        this.requestPatch();
        return;
      }

      this.requestPost();
      this.target.innerHTML = 'Choose data';
    } else if (this.target.classList.contains('delete_user')) {
      this.requestDelete();
    }

    ajaxRequest(this.opt);
  }

  requestPatch() {
    alert('Are you sure you want to change the data?');
    this.opt = {
      method: 'PATCH',
      url: `https://learnajax-26729.firebaseio.com/users/${this.way}.json`,
      data: {
        name: this.name,
        surname: this.surname,
      },
    };

    ajaxRequest(this.opt);
  }

  requestPost() {
    let self = this;

    this.opt = {
      method: 'POST',
      url: 'https://learnajax-26729.firebaseio.com/users.json',
      data: {
        name: this.name,
        surname: this.surname,
      },
      onload: function() {
        const { name } = JSON.parse(this.response);
        self.conteiner.dataset.id = name;
      },
    };
  }

  requestDelete() {
    this.opt = {
      method: 'DELETE',
      url: `https://learnajax-26729.firebaseio.com/users/${this.way}.json`,
    };

    this.conteiner.remove();
  }
}
