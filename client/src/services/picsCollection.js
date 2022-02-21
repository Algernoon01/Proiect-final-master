const pics = [
    {
        name: 'newborn4',
        path: 'img/newborn4.jpg',
        category: "sedinta 1"
    },
    {
        name: 'newborn5',
        path: 'img/newborn5.jpg',
        category: "sedinta 1"
    },
    {
        name: 'newborn6',
        path: 'img/newborn6.jpg',
        category: "sedinta 1"
    },
    {
        name: 'newborn7',
        path: 'img/newborn7.jpg',
        category: "sedinta 1"
    },
    {
        name: 'newborn21',
        path: 'img/newborn21.jpg',
        category: "sedinta 1"
    },
    {
        name: 'newborn8',
        path: 'img/newborn8.jpg',
        category: "sedinta 2"
    },
    {
        name: 'newborn9',
        path: 'img/newborn9.jpg',
        category: "sedinta 2"
    },
    {
        name: 'newborn10',
        path: 'img/newborn10.jpg',
        category: "sedinta 2"
    },
    {
        name: 'newborn11',
        path: 'img/newborn11.jpg',
        category: "sedinta 2"
    },
    {
        name: 'newborn20',
        path: 'img/newborn20.jpg',
        category: "sedinta 2"
    },
    {
        name: 'newborn12',
        path: 'img/newborn12.jpg',
        category: "sedinta 2"
    },
    
    {
        name: 'newborn13',
        path: 'img/newborn13.jpg',
        category: "sedinta 3"
    },
    {
        name: 'newborn14',
        path: 'img/newborn14.jpg',
        category: "sedinta 3"
    },
    {
        name: 'newborn15',
        path: 'img/newborn15.jpg',
        category: "sedinta 3"
    },
    {
        name: 'newborn17',
        path: 'img/newborn17.jpg',
        category: "sedinta 3"
    },
    {
        name: 'newborn18',
        path: 'img/newborn18.jpg',
        category: "sedinta 3"
    },
    {
        name: 'newborn19',
        path: 'img/newborn19.jpg',
        category: "sedinta 3"
    }
]

export function getAllPics() {
    return pics;
}

export function getPicsByCategory(cat) {
    return pics.filter(p => p.category === cat);
}

export function getCategories() {
    const categories = {};
    pics.forEach(p => {
        categories[p.category] = null;
    })
    return Object.keys(categories);
}



