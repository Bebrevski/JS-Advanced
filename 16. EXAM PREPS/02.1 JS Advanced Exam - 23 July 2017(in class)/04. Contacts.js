class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;

        this.element = this.createElement();
        this.online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        if (value) {
            this.element.find('.title').addClass('online');
        } else {
            this.element.find('.title').removeClass('online');
        }
        this._online = value;
    }

    render(id) {
        let container = $('#' + id);

        container.append(this.element);
    }

    createElement() {
        let article = $('<article>');
        let titleDiv = $(`<div class="title">${this.firstName} ${this.lastName}</div>`);

        let infoDiv = $('<div class="info" style="display: none;">\n' +
            `<span>&phone; ${this.phone}</span>\n` +
            `<span>&#9993; ${this.email}</span>\n` + '</div>\n');

        let infoBtn = $('<button>&#8505;</button>').click(() => infoDiv.toggle());

        article.append(titleDiv.append(infoBtn))
               .append(infoDiv);

        return article;
    }
}