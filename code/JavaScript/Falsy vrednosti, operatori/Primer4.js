const data = [
    {
        id: 1,
        naziv: "Test 1",
        slike: [
            "slika1.jpg",
            "slika2.jpg",
            "slika3.jpg",
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
            "slika7.jpg"
        ]
    },
]

for (const proizvod of data) {
    console.group(proizvod.naziv);
    
    

    console.groupEnd(proizvod.naziv)
}