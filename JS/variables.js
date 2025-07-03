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
    ],
}
types={
    level:[
        {
            map:[
                ` _ _ _ _ _ _ _ _ `,
                `|       |       |`,
                `                 `,
                `|       [       |`,
                `                 `,
                `|       |       |`,
                ` _ ] _ _         `,
                `|     i. .      |`,
                `                 `,
                `|     i. .      |`,
                `       - - _ ] _ `,
                `|               |`,
                `                 `,
                `|       1       |`,
                `                 `,
                `|               |`,
                ` _ _ _ _ _ _ _ _ `,
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
            desc:'',
            upgrade:[],
        },
        
        {
            name:'High Wall',
            width:6,
            height:6,
            effect:[-1,0],
            spec:[],
            desc:'Blocks you',
            upgrade:[],
        },{
            name:'Wall',
            width:6,
            height:6,
            effect:[-1,0],
            spec:[],
            desc:'Blocks you but not your hands',
            upgrade:[],
        },
        
        {
            name:'Counter',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            desc:'Holds anything',
            upgrade:['Freezer','Cutting Board','Rolling Board','Climb Counter'],
        },{
            name:'Freezer',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            desc:'Holds anything and keeps it overnight',
            upgrade:['Cutting Board','Rolling Board','Climb Counter'],
        },{
            name:'Cutting Board',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            desc:'Cut things 3x faster here',
            upgrade:['Freezer','Rolling Board','Climb Counter'],
        },{
            name:'Rolling Board',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            desc:'Roll things 3x faster here',
            upgrade:['Freezer','Cutting Board','Climb Counter'],
        },{
            name:'Climb Counter',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            desc:'Can be jumped over while empty',
            upgrade:['Freezer','Cutting Board','Rolling Board'],
        },{
            name:'Prep Station',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            desc:'Holds 4 identical pieces of food',
            upgrade:[],
        },{
            name:'Frozen Prep Station',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            desc:'Holds 4 identical pieces of food and keeps them overnight',
            upgrade:['Stack Station'],
        },{
            name:'Stack Station',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            desc:'Holds 4 pieces of food in a pile',
            upgrade:['Frozen Prep Station'],
        },
        
        {
            name:'Starter Sink',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[1],
            desc:'Wash plates and get water, but slowly',
            upgrade:['Sink'],
        },{
            name:'Sink',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[1],
            desc:'Wash plates and get water',
            upgrade:['Soaking Sink','Power Sink'],
        },{
            name:'Soaking Sink',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[1],
            desc:'Wash plates automatically and get water',
            upgrade:['Power Sink','Wash Basin'],
        },{
            name:'Wash Basin',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[1],
            desc:'Wash 4 plates at a time and get water',
            upgrade:['Soaking Sink','Power Sink'],
        },{
            name:'Power Sink',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[1],
            desc:'Wash plates quickly and get water',
            upgrade:['Soaking Sink','Wash Basin'],
        },{
            name:'Dish Rack',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            desc:'Holds 4 plates at a time',
            upgrade:[],
        },

        {
            name:'Starter Hob',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[0],
            desc:'Cook things, but slowly',
            upgrade:['Hob'],
        },{
            name:'Hob',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[0],
            desc:'Cook things',
            upgrade:['Safe Hob','Fast Hob','Manual Hob'],
        },{
            name:'Safe Hob',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[0],
            desc:'Cooks things slowly but never burns',
            upgrade:['Fast Hob','Manual Hob'],
        },{
            name:'Fast Hob',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[0],
            desc:'Cooks things fast',
            upgrade:['Safe Hob','Manual Hob'],
        },{
            name:'Fast Hob',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[0],
            desc:'Cooks things very fast, but manually',
            upgrade:['Safe Hob','Fast Hob'],
        },{
            name:'Oven',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[0],
            desc:'Cooks things fast, but the inside is invisible',
            upgrade:['Microwave'],
        },{
            name:'Microwave',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[0],
            desc:'Cooks everything in the same amount of time',
            upgrade:[''],
        },{
            name:'Waffle Iron',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            desc:'Makes waffles',
            upgrade:[''],
        },

        {
            name:'Starter Plates',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            desc:'Holds 4 plates',
            upgrade:['Plates'],
        },{
            name:'Plates',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            desc:'Holds 8 plates',
            upgrade:[],
        },{
            name:'Pots',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[],
            desc:'Holds 3 pots',
            upgrade:[],
        },

        {
            name:'Starter Trash Bin',
            width:20,
            height:20,
            effect:[-1,0],
            spec:[],
            desc:'Turns up to 3 things into a trash bag',
            upgrade:['Trash Bin'],
        },{
            name:'Trash Bin',
            width:24,
            height:24,
            effect:[-1,0],
            spec:[],
            desc:'Turns up to 5 things into a trash bag',
            upgrade:['Large Trash Bin','Composter Bin'],
        },{
            name:'Large Trash Bin',
            width:30,
            height:30,
            effect:[-1,0],
            spec:[],
            desc:'Turns up to 10 things into a trash bag',
            upgrade:['Composter Bin'],
        },{
            name:'Composter Bin',
            width:24,
            height:24,
            effect:[-1,0],
            spec:[],
            desc:'Turns up to 5 things into a trash bag that can be burnt',
            upgrade:['Large Trash Bin'],
        },

        {
            name:'Onions',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Onion'],
            desc:'Provides Onion',
            upgrade:[],
        },{
            name:'Meat',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Meat'],
            desc:'Provides Meat',
            upgrade:[],
        },{
            name:'Tomatoes',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Tomato'],
            desc:'Provides Tomatoes',
            upgrade:[],
        },{
            name:'Brocooli',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Brocooli'],
            desc:'Provides Brocooli',
            upgrade:[],
        },{
            name:'Cheese',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Cheese'],
            desc:'Provides Cheese',
            upgrade:[],
        },{
            name:'Flour',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Flour'],
            desc:'Provides Flour',
            upgrade:[],
        },{
            name:'Butter',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Butter'],
            desc:'Provides Butter',
            upgrade:[],
        },{
            name:'Garlic',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Garlic'],
            desc:'Provides Garlic',
            upgrade:[],
        },{
            name:'Soybeans',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Soybeans'],
            desc:'Provides Soybeans',
            upgrade:[],
        },{
            name:'Miso',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Miso'],
            desc:'Provides Miso',
            upgrade:[],
        },{
            name:'Lettuce',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Lettuce'],
            desc:'Provides Lettuce',
            upgrade:[],
        },{
            name:'Potato',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Potato'],
            desc:'Provides Potato',
            upgrade:[],
        },{
            name:'Macaroni',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Macaroni'],
            desc:'Provides Macaroni',
            upgrade:[],
        },{
            name:'Eggs',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Eggs'],
            desc:'Provides Eggs',
            upgrade:[],
        },{
            name:'Apples',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Apples'],
            desc:'Provides Apples',
            upgrade:[],
        },{
            name:'Cherries',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Cherries'],
            desc:'Provides Cherries',
            upgrade:[],
        },{
            name:'Sugar',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Sugar'],
            desc:'Provides Sugar',
            upgrade:[],
        },{
            name:'Lemons',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Lemon'],
            desc:'Provides Lemons',
            upgrade:[],
        },{
            name:'Chocolate',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Chocolate'],
            desc:'Provides Chocolate',
            upgrade:[],
        },{
            name:'Ice Cream',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Ice Cream C'],
            desc:'Provides Ice Cream',
            upgrade:[],
        },{
            name:'Fish',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Raw Fish'],
            desc:'Provides Fish',
            upgrade:[],
        },{
            name:'Fish Fillet',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Raw Fish Fillet'],
            desc:'Provides Fish Fillet',
            upgrade:[],
        },{
            name:'Spiny Fish',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Raw Spiny Fish'],
            desc:'Provides Spiny Fish',
            upgrade:[],
        },{
            name:'Crab',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Crab'],
            desc:'Provides Crab',
            upgrade:[],
        },{
            name:'Bone Meat',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Bone Meat'],
            desc:'Provides Bone Meat',
            upgrade:[],
        },{
            name:'Thick Meat',
            width:48,
            height:48,
            effect:[-1,0],
            spec:[2],provide:['Thick Meat'],
            desc:'Provides Thick Meat',
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
            name:'Pot',
            process:[
                [5,'Water','Water Pot'],
                [0,'Onion','Onion in Pot'],
                [0,'Soybean','Soybean in Pot'],
                [0,'Broccoli','Broccoli in Pot'],
                [0,'Potato','Potato in Pot'],
                [0,'Macaroni','Macaroni in Pot'],
                [0,'Mixed Egg','Raw Mixed Egg'],
            ],
        },{
            name:'Water Pot',
            process:[
                [0,'Onion','Raw Broth'],
                [0,'Soybean','Raw Soybean Broth'],
                [0,'Broccoli','Raw Broccoli'],
                [0,'Potato','Raw Potato'],
                [0,'Macaroni','Raw Macaroni'],
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
            process:[],
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
            process:[],
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
                [0,'Chopped Onions','Onion Dough'],
                [0,'Sugar','Sugar Dough'],
            ],
        },{
            name:'Bread',
            portions:4,
            process:[
                [6,60,'Bread Slice',''],
                [1,1200,'Burnt'],
            ],
        },{
            name:'Bread Slice',
            process:[
                [0,'Chopped Garlic','Raw Garlic Bread'],
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
            process:[],
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
            process:[],
        },{
            name:'Chopped Onion',
            process:[],
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
            portions:4,
            process:[
                [1,90,'Spring Rolls'],
            ],
        },{
            name:'Spring Rolls',
            portions:4,
            process:[
                [6,30,'Spring Roll',''],
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
                [0,'Water','Cooked Macaroni in Pot'],
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
            ],
        },{
            name:'Cherry',
            process:[],
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
            ],
        },{
            name:'Pastry',
            process:[
                [1,300,'Burnt'],
                [0,'Chopped Apple','Raw Apple Pie'],
                [0,'Cherry','Raw Cherry Pie'],
                [0,'Caramel','Raw Caramel Pie'],
                [0,'Lemon Meringue','Raw Lemon Meringue'],
            ],
        },{
            name:'Raw Apple Pie',
            process:[
                [1,180,'Apple Pie'],
            ],
        },{
            name:'Apple Pie',
            portions:4,
            process:[
                [6,60,'Apple Pie Slice'],
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
            portions:4,
            process:[
                [6,60,'Cherry Pie Slice'],
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
            portions:4,
            process:[
                [6,60,'Caramel Pie Slice'],
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
                [0,'Sugar','Unmixed Lemon Meringue']
            ],
        },{
            name:'Cracked Egg With Sugar',
            process:[
                [0,'Chopped Lemon','Unmixed Lemon Meringue']
            ],
        },{
            name:'Chopped Lemon With Sugar',
            process:[
                [0,'Cracked Egg','Unmixed Lemon Meringue']
            ],
        },{
            name:'Unmixed Lemon Meringue',
            process:[
                [3,60,'Lemon Meringue']
            ],
        },{
            name:'Lemon Meringue',
            process:[],
        },{
            name:'Raw Lemon Meringue Pie',
            process:[
                [1,300,'Lemon Meringue Pie'],
            ],
        },{
            name:'Lemon Meringue Pie',
            portions:4,
            process:[
                [6,60,'Lemon Meringue Pie Slice'],
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
            ],
        },{
            name:'Raw Apple Crisp',
            process:[
                [1,180,'Apple Crisp']
            ],
        },{
            name:'Apple Crisp',
            process:[
                [1,240,'Burnt'],
            ],
        },{
            name:'Chocolate',
            process:[
                [1,120,'Melted Chocolate']
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
                [0,'Plate','Plated Steak'],
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
                [0,'Plate','Plated Bone Steak'],
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
                [0,'Plate','Plated Thick Steak'],
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
        },
    ],dish:[
        /*
        0-main
        1-starter
        2-side
        3-dessert
        */
        {
            name:'Fish',
            type:0,
            obj:[
                ['Plated Fish',4],
            ],
            desc:'Cook fish and serve.',
        },{
            name:'Fish Fillet',
            type:0,
            obj:[
                ['Plated Fish Fillet',5],
            ],
            desc:'Chop fish to create fillet.\nCook fillet and serve.',
        },{
            name:'Spiny Fish',
            type:0,
            obj:[
                ['Plated Spiny Fish',5],
            ],
            desc:'Removed spines from fish and discard.\nCook fish and serve.',
        },{
            name:'Crab Cake',
            type:0,
            obj:[
                ['Plated Crab Cake',6],
            ],
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
            desc:'Cook meat to desired level and serve.',
        },{
            name:'Bone Steak',
            type:0,
            obj:[
                ['Plated Rare Bone Steak',4],
                ['Plated Medium Bone Steak',4],
                ['Plated Well Done Bone Steak',4],
            ],
            desc:'Cook meat to desired level and serve.\nLeaves a bone on the plate afterward.',
        },{
            name:'Thick Steak',
            type:0,
            obj:[
                ['Plated Rare Thick Steak',5],
                ['Plated Medium Thick Steak',5],
                ['Plated Well Done Thick Steak',5],
            ],
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
            desc:'Cook meat to desired level and serve.',
        },
        
        {
            name:'Meat Soup',
            type:1,
            obj:[
                ['Meat Soup',2],
            ],
            desc:'Boil water with onion to make broth.\nAdd meat to broth and cook again.\nPortion and serve.',
        },{
            name:'Tomato Soup',
            type:1,
            obj:[
                ['Tomato Soup',2],
            ],
            desc:'Boil water with onion to make broth.\nCut tomato two times to make tomato sauce.\nAdd tomato and tomato sauce to broth and cook again.\nPortion and serve.',
        },{
            name:'Broccoli Cheese Soup',
            type:1,
            obj:[
                ['Broccoli Cheese Soup',2],
            ],
            desc:'Boil water with onion to make broth.\nAdd broccoli and cheese to broth and cook again.\nPortion and serve.',
        },{
            name:'Miso Soup',
            type:1,
            obj:[
                ['Miso Soup',3],
            ],
            desc:'Boil water with soybeans, then cut to make tofu.\nAdd water again and miso and cook again.\nPortion and serve.',
        },{
            name:'Bread',
            type:1,
            obj:[
                ['Bread Slice',1],
            ],
            desc:'Add water to flour to make dough.\nCook dough to make bread.\nPortion and serve.',
        },{
            name:'Garlic Bread',
            type:1,
            obj:[
                ['Garlic Bread Slice',2],
            ],
            desc:'Add water to flour to make dough.\nCook dough to make bread.\nPortion and add Chopped garlic.\nCook again and serve.',
        },{
            name:'Croisant',
            type:1,
            obj:[
                ['Croisant',2],
            ],
            desc:'Add water to flour to make dough.\nAdd butter and knead to make a croissant.\nCook and serve.',
        },{
            name:'Spring Roll',
            type:1,
            obj:[
                ['Spring Roll',2],
            ],
            desc:'Add water to flour to make dough.\nAdd chopped lettuce and onions.\nKnead into rolls and cook.\nPortions and serve.',
        },

        {
            name:'Broccoli',
            type:2,
            obj:[
                ['Broccoli Portion',1],
            ],
            desc:'Boil water with broccoli.\nPortion and serve.',
        },{
            name:'Mashed Potato',
            type:2,
            obj:[
                ['Mashed Potato',2],
            ],
            desc:'Boil water with potato.\nMash when complete.\nPortion and serve.',
        },{
            name:'Roast Potato',
            type:2,
            obj:[
                ['Roast Potato',1],
            ],
            desc:'Cook potato and serve.',
        },{
            name:'Fries',
            type:2,
            obj:[
                ['Fries',2],
            ],
            desc:'Chop potato, then cook and serve.',
        },{
            name:'Onion Rings',
            type:2,
            obj:[
                ['Onion Rings',2],
            ],
            desc:'Chop onions, add flour, then cook and serve.',
        },{
            name:'Cheese Sticks',
            type:2,
            obj:[
                ['Cheese Sticks',3],
            ],
            desc:'Chop cheese, add flour and cook.\nChop tomato twice to make sauce.\nCombine sticks and sauce and serve.',
        },{
            name:'Macaroni and Cheese',
            type:2,
            obj:[
                ['Macaroni and Cheese',2],
            ],
            desc:'Boil water with macaroni.\nRemove water and add Chopped cheese and butter.\nPortion and serve.',
        },{
            name:'Scrambled Eggs',
            type:2,
            obj:[
                ['Scrambled Eggs',1],
            ],
            desc:'Crack egg, then mix it.\nPlace in pot and cook.\nPortion and serve.',
        },

        {
            name:'Apple Pie',
            type:3,
            obj:[
                ['Apple Pie Slice',2],
            ],
            desc:'Add water to flour to make dough.\nKnead dough to make crust and cook to make pastry.\nAdd chopped apple to pastry and cook again.\nPortion and Serve.',
        },{
            name:'Cherry Pie',
            type:3,
            obj:[
                ['Cherry Pie Slice',2],
            ],
            desc:'Add water to flour to make dough.\nKnead dough to make crust and cook to make pastry.\nAdd cherry to pastry and cook again.\nPortion and Serve.',
        },{
            name:'Caramel Pie',
            type:3,
            obj:[
                ['Caramel Pie Slice',2],
            ],
            desc:'Add water to flour to make dough.\nKnead dough to make crust and cook to make pastry.\nCook sugar to make caramel.\nAdd caramel to pastry and cook again.\nPortion and Serve.',
        },{
            name:'Lemon Meringue Pie',
            type:3,
            obj:[
                ['Lemon Meringue Pie Slice',3],
            ],
            desc:'Add water to flour to make dough.\nKnead dough to make crust and cook to make pastry.\nCombine chopped lemon, sugar, and cracked egg, and mix to create meringue.\nAdd meringue to pastry and cook again.\nPortion and Serve.',
        },{
            name:'Apple Crisp',
            type:3,
            obj:[
                ['Apple Crisp',2],
            ],
            desc:'Combine chopped apple, sugar and flour.\nCook and serve.',
        },{
            name:'Cherry Cordial',
            type:3,
            obj:[
                ['Cherry Cordial',2],
            ],
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
            desc:'Switch between flavors and grab scoops, then serve.',
        },{
            name:'Zeppole',
            type:3,
            obj:[
                ['Zeppole',2],
            ],
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
            desc:'',
        },
        
        {
            name:'Fish',
            list:0,
            customerMult:1.25,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Starter Hob','Fish'],
            desc:'Adds fish as a main dish',
        },{
            name:'Steak',
            list:0,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Starter Hob','Meat'],
            desc:'Adds three types of steak as a main dish',
        },{
            name:'Salad',
            list:0,
            customerMult:1.25,
            prereq:[],
            mutex:[],
            wall:['Lettuce','Tomato'],
            desc:'Adds salads, with or without tomato, as a main dish',
        },{
            name:'Toast',
            list:0,
            customerMult:1.25,
            prereq:[],
            mutex:[],
            wall:['Flour','Oven'],
            desc:'Adds toast as a main dish',
        },{
            name:'Pizza',
            list:0,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:['Cheese','Tomato','Flour','Oil','Oven'],
            desc:'Adds pizza as a main dish',
        },{
            name:'Pies',
            list:0,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:['Flour','Meat','Oven'],
            desc:'Adds meat pie as a main dish',
        },{
            name:'Coffee',
            list:0,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Coffee Machine'],
            desc:'Adds coffee as a dessert',
        },{
            name:'Nut Roast',
            list:0,
            customerMult:1.2,
            prereq:[],
            mutex:[],
            wall:['Nuts','Onions','Oven'],
            desc:'',
        },{
            name:'Hot Dogs',
            list:0,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Starter Hob','Spaghetti','Hot Dogs','Ketchup'],
            desc:'',
        },{
            name:'Spaghetti',
            list:0,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Starter Hob','Tomato','Spaghetti','Pot Stack'],
            desc:'',
        },{
            name:'Waffles',
            list:0,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:['Waffle Iron','Sugar','Flour','Eggs','Milk'],
            desc:'',
        },{
            name:'Cakes',
            list:0,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:['Sugar','Flour','Eggs','Milk','Chocolate','Tray','Oven'],
            desc:'Adds cakes as a dessert',
        },

        {
            name:'Fish Fillet',
            list:1,
            customerMult:0.8,
            prereq:['Fish'],
            mutex:[],
            wall:['Fish Fillet'],
            desc:'Needs to be cut before cooking',
        },{
            name:'Spiny Fish',
            list:1,
            customerMult:0.8,
            prereq:['Fish'],
            mutex:[],
            wall:['Spiny Fish'],
            desc:'Contains spines, that must be removed and trashed',
        },{
            name:'Crab Cakes',
            list:1,
            customerMult:0.64,
            prereq:['Fish'],
            mutex:[],
            wall:['Crab','Eggs','Flour'],
            desc:'Combine chopped crab, egg, and flour',
        },{
            name:'Bone Steak',
            list:1,
            customerMult:0.8,
            prereq:['Steak'],
            mutex:[],
            wall:['Bone Meat'],
            desc:'Contains a bone that must be trashed afterward',
        },{
            name:'Thick Steak',
            list:1,
            customerMult:0.8,
            prereq:['Steak'],
            mutex:[],
            wall:['Thick Meat'],
            desc:'Takes longer to cook than regular meat',
        },{
            name:'Tomato Steak',
            list:1,
            customerMult:0.8,
            prereq:['Steak'],
            mutex:[],
            wall:['Tomato'],
            desc:'Adds tomato as a steak topping',
        },{
            name:'Apple Salad',
            list:1,
            customerMult:0.64,
            prereq:['Salad'],
            mutex:[],
            wall:['Apples','Eggs','Oil','Nuts'],
            desc:'Consists of chopped apple, nuts, and mayo',
        },{
            name:'Potato Salad',
            list:1,
            customerMult:0.64,
            prereq:['Salad'],
            mutex:[],
            wall:['Starter Hob','Potatoes','Pot Stack','Eggs','Oil','Onions'],
            desc:'Consists of boiled potatoes, chopped onion, and mayo',
        },{
            name:'Onion Salad',
            list:1,
            customerMult:1,
            prereq:['Salad'],
            mutex:[],
            wall:['Onions'],
            desc:'Adds onions as a salad topping',
        },{
            name:'Crouton Salad',
            list:1,
            customerMult:1,
            prereq:['Salad'],
            mutex:[],
            wall:['Oven','Flour'],
            desc:'Adds croutons as a salad topping',
        },{
            name:'Egg Toast',
            list:1,
            customerMult:0.8,
            prereq:['Toast'],
            mutex:[],
            wall:['Starter Hob','Eggs'],
            desc:'Adds egg as a toast topping',
        },{
            name:'Tomato Toast',
            list:1,
            customerMult:1,
            prereq:['Toast'],
            mutex:[],
            wall:['Tomatoes'],
            desc:'Adds tomato as a toast topping',
        },{
            name:'Onion Pizza',
            list:1,
            customerMult:0.8,
            prereq:['Pizza'],
            mutex:[],
            wall:['Onions'],
            desc:'Adds onion as a pizza topping',
        },{
            name:'Meat Pizza',
            list:1,
            customerMult:0.8,
            prereq:['Pizza'],
            mutex:[],
            wall:['Meat'],
            desc:'Adds meat as a pizza topping',
        },{
            name:'Vegetable Pies',
            list:1,
            customerMult:0.8,
            prereq:['Pies'],
            mutex:[],
            wall:['Broccoli','Potatoes'],
            desc:'Pies containing broccoli and potatoes',
        },{
            name:'Affogato',
            list:1,
            customerMult:0.8,
            prereq:['Coffee'],
            mutex:[],
            wall:['Ice Cream'],
            desc:'Adds ice cream as a coffee topping',
        },{
            name:'Stuffing',
            list:0,
            customerMult:0.64,
            prereq:['Nut Roast'],
            mutex:[],
            wall:['Flour','Onions'],
            desc:'Adds stuffing as a nut roast topping',
        },{
            name:'Mustard',
            list:1,
            customerMult:1,
            prereq:['Hot Dogs'],
            mutex:[],
            wall:['Mustard'],
            desc:'Adds mustard as a hot dog condiment',
        },{
            name:'Cheese Hot Dogs',
            list:1,
            customerMult:0.8,
            prereq:['Hot Dogs'],
            mutex:[],
            wall:['Cheese'],
            desc:'Adds cheese as a hot dog topping',
        },{
            name:'Bolognese Spaghetti',
            list:1,
            customerMult:0.64,
            prereq:['Spaghetti'],
            mutex:[],
            wall:['Starter Hob','Meat'],
            desc:'Spaghetti with meat-based sauce',
        },{
            name:'Cheesy Spaghetti',
            list:1,
            customerMult:0.64,
            prereq:['Spaghetti'],
            mutex:[],
            wall:['Butter','Flour','Milk','Cheese'],
            desc:'Spaghetti with cheese and white sauce',
        },{
            name:'Ramen',
            list:1,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:['Spaghetti','Onion','Bonito','Pot Stack'],
            desc:'Noodles served inside soup',
        },{
            name:'Lasagne',
            list:1,
            customerMult:0.64,
            prereq:['Bolognese Spaghetti','Cheesy Spaghetti'],
            mutex:[],
            wall:['Lasagne','Tray'],
            desc:'Layers of pasta with bolognese and white sauce',
        },{
            name:'Butter Waffles',
            list:1,
            customerMult:1,
            prereq:['Waffles'],
            mutex:[],
            wall:['Butter'],
            desc:'Adds butter as a waffle topping',
        },{
            name:'Cherry Waffles',
            list:1,
            customerMult:1,
            prereq:['Waffles'],
            mutex:[],
            wall:['Cherries'],
            desc:'Adds cherry sauce as a waffle topping',
        },{
            name:'Coffee Cake',
            list:1,
            customerMult:0.8,
            prereq:['Cake'],
            mutex:[],
            wall:['Coffee Machine'],
            desc:'Adds coffee as a cake flavor',
        },{
            name:'Cherry Cake',
            list:1,
            customerMult:0.8,
            prereq:['Cake'],
            mutex:[],
            wall:['Cherries'],
            desc:'Adds cherry as a cake flavor',
        },{
            name:'Lemon Cake',
            list:1,
            customerMult:0.8,
            prereq:['Cake'],
            mutex:[],
            wall:['Lemons'],
            desc:'Adds lemon as a cake flavor',
        },{
            name:'Donuts',
            list:1,
            customerMult:0.64,
            prereq:['Cake'],
            mutex:[],
            wall:['Pot Stack','Oil','Donut Tray'],
            desc:'Makes 12 donuts that can be individually flavored',
        },{
            name:'Tiramisu',
            list:1,
            customerMult:0.8,
            prereq:['Coffee Cake'],
            mutex:[],
            wall:['Cocoa Powder'],
            desc:'Layers of cake, cream, and cocoa powder',
        },
        
        {
            name:'Meat Soup',
            list:2,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Pot Stack','Meat','Onions'],
            desc:'Adds meat soup as a starter',
        },{
            name:'Tomato Soup',
            list:2,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Pot Stack','Tomatoes','Onions'],
            desc:'Adds tomato soup as a starter',
        },{
            name:'Broccoli Cheese Soup',
            list:2,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Pot Stack','Broccoli','Cheese','Onions'],
            desc:'Adds broccoli cheese soup as a starter',
        },{
            name:'Miso Soup',
            list:2,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Pot Stack','Miso','Soybeans'],
            desc:'Adds miso soup as a starter',
        },{
            name:'Bread',
            list:2,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Flour','Oven'],
            desc:'Adds bread as a starter',
        },{
            name:'Garlic Bread',
            list:2,
            customerMult:0.64,
            prereq:[],
            mutex:[],
            wall:['Flour','Cheese','Garlic','Oven'],
            desc:'Adds garlic bread as a starter',
        },{
            name:'Croissant',
            list:2,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Flour','Butter','Oven'],
            desc:'Adds croissant as a starter',
        },{
            name:'Spring Rolls',
            list:2,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Flour','Lettuce','Onions'],
            desc:'Adds spring rolls as a starter',
        },

        {
            name:'Broccoli',
            list:3,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Pot Stack','Broccoli'],
            desc:'Adds broccoli as a side',
        },{
            name:'Mashed Potato',
            list:3,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Pot Stack','Potatoes'],
            desc:'Adds mashed potato as a side',
        },{
            name:'Roast Potato',
            list:3,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Potatoes'],
            desc:'Adds roast potato as a side',
        },{
            name:'Fries',
            list:3,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Potatoes'],
            desc:'Adds fries as a side',
        },{
            name:'Onion Rings',
            list:3,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Onions','Flour'],
            desc:'Adds onion rings as a side',
        },{
            name:'Cheese Sticks',
            list:3,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Cheese','Flour'],
            desc:'Adds cheese sticks as a side',
        },{
            name:'Macaroni and Cheese',
            list:3,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Pot Stack','Macaroni','Cheese','Butter'],
            desc:'Adds macaroni and cheese as a side',
        },{
            name:'Scrambled Eggs',
            list:3,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Starter Hob','Pot Stack','Eggs'],
            desc:'Adds scrambled eggs as a side',
        },

        {
            name:'Apple Pie',
            list:4,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Oven','Flour','Apples'],
            desc:'Adds apple pie as a dessert',
        },{
            name:'Cherry Pie',
            list:4,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Oven','Flour','Cherries'],
            desc:'Adds cherry pie as a dessert',
        },{
            name:'Caramel Pie',
            list:4,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Oven','Flour','Sugar'],
            desc:'Adds caramel pie as a dessert',
        },{
            name:'Lemon Meringue Pie',
            list:4,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Oven','Flour','Lemon','Eggs','Sugar'],
            desc:'Adds lemon meringue pie as a dessert',
        },{
            name:'Apple Crisp',
            list:4,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Oven','Flour','Sugar','Apples'],
            desc:'Adds apple crisp as a dessert',
        },{
            name:'Cherry Cordial',
            list:4,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Oven','Chocolate','Cherries'],
            desc:'Adds cherry cordial as a dessert',
        },{
            name:'Ice Cream',
            list:4,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Ice Cream'],
            desc:'Adds ice cream as a dessert',
        },{
            name:'Zeppole',
            list:4,
            customerMult:0.8,
            prereq:[],
            mutex:[],
            wall:['Oven','Flour','Sugar'],
            desc:'Adds zeppole as a dessert',
        },
        
        {
            name:'Individuals',
            list:5,
            customerMult:1.25,
            prereq:[],
            mutex:['Medium Groups'],
            wall:[''],
            desc:'Customers come on their own',
        },{
            name:'Large Groups',
            list:5,
            customerMult:1.25,
            prereq:[],
            mutex:['Individuals'],
            wall:[''],
            desc:'Groups can be twice as big',
        },{
            name:'Advertising',
            list:5,
            customerMult:1.25,
            prereq:[],
            mutex:[],
            wall:[''],
            desc:'More customers will appear',
        },{
            name:'Morning Rush',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            desc:'More customers at the start of day',
        },{
            name:'Lunch Rush',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            desc:'More customers at the middle of day',
        },{
            name:'Dinner Rush',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            desc:'More customers at the end of day',
        },{
            name:'Herd Mentality',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            desc:'Groups of customers come in waves',
        },{
            name:'Open Late',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            desc:'Customers can arrive after closing time',
        },{
            name:'Double Helpings',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            desc:'Customers may order an extra course',
        },{
            name:'Discount',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            desc:'Reduce all prices above 1 by 1',
        },{
            name:'Slow Worker',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            desc:'All processes 20% slower',
        },{
            name:'Leisurely Eating',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            desc:'Customers eat for more time',
        },{
            name:'Picky Eating',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            desc:'Customers can leave food for you to throw away',
        },{
            name:'No Tips',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            desc:`Customers don't tip for fast service`,
        },{
            name:'Changing Orders',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            desc:'Customers sometimes change their orders',
        },{
            name:'Splash Zone',
            list:5,
            customerMult:1,
            prereq:[],
            mutex:[],
            wall:[''],
            desc:'Customers create a wider mess',
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