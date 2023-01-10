
new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 30,
    breakpoints: {
        1200: { 
            perView: 1.5
        },
        1441: { 
            perView: 3
        },
        1681: { 
            perView: 5
        }
    }
}).mount()
