const data = [
    {
        id: 1,
        naziv: "Test 1",
        slike: [
            {src: "/slika1.jpg", alt: "Slika 1"},
            {src: "/slika2.jpg", alt: "Slika 2"},
            {src: "/slika3.jpg", alt: "Slika 3"}
        ],
        boja: {
            osnovna: "crna",
            dodatna: "bela"
        }
    },
    {
        id: 2,
        naziv: "Test 2",
        boja: {
            osnovna: "crna"
        }
    },
    {
        id: 3,
        naziv: "Test 3",
        slike: [
            {src: "/slika7.png", alt: "Slika 7"}
        ]
    },
]

for (const proizvod of data) {
    console.group(proizvod.naziv);
    
    console.log(proizvod.id);
    console.log(proizvod.naziv);

    console.group("Slike")
        
    console.groupEnd("Slike");

    console.groupEnd(proizvod.naziv)
}