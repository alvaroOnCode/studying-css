(() => {
    const data = {
        evanYou: {
            title: 'Coffee with Evan You',
            alt: 'Evan You',
            image: 'https://avatars1.githubusercontent.com/u/499550?v=4',
            date: '1 week ago',
            post: 'post.html'
        },

        damianDulisz: {
            title: 'Coffee with Damian Dulisz',
            alt: 'Damian Dulisz',
            image: 'https://avatars0.githubusercontent.com/u/3737591?v=4',
            date: '3 weeks ago'
        },

        sarahDosner: {
            title: 'Coffee with Sarah Dosner',
            alt: 'Sarah Dosner',
            image: 'https://avatars1.githubusercontent.com/u/2281088?v=4',
            date: '1 months ago'
        },

        nataliaTepluhina: {
            title: 'Coffee with Natalia Tepluhina',
            alt: 'Natalia Tepluhina',
            image: 'https://avatars0.githubusercontent.com/u/18719025?v=4',
            date: '3 months ago'
        }
    };

    const postTemplate = document.getElementById('post-template');
    const posts = document.getElementById('posts');

    Object.keys (data).forEach ((item) => {
        let cloned = postTemplate.cloneNode(true);

        cloned.removeAttribute('id');
        cloned.removeAttribute('style');

        cloned.getElementsByTagName('img')[0].setAttribute('src', data[item].image);
        cloned.getElementsByTagName('img')[0].setAttribute('alt', data[item].alt);
        cloned.getElementsByTagName('h2')[0].innerHTML = data[item].title;
        cloned.getElementsByTagName('span')[0].innerHTML = data[item].date;
        
        if (data[item].post) {
            cloned.getElementsByTagName('a')[0].href = data[item].post;
        }

        posts.appendChild(cloned);
    });
})()