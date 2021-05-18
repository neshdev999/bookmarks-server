function makeBookmarksArray() {
    return [{
            id: 1,
            title: 'Thinkful',
            url: 'https://www.thinkful.com',
            description: 'Think outside the classroom',
            rating: 5,
        },
        {
            id: 2,
            title: 'Google',
            url: 'https://www.google.com',
            description: 'Where we find everything else',
            rating: 4,
        },
        {
            id: 3,
            title: 'MDN',
            url: 'https://developer.mozilla.org',
            description: 'The only place to find web documentation',
            rating: 5,
        },
        {
            id: 4,
            title: 'Sardar Vallabhbhai Patel',
            url: 'https://en.wikipedia.org/wiki/Vallabhbhai_Patel',
            description: 'The Iron Man of India from wiki source',
            rating: 5
        }
    ]
}

module.exports = {
    makeBookmarksArray,
}