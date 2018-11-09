import storageService from './storage.service.js'
import utilService from './util.service.js';

const KEY = 'emailKey';
var isDeletedByUser = false;

function emailQuery(filter = null) {

    return storageService.load(KEY)
        .then(emails => {
            if (!emails || !emails.length) {
                emails = _creatInitialEmails();
                storageService.store(KEY, emails);
            }
            console.log('emails', emails);
            if (filter === null) return emails;
            else return emails.filter(email =>
                email.title.toUpperCase().includes(filter.byTitle.toUpperCase())
            )
        })
}

function getEmailbyId(emailId){
    return storageService.load(KEY)
    .then(emails =>{
        return emails.find(email => email.id === emailId);
    })
}

function deleteEmail(emailId){
    return storageService.load(KEY)
    .then(emails =>{
        let emailIdx = emails.findIndex(email => email.id === emailId);
        emails.splice(emailIdx,1);
        isDeletedByUser = !emails.length;
        return storageService.store(KEY,emails);
    })
}


function sendEmail(mail){
    console.log('sending this email is on proccess . . . ',mail);
    
}

export default{
    emailQuery,
    getEmailbyId,
    deleteEmail,
    sendEmail
}

function _creatInitialEmails() {
    
     return isDeletedByUser ? []:
     [
        {
            id: utilService.makeId(),
            subject: 'dont give up',
            body: 'Change your gmail password',
            isRead: false,
            sentAt: +new Date()

        },
        {
            id: utilService.makeId(),
            subject: 'its a nice vue',
            body: 'Change your gmail password',
            isRead: false,
            sentAt: +new Date()

        },
        {
            id: utilService.makeId(),
            subject: 'html is getting super powers-vue',
            body: 'Change your gmail password',
            isRead: false,
            sentAt: +new Date()

        },
        {
            id: utilService.makeId(),
            subject: 'jquery is getting lonely',
            body: 'Change your gmail password',
            isRead: false,
            sentAt: +new Date()

        },
        {
            id: utilService.makeId(),
            subject: 'javascript needs you',
            body: 'Change your gmail password',
            isRead: false,
            sentAt: +new Date()

        },
        {
            id: utilService.makeId(),
            subject: 'php is calling you',
            body: 'Change your gmail password',
            isRead: false,
            sentAt: +new Date()

        },
    ]
}
