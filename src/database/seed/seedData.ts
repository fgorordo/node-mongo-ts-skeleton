interface ISeedCar {
    patent: string;
    model: string;
    fabricant: string;
    color: string;
}

interface ISeedCustomer {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    cars: ISeedCar[];
}

export const seedData: ISeedCustomer[] = [
    {
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.com",
        phone: "555-555-5555",
        cars: [
            {
                patent: "ABC123",
                model: "Civic",
                fabricant: "Honda",
                color: "Blue"
            },
            {
                patent: "DEF456",
                model: "Accord",
                fabricant: "Honda",
                color: "Red"
            }
        ]
    },
    {
        firstname: "Jane",
        lastname: "Doe",
        email: "jane.doe@example.com",
        phone: "555-555-5555",
        cars: [
            {
                patent: "GHI789",
                model: "Camry",
                fabricant: "Toyota",
                color: "Black"
            }
        ]
    },
    {
        firstname: "Bob",
        lastname: "Smith",
        email: "bob.smith@example.com",
        phone: "555-555-5555",
        cars: [
            {
                patent: "JKL012",
                model: "Model S",
                fabricant: "Tesla",
                color: "White"
            },
            {
                patent: "MNO345",
                model: "F-150",
                fabricant: "Ford",
                color: "Black"
            }
        ]
    },
    {
        firstname: "Alice",
        lastname: "Johnson",
        email: "alice.johnson@example.com",
        phone: "555-555-5555",
        cars: [
            {
                patent: "PQR678",
                model: "Model 3",
                fabricant: "Tesla",
                color: "Red"
            }
        ]
    },
    {
        firstname: "Tom",
        lastname: "Williams",
        email: "tom.williams@example.com",
        phone: "555-555-5555",
        cars: [
            {
                patent: "STU901",
                model: "Wrangler",
                fabricant: "Jeep",
                color: "Green"
            },
            {
                patent: "VWX234",
                model: "Cherokee",
                fabricant: "Jeep",
                color: "Gray"
            }
        ]
    },
    {
        firstname: "Emily",
        lastname: "Brown",
        email: "emily.brown@example.com",
        phone: "555-555-5555",
        cars: [
            {
                patent: "YZA567",
                model: "A4",
                fabricant: "Audi",
                color: "Black"
            },
            {
                patent: "BCD890",
                model: "Q5",
                fabricant: "Audi",
                color: "White"
            }
        ]
    },
    {
        firstname: "Michael",
        lastname: "Davis",
        email: "michael.davis@example.com",
        phone: "555-555-5555",
        cars: [
            {
                patent: "EFG123",
                model: "Cayenne",
                fabricant: "Porsche",
                color: "Black"
            },
            {
                patent: "HIJ456",
                model: "911",
                fabricant: "Porsche",
                color: "Blue"
            }
        ]
    }
]