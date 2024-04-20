/********************************************************************************
*  WEB322 – Assignment 02
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Diana Zhou Kuang Student ID: 118446228 Date: 2024-02-18
*
********************************************************************************/

// part 1. data for the assignment
// ensure that setData is an array 

const setData = 
[
    {
        "theme_id": "656",
        "num_parts": "7",
        "year": "2018",
        "set_num": "71022-2",
        "name": "Hermione Granger",
        "img_url": "https://cdn.rebrickable.com/media/sets/71022-2.jpg"
    },
    {
        "set_num": "41256-1",
        "name": "Rainbow Caterbus",
        "year": "2020",
        "theme_id": "682",
        "num_parts": "405",
        "img_url": "https://cdn.rebrickable.com/media/sets/41256-1.jpg"
    },
    {
        "set_num": "41165-1",
        "name": "Anna's Canoe Expedition",
        "year": "2019",
        "theme_id": "687",
        "num_parts": "108",
        "img_url": "https://cdn.rebrickable.com/media/sets/41165-1.jpg"
    },
    {
        "set_num": "41166-1",
        "name": "Elsa's Wagon Adventure",
        "year": "2019",
        "theme_id": "687",
        "num_parts": "116",
        "img_url": "https://cdn.rebrickable.com/media/sets/41166-1.jpg"
    },
    {
        "set_num": "41167-1",
        "name": "Arendelle Castle Village",
        "year": "2019",
        "theme_id": "687",
        "num_parts": "521",
        "img_url": "https://cdn.rebrickable.com/media/sets/41167-1.jpg"
    },
    {
        "set_num": "41168-1",
        "name": "Elsa's Jewelry Box Creation",
        "year": "2019",
        "theme_id": "687",
        "num_parts": "301",
        "img_url": "https://cdn.rebrickable.com/media/sets/41168-1.jpg"
    },
    {
        "set_num": "41169-1",
        "name": "Olaf",
        "year": "2019",
        "theme_id": "687",
        "num_parts": "122",
        "img_url": "https://cdn.rebrickable.com/media/sets/41169-1.jpg"
    },
    {
        "set_num": "4117-1",
        "name": "Fantastic Flyers & Cool Cars Bucket",
        "year": "2001",
        "theme_id": "674",
        "num_parts": "266",
        "img_url": "https://cdn.rebrickable.com/media/sets/4117-1.jpg"
    },
    {
        "set_num": "41174-1",
        "name": "The Starlight Inn",
        "year": "2016",
        "theme_id": "600",
        "num_parts": "347",
        "img_url": "https://cdn.rebrickable.com/media/sets/41174-1.jpg"
    },
    {
        "set_num": "41178-1",
        "name": "The Dragon Sanctuary",
        "year": "2016",
        "theme_id": "600",
        "num_parts": "588",
        "img_url": "https://cdn.rebrickable.com/media/sets/41178-1.jpg"
    },
    {
        "set_num": "41179-1",
        "name": "Queen Dragon's Rescue",
        "year": "2016",
        "theme_id": "600",
        "num_parts": "836",
        "img_url": "https://cdn.rebrickable.com/media/sets/41179-1.jpg"
    },
    {
        "set_num": "41180-1",
        "name": "Ragana's Magic Shadow Castle",
        "year": "2016",
        "theme_id": "600",
        "num_parts": "1016",
        "img_url": "https://cdn.rebrickable.com/media/sets/41180-1.jpg"
    },
    {
        "set_num": "4118-1",
        "name": "\"Buildings, Mansions and Shops\"",
        "year": "2001",
        "theme_id": "674",
        "num_parts": "364",
        "img_url": "https://cdn.rebrickable.com/media/sets/4118-1.jpg"
    },
    {
        "set_num": "41181-1",
        "name": "Naida's Gondola & the Goblin Thief",
        "year": "2017",
        "theme_id": "600",
        "num_parts": "67",
        "img_url": "https://cdn.rebrickable.com/media/sets/41181-1.jpg"
    },
    {
        "set_num": "41182-1",
        "name": "The Capture of Sophie Jones",
        "year": "2017",
        "theme_id": "600",
        "num_parts": "226",
        "img_url": "https://cdn.rebrickable.com/media/sets/41182-1.jpg"
    },
    {
        "set_num": "41183-1",
        "name": "The Goblin King's Evil Dragon",
        "year": "2017",
        "theme_id": "600",
        "num_parts": "339",
        "img_url": "https://cdn.rebrickable.com/media/sets/41183-1.jpg"
    },
    {
        "set_num": "41184-1",
        "name": "Aira's Airship & the Amulet Chase",
        "year": "2017",
        "theme_id": "600",
        "num_parts": "343",
        "img_url": "https://cdn.rebrickable.com/media/sets/41184-1.jpg"
    },
    {
        "set_num": "41185-1",
        "name": "Magic Rescue from the Goblin Village",
        "year": "2017",
        "theme_id": "600",
        "num_parts": "637",
        "img_url": "https://cdn.rebrickable.com/media/sets/41185-1.jpg"
    },
    {
        "set_num": "41186-1",
        "name": "Azari & the Goblin Forest Escape",
        "year": "2017",
        "theme_id": "600",
        "num_parts": "145",
        "img_url": "https://cdn.rebrickable.com/media/sets/41186-1.jpg"
    },
    {
        "set_num": "41187-1",
        "name": "Rosalyn's Healing Hideout",
        "year": "2017",
        "theme_id": "600",
        "num_parts": "460",
        "img_url": "https://cdn.rebrickable.com/media/sets/41187-1.jpg"
    },
    {
        "set_num": "4119-1",
        "name": "Regular & Transparent Bricks",
        "year": "2001",
        "theme_id": "674",
        "num_parts": "234",
        "img_url": "https://cdn.rebrickable.com/media/sets/4119-1.jpg"
    },
    {
        "set_num": "41191-1",
        "name": "Naida & the Water Turtle Ambush",
        "year": "2018",
        "theme_id": "600",
        "num_parts": "205",
        "img_url": "https://cdn.rebrickable.com/media/sets/41191-1.jpg"
    },
    {
        "set_num": "41192-1",
        "name": "Azari & the Fire Lion Capture",
        "year": "2018",
        "theme_id": "600",
        "num_parts": "360",
        "img_url": "https://cdn.rebrickable.com/media/sets/41192-1.jpg"
    },
    {
        "set_num": "41194-1",
        "name": "Noctura's Tower & the Earth Fox Rescue",
        "year": "2018",
        "theme_id": "600",
        "num_parts": "648",
        "img_url": "https://cdn.rebrickable.com/media/sets/41194-1.jpg"
    },
    {
        "set_num": "41195-1",
        "name": "Emily & Noctura's Showdown",
        "year": "2018",
        "theme_id": "600",
        "num_parts": "652",
        "img_url": "https://cdn.rebrickable.com/media/sets/41195-1.jpg"
    },
    {
        "set_num": "41196-1",
        "name": "The Elvenstar Tree Bat Attack",
        "year": "2018",
        "theme_id": "600",
        "num_parts": "883",
        "img_url": "https://cdn.rebrickable.com/media/sets/41196-1.jpg"
    },
    {
        "set_num": "4120-1",
        "name": "Fun and Cool Transportation",
        "year": "2001",
        "theme_id": "674",
        "num_parts": "609",
        "img_url": "https://cdn.rebrickable.com/media/sets/4120-1.jpg"
    },
    {
        "set_num": "4121-1",
        "name": "All Kinds of Animals",
        "year": "2001",
        "theme_id": "674",
        "num_parts": "174",
        "img_url": "https://cdn.rebrickable.com/media/sets/4121-1.jpg"
    },
    {
        "set_num": "4122-1",
        "name": "Basic Building Set",
        "year": "2000",
        "theme_id": "470",
        "num_parts": "201",
        "img_url": "https://cdn.rebrickable.com/media/sets/4122-1.jpg"
    },
    {
        "set_num": "41230-1",
        "name": "Batgirl Batjet Chase",
        "year": "2017",
        "theme_id": "617",
        "num_parts": "206",
        "img_url": "https://cdn.rebrickable.com/media/sets/41230-1.jpg"
    },
    {
        "set_num": "41232-1",
        "name": "Super Hero High School",
        "year": "2017",
        "theme_id": "617",
        "num_parts": "712",
        "img_url": "https://cdn.rebrickable.com/media/sets/41232-1.jpg"
    },
    {
        "set_num": "41233-1",
        "name": "Lashina Tank",
        "year": "2017",
        "theme_id": "617",
        "num_parts": "145",
        "img_url": "https://cdn.rebrickable.com/media/sets/41233-1.jpg"
    },
    {
        "set_num": "41235-1",
        "name": "Wonder Woman Dorm",
        "year": "2017",
        "theme_id": "617",
        "num_parts": "186",
        "img_url": "https://cdn.rebrickable.com/media/sets/41235-1.jpg"
    },
    {
        "set_num": "41236-1",
        "name": "Harley Quinn Dorm",
        "year": "2017",
        "theme_id": "617",
        "num_parts": "176",
        "img_url": "https://cdn.rebrickable.com/media/sets/41236-1.jpg"
    },
    {
        "set_num": "41237-1",
        "name": "Batgirl Secret Bunker",
        "year": "2017",
        "theme_id": "617",
        "num_parts": "351",
        "img_url": "https://cdn.rebrickable.com/media/sets/41237-1.jpg"
    },
    {
        "set_num": "41239-1",
        "name": "Eclipso Dark Palace",
        "year": "2017",
        "theme_id": "617",
        "num_parts": "1079",
        "img_url": "https://cdn.rebrickable.com/media/sets/41239-1.jpg"
    },
    {
        "set_num": "4124-1",
        "name": "Creator Advent Calendar 2001",
        "year": "2001",
        "theme_id": "214",
        "num_parts": "240",
        "img_url": "https://cdn.rebrickable.com/media/sets/4124-1.jpg"
    },
    {
        "set_num": "41250-1",
        "name": "Techno Reef Dance Party",
        "year": "2020",
        "theme_id": "682",
        "num_parts": "173",
        "img_url": "https://cdn.rebrickable.com/media/sets/41250-1.jpg"
    },
    {
        "set_num": "41251-1",
        "name": "Poppy's Pod",
        "year": "2020",
        "theme_id": "682",
        "num_parts": "113",
        "img_url": "https://cdn.rebrickable.com/media/sets/41251-1.jpg"
    },
    {
        "set_num": "41252-1",
        "name": "Poppy's Hot Air Balloon Adventure",
        "year": "2020",
        "theme_id": "682",
        "num_parts": "260",
        "img_url": "https://cdn.rebrickable.com/media/sets/41252-1.jpg"
    },
    {
        "set_num": "41253-1",
        "name": "Lonesome Flats Raft Adventure",
        "year": "2020",
        "theme_id": "682",
        "num_parts": "170",
        "img_url": "https://cdn.rebrickable.com/media/sets/41253-1.jpg"
    },
    {
        "set_num": "41254-1",
        "name": "Volcano Rock City Concert",
        "year": "2020",
        "theme_id": "682",
        "num_parts": "397",
        "img_url": "https://cdn.rebrickable.com/media/sets/41254-1.jpg"
    },
    {
        "set_num": "41255-1",
        "name": "Pop Village Celebration",
        "year": "2020",
        "theme_id": "682",
        "num_parts": "385",
        "img_url": "https://cdn.rebrickable.com/media/sets/41255-1.jpg"
    },
    {
        "set_num": "41258-1",
        "name": "Vibe City Concert",
        "year": "2020",
        "theme_id": "682",
        "num_parts": "504",
        "img_url": "https://cdn.rebrickable.com/media/sets/41258-1.jpg"
    },
    {
        "set_num": "4127417-1",
        "name": "Super Value Pack",
        "year": "1999",
        "theme_id": "559",
        "num_parts": "1",
        "img_url": "https://cdn.rebrickable.com/media/sets/4127417-1.jpg"
    },
    {
        "set_num": "4128-1",
        "name": "XL Freestyle Bucket",
        "year": "1997",
        "theme_id": "399",
        "num_parts": "657",
        "img_url": "https://cdn.rebrickable.com/media/sets/4128-1.jpg"
    },
    {
        "set_num": "41287-1",
        "name": "Bubbles Playground Showdown",
        "year": "2018",
        "theme_id": "654",
        "num_parts": "144",
        "img_url": "https://cdn.rebrickable.com/media/sets/41287-1.jpg"
    },
    {
        "set_num": "41288-1",
        "name": "Mojo Jojo Strikes",
        "year": "2018",
        "theme_id": "654",
        "num_parts": "224",
        "img_url": "https://cdn.rebrickable.com/media/sets/41288-1.jpg"
    },
    {
        "set_num": "41300-1",
        "name": "Puppy Championship",
        "year": "2017",
        "theme_id": "494",
        "num_parts": "200",
        "img_url": "https://cdn.rebrickable.com/media/sets/41300-1.jpg"
    }
];

module.exports = setData;

