const products = [
    {
        name:"Schallplatte",
        preis: 10
    },
    
    {
        name:"Fernseher",
        preis: 210
    },
    
    {
        name:"Radio",
        preis: 12
    },
    
    {
        name:"Tischlampe",
        preis: 18
    },
    
    {
        name:"Pfanne",
        preis: 5
    },
    
    {
        name:"Topf",
        preis: 3
    },
    
    {
        name:"Stereo",
        preis: 20
    },
    
    {
        name:"Geschenkkarte",
        preis: 5
    },
];

function addElement (item) {
    document.write(`
    <ul class = 'products'>
        <li>${item.name}</li>
        <li>${item.preis}$</li>
    </ul>`)
};

products.map(addElement);