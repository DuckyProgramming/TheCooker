constants={trig:[[],[]],graphics:{detail:15}}
graphics={main:undefined}
dev={bound:false}
inputs={
    keys:[
        {
            main:[false,false,false,false,false],
            tap:[false,false,false,false,false],
        },{
            main:[false,false,false,false,false],
            tap:[false,false,false,false,false],
        },{
            main:[false,false,false,false,false],
            tap:[false,false,false,false,false],
        },{
            main:[false,false,false,false,false],
            tap:[false,false,false,false,false],
        },
    ],mouse:{
        base:{x:0,y:0},
        rel:{x:0,y:0}
    }
}
types={
    level:[
        {
            floor:[
                [[0,-2]],
                [[4,-5]],
            ],map:[
                ` _ _ _ _ _ _ _ _ _ _ `,
                `|       |           |`,
                `                     `,
                `|       [           |`,
                `                     `,
                `|       |           |`,
                ` ] _ _ _             `,
                `|     i.            |`,
                `                     `,
                `|     i. . .        |`,
                `       - - - _ _ ] _ `,
                `|                   |`,
                `                     `,
                `|       1           |`,
                `                     `,
                `|                   |`,
                ` _ ] _ _ _ _ _ _ _ _ `,
                `                     `,
                `                     `,
                `                   T `,
                `                     `,
            ],
        },
    ],wall:[
        /*
        0-cooker
        1-waterer
        */
        {
            name:'',
            width:0,
            height:0,
            effect:[-1,0],
            spec:[],
            edit:false,
            desc:'',
            upgrade:[],
        },
        
        {
            name:'Sidewalk',
            width:0,
            height:0,
            effect:[-1,0],
            spec:[],
            edit:false,
            desc:'Blocks you',
            upgrade:[],
        },{
            name:'Floor',
            width:0,
            height:0,
            effect:[-1,0],
            spec:[],
            edit:false,
            desc:'Blocks you',
            upgrade:[],
        },{
            name:'Kitchen Floor',
            width:0,
            height:0,
            effect:[-1,0],
            spec:[],
            edit:false,
            desc:'Blocks you',
            upgrade:[],
        },{
            name:'High Wall',
            width:8,
            height:8,
            effect:[-1,0],
            spec:[],
            edit:false,
            desc:'Blocks you',
            upgrade:[],
        },{
            name:'Wall',
            width:12,
            height:12,
            effect:[-1,0],
            spec:[],
            edit:false,
            desc:'Blocks you but not your hands',
            upgrade:[],
        },{
            name:'Trash Can',
            width:36,
            height:36,
            effect:[-1,0],
            spec:[],
            edit:false,
            desc:'Infinite compression',
            upgrade:[],
        },

        {
            name:'Crate',
            width:30,
            height:30,
            effect:[-1,0],
            spec:[],
            edit:false,
            desc:'Activated packager',
            upgrade:[],
        },
        
        {
            name:'Counter',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Holds anything',
            upgrade:['Freezer','Cutting Board','Rolling Board','Climb Counter'],
        },{
            name:'Freezer',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Holds anything and keeps it overnight',
            upgrade:['Cutting Board','Rolling Board','Climb Counter'],
        },{
            name:'Cutting Board',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Cut things 3x faster here',
            upgrade:['Freezer','Rolling Board','Climb Counter'],
        },{
            name:'Rolling Board',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Roll things 3x faster here',
            upgrade:['Freezer','Cutting Board','Climb Counter'],
        },{
            name:'Climb Counter',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Can be jumped over while empty',
            upgrade:['Freezer','Cutting Board','Rolling Board'],
        },{
            name:'Prep Station',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Holds 4 identical pieces of food',
            upgrade:[],
        },{
            name:'Frozen Prep Station',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Holds 4 identical pieces of food and keeps them overnight',
            upgrade:['Stack Station'],
        },{
            name:'Stack Station',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Holds 4 pieces of food in a pile',
            upgrade:['Frozen Prep Station'],
        },
        
        {
            name:'Starter Sink',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[1],
            edit:true,
            desc:'Wash plates and get water, but slowly',
            upgrade:['Sink'],
        },{
            name:'Sink',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[1],
            edit:true,
            desc:'Wash plates and get water',
            upgrade:['Soaking Sink','Power Sink'],
        },{
            name:'Soaking Sink',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[1],
            edit:true,
            desc:'Wash plates automatically and get water',
            upgrade:['Power Sink','Wash Basin'],
        },{
            name:'Wash Basin',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[1],
            edit:true,
            desc:'Wash 4 plates at a time and get water',
            upgrade:['Soaking Sink','Power Sink'],
        },{
            name:'Power Sink',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[1],
            edit:true,
            desc:'Wash plates quickly and get water',
            upgrade:['Soaking Sink','Wash Basin'],
        },{
            name:'Dish Rack',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Holds 4 plates at a time',
            upgrade:[],
        },

        {
            name:'Starter Hob',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[0],
            edit:true,
            desc:'Cook things, but slowly',
            upgrade:['Hob'],
        },{
            name:'Hob',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[0],
            edit:true,
            desc:'Cook things',
            upgrade:['Safe Hob','Fast Hob','Manual Hob'],
        },{
            name:'Safe Hob',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[0],
            edit:true,
            desc:'Cooks things slowly but never burns',
            upgrade:['Fast Hob','Manual Hob'],
        },{
            name:'Fast Hob',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[0],
            edit:true,
            desc:'Cooks things fast',
            upgrade:['Safe Hob','Manual Hob'],
        },{
            name:'Fast Hob',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[0],
            edit:true,
            desc:'Cooks things very fast, but manually',
            upgrade:['Safe Hob','Fast Hob'],
        },{
            name:'Oven',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[0],
            edit:true,
            desc:'Cooks things fast, but the inside is invisible',
            upgrade:['Microwave'],
        },{
            name:'Microwave',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[0],
            edit:true,
            desc:'Cooks everything in the same amount of time',
            upgrade:[''],
        },{
            name:'Waffle Iron',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Makes waffles',
            upgrade:[''],
        },

        {
            name:'Starter Plates',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Holds 4 plates',
            upgrade:['Plates'],
        },{
            name:'Plates',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Holds 8 plates',
            upgrade:['Large Plates'],
        },{
            name:'Large Plates',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Holds 12 plates',
            upgrade:[],
        },{
            name:'Pots',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Holds 3 pots',
            upgrade:[],
        },{
            name:'Tray',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Counter with a tray on it',
            upgrade:[],
        },{
            name:'Tin',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Counter with a tin on it',
            upgrade:[],
        },{
            name:'Donut Tray',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Counter with a donut tray on it',
            upgrade:[],
        },

        {
            name:'Starter Trash Bin',
            width:20,
            height:20,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Turns up to 3 things into a trash bag',
            upgrade:['Trash Bin'],
        },{
            name:'Trash Bin',
            width:24,
            height:24,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Turns up to 5 things into a trash bag',
            upgrade:['Large Trash Bin','Composter Bin'],
        },{
            name:'Large Trash Bin',
            width:30,
            height:30,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Turns up to 10 things into a trash bag',
            upgrade:['Composter Bin'],
        },{
            name:'Composter Bin',
            width:24,
            height:24,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Turns up to 5 things into a trash bag that can be burnt',
            upgrade:['Large Trash Bin'],
        },

        {
            name:'Coffee Machine',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Produces coffee',
            upgrade:[],
        },{
            name:'Ketchup',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Holds 3 ketchup bottles',
            upgrade:[],
        },{
            name:'Mustard',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            edit:true,
            desc:'Holds 3 mustard bottles',
            upgrade:[],
        },

        {
            name:'Onions',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Onion',
            edit:true,
            desc:'Provides Onion',
            upgrade:[],
        },{
            name:'Meat',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Meat',
            edit:true,
            desc:'Provides Meat',
            upgrade:[],
        },{
            name:'Tomatoes',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Tomato',
            edit:true,
            desc:'Provides Tomatoes',
            upgrade:[],
        },{
            name:'Broccoli',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Broccoli',
            edit:true,
            desc:'Provides Broccoli',
            upgrade:[],
        },{
            name:'Cheese',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Cheese',
            edit:true,
            desc:'Provides Cheese',
            upgrade:[],
        },{
            name:'Flour',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Flour',
            edit:true,
            desc:'Provides Flour',
            upgrade:[],
        },{
            name:'Butter',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Butter',
            edit:true,
            desc:'Provides Butter',
            upgrade:[],
        },{
            name:'Garlic',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Garlic',
            edit:true,
            desc:'Provides Garlic',
            upgrade:[],
        },{
            name:'Soybeans',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Soybean',
            edit:true,
            desc:'Provides Soybeans',
            upgrade:[],
        },{
            name:'Miso',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Miso',
            edit:true,
            desc:'Provides Miso',
            upgrade:[],
        },{
            name:'Lettuce',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Lettuce',
            edit:true,
            desc:'Provides Lettuce',
            upgrade:[],
        },{
            name:'Potatoes',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Potato',
            edit:true,
            desc:'Provides Potato',
            upgrade:[],
        },{
            name:'Macaroni',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Macaroni',
            edit:true,
            desc:'Provides Macaroni',
            upgrade:[],
        },{
            name:'Eggs',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Egg',
            edit:true,
            desc:'Provides Eggs',
            upgrade:[],
        },{
            name:'Apples',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Apple',
            edit:true,
            desc:'Provides Apples',
            upgrade:[],
        },{
            name:'Cherries',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Cherry',
            edit:true,
            desc:'Provides Cherries',
            upgrade:[],
        },{
            name:'Sugar',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Sugar',
            edit:true,
            desc:'Provides Sugar',
            upgrade:[],
        },{
            name:'Lemons',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Lemon',
            edit:true,
            desc:'Provides Lemons',
            upgrade:[],
        },{
            name:'Chocolate',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Chocolate',
            edit:true,
            desc:'Provides Chocolate',
            upgrade:[],
        },{
            name:'Ice Cream',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Ice Cream C',
            edit:true,
            desc:'Provides Ice Cream',
            upgrade:[],
        },{
            name:'Fish',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Raw Fish',
            edit:true,
            desc:'Provides Fish',
            upgrade:[],
        },{
            name:'Fish Fillet',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Raw Fish Fillet',
            edit:true,
            desc:'Provides Fish Fillet',
            upgrade:[],
        },{
            name:'Spiny Fish',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Raw Spiny Fish',
            edit:true,
            desc:'Provides Spiny Fish',
            upgrade:[],
        },{
            name:'Crab',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Crab',
            edit:true,
            desc:'Provides Crab',
            upgrade:[],
        },{
            name:'Bone Meat',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Bone Meat',
            edit:true,
            desc:'Provides Bone Meat',
            upgrade:[],
        },{
            name:'Thick Meat',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Thick Meat',
            edit:true,
            desc:'Provides Thick Meat',
            upgrade:[],
        },{
            name:'Nuts',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Nuts',
            edit:true,
            desc:'Provides Nuts',
            upgrade:[],
        },{
            name:'Oil',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Oil',
            edit:true,
            desc:'Provides Oil',
            upgrade:[],
        },{
            name:'Hot Dogs',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Hot Dog',
            edit:true,
            desc:'Provides Hot Dogs',
            upgrade:[],
        },{
            name:'Hot Dog Buns',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Hot Dog Bun',
            edit:true,
            desc:'Provides Hot Dog Buns',
            upgrade:[],
        },{
            name:'Noodles',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Noodles',
            edit:true,
            desc:'Provides Noodles',
            upgrade:[],
        },{
            name:'Milk',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Milk',
            edit:true,
            desc:'Provides Milk',
            upgrade:[],
        },{
            name:'Pasta Sheet',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Pasta Sheet',
            edit:true,
            desc:'Provides Pasta Sheet',
            upgrade:[],
        },{
            name:'Bonito',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Bonito',
            edit:true,
            desc:'Provides Bonito',
            upgrade:[],
        },{
            name:'Cocoa Powder',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:'Cocoa Powder',
            edit:true,
            desc:'Provides Cocoa Powder',
            upgrade:[],
        },
    ],item:[
        /*
        0-combine [0,other,result] (assigned object is in hand, other object is on counter)
        1-cooking [1,time,result]
        2-chopping [2,time,result]
        3-kneading [3,time,result]
        4-cleaning [4,time,result]
        5-application [5,effect,result]
        6-portion [6,time,result,leave]
        7-eaten [7,left]
        */
        {
            name:'',
            process:[],
        },
        
        {
            name:'Crate',
            process:[],
        },{
            name:'Plate',
            process:[],
        },{
            name:'Dirty Plate',
            process:[
                [4,120,'Plate'],
            ],
        },{
            name:'Food Plate',
            process:[
                [5,'Trash','Plate'],
            ],
        },{
            name:'Bone Plate',
            process:[
                [5,'Trash','Plate'],
            ],
        },{
            name:'Bone Food Plate',
            process:[
                [5,'Trash','Plate'],
            ],
        },{
            name:'Pot',
            process:[
                [5,'Water','Water Pot'],
                [0,'Onion','Onion in Pot'],
                [0,'Soybean','Soybean in Pot'],
                [0,'Broccoli','Broccoli in Pot'],
                [0,'Potato','Potato in Pot'],
                [0,'Macaroni','Macaroni in Pot'],
                [0,'Mixed Egg','Raw Mixed Egg'],
                [0,'Noodles','Noodles in Pot'],
                [0,'Tomato Sauce','Tomato Sauce in Pot'],
                [0,'Cooked Mince','Cooked Mince in Pot'],
                [0,'Butter','Butter in Pot'],
                [0,'Flour','Flour in Pot'],
                [0,'Oil','Oil in Pot'],
                [0,'Raw Donut','Donut in Pot'],
                [0,'Chopped Potato','Chopped Potato in Pot'],
            ],
        },{
            name:'Water Pot',
            process:[
                [0,'Onion','Raw Broth'],
                [0,'Soybean','Raw Soybean Broth'],
                [0,'Broccoli','Raw Broccoli'],
                [0,'Potato','Raw Potato'],
                [0,'Macaroni','Raw Macaroni'],
                [0,'Chopped Potato','Chopped Potato in Pot'],
                [0,'Noodles','Raw Noodles'],
                [5,'Water','Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Onion',
            process:[
                [2,60,'Chopped Onion'],
                [0,'Flour','Raw Onion Rings'],
            ],
        },{
            name:'Onion in Pot',
            process:[
                [5,'Water','Raw Broth'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Raw Broth',
            process:[
                [1,900,'Broth'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Broth',
            process:[
                [0,'Meat','Raw Meat Soup'],
                [0,'Chopped Meat','Raw Chopped Meat Soup'],
                [0,'Tomato','Tomato in Broth'],
                [0,'Chopped Tomato','Chopped Tomato in Broth'],
                [0,'Tomato Sauce','Tomato Broth'],
                [0,'Broccoli','Broccoli in Broth'],
                [0,'Cheese','Cheese in Broth'],
                [0,'Chopped Cheese','Chopped Cheese in Broth'],
                [0,'Bonito','Raw Ramen Soup'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Meat',
            process:[
                [2,120,'Chopped Meat'],
                [1,300,'Rare Steak'],
            ],
        },{
            name:'Chopped Meat',
            process:[
                [1,120,'Cooked Mince'],
            ],
        },{
            name:'Burnt',
            process:[],
        },{
            name:'Raw Meat Soup',
            process:[
                [1,720,'Meat Soup Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Raw Chopped Meat Soup',
            process:[
                [1,360,'Meat Soup Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Meat Soup Pot',
            portions:4,
            process:[
                [6,60,'Meat Soup','Onion in Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Meat Soup',
            process:[],
        },{
            name:'Tomato',
            process:[
                [2,30,'Chopped Tomato'],
            ],
        },{
            name:'Chopped Tomato',
            process:[
                [2,60,'Tomato Sauce'],
                [0,'Plate','Plated Tomato'],
            ],
        },{
            name:'Tomato Sauce',
            process:[
                [0,'Plate','Plated Tomato Sauce'],
            ],
        },{
            name:'Tomato in Broth',
            process:[
                [0,'Tomato Sauce','Raw Tomato Soup'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Chopped Tomato in Broth',
            process:[
                [0,'Tomato Sauce','Raw Chopped Tomato Soup'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Tomato Broth',
            process:[
                [0,'Tomato','Raw Tomato Soup'],
                [0,'Chopped Tomato','Raw Chopped Tomato Soup'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Raw Tomato Soup',
            process:[
                [1,480,'Meat Soup Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Raw Chopped Tomato Soup',
            process:[
                [1,240,'Tomato Soup Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Tomato Soup Pot',
            portions:4,
            process:[
                [6,60,'Tomato Soup','Onion in Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Tomato Soup',
            process:[],
        },{
            name:'Cheese',
            process:[
                [2,60,'Chopped Cheese'],
            ],
        },{
            name:'Chopped Cheese',
            process:[
                [0,'Flour','Raw Onion Rings'],
            ],
        },{
            name:'Broccoli',
            process:[],
        },{
            name:'Broccoli in Broth',
            process:[
                [0,'Cheese','Raw Broccoli Cheese Soup'],
                [0,'Chopped Cheese','Raw Broccoli Chopped Cheese Soup'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Cheese in Broth',
            process:[
                [0,'Broccoli','Raw Broccoli Cheese Soup'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Chopped Cheese in Broth',
            process:[
                [0,'Broccoli','Raw Broccoli Chopped Cheese Soup'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Raw Broccoli Cheese Soup',
            process:[
                [1,600,'Broccoli Cheese Soup Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Raw Broccoli Chopped Cheese Soup',
            process:[
                [1,300,'Broccoli Cheese Soup Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Broccoli Cheese Soup Pot',
            portions:4,
            process:[
                [6,60,'Broccoli Cheese Soup','Onion in Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Broccoli Cheese Soup',
            process:[],
        },{
            name:'Flour',
            process:[
                [5,'Water','Dough'],
                [3,120,'Dough'],
            ],
        },{
            name:'Dough',
            process:[
                [1,1200,'Bread'],
                [3,120,'Pastry Crust'],
                [0,'Butter','Butter Dough'],
                [0,'Chopped Lettuce','Lettuce Dough'],
                [0,'Chopped Onion','Onion Dough'],
                [0,'Sugar','Sugar Dough'],
                [0,'Oil','Pizza Base'],
            ],
        },{
            name:'Bread',
            portions:3,
            process:[
                [6,60,'Bread Slice','Bread Slice'],
                [1,1200,'Burnt'],
            ],
        },{
            name:'Bread Slice',
            process:[
                [0,'Chopped Garlic','Garlic on Bread'],
                [0,'Chopped Cheese','Cheese on Bread'],
                [1,90,'Toast'],
            ],
        },{
            name:'Butter',
            process:[],
        },{
            name:'Butter Dough',
            process:[
                [3,30,'Raw Croissant'],
            ],
        },{
            name:'Raw Croissant',
            process:[
                [1,60,'Croissant'],
            ],
        },{
            name:'Croissant',
            process:[
                [1,120,'Burnt'],
            ],
        },{
            name:'Garlic',
            process:[
                [2,60,'Chopped Garlic'],
            ],
        },{
            name:'Chopped Garlic',
            process:[
                [0,'Plate','Plated Garlic'],
            ],
        },{
            name:'Garlic on Bread',
            process:[
                [0,'Chopped Cheese','Raw Garlic Bread'],
            ],
        },{
            name:'Cheese on Bread',
            process:[
                [0,'Chopped Garlic','Raw Garlic Bread'],
            ],
        },{
            name:'Raw Garlic Bread',
            process:[
                [1,60,'Garlic Bread'],
            ],
        },{
            name:'Garlic Bread',
            process:[
                [1,120,'Burnt'],
            ],
        },{
            name:'Soybean',
            process:[],
        },{
            name:'Soybean in Pot',
            process:[
                [5,'Water','Raw Soybean Broth'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Raw Soybean Broth',
            process:[
                [1,900,'Soybean Broth'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Soybean Broth',
            process:[
                [2,180,'Tofu in Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Miso',
            process:[],
        },{
            name:'Tofu in Pot',
            process:[
                [0,'Miso','Miso in Pot'],
                [5,'Water','Tofu Broth'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Miso in Pot',
            process:[
                [5,'Water','Raw Miso Soup'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Tofu Broth',
            process:[
                [0,'Miso','Raw Miso Soup'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Raw Miso Soup',
            process:[
                [1,540,'Miso Soup Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Miso Soup Pot',
            portions:4,
            process:[
                [6,60,'Miso Soup','Tofu in Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Miso Soup',
            process:[],
        },{
            name:'Lettuce',
            process:[
                [2,60,'Chopped Lettuce'],
            ],
        },{
            name:'Chopped Lettuce',
            process:[
                [0,'Plate','Plated Lettuce'],
            ],
        },{
            name:'Chopped Onion',
            process:[
                [0,'Plate','Chopped Onion'],
            ],
        },{
            name:'Lettuce Dough',
            process:[
                [0,'Chopped Onion','Lettuce Onion Dough'],
            ],
        },{
            name:'Onion Dough',
            process:[
                [0,'Chopped Lettuce','Lettuce Onion Dough'],
            ],
        },{
            name:'Lettuce Onion Dough',
            process:[
                [3,30,'Raw Spring Rolls'],
            ],
        },{
            name:'Raw Spring Rolls',
            process:[
                [1,90,'Spring Rolls'],
            ],
        },{
            name:'Spring Rolls',
            portions:3,
            process:[
                [6,30,'Spring Roll','Spring Roll'],
                [1,60,'Burnt'],
            ],
        },{
            name:'Spring Roll',
            process:[],
        },{
            name:'Broccoli in Pot',
            process:[
                [5,'Water','Raw Broccoli'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Raw Broccoli',
            process:[
                [1,900,'Broccoli Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Broccoli Pot',
            portions:8,
            process:[
                [6,60,'Broccoli Portion','Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Broccoli Portion',
            process:[],
        },{
            name:'Potato',
            process:[
                [1,300,'Roast Potato'],
                [2,60,'Chopped Potato'],
            ],
        },{
            name:'Potato in Pot',
            process:[
                [5,'Water','Raw Potato'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Raw Potato',
            process:[
                [1,900,'Potato Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Potato Pot',
            portions:8,
            process:[
                [3,360,'Mashed Potato Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Mashed Potato Pot',
            portions:8,
            process:[
                [6,60,'Mashed Potato','Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Mashed Potato',
            process:[],
        },{
            name:'Roast Potato',
            process:[
                [1,300,'Burnt'],
            ],
        },{
            name:'Chopped Potato',
            process:[
                [1,120,'Fries'],
            ],
        },{
            name:'Fries',
            process:[],
        },{
            name:'Raw Onion Rings',
            process:[
                [1,60,'Onion Rings'],
            ],
        },{
            name:'Onion Rings',
            process:[
                [1,120,'Burnt'],
            ],
        },{
            name:'Raw Cheese Sticks',
            process:[
                [1,120,'Unsauced Cheese Sticks'],
            ],
        },{
            name:'Unsauced Cheese Sticks',
            process:[
                [0,'Tomato Sauce','Cheese Sticks'],
                [1,180,'Burnt'],
            ],
        },{
            name:'Cheese Sticks',
            process:[],
        },{
            name:'Macaroni',
            process:[],
        },{
            name:'Macaroni in Pot',
            process:[
                [5,'Water','Raw Macaroni'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Raw Macaroni',
            process:[
                [1,480,'Macaroni Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Macaroni Pot',
            process:[
                [5,'Water','Cooked Macaroni in Pot'],
                [5,'Trash','Cooked Macaroni in Pot'],
            ],
        },{
            name:'Cooked Macaroni in Pot',
            process:[
                [0,'Chopped Cheese','Cheese Macaroni Pot'],
                [0,'Butter','Butter Macaroni Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Cheese Macaroni Pot',
            process:[
                [0,'Butter','Macaroni and Cheese Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Butter Macaroni Pot',
            process:[
                [0,'Chopped Cheese','Macaroni and Cheese Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Macaroni and Cheese Pot',
            portions:8,
            process:[
                [6,60,'Macaroni and Cheese','Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Macaroni and Cheese',
            process:[],
        },{
            name:'Egg',
            process:[
                [3,30,'Cracked Egg'],
            ],
        },{
            name:'Cracked Egg',
            process:[
                [3,30,'Mixed Egg'],
                [1,180,'Fried Egg'],
                [0,'Sugar','Sugar Egg'],
                [0,'Flour','Flour Egg'],
            ],
        },{
            name:'Mixed Egg',
            process:[],
        },{
            name:'Raw Mixed Egg',
            process:[
                [1,240,'Scrambled Eggs Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Scrambled Eggs Pot',
            portions:4,
            process:[
                [6,60,'Scrambled Eggs','Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Scrambled Eggs',
            process:[],
        },{
            name:'Apple',
            process:[
                [2,60,'Chopped Apple'],
            ],
        },{
            name:'Chopped Apple',
            process:[
                [0,'Sugar','Chopped Apple With Sugar'],
                [0,'Flour','Chopped Apple With Flour'],
                [0,'Plate','Plated Apple'],
            ],
        },{
            name:'Cherry',
            process:[
                [1,60,'Cherry Sauce'],
            ],
        },{
            name:'Sugar',
            process:[
                [1,180,'Caramel'],
                [0,'Cracked Egg','Cracked Egg With Sugar'],
                [0,'Chopped Lemon','Cracked Egg With Chopped Lemon'],
                [0,'Flour','Flour With Sugar'],
            ],
        },{
            name:'Caramel',
            process:[
                [1,240,'Burnt'],
            ],
        },{
            name:'Pastry Crust',
            process:[
                [1,240,'Pastry'],
                [0,'Meat','Raw Uncooked Meat Pie'],
                [0,'Meat','Raw Uncooked Chopped Meat Pie'],
                [0,'Broccoli','Raw Uncooked Broccoli Pie'],
                [0,'Potato','Raw Uncooked Potato Pie'],
                [0,'Potato','Raw Uncooked Chopped Potato Pie'],
            ],
        },{
            name:'Pastry',
            process:[
                [1,300,'Burnt'],
                [0,'Chopped Apple','Raw Apple Pie'],
                [0,'Cherry','Raw Cherry Pie'],
                [0,'Caramel','Raw Caramel Pie'],
                [0,'Lemon Meringue','Raw Lemon Meringue Pie'],
                [0,'Meat','Raw Meat Pie'],
                [0,'Meat','Raw Chopped Meat Pie'],
                [0,'Broccoli','Raw Broccoli Pie'],
                [0,'Potato','Raw Potato Pie'],
                [0,'Potato','Raw Chopped Potato Pie'],
            ],
        },{
            name:'Raw Apple Pie',
            process:[
                [1,180,'Apple Pie'],
            ],
        },{
            name:'Apple Pie',
            portions:3,
            process:[
                [6,60,'Apple Pie Slice','Apple Pie Slice'],
                [1,240,'Burnt'],
            ],
        },{
            name:'Apple Pie Slice',
            process:[],
        },{
            name:'Raw Cherry Pie',
            process:[
                [1,420,'Cherry Pie'],
            ],
        },{
            name:'Cherry Pie',
            portions:3,
            process:[
                [6,60,'Cherry Pie Slice','Cherry Pie Slice'],
                [1,420,'Burnt'],
            ],
        },{
            name:'Cherry Pie Slice',
            process:[],
        },{
            name:'Raw Caramel Pie',
            process:[
                [1,180,'Caramel Pie'],
            ],
        },{
            name:'Caramel Pie',
            portions:3,
            process:[
                [6,60,'Caramel Pie Slice','Caramel Pie Slice'],
                [1,240,'Burnt'],
            ],
        },{
            name:'Caramel Pie Slice',
            process:[],
        },{
            name:'Lemon',
            process:[
                [2,60,'Chopped Lemon'],
            ],
        },{
            name:'Chopped Lemon',
            process:[
                [0,'Cracked Egg','Cracked Egg With Chopped Lemon'],
            ],
        },{
            name:'Cracked Egg With Chopped Lemon',
            process:[
                [0,'Sugar','Unmixed Lemon Meringue'],
            ],
        },{
            name:'Cracked Egg With Sugar',
            process:[
                [0,'Chopped Lemon','Unmixed Lemon Meringue'],
            ],
        },{
            name:'Chopped Lemon With Sugar',
            process:[
                [0,'Cracked Egg','Unmixed Lemon Meringue'],
            ],
        },{
            name:'Unmixed Lemon Meringue',
            process:[
                [3,60,'Lemon Meringue'],
            ],
        },{
            name:'Lemon Meringue',
            process:[
                [0,'Milk','Mascarpone'],
            ],
        },{
            name:'Raw Lemon Meringue Pie',
            process:[
                [1,300,'Lemon Meringue Pie'],
            ],
        },{
            name:'Lemon Meringue Pie',
            portions:3,
            process:[
                [6,60,'Lemon Meringue Pie Slice','Lemon Meringue Pie Slice'],
                [1,300,'Burnt'],
            ],
        },{
            name:'Lemon Meringue Pie Slice',
            process:[],
        },{
            name:'Chopped Apple With Sugar',
            process:[
                [0,'Flour','Raw Apple Crisp'],
            ],
        },{
            name:'Chopped Apple With Flour',
            process:[
                [0,'Sugar','Raw Apple Crisp'],
            ],
        },{
            name:'Flour With Sugar',
            process:[
                [0,'Chopped Apple','Raw Apple Crisp'],
                [0,'Cracked Egg','Sugar Flour Egg'],
            ],
        },{
            name:'Raw Apple Crisp',
            process:[
                [1,180,'Apple Crisp'],
            ],
        },{
            name:'Apple Crisp',
            process:[
                [1,240,'Burnt'],
            ],
        },{
            name:'Chocolate',
            process:[
                [1,120,'Melted Chocolate'],
            ],
        },{
            name:'Melted Chocolate',
            process:[
                [0,'Cherry','Raw Cherry Cordial'],
                [1,180,'Burnt'],
            ],
        },{
            name:'Raw Cherry Cordial',
            process:[
                [1,30,'Cherry Cordial'],
            ],
        },{
            name:'Cherry Cordial',
            process:[
                [1,60,'Burnt'],
            ],
        },{
            name:'Ice Cream C',
            process:[
                [0,'Ice Cream C','Ice Cream CC'],
                [0,'Ice Cream V','Ice Cream CV'],
            ],
        },{
            name:'Ice Cream V',
            process:[
                [0,'Ice Cream C','Ice Cream CV'],
                [0,'Ice Cream V','Ice Cream CV'],
            ],
        },{
            name:'Ice Cream CC',
            process:[
                [0,'Ice Cream C','Ice Cream CCC'],
                [0,'Ice Cream V','Ice Cream CCV'],
            ],
        },{
            name:'Ice Cream CV',
            process:[
                [0,'Ice Cream C','Ice Cream CCV'],
                [0,'Ice Cream V','Ice Cream CVV'],
            ],
        },{
            name:'Ice Cream VV',
            process:[
                [0,'Ice Cream C','Ice Cream CVV'],
                [0,'Ice Cream V','Ice Cream VVV'],
            ],
        },{
            name:'Sugar Dough',
            process:[
                [1,180,'Plain Zeppole'],
            ],
        },{
            name:'Plain Zeppole',
            process:[
                [0,'Sugar','Zeppole'],
                [1,240,'Burnt'],
            ],
        },{
            name:'Zeppole',
            process:[],
        },{
            name:'Ice Cream CCC',
            process:[],
        },{
            name:'Ice Cream CCV',
            process:[],
        },{
            name:'Ice Cream CVV',
            process:[],
        },{
            name:'Ice Cream VVV',
            process:[],
        },{
            name:'Raw Fish',
            process:[
                [1,420,'Fish'],
            ],
        },{
            name:'Fish',
            process:[
                [1,420,'Burnt'],
                [0,'Plate','Plated Fish'],
            ],
        },{
            name:'Plated Fish',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Raw Fish Fillet',
            process:[
                [2,120,'Raw Filleted Fish'],
            ],
        },{
            name:'Raw Filleted Fish',
            process:[
                [1,180,'Fish Fillet'],
            ],
        },{
            name:'Fish Fillet',
            process:[
                [1,240,'Burnt'],
                [0,'Plate','Plated Fish Fillet'],
            ],
        },{
            name:'Plated Fish Fillet',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Raw Spiny Fish',
            portions:1,
            process:[
                [6,60,'Fish Spine','Raw Spineless Fish'],
            ],
        },{
            name:'Fish Spine',
            process:[],
        },{
            name:'Raw Spineless Fish',
            process:[
                [1,240,'Spiny Fish'],
            ],
        },{
            name:'Spiny Fish',
            process:[
                [1,300,'Burnt'],
                [0,'Plate','Plated Spiny Fish'],
            ],
        },{
            name:'Plated Spiny Fish',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Crab',
            process:[
                [2,60,'Chopped Crab'],
            ],
        },{
            name:'Chopped Crab',
            process:[
                [0,'Cracked Egg','Crab Patty'],
            ],
        },{
            name:'Crab Patty',
            process:[
                [0,'Flour','Raw Crab Cake'],
            ],
        },{
            name:'Raw Crab Cake',
            process:[
                [1,300,'Crab Cake'],
            ],
        },{
            name:'Crab Cake',
            process:[
                [1,300,'Burnt'],
                [0,'Plate','Plated Crab Cake'],
            ],
        },{
            name:'Plated Crab Cake',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Tomato',
            process:[
                [5,'Trash','Plate'],
                [0,'Rare Steak','Plated Rare Steak With Tomato'],
                [0,'Medium Steak','Plated Medium Steak With Tomato'],
                [0,'Well Done Steak','Plated Well Done Steak With Tomato'],
                [0,'Rare Bone Steak','Plated Rare Bone Steak With Tomato'],
                [0,'Medium Bone Steak','Plated Medium Bone Steak With Tomato'],
                [0,'Well Done Bone Steak','Plated Well Done Bone Steak With Tomato'],
                [0,'Rare Thick Steak','Plated Rare Thick Steak With Tomato'],
                [0,'Medium Thick Steak','Plated Medium Thick Steak With Tomato'],
                [0,'Well Done Thick Steak','Plated Well Done Thick Steak With Tomato'],
                [0,'Chopped Lettuce','Plated Lettuce and Tomato'],
                [0,'Chopped Onion','Plated Tomato and Onion'],
                [0,'Toast','Plated Tomato Toast'],
                [0,'Fried Egg','Plated Egg and Tomato'],
                [7,'Plate'],
            ],
        },{
            name:'Rare Steak',
            process:[
                [1,120,'Rare Steak'],
                [0,'Plate','Plated Rare Steak'],
            ],
        },{
            name:'Medium Steak',
            process:[
                [1,120,'Rare Steak'],
                [0,'Plate','Plated Medium Steak'],
            ],
        },{
            name:'Well Done Steak',
            process:[
                [1,300,'Burnt'],
                [0,'Plate','Plated Well Done Steak'],
            ],
        },{
            name:'Plated Rare Steak',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
                [0,'Chopped Tomato','Plated Rare Steak With Tomato'],
            ],
        },{
            name:'Plated Medium Steak',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
                [0,'Chopped Tomato','Plated Medium Steak With Tomato'],
            ],
        },{
            name:'Plated Well Done Steak',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
                [0,'Chopped Tomato','Plated Well Done Steak With Tomato'],
            ],
        },{
            name:'Plated Rare Steak With Tomato',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Medium Steak With Tomato',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Well Done Steak With Tomato',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Bone Meat',
            process:[
                [1,300,'Rare Bone Steak'],
            ],
        },{
            name:'Rare Bone Steak',
            process:[
                [1,120,'Rare Bone Steak'],
                [0,'Plate','Plated Rare Bone Steak'],
            ],
        },{
            name:'Medium Bone Steak',
            process:[
                [1,120,'Rare Bone Steak'],
                [0,'Plate','Plated Medium Bone Steak'],
            ],
        },{
            name:'Well Done Bone Steak',
            process:[
                [1,300,'Burnt'],
                [0,'Plate','Plated Well Done Bone Steak'],
            ],
        },{
            name:'Plated Rare Bone Steak',
            process:[
                [5,'Trash','Plate'],
                [7,'Bone Plate'],
                [0,'Chopped Tomato','Plated Rare Bone Steak With Tomato'],
            ],
        },{
            name:'Plated Medium Bone Steak',
            process:[
                [5,'Trash','Plate'],
                [7,'Bone Plate'],
                [0,'Chopped Tomato','Plated Medium Bone Steak With Tomato'],
            ],
        },{
            name:'Plated Well Done Bone Steak',
            process:[
                [5,'Trash','Plate'],
                [7,'Bone Plate'],
                [0,'Chopped Tomato','Plated Well Done Bone Steak With Tomato'],
            ],
        },{
            name:'Plated Rare Bone Steak With Tomato',
            process:[
                [5,'Trash','Plate'],
                [7,'Bone Plate'],
            ],
        },{
            name:'Plated Medium Bone Steak With Tomato',
            process:[
                [5,'Trash','Plate'],
                [7,'Bone Plate'],
            ],
        },{
            name:'Plated Well Done Bone Steak With Tomato',
            process:[
                [5,'Trash','Plate'],
                [7,'Bone Plate'],
            ],
        },{
            name:'Thick Meat',
            process:[
                [1,600,'Rare Thick Steak'],
            ],
        },{
            name:'Rare Thick Steak',
            process:[
                [1,180,'Rare Thick Steak'],
                [0,'Plate','Plated Rare Thick Steak'],
            ],
        },{
            name:'Medium Thick Steak',
            process:[
                [1,180,'Rare Thick Steak'],
                [0,'Plate','Plated Medium Thick Steak'],
            ],
        },{
            name:'Well Done Thick Steak',
            process:[
                [1,600,'Burnt'],
                [0,'Plate','Plated Well Done Thick Steak'],
            ],
        },{
            name:'Plated Rare Thick Steak',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
                [0,'Chopped Tomato','Plated Rare Thick Steak With Tomato'],
            ],
        },{
            name:'Plated Medium Thick Steak',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
                [0,'Chopped Tomato','Plated Medium Thick Steak With Tomato'],
            ],
        },{
            name:'Plated Well Done Thick Steak',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
                [0,'Chopped Tomato','Plated Well Done Thick Steak With Tomato'],
            ],
        },{
            name:'Plated Rare Thick Steak With Tomato',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Medium Thick Steak With Tomato',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Well Done Thick Steak With Tomato',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Lettuce',
            process:[
                [5,'Trash','Plate'],
                [0,'Chopped Tomato','Plated Lettuce and Tomato'],
                [0,'Chopped Onion','Plated Lettuce and Onion'],
                [0,'Breadcrumbs','Plated Lettuce and Breadcrumbs'],
                [0,'Chopped Garlic','Plated Lettuce and Garlic'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Onion',
            process:[
                [5,'Trash','Plate'],
                [0,'Chopped Lettuce','Plated Lettuce and Onion'],
                [0,'Chopped Tomato','Plated Tomato and Onion'],
                [0,'Boiled Potato','Plated Boiled Potato and Onion'],
                [0,'Mayo','Plated Onion and Mayo'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Lettuce and Tomato',
            process:[
                [5,'Trash','Plate'],
                [0,'Chopped Onion','Plated Lettuce, Tomato, and Onion'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Lettuce and Onion',
            process:[
                [5,'Trash','Plate'],
                [0,'Chopped Tomato','Plated Lettuce, Tomato, and Onion'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Tomato and Onion',
            process:[
                [5,'Trash','Plate'],
                [0,'Chopped Lettuce','Plated Lettuce, Tomato, and Onion'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Lettuce, Tomato, and Onion',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Toast',
            process:[
                [0,'Plate','Plated Toast'],
                [1,150,'Burnt'],
                [2,60,'Breadcrumbs'],
            ],
        },{
            name:'Breadcrumbs',
            process:[
                [0,'Plate','Plated Breadcrumbs'],
                [0,'Chopped Onion','Raw Stuffing'],
            ],
        },{
            name:'Plated Garlic',
            process:[
                [5,'Trash','Plate'],
                [0,'Chopped Lettuce','Plated Lettuce and Garlic'],
                [0,'Breadcrumbs','Plated Garlic and Breadcrumbs'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Breadcrumbs',
            process:[
                [5,'Trash','Plate'],
                [0,'Chopped Lettuce','Plated Lettuce and Breadcrumbs'],
                [0,'Chopped Garlic','Plated Garlic and Breadcrumbs'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Lettuce and Garlic',
            process:[
                [5,'Trash','Plate'],
                [0,'Breadcrumbs','Plated Lettuce, Garlic, and Breadcrumbs'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Lettuce and Breadcrumbs',
            process:[
                [5,'Trash','Plate'],
                [0,'Chopped Garlic','Plated Lettuce, Garlic, and Breadcrumbs'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Garlic and Breadcrumbs',
            process:[
                [5,'Trash','Plate'],
                [0,'Chopped Lettuce','Plated Lettuce, Garlic, and Breadcrumbs'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Lettuce, Garlic, and Breadcrumbs',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Nuts',
            process:[
                [0,'Plate','Plated Nuts'],
                [2,120,'Chopped Nuts'],
            ],
        },{
            name:'Oil',
            process:[
                [0,'Cracked Egg','Mayo'],
            ],
        },{
            name:'Mayo',
            process:[
                [0,'Plate','Plated Mayo'],
            ],
        },{
            name:'Plated Apple',
            process:[
                [5,'Trash','Plate'],
                [0,'Nuts','Plated Apple and Nuts'],
                [0,'Mayo','Plated Apple and Mayo'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Nuts',
            process:[
                [5,'Trash','Plate'],
                [0,'Chopped Apple','Plated Apple and Nuts'],
                [0,'Mayo','Plated Nuts and Mayo'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Mayo',
            process:[
                [5,'Trash','Plate'],
                [0,'Chopped Apple','Plated Apple and Mayo'],
                [0,'Nuts','Plated Nuts and Mayo'],
                [0,'Boiled Potato','Plated Boiled Potato and Mayo'],
                [0,'Chopped Onion','Plated Onion and Mayo'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Apple and Nuts',
            process:[
                [5,'Trash','Plate'],
                [0,'Mayo','Plated Apple, Nuts, and Mayo'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Apple and Mayo',
            process:[
                [5,'Trash','Plate'],
                [0,'Nuts','Plated Apple, Nuts, and Mayo'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Nuts and Mayo',
            process:[
                [5,'Trash','Plate'],
                [0,'Chopped Apple','Plated Apple, Nuts, and Mayo'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Apple, Nuts, and Mayo',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Chopped Potato in Pot',
            process:[
                [5,'Water','Raw Boiled Potato'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Raw Boiled Potato',
            process:[
                [1,300,'Boiled Potato Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Boiled Potato Pot',
            portions:1,
            process:[
                [6,60,'Boiled Potato','Water Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Boiled Potato',
            process:[
                [0,'Plate','Plated Boiled Potato'],
            ],
        },{
            name:'Plated Boiled Potato',
            process:[
                [5,'Trash','Plate'],
                [0,'Chopped Onion','Plated Boiled Potato and Onion'],
                [0,'Mayo','Plated Boiled Potato and Mayo'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Boiled Potato and Onion',
            process:[
                [5,'Trash','Plate'],
                [0,'Mayo','Plated Boiled Potato, Onion, and Mayo'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Boiled Potato and Mayo',
            process:[
                [5,'Trash','Plate'],
                [0,'Chopped Onion','Plated Boiled Potato, Onion, and Mayo'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Onion and Mayo',
            process:[
                [5,'Trash','Plate'],
                [0,'Boiled Potato','Plated Boiled Potato, Onion, and Mayo'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Boiled Potato, Onion, and Mayo',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Fried Egg',
            process:[
                [0,'Plate','Plated Egg'],
                [1,240,'Burnt'],
            ],
        },{
            name:'Plated Egg',
            process:[
                [5,'Trash','Plate'],
                [0,'Toast','Plated Egg Toast'],
                [0,'Chopped Tomato','Plated Egg and Tomato'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Toast',
            process:[
                [5,'Trash','Plate'],
                [0,'Fried Egg','Plated Egg Toast'],
                [0,'Chopped Tomato','Plated Tomato Toast'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Egg and Tomato',
            process:[
                [5,'Trash','Plate'],
                [0,'Toast','Plated Egg and Tomato Toast'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Egg Toast',
            process:[
                [5,'Trash','Plate'],
                [0,'Chopped Tomato','Plated Egg and Tomato Toast'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Tomato Toast',
            process:[
                [5,'Trash','Plate'],
                [0,'Fried Egg','Plated Egg and Tomato Toast'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Egg and Tomato Toast',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Pizza Base',
            process:[
                [0,'Tomato Sauce','Sauce Pizza Base'],
            ],
        },{
            name:'Sauce Pizza Base',
            process:[
                [0,'Chopped Cheese','Raw Cheese Pizza'],
            ],
        },{
            name:'Raw Cheese Pizza',
            process:[
                [1,480,'Cheese Pizza'],
                [0,'Chopped Onion','Raw Onion Pizza'],
                [0,'Chopped Meat','Raw Meat Pizza'],
            ],
        },{
            name:'Cheese Pizza',
            portions:3,
            process:[
                [1,480,'Burnt'],
                [6,60,'Cheese Pizza Slice','Cheese Pizza Slice'],
            ],
        },{
            name:'Cheese Pizza Slice',
            portions:4,
            process:[
                [0,'Plate','Plated Cheese Pizza Slice'],
            ],
        },{
            name:'Plated Cheese Pizza Slice',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Raw Onion Pizza',
            process:[
                [1,480,'Onion Pizza'],
                [0,'Chopped Meat','Raw Onion and Meat Pizza'],
            ],
        },{
            name:'Raw Meat Pizza',
            process:[
                [1,480,'Meat Pizza'],
                [0,'Chopped Meat','Raw Onion and Meat Pizza'],
            ],
        },{
            name:'Raw Onion and Meat Pizza',
            process:[
                [1,480,'Onion and Meat Pizza'],
            ],
        },{
            name:'Onion Pizza',
            portions:3,
            process:[
                [1,480,'Burnt'],
                [6,60,'Onion Pizza Slice','Onion Pizza Slice'],
            ],
        },{
            name:'Onion Pizza Slice',
            process:[
                [0,'Plate','Plated Onion Pizza Slice'],
            ],
        },{
            name:'Plated Onion Pizza Slice',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Meat Pizza',
            portions:3,
            process:[
                [1,480,'Burnt'],
                [6,60,'Meat Pizza Slice','Meat Pizza Slice'],
            ],
        },{
            name:'Meat Pizza Slice',
            process:[
                [0,'Plate','Plated Meat Pizza Slice'],
            ],
        },{
            name:'Plated Meat Pizza Slice',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Onion and Meat Pizza',
            portions:3,
            process:[
                [1,480,'Burnt'],
                [6,60,'Onion and Meat Pizza Slice','Onion and Meat Pizza Slice'],
            ],
        },{
            name:'Onion and Meat Pizza Slice',
            process:[
                [0,'Plate','Plated Onion and Meat Pizza Slice'],
            ],
        },{
            name:'Plated Onion and Meat Pizza Slice',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Raw Uncooked Meat Pie',
            process:[
                [1,300,'Meat Pie'],
            ],
        },{
            name:'Raw Meat Pie',
            process:[
                [1,120,'Meat Pie'],
            ],
        },{
            name:'Raw Uncooked Chopped Meat Pie',
            process:[
                [1,180,'Meat Pie'],
            ],
        },{
            name:'Raw Chopped Meat Pie',
            process:[
                [1,60,'Meat Pie'],
            ],
        },{
            name:'Meat Pie',
            process:[
                [0,'Plate','Plated Meat Pie'],
                [1,300,'Burnt'],
            ],
        },{
            name:'Plated Meat Pie',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Raw Uncooked Broccoli Pie',
            process:[
                [0,'Potato','Raw Uncooked Vegetable Pie'],
                [0,'Chopped Potato','Raw Uncooked Chopped Vegetable Pie'],
            ],
        },{
            name:'Raw Broccoli Pie',
            process:[
                [0,'Potato','Raw Vegetable Pie'],
                [0,'Chopped Potato','Raw Chopped Vegetable Pie'],
            ],
        },{
            name:'Raw Uncooked Potato Pie',
            process:[
                [0,'Broccoli','Raw Uncooked Vegetable Pie'],
            ],
        },{
            name:'Raw Potato Pie',
            process:[
                [0,'Broccoli','Raw Vegetable Pie'],
            ],
        },{
            name:'Raw Uncooked Chopped Potato Pie',
            process:[
                [0,'Broccoli','Raw Uncooked Chopped Vegetable Pie'],
            ],
        },{
            name:'Raw Chopped Potato Pie',
            process:[
                [0,'Broccoli','Raw Chopped Vegetable Pie'],
            ],
        },{
            name:'Raw Uncooked Vegetable Pie',
            process:[
                [1,300,'Vegetable Pie'],
            ],
        },{
            name:'Raw Vegetable Pie',
            process:[
                [1,120,'Vegetable Pie'],
            ],
        },{
            name:'Raw Uncooked Chopped Vegetable Pie',
            process:[
                [1,180,'Vegetable Pie'],
            ],
        },{
            name:'Raw Chopped Vegetable Pie',
            process:[
                [1,60,'Vegetable Pie'],
            ],
        },{
            name:'Vegetable Pie',
            process:[
                [0,'Plate','Plated Vegetable Pie'],
                [1,300,'Burnt'],
            ],
        },{
            name:'Plated Vegetable Pie',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Coffee',
            process:[
                [0,'Ice Cream V','Affogato'],
            ],
        },{
            name:'Affogato',
            process:[],
        },{
            name:'Chopped Nuts',
            process:[
                [0,'Chopped Onion','Raw Nut Roast'],
            ],
        },{
            name:'Raw Nut Roast',
            process:[
                [1,1200,'Nut Roast'],
            ],
        },{
            name:'Nut Roast',
            portions:3,
            process:[
                [1,1200,'Burnt'],
                [6,60,'Nut Roast Slice','Nut Roast Slice'],
            ],
        },{
            name:'Nut Roast Slice',
            process:[
                [0,'Plate','Plated Nut Roast Slice'],
                [0,'Chopped Lemon','Lemon Nut Roast Slice'],
            ],
        },{
            name:'Lemon Nut Roast Slice',
            process:[
                [0,'Plate','Plated Lemon Nut Roast Slice'],
            ],
        },{
            name:'Plated Nut Roast Slice',
            process:[
                [5,'Trash','Plate'],
                [0,'Chopped Lemon','Plated Lemon Nut Roast Slice'],
                [0,'Stuffing','Plated Stuffing Nut Roast Slice'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Lemon Nut Roast Slice',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Raw Hot Dog',
            process:[
                [1,240,'Unbunned Hot Dog'],
            ],
        },{
            name:'Hot Dog Bun',
            process:[],
        },{
            name:'Unbunned Hot Dog',
            process:[
                [1,240,'Burnt'],
                [0,'Plate','Plated Unbunned Hot Dog'],
                [0,'Hot Dog Bun','Hot Dog'],
            ],
        },{
            name:'Plated Unbunned Hot Dog',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
                [0,'Hot Dog Bun','Plated Hot Dog'],
            ],
        },{
            name:'Hot Dog',
            process:[
                [0,'Plate','Plated Hot Dog'],
                [0,'Chopped Cheese','Cheese Hot Dog'],
            ],
        },{
            name:'Cheese Hot Dog',
            process:[
                [0,'Plate','Plated Cheese Hot Dog'],
            ],
        },{
            name:'Plated Hot Dog',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Cheese Hot Dog',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Noodles in Pot',
            process:[
                [5,'Water','Raw Noodles'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Raw Noodles',
            process:[
                [1,480,'Noodles Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Noodles Pot',
            process:[
                [5,'Water','Cooked Noodles in Pot'],
                [5,'Trash','Cooked Noodles in Pot'],
            ],
        },{
            name:'Cooked Noodles in Pot',
            portions:2,
            process:[
                [6,120,'Noodles','Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Noodles',
            process:[
                [0,'Plate','Plated Noodles'],
            ],
        },{
            name:'Plated Noodles',
            process:[
                [0,'Tomato Sauce','Plated Spaghetti'],
                [0,'Bolognese Sauce','Plated Bolognese Spaghetti'],
                [0,'White Sauce','Plated White Spaghetti'],
                [0,'Chopped Cheese','Plated Spaghetti With Cheese'],
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Tomato Sauce',
            process:[
                [0,'Noodles','Plated Spaghetti'],
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Spaghetti',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Cooked Mince',
            process:[
                [1,120,'Burnt'],
            ],
        },{
            name:'Tomato Sauce in Pot',
            process:[
                [5,'Trash','Pot'],
                [0,'Cooked Mince','Raw Bolognese Sauce Pot'],
            ],
        },{
            name:'Cooked Mince in Pot',
            process:[
                [5,'Trash','Pot'],
                [0,'Tomato Sauce','Raw Bolognese Sauce Pot'],
            ],
        },{
            name:'Raw Bolognese Sauce Pot',
            process:[
                [5,'Trash','Pot'],
                [1,180,'Bolognese Sauce Pot'],
            ],
        },{
            name:'Bolognese Sauce Pot',
            portions:2,
            process:[
                [5,'Trash','Pot'],
                [6,60,'Bolognese Sauce','Pot'],
            ],
        },{
            name:'Bolognese Sauce',
            process:[
                [0,'Plate','Plated Bolognese Sauce'],
            ],
        },{
            name:'Plated Bolognese Sauce',
            process:[
                [0,'Noodles','Plated Bolognese Spaghetti'],
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Bolognese Spaghetti',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Butter in Pot',
            process:[
                [5,'Trash','Pot'],
                [0,'Flour','Raw Roux Pot'],
            ],
        },{
            name:'Flour in Pot',
            process:[
                [5,'Trash','Pot'],
                [0,'Butter','Raw Roux Pot'],
            ],
        },{
            name:'Raw Roux Pot',
            process:[
                [5,'Trash','Pot'],
                [1,120,'Roux Pot'],
            ],
        },{
            name:'Roux Pot',
            process:[
                [5,'Trash','Pot'],
                [0,'Milk','Roux With Milk Pot'],
            ],
        },{
            name:'Roux With Milk Pot',
            process:[
                [5,'Trash','Pot'],
                [3,60,'White Sauce Pot'],
            ],
        },{
            name:'White Sauce Pot',
            portions:2,
            process:[
                [5,'Trash','Pot'],
                [6,60,'White Sauce','Pot'],
            ],
        },{
            name:'White Sauce',
            process:[
                [0,'Plate','Plated White Sauce'],
            ],
        },{
            name:'Plated White Sauce',
            process:[
                [0,'Noodles','Plated White Spaghetti'],
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Plated White Spaghetti',
            process:[
                [0,'Chopped Cheese','Plated Cheese Spaghetti'],
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Spaghetti With Cheese',
            process:[
                [0,'White Sauce','Plated Cheese Spaghetti'],
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Cheese Spaghetti',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Tray',
            process:[
                [0,'Bolognese Sauce','Tray With Lasagne 1'],
            ],
        },{
            name:'Tin',
            process:[],
        },{
            name:'Donut Tray',
            process:[],
        },{
            name:'Pasta Sheet',
            process:[],
        },{
            name:'Tray With Lasagne 1',
            process:[
                [0,'Pasta Sheet','Tray With Lasagne 2'],
                [5,'Trash','Tray'],
            ],
        },{
            name:'Tray With Lasagne 2',
            process:[
                [0,'White Sauce','Tray With Lasagne 3'],
                [5,'Trash','Tray'],
            ],
        },{
            name:'Tray With Lasagne 3',
            process:[
                [0,'Bolognese Sauce','Tray With Lasagne 4'],
                [5,'Trash','Tray'],
            ],
        },{
            name:'Tray With Lasagne 4',
            process:[
                [0,'Pasta Sheet','Tray With Lasagne 5'],
                [5,'Trash','Tray'],
            ],
        },{
            name:'Tray With Lasagne 5',
            process:[
                [0,'White Sauce','Tray With Lasagne 6'],
                [5,'Trash','Tray'],
            ],
        },{
            name:'Tray With Lasagne 6',
            process:[
                [1,1200,'Lasagne Tray'],
                [5,'Trash','Tray'],
            ],
        },{
            name:'Lasagne Tray',
            portions:4,
            process:[
                [1,1200,'Burnt Tray'],
                [6,60,'Lasagne Slice','Tray'],
                [5,'Trash','Tray'],
            ],
        },{
            name:'Burnt Tray',
            process:[
                [5,'Trash','Tray'],
            ],
        },{
            name:'Lasagne Slice',
            process:[
                [0,'Plate','Plated Lasagne Slice'],
            ],
        },{
            name:'Plated Lasagne Slice',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Bonito',
            process:[],
        },{
            name:'Raw Ramen Soup',
            process:[
                [1,540,'Ramen Soup Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Ramen Soup Pot',
            portions:4,
            process:[
                [6,60,'Ramen Soup','Onion in Pot'],
                [5,'Trash','Pot'],
            ],
        },{
            name:'Ramen Soup',
            process:[
                [0,'Noodles','Ramen'],
            ],
        },{
            name:'Ramen',
            process:[],
        },{
            name:'Sugar Egg',
            process:[
                [0,'Flour','Sugar Flour Egg'],
            ],
        },{
            name:'Flour Egg',
            process:[
                [0,'Sugar','Sugar Flour Egg'],
            ],
        },{
            name:'Sugar Flour Egg',
            process:[
                [3,120,'Batter'],
            ],
        },{
            name:'Milk',
            process:[],
        },{
            name:'Batter',
            process:[
                [5,'Waffle Iron','Waffle'],
                [0,'Milk','Milk Batter'],
            ],
        },{
            name:'Cherry Sauce',
            process:[],
        },{
            name:'Waffle',
            process:[
                [0,'Plate','Plated Waffle'],
                [0,'Butter','Butter Waffle'],
                [0,'Cherry Sauce','Cherry Waffle'],
            ],
        },{
            name:'Butter Waffle',
            process:[
                [0,'Plate','Plated Butter Waffle'],
                [0,'Cherry Sauce','Butter Cherry Waffle'],
            ],
        },{
            name:'Cherry Waffle',
            process:[
                [0,'Plate','Plated Cherry Waffle'],
                [0,'Butter','Butter Cherry Waffle'],
            ],
        },{
            name:'Butter Cherry Waffle',
            process:[
                [0,'Plate','Plated Butter Cherry Waffle'],
            ],
        },{
            name:'Plated Waffle',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Butter Waffle',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Cherry Waffle',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Plated Butter Cherry Waffle',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Milk Batter',
            process:[
                [0,'Tin','Batter Tin'],
                [0,'Donut Tray','Batter Donut Tray'],
            ],
        },{
            name:'Batter Tin',
            process:[
                [1,1800,'Cake Tin'],
                [5,'Trash','Tin'],
            ],
        },{
            name:'Cake Tin',
            process:[
                [0,'Melted Chocolate','Chocolate Cake Tin'],
                [0,'Coffee','Coffee Cake Tin'],
                [0,'Cherry Sauce','Cherry Cake Tin'],
                [0,'Chopped Lemon','Lemon Cake Tin'],
                [0,'Mascarpone','Tiramisu 2'],
                [1,720,'Burnt Tin'],
                [5,'Trash','Tin'],
            ],
        },{
            name:'Burnt Tin',
            process:[
                [5,'Trash','Tin'],
            ],
        },{
            name:'Chocolate Cake Tin',
            portions:6,
            process:[
                [6,60,'Chocolate Cake Slice','Tin'],
                [5,'Trash','Tin'],
            ],
        },{
            name:'Coffee Cake Tin',
            portions:6,
            process:[
                [6,60,'Coffee Cake Slice','Tin'],
                [5,'Trash','Tin'],
            ],
        },{
            name:'Cherry Cake Tin',
            portions:6,
            process:[
                [6,60,'Cherry Cake Slice','Tin'],
                [5,'Trash','Tin'],
            ],
        },{
            name:'Lemon Cake Tin',
            portions:6,
            process:[
                [6,60,'Lemon Cake Slice','Tin'],
                [5,'Trash','Tin'],
            ],
        },{
            name:'Chocolate Cake Slice',
            process:[],
        },{
            name:'Coffee Cake Slice',
            process:[],
        },{
            name:'Cherry Cake Slice',
            process:[],
        },{
            name:'Lemon Cake Slice',
            process:[],
        },{
            name:'Batter Donut Tray',
            portions:12,
            process:[
                [6,60,'Raw Donut','Donut Tray'],
                [5,'Trash','Donut Tray'],
            ],
        },{
            name:'Raw Donut',
            process:[],
        },{
            name:'Oil in Pot',
            process:[
                [5,'Trash','Pot'],
                [0,'Raw Donut','Raw Donut Pot'],
            ],
        },{
            name:'Donut in Pot',
            process:[
                [5,'Trash','Pot'],
                [0,'Oil','Raw Donut Pot'],
            ],
        },{
            name:'Raw Donut Pot',
            process:[
                [5,'Trash','Pot'],
                [1,12,'Donut Pot'],
            ],
        },{
            name:'Donut Pot',
            portions:1,
            process:[
                [5,'Trash','Pot'],
                [6,60,'Donut','Oil in Pot'],
            ],
        },{
            name:'Donut',
            process:[
                [0,'Melted Chocolate','Chocolate Donut'],
                [0,'Coffee','Coffee Donut'],
                [0,'Cherry Sauce','Cherry Donut'],
                [0,'Chopped Lemon','Lemon Donut'],
            ],
        },{
            name:'Chocolate Donut',
            process:[],
        },{
            name:'Coffee Donut',
            process:[],
        },{
            name:'Cherry Donut',
            process:[],
        },{
            name:'Lemon Donut',
            process:[],
        },{
            name:'Raw Stuffing',
            process:[
                [1,150,'Stuffing'],
            ],
        },{
            name:'Stuffing',
            process:[
                [1,150,'Burnt'],
                [0,'Plate','Plated Stuffing'],
            ],
        },{
            name:'Plated Stuffing',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Stuffing Nut Roast Slice',
            process:[
                [0,'Plate','Plated Stuffing Nut Roast Slice'],
            ],
        },{
            name:'Plated Stuffing Nut Roast Slice',
            process:[
                [5,'Trash','Plate'],
                [7,'Plate'],
            ],
        },{
            name:'Mascarpone',
            process:[],
        },{
            name:'Cocoa Powder',
            process:[],
        },{
            name:'Tiramisu 2',
            process:[
                [0,'Cocoa Powder','Tiramisu'],
                [5,'Trash','Tin'],
            ],
        },{
            name:'Tiramisu',
            portions:6,
            process:[
                [6,60,'Tiramisu Slice','Tin'],
                [5,'Trash','Tin'],
            ],
        },{
            name:'Tiramisu Slice',
            process:[],
        },{
            name:'Ketchup',
            process:[
                [7,'Ketchup'],
            ],
        },{
            name:'Mustard',
            process:[
                [7,'Mustard'],
            ],
        },
    ],dish:[
        /*
        0-main
        1-starter
        2-side
        3-dessert
        4-condiment
        */
        {
            name:'Fish',
            type:0,
            obj:[
                ['Plated Fish',4],
            ],
            edit:true,
            desc:'Cook fish and serve.',
        },{
            name:'Fish Fillet',
            type:0,
            obj:[
                ['Plated Fish Fillet',5],
            ],
            edit:true,
            desc:'Chop fish to create fillet.\nCook fillet and serve.',
        },{
            name:'Spiny Fish',
            type:0,
            obj:[
                ['Plated Spiny Fish',5],
            ],
            edit:true,
            desc:'Removed spines from fish and discard.\nCook fish and serve.',
        },{
            name:'Crab Cake',
            type:0,
            obj:[
                ['Plated Crab Cake',6],
            ],
            edit:true,
            desc:'Chop crab, combined with cracked egg and flour.\nCook and serve.',
        },

        {
            name:'Steak',
            type:0,
            obj:[
                ['Plated Rare Steak',4],
                ['Plated Medium Steak',4],
                ['Plated Well Done Steak',4],
            ],
            edit:true,
            desc:'Cook meat to desired level and serve.',
        },{
            name:'Bone Steak',
            type:0,
            obj:[
                ['Plated Rare Bone Steak',4],
                ['Plated Medium Bone Steak',4],
                ['Plated Well Done Bone Steak',4],
            ],
            edit:true,
            desc:'Cook meat to desired level and serve.\nLeaves a bone on the plate afterward.',
        },{
            name:'Thick Steak',
            type:0,
            obj:[
                ['Plated Rare Thick Steak',5],
                ['Plated Medium Thick Steak',5],
                ['Plated Well Done Thick Steak',5],
            ],
            edit:true,
            desc:'Cook meat to desired level and serve.\nTakes a while to cook.',
        },{
            name:'Tomato Steak',
            type:0,
            obj:[
                ['Plated Rare Steak With Tomato',4],
                ['Plated Medium Steak With Tomato',4],
                ['Plated Well Done Steak With Tomato',4],
                ['Plated Rare Bone Steak','Plated Rare Bone Steak With Tomato',4],
                ['Plated Medium Bone Steak','Plated Medium Bone Steak With Tomato',4],
                ['Plated Well Done Bone Steak','Plated Well Done Bone Steak With Tomato',4],
                ['Plated Rare Thick Steak','Plated Rare Thick Steak With Tomato',5],
                ['Plated Medium Thick Steak','Plated Medium Thick Steak With Tomato',5],
                ['Plated Well Done Thick Steak','Plated Well Done Thick Steak With Tomato',5],
            ],
            edit:true,
            desc:'Add chopped tomato to plated steak and serve.',
        },

        {
            name:'Salad',
            type:0,
            obj:[
                ['Plated Lettuce',3],
                ['Plated Lettuce and Tomato',4],
            ],
            edit:true,
            desc:'Chop and serve lettuce.\nOptionally add chopped tomato.',
        },{
            name:'Onion Salad',
            type:0,
            obj:[
                ['Plated Lettuce and Onion',4],
                ['Plated Lettuce, Tomato, and Onion',5],
            ],
            edit:true,
            desc:'Add chopped onion to plated salad and serve.',
        },{
            name:'Apple Salad',
            type:0,
            obj:[
                ['Plated Apple, Nuts, and Mayo',6],
            ],
            edit:true,
            desc:'Combine cracked egg and oil to make mayo.\nCombine with chopped apple and nuts and serve.',
        },{
            name:'Potato Salad',
            type:0,
            obj:[
                ['Plated Boiled Potato, Onion, and Mayo',7],
            ],
            edit:true,
            desc:'Combine cracked egg and oil to make mayo.\nBoil chopped potato in a pot.\nCombine boiled potato, chopped onion, and mayo, and serve.',
        },{
            name:'Caesar Salad',
            type:0,
            obj:[
                ['Plated Lettuce, Garlic, and Breadcrumbs',6],
            ],
            edit:true,
            desc:'Add water to flour to make dough.\nCook to make bread, portion bread slices, cook, and chop to make breadcrumbs.\nCombine chopped lettuce, chopped garlic, and breadcrumbs, and serve.',
        },

        {
            name:'Toast',
            type:0,
            obj:[
                ['Plated Toast',4],
            ],
            edit:true,
            desc:'Add water to flour to make dough.\nCook to make bread, then portion bread slices.\nCook bread slice again and serve.',
        },{
            name:'Egg Toast',
            type:0,
            obj:[
                ['Plated Egg Toast',5],
            ],
            edit:true,
            desc:'Crack egg and cook to make fried egg.\nAdd to plated toast and serve.',
        },{
            name:'Tomato Toast',
            type:0,
            obj:[
                ['Plated Tomato Toast',5],
                ['Plated Egg Toast','Plated Egg and Tomato Toast',6],
            ],
            edit:true,
            desc:'Chop tomato, add to plated toast, and serve.',
        },

        {
            name:'Pizza',
            type:0,
            obj:[
                ['Plated Cheese Pizza Slice',5],
            ],
            edit:true,
            desc:'Add water to flour to make dough.\nAdd oil to make pizza base.\nChop tomato twice and cheese once, and combine with pizza base.\nCook, portion, and serve.',
        },{
            name:'Onion Pizza',
            type:0,
            obj:[
                ['Plated Onion Pizza Slice',6],
            ],
            edit:true,
            desc:'Add chopped onion to pizza before cooking.',
        },{
            name:'Meat Pizza',
            type:0,
            obj:[
                ['Plated Meat Pizza Slice',6],
                ['Plated Onion Pizza Slice','Plated Onion and Meat Pizza Slice',7],
            ],
            edit:true,
            desc:'Add chopped meat to pizza before cooking.',
        },

        {
            name:'Meat Pie',
            type:0,
            obj:[
                ['Plated Meat Pie',6],
            ],
            edit:true,
            desc:'Add water to flour to make dough.\nKnead dough to make pie crust, optionally cook.\nAdd meat to pastry and cook again, then serve.',
        },{
            name:'Vegetable Pie',
            type:0,
            obj:[
                ['Plated Vegetable Pie',6],
            ],
            edit:true,
            desc:'Add water to flour to make dough.\nKnead dough to make pie crust, optionally cook.\nAdd broccoli and potato to pastry and cook again, then serve.',
        },

        {
            name:'Coffee',
            type:3,
            obj:[
                ['Coffee',1],
            ],
            edit:true,
            desc:'Activate coffee machine, then take the cup and serve.',
        },{
            name:'Affogato',
            type:3,
            obj:[
                ['Affogato',2],
            ],
            edit:true,
            desc:'Take vanilla ice cream, add to coffee cup, and serve.',
        },

        {
            name:'Nut Roast',
            type:0,
            obj:[
                ['Plated Nut Roast Slice',4],
            ],
            edit:true,
            desc:'Slice nuts and onions.\nCombine and cook to make nut roast.\nPortion and serve.',
        },{
            name:'Stuffing',
            type:0,
            obj:[
                ['Plated Stuffing Nut Roast Slice',7],
            ],
            edit:true,
            desc:'Add water to flour to make dough.\nCook to make bread, then portion a slice.\nCook the slice then chop to make breadcrumbs.\nCombine breadcrumbs and chopped onion, then cook.\nAdd to Nut Roast portion and serve.',
        },

        {
            name:'Hot Dog',
            type:0,
            obj:[
                ['Plated Hot Dog',5],
            ],
            edit:true,
            desc:'Cook hot dog.\nAdd to bun and serve.\nDeliver condiments as needed.',
        },{
            name:'Ketchup',
            type:4,
            obj:[
                ['Ketchup',0],
            ],
            edit:true,
            desc:'Take and deliver ketchup bottle',
        },{
            name:'Mustard',
            type:4,
            obj:[
                ['Mustard',0],
            ],
            edit:true,
            desc:'Take and deliver mustard bottle',
        },{
            name:'Cheese Hot Dog',
            type:0,
            obj:[
                ['Plated Cheese Hot Dog',6],
            ],
            edit:true,
            desc:'Add chopped cheese to a plated hot dog.',
        },

        {
            name:'Spaghetti',
            type:0,
            obj:[
                ['Plated Spaghetti',5],
            ],
            edit:true,
            desc:'Boil noodles in water, then remove water, and portion noodles out.\nPlate noodles and add tomato sauce, then serve.',
        },{
            name:'Bolognese Spaghetti',
            type:0,
            obj:[
                ['Plated Bolognese Spaghetti',7],
            ],
            edit:true,
            desc:'Chop and cook meat to make mince.\nAdd mince to tomato sauce in pot and cook to make bolognese sauce.\nAdd to plated noodles, then serve.',
        },{
            name:'Cheese Spaghetti',
            type:0,
            obj:[
                ['Plated Cheese Spaghetti',7],
            ],
            edit:true,
            desc:'Add butter and flour to pot, then cook to make roux.\nAdd milk and knead to make white sauce.\nCombine plated noodles, white sauce, and chopped cheese, then serve.',
        },{
            name:'Lasagne',
            type:0,
            obj:[
                ['Plated Lasagne Slice',9],
            ],
            edit:true,
            desc:'Add bolognese sauce, pasta sheet, and white sauce to tray, in order, two times.\nCook tray, portion, and serve.',
        },{
            name:'Ramen',
            type:0,
            obj:[
                ['Ramen',6],
            ],
            edit:true,
            desc:'Boil water with onion to make broth.\nAdd bonito to broth and cook again.\nPortion soup and add noodles to make ramen, then serve.',
        },

        {
            name:'Waffle',
            type:0,
            obj:[
                ['Plated Waffle',5],
            ],
            edit:true,
            desc:'Combine sugar, flour, and cracked egg, mix to make batter.\nAdd batter to waffle iron and activate.\nWhen done, take waffle, plate and serve.',
        },{
            name:'Butter Waffle',
            type:0,
            obj:[
                ['Plated Butter Waffle',6],
            ],
            edit:true,
            desc:'Add butter to a plated waffle, then serve.',
        },{
            name:'Cherry Waffle',
            type:0,
            obj:[
                ['Plated Cherry Waffle',6],
                ['Plated Butter Waffle','Player Butter Cherry Waffle',7],
            ],
            edit:true,
            desc:'Chop cherries and add to a plated waffle, then serve.',
        },

        {
            name:'Cake',
            type:0,
            obj:[
                ['Chocolate Cake Slice',5],
            ],
            edit:true,
            desc:'Combine sugar, flour, and cracked egg, mix to make batter.\nAdd milk to batter, then place in cake tin.\nCook, then add melted chocolate as flavoring.\nPortion and serve.',
        },{
            name:'Coffee Cake',
            type:0,
            obj:[
                ['Coffee Cake Slice',5],
            ],
            edit:true,
            desc:'After cooking, use coffee from coffee machine as cake flavoring.',
        },{
            name:'Cherry Cake',
            type:0,
            obj:[
                ['Cherry Cake Slice',5],
            ],
            edit:true,
            desc:'After cooking, use cherry sauce as cake flavoring.',
        },{
            name:'Lemon Cake',
            type:0,
            obj:[
                ['Lemon Cake Slice',5],
            ],
            edit:true,
            desc:'After cooking, use chopped lemon as cake flavoring.',
        },{
            name:'Donut',
            type:0,
            obj:[
                ['Chocolate Donut',5],
                ['Coffee Cake Slice','Coffee Donut',5],
                ['Cherry Cake Slice','Cherry Donut',5],
                ['Lemon Cake Slice','Lemon Donut',5],
            ],
            edit:true,
            desc:'Add batter with milk to donut tray.\nPortion a donut out of the tray.\nAdd oil and donut to pot.\nCook, then portion out donut, add flavoring, and serve.',
        },{
            name:'Tiramisu',
            type:0,
            obj:[
                ['Tiramisu Slice',6],
            ],
            edit:true,
            desc:'Combine chopped lemon, sugar, and cracked egg, and mix, then add milk to make mascarpone.\nAfter cooking cake, add mascarpone and cocoa powder.\nPortion and serve.',
        },
        
        {
            name:'Meat Soup',
            type:1,
            obj:[
                ['Meat Soup',2],
            ],
            edit:true,
            desc:'Boil water with onion to make broth.\nAdd meat to broth and cook again.\nPortion and serve.',
        },{
            name:'Tomato Soup',
            type:1,
            obj:[
                ['Tomato Soup',2],
            ],
            edit:true,
            desc:'Boil water with onion to make broth.\nCut tomato two times to make tomato sauce.\nAdd tomato and tomato sauce to broth and cook again.\nPortion and serve.',
        },{
            name:'Broccoli Cheese Soup',
            type:1,
            obj:[
                ['Broccoli Cheese Soup',2],
            ],
            edit:true,
            desc:'Boil water with onion to make broth.\nAdd broccoli and cheese to broth and cook again.\nPortion and serve.',
        },{
            name:'Miso Soup',
            type:1,
            obj:[
                ['Miso Soup',3],
            ],
            edit:true,
            desc:'Boil water with soybeans, then cut to make tofu.\nAdd water again and miso and cook again.\nPortion and serve.',
        },{
            name:'Bread',
            type:1,
            obj:[
                ['Bread Slice',1],
            ],
            edit:true,
            desc:'Add water to flour to make dough.\nCook dough to make bread.\nPortion and serve.',
        },{
            name:'Garlic Bread',
            type:1,
            obj:[
                ['Garlic Bread',2],
            ],
            edit:true,
            desc:'Add water to flour to make dough.\nCook dough to make bread.\nPortion and add chopped garlic and chopped cheese.\nCook again and serve.',
        },{
            name:'Croissant',
            type:1,
            obj:[
                ['Croissant',2],
            ],
            edit:true,
            desc:'Add water to flour to make dough.\nAdd butter and knead to make a croissant.\nCook and serve.',
        },{
            name:'Spring Roll',
            type:1,
            obj:[
                ['Spring Roll',2],
            ],
            edit:true,
            desc:'Add water to flour to make dough.\nAdd chopped lettuce and onions.\nKnead into rolls and cook.\nPortions and serve.',
        },

        {
            name:'Broccoli',
            type:2,
            obj:[
                ['Broccoli Portion',1],
            ],
            edit:true,
            desc:'Boil water with broccoli.\nPortion and serve.',
        },{
            name:'Mashed Potato',
            type:2,
            obj:[
                ['Mashed Potato',2],
            ],
            edit:true,
            desc:'Boil water with potato.\nMash when complete.\nPortion and serve.',
        },{
            name:'Roast Potato',
            type:2,
            obj:[
                ['Roast Potato',1],
            ],
            edit:true,
            desc:'Cook potato and serve.',
        },{
            name:'Fries',
            type:2,
            obj:[
                ['Fries',2],
            ],
            edit:true,
            desc:'Chop potato, then cook and serve.',
        },{
            name:'Onion Rings',
            type:2,
            obj:[
                ['Onion Rings',2],
            ],
            edit:true,
            desc:'Chop onions, add flour, then cook and serve.',
        },{
            name:'Cheese Sticks',
            type:2,
            obj:[
                ['Cheese Sticks',3],
            ],
            edit:true,
            desc:'Chop cheese, add flour and cook.\nChop tomato twice to make sauce.\nCombine sticks and sauce and serve.',
        },{
            name:'Macaroni and Cheese',
            type:2,
            obj:[
                ['Macaroni and Cheese',2],
            ],
            edit:true,
            desc:'Boil water with macaroni.\nRemove water and add chopped cheese and butter.\nPortion and serve.',
        },{
            name:'Scrambled Eggs',
            type:2,
            obj:[
                ['Scrambled Eggs',1],
            ],
            edit:true,
            desc:'Crack egg, then mix it.\nPlace in pot and cook.\nPortion and serve.',
        },

        {
            name:'Apple Pie',
            type:3,
            obj:[
                ['Apple Pie Slice',2],
            ],
            edit:true,
            desc:'Add water to flour to make dough.\nKnead dough to make crust and cook to make pastry.\nAdd chopped apple to pastry and cook again.\nPortion and Serve.',
        },{
            name:'Cherry Pie',
            type:3,
            obj:[
                ['Cherry Pie Slice',2],
            ],
            edit:true,
            desc:'Add water to flour to make dough.\nKnead dough to make crust and cook to make pastry.\nAdd cherry to pastry and cook again.\nPortion and Serve.',
        },{
            name:'Caramel Pie',
            type:3,
            obj:[
                ['Caramel Pie Slice',2],
            ],
            edit:true,
            desc:'Add water to flour to make dough.\nKnead dough to make crust and cook to make pastry.\nCook sugar to make caramel.\nAdd caramel to pastry and cook again.\nPortion and Serve.',
        },{
            name:'Lemon Meringue Pie',
            type:3,
            obj:[
                ['Lemon Meringue Pie Slice',3],
            ],
            edit:true,
            desc:'Add water to flour to make dough.\nKnead dough to make crust and cook to make pastry.\nCombine chopped lemon, sugar, and cracked egg, and mix to create meringue.\nAdd meringue to pastry and cook again.\nPortion and Serve.',
        },{
            name:'Apple Crisp',
            type:3,
            obj:[
                ['Apple Crisp',2],
            ],
            edit:true,
            desc:'Combine chopped apple, sugar and flour.\nCook and serve.',
        },{
            name:'Cherry Cordial',
            type:3,
            obj:[
                ['Cherry Cordial',2],
            ],
            edit:true,
            desc:'Melt chocolate and add cherry.\nCook again and serve.',
        },{
            name:'Ice Cream',
            type:3,
            obj:[
                ['Ice Cream CC',2],
                ['Ice Cream CV',2],
                ['Ice Cream VV',2],
                ['Ice Cream CCC',3],
                ['Ice Cream CCV',3],
                ['Ice Cream CVV',3],
                ['Ice Cream VVV',3],
            ],
            edit:true,
            desc:'Switch between flavors and grab scoops, then serve.',
        },{
            name:'Zeppole',
            type:3,
            obj:[
                ['Zeppole',2],
            ],
            edit:true,
            desc:'Add water to flour to make dough.\nAdd sugar and cook.\nAdd sugar again and serve.',
        },
    ],card:[
        /*
        0-main
        1-main variant
        2-starter
        3-side
        4-dessert
        5-customer
        */
        {
            name:'',
            list:-1,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[],
            edit:true,
            desc:'',
        },
        
        {
            name:'Fish',
            dish:['Fish'],
            list:0,
            customerMult:1.25,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Starter Hob','Fish'],
            edit:true,
            desc:'Adds fish as a main dish',
        },{
            name:'Steak',
            dish:['Steak'],
            list:0,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Starter Hob','Meat'],
            edit:true,
            desc:'Adds three types of steak as a main dish',
        },{
            name:'Salad',
            dish:['Salad'],
            list:0,
            customerMult:1.25,
            prereq:[],
            mutex:[],
            wall:['Lettuce','Tomatoes'],
            edit:true,
            desc:'Adds salads, with or without tomato, as a main dish',
        },{
            name:'Toast',
            dish:['Toast'],
            list:0,
            customerMult:1.25,
            prereq:[],
            mutex:[],
            wall:['Flour','Oven'],
            edit:true,
            desc:'Adds toast as a main dish',
        },{
            name:'Pizza',
            dish:['Pizza'],
            list:0,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:['Cheese','Tomatoes','Flour','Oil','Oven'],
            edit:true,
            desc:'Adds pizza as a main dish',
        },{
            name:'Pies',
            dish:['Meat Pie'],
            list:0,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:['Flour','Meat','Oven'],
            edit:true,
            desc:'Adds meat pie as a main dish',
        },{
            name:'Coffee',
            dish:['Coffee'],
            list:0,
            customerMult:1.25,
            prereq:[],
            mutex:[],
            wall:['Coffee Machine'],
            edit:true,
            desc:'Adds coffee as a dessert',
        },{
            name:'Nut Roast',
            dish:['Nut Roast'],
            list:0,
            customerMult:1.25,
            prereq:[],
            mutex:[],
            wall:['Nuts','Onions','Oven'],
            edit:true,
            desc:'Adds nut roast as a main dish',
        },{
            name:'Hot Dogs',
            dish:['Hot Dog','Ketchup'],
            list:0,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Starter Hob','Hot Dog Buns','Hot Dogs','Ketchup'],
            edit:true,
            desc:'Adds hot dogs as a main dish and ketchup as a condiment',
        },{
            name:'Spaghetti',
            dish:['Spaghetti'],
            list:0,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Starter Hob','Tomatoes','Noodles','Pots'],
            edit:true,
            desc:'Adds spaghetti as a main dish',
        },{
            name:'Waffles',
            dish:['Waffle'],
            list:0,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:['Waffle Iron','Sugar','Flour','Eggs'],
            edit:true,
            desc:'Adds waffles as a main dish',
        },{
            name:'Cakes',
            dish:['Cake'],
            list:0,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:['Sugar','Flour','Eggs','Milk','Chocolate','Tin','Oven'],
            edit:true,
            desc:'Adds cakes as a dessert',
        },

        {
            name:'Fish Fillet',
            dish:['Fish Fillet'],
            list:1,
            customerMult:0.8,
            prereq:['Fish'],
            mutex:[],
            wall:['Fish Fillet'],
            edit:true,
            desc:'Needs to be cut before cooking',
        },{
            name:'Spiny Fish',
            dish:['Spiny Fish'],
            list:1,
            customerMult:0.8,
            prereq:['Fish'],
            mutex:[],
            wall:['Spiny Fish'],
            edit:true,
            desc:'Contains spines, that must be removed and trashed',
        },{
            name:'Crab Cakes',
            dish:['Crab Cake'],
            list:1,
            customerMult:0.64,
            prereq:['Fish'],
            mutex:[],
            wall:['Crab','Eggs','Flour'],
            edit:true,
            desc:'Combine chopped crab, egg, and flour',
        },{
            name:'Bone Steak',
            dish:['Bone Steak'],
            list:1,
            customerMult:0.8,
            prereq:['Steak'],
            mutex:[],
            wall:['Bone Meat'],
            edit:true,
            desc:'Contains a bone that must be trashed afterward',
        },{
            name:'Thick Steak',
            dish:['Thick Steak'],
            list:1,
            customerMult:0.8,
            prereq:['Steak'],
            mutex:[],
            wall:['Thick Meat'],
            edit:true,
            desc:'Takes longer to cook than regular meat',
        },{
            name:'Tomato Steak',
            dish:['Tomato Steak'],
            list:1,
            customerMult:0.8,
            prereq:['Steak'],
            mutex:[],
            wall:['Tomatoes'],
            edit:true,
            desc:'Adds tomato as a steak topping',
        },{
            name:'Onion Salad',
            dish:['Onion Salad'],
            list:1,
            customerMult:1,
            prereq:['Salad'],
            mutex:[],
            wall:['Onions'],
            edit:true,
            desc:'Adds onions as a salad topping',
        },{
            name:'Apple Salad',
            dish:['Apple Salad'],
            list:1,
            customerMult:0.8,
            prereq:['Salad'],
            mutex:[],
            wall:['Apples','Eggs','Oil','Nuts'],
            edit:true,
            desc:'Consists of chopped apple, nuts, and mayo',
        },{
            name:'Potato Salad',
            dish:['Potato Salad'],
            list:1,
            customerMult:0.64,
            prereq:['Salad'],
            mutex:[],
            wall:['Starter Hob','Potatoes','Pots','Eggs','Oil','Onions'],
            edit:true,
            desc:'Consists of boiled potato, chopped onion, and mayo',
        },{
            name:'Caesar Salad',
            dish:['Caesar Salad'],
            list:1,
            customerMult:0.8,
            prereq:['Salad'],
            mutex:[],
            wall:['Garlic','Flour','Oven'],
            edit:true,
            desc:'Consists of lettuce, garlic, and breadcrumbs',
        },{
            name:'Egg Toast',
            dish:['Egg Toast'],
            list:1,
            customerMult:0.8,
            prereq:['Toast'],
            mutex:[],
            wall:['Starter Hob','Eggs'],
            edit:true,
            desc:'Adds egg as a toast topping',
        },{
            name:'Tomato Toast',
            dish:['Tomato Toast'],
            list:1,
            customerMult:1,
            prereq:['Toast'],
            mutex:[],
            wall:['Tomatoes'],
            edit:true,
            desc:'Adds tomato as a toast topping',
        },{
            name:'Onion Pizza',
            dish:['Onion Pizza'],
            list:1,
            customerMult:0.8,
            prereq:['Pizza'],
            mutex:[],
            wall:['Onions'],
            edit:true,
            desc:'Adds onion as a pizza topping',
        },{
            name:'Meat Pizza',
            dish:['Meat Pizza'],
            list:1,
            customerMult:0.8,
            prereq:['Pizza'],
            mutex:[],
            wall:['Meat'],
            edit:true,
            desc:'Adds meat as a pizza topping',
        },{
            name:'Vegetable Pies',
            dish:['Vegetable Pie'],
            list:1,
            customerMult:0.8,
            prereq:['Pies'],
            mutex:[],
            wall:['Broccoli','Potatoes'],
            edit:true,
            desc:'Pies containing broccoli and potatoes',
        },{
            name:'Affogato',
            dish:['Affogato'],
            list:1,
            customerMult:0.8,
            prereq:['Coffee'],
            mutex:[],
            wall:['Ice Cream'],
            edit:true,
            desc:'Adds ice cream as a coffee topping',
        },{
            name:'Stuffing',
            dish:['Stuffing'],
            list:0,
            customerMult:0.64,
            prereq:['Nut Roast'],
            mutex:[],
            wall:['Flour','Onions'],
            edit:true,
            desc:'Adds stuffing as a nut roast topping',
        },{
            name:'Mustard',
            dish:['Mustard'],
            list:1,
            customerMult:1,
            prereq:['Hot Dogs'],
            mutex:[],
            wall:['Mustard'],
            edit:true,
            desc:'Adds mustard as a hot dog condiment',
        },{
            name:'Cheese Hot Dogs',
            dish:['Cheese Hot Dog'],
            list:1,
            customerMult:0.8,
            prereq:['Hot Dogs'],
            mutex:[],
            wall:['Cheese'],
            edit:true,
            desc:'Adds cheese as a hot dog topping',
        },{
            name:'Bolognese Spaghetti',
            dish:['Bolognese Spaghetti'],
            list:1,
            customerMult:0.64,
            prereq:['Spaghetti'],
            mutex:[],
            wall:['Starter Hob','Meat'],
            edit:true,
            desc:'Spaghetti with meat-based sauce',
        },{
            name:'Cheese Spaghetti',
            dish:['Cheese Spaghetti'],
            list:1,
            customerMult:0.64,
            prereq:['Spaghetti'],
            mutex:[],
            wall:['Butter','Flour','Milk','Cheese'],
            edit:true,
            desc:'Spaghetti with cheese and white sauce',
        },{
            name:'Lasagne',
            dish:['Lasagne'],
            list:1,
            customerMult:0.64,
            prereq:['Bolognese Spaghetti','Cheese Spaghetti'],
            mutex:[],
            wall:['Pasta Sheet','Tray'],
            edit:true,
            desc:'Layers of pasta with bolognese and white sauce',
        },{
            name:'Ramen',
            dish:['Ramen'],
            list:1,
            customerMult:0.64,
            prereq:['Spaghetti'],
            mutex:[],
            wall:['Noodles','Onions','Bonito','Pots'],
            edit:true,
            desc:'Noodles served inside soup',
        },{
            name:'Butter Waffles',
            dish:['Butter Waffle'],
            list:1,
            customerMult:1,
            prereq:['Waffles'],
            mutex:[],
            wall:['Butter'],
            edit:true,
            desc:'Adds butter as a waffle topping',
        },{
            name:'Cherry Waffles',
            dish:['Cherry Waffle'],
            list:1,
            customerMult:1,
            prereq:['Waffles'],
            mutex:[],
            wall:['Cherries'],
            edit:true,
            desc:'Adds cherry sauce as a waffle topping',
        },{
            name:'Coffee Cake',
            dish:['Coffee Cake'],
            list:1,
            customerMult:0.8,
            prereq:['Cakes'],
            mutex:[],
            wall:['Coffee Machine'],
            edit:true,
            desc:'Adds coffee as a cake flavor',
        },{
            name:'Cherry Cake',
            dish:['Cherry Cake'],
            list:1,
            customerMult:0.8,
            prereq:['Cakes'],
            mutex:[],
            wall:['Cherries'],
            edit:true,
            desc:'Adds cherry as a cake flavor',
        },{
            name:'Lemon Cake',
            dish:['Lemon Cake'],
            list:1,
            customerMult:0.8,
            prereq:['Cakes'],
            mutex:[],
            wall:['Lemons'],
            edit:true,
            desc:'Adds lemon as a cake flavor',
        },{
            name:'Donuts',
            dish:['Donut'],
            list:1,
            customerMult:0.64,
            prereq:['Cakes'],
            mutex:[],
            wall:['Pots','Oil','Donut Tray'],
            edit:true,
            desc:'Makes 12 donuts that can be individually flavored',
        },{
            name:'Tiramisu',
            dish:['Tiramisu'],
            list:1,
            customerMult:0.8,
            prereq:['Cakes'],
            mutex:[],
            wall:['Cocoa Powder'],
            edit:true,
            desc:'Layers of cake, cream, and cocoa powder',
        },
        
        {
            name:'Meat Soup',
            dish:['Meat Soup'],
            list:2,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Pots','Meat','Onions'],
            edit:true,
            desc:'Adds meat soup as a starter',
        },{
            name:'Tomato Soup',
            dish:['Tomato Soup'],
            list:2,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Pots','Tomatoes','Onions'],
            edit:true,
            desc:'Adds tomato soup as a starter',
        },{
            name:'Broccoli Cheese Soup',
            dish:['Broccoli Cheese Soup'],
            list:2,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Pots','Broccoli','Cheese','Onions'],
            edit:true,
            desc:'Adds broccoli cheese soup as a starter',
        },{
            name:'Miso Soup',
            dish:['Miso Soup'],
            list:2,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Pots','Miso','Soybeans'],
            edit:true,
            desc:'Adds miso soup as a starter',
        },{
            name:'Bread',
            dish:['Bread'],
            list:2,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Flour','Oven'],
            edit:true,
            desc:'Adds bread as a starter',
        },{
            name:'Garlic Bread',
            dish:['Garlic Bread'],
            list:2,
            customerMult:0.64,
            prereq:[],
            mutex:[],
            wall:['Flour','Cheese','Garlic','Oven'],
            edit:true,
            desc:'Adds garlic bread as a starter',
        },{
            name:'Croissant',
            dish:['Croissant'],
            list:2,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Flour','Butter','Oven'],
            edit:true,
            desc:'Adds croissant as a starter',
        },{
            name:'Spring Rolls',
            dish:['Spring Roll'],
            list:2,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Flour','Lettuce','Onions'],
            edit:true,
            desc:'Adds spring rolls as a starter',
        },

        {
            name:'Broccoli',
            dish:['Broccoli'],
            list:3,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Pots','Broccoli'],
            edit:true,
            desc:'Adds broccoli as a side',
        },{
            name:'Mashed Potato',
            dish:['Mashed Potato'],
            list:3,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Pots','Potatoes'],
            edit:true,
            desc:'Adds mashed potato as a side',
        },{
            name:'Roast Potato',
            dish:['Roast Potato'],
            list:3,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Potatoes'],
            edit:true,
            desc:'Adds roast potato as a side',
        },{
            name:'Fries',
            dish:['Fries'],
            list:3,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Potatoes'],
            edit:true,
            desc:'Adds fries as a side',
        },{
            name:'Onion Rings',
            dish:['Onion Rings'],
            list:3,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Onions','Flour'],
            edit:true,
            desc:'Adds onion rings as a side',
        },{
            name:'Cheese Sticks',
            dish:['Cheese Sticks'],
            list:3,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Cheese','Flour'],
            edit:true,
            desc:'Adds cheese sticks as a side',
        },{
            name:'Macaroni and Cheese',
            dish:['Macaroni and Cheese'],
            list:3,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Pots','Macaroni','Cheese','Butter'],
            edit:true,
            desc:'Adds macaroni and cheese as a side',
        },{
            name:'Scrambled Eggs',
            dish:['Scrambled Eggs'],
            list:3,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Pots','Eggs'],
            edit:true,
            desc:'Adds scrambled eggs as a side',
        },

        {
            name:'Apple Pie',
            dish:['Apple Pie'],
            list:4,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Oven','Flour','Apples'],
            edit:true,
            desc:'Adds apple pie as a dessert',
        },{
            name:'Cherry Pie',
            dish:['Cherry Pie'],
            list:4,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Oven','Flour','Cherries'],
            edit:true,
            desc:'Adds cherry pie as a dessert',
        },{
            name:'Caramel Pie',
            dish:['Caramel Pie'],
            list:4,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Oven','Flour','Sugar'],
            edit:true,
            desc:'Adds caramel pie as a dessert',
        },{
            name:'Lemon Meringue Pie',
            dish:['Lemon Meringue Pie'],
            list:4,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Oven','Flour','Lemons','Eggs','Sugar'],
            edit:true,
            desc:'Adds lemon meringue pie as a dessert',
        },{
            name:'Apple Crisp',
            dish:['Apple Crisp'],
            list:4,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Oven','Flour','Sugar','Apples'],
            edit:true,
            desc:'Adds apple crisp as a dessert',
        },{
            name:'Cherry Cordial',
            dish:['Cherry Cordial'],
            list:4,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Oven','Chocolate','Cherries'],
            edit:true,
            desc:'Adds cherry cordial as a dessert',
        },{
            name:'Ice Cream',
            dish:['Ice Cream'],
            list:4,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Ice Cream'],
            edit:true,
            desc:'Adds ice cream as a dessert',
        },{
            name:'Zeppole',
            dish:['Zeppole'],
            list:4,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Oven','Flour','Sugar'],
            edit:true,
            desc:'Adds zeppole as a dessert',
        },
        
        {
            name:'Individuals',
            list:5,
            customerMult:1.25,
            prereq:[],
            mutex:['Large Groups'],
            wall:[''],
            edit:true,
            desc:'Customers come on their own',
        },{
            name:'Large Groups',
            list:5,
            customerMult:1.25,
            prereq:[],
            mutex:['Individuals'],
            wall:[''],
            edit:true,
            desc:'Groups can be twice as big',
        },{
            name:'Advertising',
            list:5,
            customerMult:1.25,
            prereq:[],
            mutex:[],
            wall:[''],
            edit:true,
            desc:'More customers will appear',
        },{
            name:'Morning Rush',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            edit:true,
            desc:'More customers at the start of day',
        },{
            name:'Lunch Rush',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            edit:true,
            desc:'More customers at the middle of day',
        },{
            name:'Dinner Rush',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            edit:true,
            desc:'More customers at the end of day',
        },{
            name:'Herd Mentality',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            edit:true,
            desc:'Groups of customers come in waves',
        },{
            name:'Open Late',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            edit:true,
            desc:'Customers can arrive after closing time',
        },{
            name:'Double Helpings',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            edit:true,
            desc:'Customers may order an extra course',
        },{
            name:'Discount',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            edit:true,
            desc:'Reduce all prices above 1 by 1',
        },{
            name:'Slow Worker',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            edit:true,
            desc:'All processes 20% slower',
        },{
            name:'Leisurely Eating',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            edit:true,
            desc:'Customers eat for more time',
        },{
            name:'Picky Eating',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            edit:true,
            desc:'Customers can leave food for you to throw away',
        },{
            name:'No Tips',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            edit:true,
            desc:`Customers don't tip for fast service`,
        },{
            name:'Changing Orders',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            edit:true,
            desc:'Customers sometimes change their orders',
        },{
            name:'Violence',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            edit:true,
            desc:'Customers randomly punch in front of them',
        },
    ],cosmetic:{
        color:[
            {
                eye:{back:[0,0,0]},
                beak:{main:[255,140,25],mouth:[0,0,0],nostril:[0,0,0]},
                skin:{head:[160,165,190],body:[150,155,180],legs:[140,145,170],arms:[145,150,175]}
            },{
                eye:{back:[0,0,0]},
                beak:{main:[255,140,25],mouth:[0,0,0],nostril:[0,0,0]},
                skin:{head:[255,235,25],body:[255,225,15],legs:[255,210,0],arms:[255,215,5]}
            },{
                eye:{back:[0,0,0]},
                beak:{main:[255,140,25],mouth:[0,0,0],nostril:[0,0,0]},
                skin:{head:[25,85,255],body:[15,75,255],legs:[0,60,255],arms:[5,65,255]}
            },{
                eye:{back:[0,0,0]},
                beak:{main:[255,140,25],mouth:[0,0,0],nostril:[0,0,0]},
                skin:{head:[245,0,25],body:[235,5,15],legs:[230,15,20],arms:[225,10,5]}
            },{
                eye:{back:[0,0,0]},
                beak:{main:[255,140,25],mouth:[0,0,0],nostril:[0,0,0]},
                skin:{head:[55,235,25],body:[55,225,15],legs:[55,210,0],arms:[55,215,5]}
            },{
                eye:{back:[0,0,0]},
                beak:{main:[255,140,25],mouth:[0,0,0],nostril:[0,0,0]},
                skin:{head:[235,105,25],body:[225,105,15],legs:[210,105,0],arms:[215,105,5]}
            },{
                eye:{back:[0,0,0]},
                beak:{main:[255,140,25],mouth:[0,0,0],nostril:[0,0,0]},
                skin:{head:[235,25,255],body:[225,15,255],legs:[210,0,255],arms:[215,5,255]}
            },{
                eye:{back:[0,0,0]},
                beak:{main:[255,140,25],mouth:[0,0,0],nostril:[0,0,0]},
                skin:{head:[],body:[],legs:[],arms:[]}
            },{
                eye:{back:[0,0,0]},
                beak:{main:[255,140,25],mouth:[0,0,0],nostril:[0,0,0]},
                skin:{head:[],body:[],legs:[],arms:[]}
            },
        ],
    },
}