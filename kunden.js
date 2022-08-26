let productsTwo= [
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


const kunden = [
    {
    name: "Terry",
    einkaufsDatum: "19 October 2021",
    produkt: [productsTwo[0].name, productsTwo[0].name, productsTwo[0].name], //!!!!
    menge: 3,
    zahlMethod: "Kreditkarte",
    bewertung: 4
    
},
{
    name: "Sarah",
    einkaufsDatum: "01 April 2020",
    produkt: productsTwo[1].name,
    zahlMethod: "Bar",
    bewertung: undefined
    
},
{
    name: "Dorry",
    einkaufsDatum: " 20 März 2019",
    produkt: productsTwo[2].name,
    zahlMethod: "Paypal",
    bewertung: 5
    
},
{
    name: "Tobias",
    einkaufsDatum: " 02 Oktober 2021 ",
    produkt: [productsTwo[3].name, productsTwo[4].name],
    zahlMethod: "Kreditkarte",
    bewertung: undefined
    
},
{
    name: "Ana",
    einkaufsDatum: " 25 Juli 2018",
    produkt: productsTwo[5].name,
    menge: 1,
    zahlMethod: "Kreditkarte",
    bewertung: 2
    
},
{
    name: "Leo",
    einkaufsDatum: "07 Juni 2019",
    produkt: productsTwo[0].name,
    menge: 1,
    zahlMethod: "Paypal",
    bewertung: 5
    
},
{
    name: "Diana",
    einkaufsDatum: "15 Dezember 2021",
    produkt: productsTwo[6].name,
    menge: 1,
    zahlMethod: "Bar",
    bewertung: undefined
    
},
];


function addElement(item){
    document.write (`
    <ul class='prod'>
        <li> Name: ${item.name}</li>
        <li> Einkaifsdatum:${item.einkaufsDatum}</li> 
        <li> Produkt: ${item.produkt}</li> 
        <li> Zahlmethod: ${item.zahlMethod}</li> 
        <li> Bewertung: ${item.bewertung}</li> 
    </ul>`)
};
kunden.map(addElement);
