'use strict';

export default function ajaxRequest(options) {
    let { method } = options;
    let { url } = options;
    let { onload  } = options;
    let { data } = options;

    let request = new XMLHttpRequest();
    request.open(method, url);
    request.setRequestHeader('Content-type', 'application/json');
    request.onload = onload;

    request.onreadystatechange = function() {
        if (request.readyState !== this.DONE) return;
    };

    request.send(JSON.stringify(data));
};
