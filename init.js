db = db.getSiblingDB('animalquiz');

db.createCollection('animals');

db.sample_collection.insertMany([
    {
            
        "name": "Cheetah",
        "Speed": "120 mph",
        "Weight": "140 lb",
        "Height": "3 ft",
        "Lifespan": "12-14 years",
        "Length":"6 ft"
    },
    {
        
        "name": "Elephant",
        "Speed": "25 mph",
        "Weight": "5,500-14,000 lb",
        "Height": "13 ft",
        "Lifespan": "60-70 years",
        "Length":"20-24 ft"
    },
    {
        
        "name": "Horse",
        "Speed": "45 mph",
        "Weight": "1,100-2,200 lb",
        "Height": "5-6 ft",
        "Lifespan": "25-30 years",
        "Length":"8-10 ft"
    },
    {
        
        "name": "Peregrine Falcon",
        "Speed": "242 mph",
        "Weight": "1-2 lb",
        "Height": "1 ft",
        "Lifespan": "15-20 years",
        "Length":"3 ft"
    },
    {
        
        "name": "Blue Whale",
        "Speed": "15 mph",
        "Weight": "200,000-330,000 lb",
        "Height": "100 ft",
        "Lifespan": "70-90 years",
        "Length":"100-110 ft"
    },
    {
        
        "name": "Puma",
        "Speed": "50 mph",
        "Weight": "140-220 lb",
        "Height": "3 ft",
        "Lifespan": "8-13 years",
        "Length":"8 ft"
    },
    {
        
        "name": "Giraffe",
        "Speed": "35 mph",
        "Weight": "1,200-2,600 lb",
        "Height": "18 ft",
        "Lifespan": "25 years",
        "Length":"18-20 ft"
    },
    {
        
        "name": "Great White Shark",
        "Speed": "35 mph",
        "Weight": "2,200-7,000 lb",
        "Height": "15 ft",
        "Lifespan": "70 years",
        "Length":"20-26 ft"
    },
    {
    
        "name": "Penguin",
        "Speed": "22 mph",
        "Weight": "3-17 lb",
        "Height": "1-4 ft",
        "Lifespan": "20-30 years",
        "Length":"1-4 ft"
    },
    {
        
        "name": "Swan",
        "Speed": "35 mph",
        "Weight": "20-30 lb",
        "Height": "4-5 ft",
        "Lifespan": "10-20 years",
        "Length":"6-8 ft"
    },
    {
        
        "name": "Tiger",
        "Speed": "50 mph",
        "Weight": "300-600 lb",
        "Height": "3-4 ft",
        "Lifespan": "10-15 years",
        "Length":"9-11 ft"
    },
    
    {
        
        "name": "Toucan",
        "Speed": "20 mph",
        "Weight": "8-24 oz",
        "Height": "1-2 ft",
        "Lifespan": "15-20 years",
        "Length":"1-2 ft"
    },
    {
        
        "name": "Anaconda",
        "Speed": "3 mph",
        "Weight": "55-110 lb",
        "Height": "1-1.5 ft",
        "Lifespan": "10-30 years",
        "Length":"15-30 ft"
    },
    {
        
        "name": "Kangaroo",
        "Speed": "40 mph",
        "Weight": "90-200 lb",
        "Height": "5-6 ft",
        "Lifespan": "8-10 years",
        "Length":"6-9 ft"
    },
    {
        
        "name": "Ostrich",
        "Speed": "45 mph",
        "Weight": "140-320 lb",
        "Height": "6-9 ft",
        "Lifespan": "30-40 years",
        "Length":"9-12 ft"
    },
    {
        
        "name": "Polar Bear",
        "Speed": "25 mph",
        "Weight": "1,300-1,600 lb",
        "Height": "4-5 ft",
        "Lifespan": "20-30 years",
        "Length":"8-10 ft"
    },
    {
        
        "name": "Gazelle",
        "Speed": "50 mph",
        "Weight": "90-140 lb",
        "Height": "3-4 ft",
        "Lifespan": "10-15 years",
        "Length":"6-8 ft"
    },
    {
        
        "name": "Crocodile",
        "Speed": "20 mph",
        "Weight": "500-1,000 lb",
        "Height": "4-5 ft",
        "Lifespan": "70-100 years",
        "Length":"15-20 ft"
    },
    {
        
        "name": "Lion",
        "Speed": "50 mph",
        "Weight": "330-550 lb",
        "Height": "4-5 ft",
        "Lifespan": "10-14 years",
        "Length":"9-10 ft"
    },
    {
        
        "name": "Raccoon",
        "Speed": "15 mph",
        "Weight": "10-20 lb",
        "Height": "2-3 ft",
        "Lifespan": "2-3 years",
        "Length":"2-3 ft"
    }
]);

