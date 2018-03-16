class MailBox {
    constructor(){
       this.mailbox = [];
    }

    get messageCount() {
        return this.mailbox.length;
    }

    addMessage(subject, text) {
        this.mailbox.push({subject: subject, text: text});

        return this;
    }

    deleteAllMessages() {
        this.mailbox.length = 0;
    }

    findBySubject(substr) {
        return this.mailbox.filter(m => m.subject.includes(substr));
    }

    toString() {
        let output = '';
        if (this.mailbox.length === 0){
          output = ` * (empty mailbox)`;
        } else {
            //for (let mail of this.mailbox) {
            //    output += ` * [${mail.subject}] ${mail.text}\n`;
            //}

            output = this.mailbox.map(e => ` * [${e.subject}] ${e.text}`).join('\n')
        }

        return output.trimRight();
    }
}


let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
