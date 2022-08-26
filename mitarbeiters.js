
const mitarbeiterListe = [
    {
        name: "Hanry",
        position: "Junior",
        jahrInDerFirma: 2,
        abteilung: "Human Resources"
    },
    {
        name: "Oscar",
        position: "Team Leader",
        jahrInDerFirma: 8,
        abteilung: "Marketing"
    },
    {
        name: "Paula",
        position: "Senior",
        jahrInDerFirma: 6,
        abteilung: "Production"
    },
    {
        name: "Lenny",
        position: "Junior",
        jahrInDerFirma: 3,
        abteilung: "Marketing"
    },
    {
        name: "Frederike",
        position: "Junior",
        jahrInDerFirma: 1,
        abteilung: "Human Resources"
    },
    {
        name: "Noamie",
        position: "Senior",
        jahrInDerFirma: 10,
        abteilung: "Human Resources"
    },
    {
        name: "Greg",
        position: "Team Leader",
        jahrInDerFirma: 2,
        abteilung: "Production"
    },
    {
        name: "Simone",
        position: "Senior",
        jahrInDerFirma: 2,
        abteilung: "Production"
    },
    {
        name: "Paola",
        position: "Team Leader",
        jahrInDerFirma: 10,
        abteilung: "Human Resources"
    },
];

function addElement(item){
    document.write(`
    <ul class='prod'>
        <li> Name: ${item.name}</li>
        <li> Position:${item.position}</li> 
        <li> Beschäftig  in der Firma: ${item.jahrInDerFirma} Jahren</li> 
        <li> Position: ${item.abteilung}</li> 
    </ul>`)
};
mitarbeiterListe.map(addElement);
