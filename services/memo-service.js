import storageService from './storage.service.js'
import utilService from './util.service.js';

const KEY = 'memosKey';
var isDeletedByUser = false;

function memoQuery(filter = null) {

    return storageService.load(KEY)
        .then(memos => {
            if (!memos || !memos.length) {
                memos = creatInitialMemos();
                storageService.store(KEY, memos);
            }
            console.log('memos', memos);
            if (filter === null) return memos;
            else return memos.filter(memo =>
                memo.title.toUpperCase().includes(filter.byTitle.toUpperCase())
            )
        })
}

function getMemoById(memoId){
    return storageService.load(KEY)
    .then(memos =>{
        return memos.find(memo => memo.id === memoId);
    })
}

function deleteMemo(memoId){
    return storageService.load(KEY)
    .then(memos =>{
        let memoIdx = memos.findIndex(memo => memo.id === memoId);
        memos.splice(memoIdx,1);
        isDeletedByUser = !memos.length;
        return storageService.store(KEY,memos);
    })
}


function saveMemo(memo){
    return storageService.load(KEY)
    .then(memos =>{
        //updateing existed memo 
        if(memo.id){
            let memoIdx = memos.findIndex(currMmemo => currMmemo.id === memo.id)
            memos.splice(memoIdx,1,memo);
        }
        else{
            //Adding new
            memo.id = utilService.makeId();
            memos.push(memo);
        }
        return storageService.store(KEY,memos);
    })
}

export default{
    memoQuery,
    getMemoById,
    deleteMemo,
    saveMemo
}

function creatInitialMemos() {
    
     return isDeletedByUser ? []:
     [
        {
            id: utilService.makeId(),
            title: 'Password Update',
            content: 'Change your gmail password',
            color: utilService.rndColor(),
            createdAt: 1515947427,

        },
        {
            id: utilService.makeId(),
            title: 'Cat food',
            content: 'Buy two bags of food for cat and put water on the scratches',
            color: utilService.rndColor(),
            createdAt: 1515947427,

        },
        {
            id: utilService.makeId(),
            title: 'Pay bills',
            content: 'Get a job -> get paid -> pay bills and repeat',
            color:  utilService.rndColor(),
            createdAt: 1515947427,

        },
        {
            id: utilService.makeId(),
            title: 'Sawsan\'s present',
            content: 'Celebrate Sawsan\'s existence',
            color: utilService.rndColor(),
            createdAt: 1515947427,

        },
        {
            id: utilService.makeId(),
            title: 'Tamara\'s walk',
            content: 'Fresh air will be good for her!',
            color: utilService.rndColor(),
            createdAt: 1515947427,

        },
        {
            id: utilService.makeId(),
            title: 'Vue.js',
            content: 'Learn vue very well and die',
            color: utilService.rndColor(), 
            createdAt: 1515947427,

        },
    ]
}
