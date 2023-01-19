db = db.getSiblingDB('carCards');

db.createCollection('car');

db.createCollection('game');

db.car.insertMany([
        {
            "imageUrl": "images/Auto.png",
            "tradeName": "Audi",
            "model": "Flaschback 300",
            "prize": 50000
        },
        {
            "imageUrl": "images/Auto.png",
            "tradeName": "Opel",
            "model": "Manta SE",
            "prize": 20000
        },
        {
            "imageUrl": "images/Auto.png",
            "tradeName": "VW",
            "model": "Golf GL",
            "prize": 12000
        },
        {
            "imageUrl": "images/Auto.png",
            "tradeName": "Fiat",
            "model": "500",
            "prize": 15000
        }
]);


db.game.insertMany([
    {
        "startTime" : "10:25",
        "leftcars" : [
            {
                "tradeName": "Audi",
                "model": "Flaschback 300",
                "prize": 50000,
                "imageUrl": "images/Auto.png",
            }
        ],
        "rightcars" : [
            {
                "tradeName": "VW",
                "imageUrl": "images/Auto.png",
                "model": "Golf GL",
                "prize": 12000
            }
        ],
        "battles" : [
            {
                "winner" : "B",
                "leftcars" : {
                    "tradeName": "VW",
                    "imageUrl": "images/Auto.png",
                    "model": "Golf GL",
                    "prize": 12000

                },
                "rightcars" : {
                    "tradeName": "Opel",
                    "imageUrl": "images/Auto.png",
                    "model": "Manta SE",
                    "prize": 20000
                },
                "winner" : "B",
            }],
        "winTime" : "10:30",
    },
    {
        "startTime" : "11:58",
        "leftcars" : [
            {
                "tradeName": "Audi",
                "imageUrl": "images/Auto.png",
                "model": "Flaschback 300",
                "prize": 50000,
            }
        ],
        "rightcars" : [
            {
                "tradeName": "Fiat",
                "imageUrl": "images/Auto.png",
                "model": "500",
                "prize": 15000
            }
        ],
        "battles" : [
            {
                "winner" : "B",
                "leftcars" : {
                    "tradeName": "Opel",
                    "imageUrl": "images/Auto.png",
                    "model": "Manta SE",
                    "prize": 20000

                },
                "rightcars" : {
                    "tradeName": "Audi",
                    "imageUrl": "images/Auto.png",
                    "model": "Flaschback 300",
                    "prize": 50000,
                },
                "winner" : "B",
            }],
        "winTime" : "12:05",
    },
    {
        "startTime" : "15:03",
        "leftcars" : [
            {
                "tradeName": "Audi",
                "imageUrl": "images/Auto.png",
                "model": "Flaschback 300",
                "prize": 50000,
            }
        ],
        "rightcars" : [
            {
                "tradeName": "VW",
                "imageUrl": "images/Auto.png",
                "model": "Golf GL",
                "prize": 12000
            }
        ],
        "battles" : [
            {
                "winner" : "B",
                "leftcars" : {
                    "tradeName": "VW",
                    "imageUrl": "images/Auto.png",
                    "model": "Golf GL",
                    "prize": 12000

                },
                "rightcars" : {
                    "tradeName": "Fiat",
                    "imageUrl": "images/Auto.png",
                    "model": "500",
                    "prize": 15000
                },
            }],
        "winner" : "B",
        "winTime" : "15:15",
    },
    {
        "startTime" : "18:16",
        "leftcars" : [
            {
                "tradeName": "Opel",
                "imageUrl": "images/Auto.png",
                "model": "Manta SE",
                "prize": 20000
            }
        ],
        "rightcars" : [
            {
                "tradeName": "Fiat",
                "imageUrl": "images/Auto.png",
                "model": "500",
                "prize": 15000
            }
        ],
        "battles" : [
            {
                "winner" : "A",
                "leftcars" : {
                    "tradeName": "Opel",
                    "imageUrl": "images/Auto.png",
                    "model": "Manta SE",
                    "prize": 20000

                },
                "rightcars" : {
                    "tradeName": "VW",
                    "imageUrl": "images/Auto.png",
                    "model": "Golf GL",
                    "prize": 12000
                },
            }],
        "winner" : "A",
        "winTime" : "18:23",
    }]
)