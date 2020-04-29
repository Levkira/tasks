const shortid = require('shortid');

const initialState = {
    products: [
        {
            id: shortid.generate(),
            imageUrl: 'images/scratcher.jpg',
            title: 'Scrather',
            price: '19.99',
            description: 'The cat scrather or scratch pad features the thick and eco-friendly high-quality cardboard. And the scratch pad is solid and durable, neat and tidy.With this cat lounge toy, your cat will have his own place for scratching, that is protecting your furniture. So you do not worry about your home furniture will be damaged.', 
        },
        {
            id: shortid.generate(),
            imageUrl: '/images/cat_hammock.jpg',
            title: 'Pet Hanging Bed',
            price: '10.99',
            description: 'Ideal for small or medium sized pets.Can be used both indoor and outdoors. Durable construction raised floor design, comfortable for your pet. Comes in seperate piecs and you just need to snap it all together with screws. Carefully placed anchors are used to mitigate swaying so your cat has peace on mind when they are in bed.', 
        },
        {
            id: shortid.generate(),
            imageUrl: '/images/cat_tunnel.jpg',
            title: 'Tunnel',
            price: '16.99',
            description: 'Soft and comfortable material. Extension tunnel for hiding out, exercising or sleeping. Taffeta fabrics, bright appearance and smooth feel, easy to clean. Strong and solid spring structure-sprung steel frame. Pops out and retracts easily for portable fun and easy storage. A wire inside, a steel spiral arrangement, all propped up the tunnel, easy to collapse.', 
        },
        {
            id: shortid.generate(),
            imageUrl: '/images/cat_house_bed_stool.jpg',
            title: 'House Stool',
            price: '48.99',
            description: 'Dual-use cat house and foot stool.A comfortable space for your cat to hide.Best bedroom or resting place for small dogs or cats.It is super soft and warm, so your pet will feel happy when in it.Create a comfortable bed for your pet. Requires home assembly.', 
        },
        {
            id: shortid.generate(),
            imageUrl: '/images/hoopet.jpg',
            title: 'House Scrather',
            price: '17.99',
            description: 'Triangle-shaped design make it more stable and will not shake. Environmentally materials are friendly to your lovely cats. Small size cat house is suitable for kitten and puppy; one sise is cat scratching board;and ball toy offer cats more fun.', 
        },
        {
            id: shortid.generate(),
            imageUrl: '/images/cats_toys.jpg',
            title: 'Set of cat\'s toys',
            price: '5.70',
            description: 'It is a fantastic toy for playing with cats. Cats are always fond of plush-made toys. You will get fun with it too. The stick can be strectched for long distance.', 
        },
    
    ]
};

export default function petShopReducer(state = initialState) {
     return state;
    }