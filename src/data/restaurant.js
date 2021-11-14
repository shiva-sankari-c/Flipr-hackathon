let restaurants = [{
        id: 1,
        name: "Restaurant1",
        address: "Address1",
        timing: "8am-11pm",
        imageurl: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        menu: [{
                itemid: 1,
                item: "item1",
                rating: "4",
                price: "Rs.450"
            },
            {
                itemid: 2,
                item: "item2",
                rating: "4",
                price: "Rs.470"
            }
        ]
    },
    {
        id: 2,
        name: "Restaurant2",
        address: "Address2",
        timing: "9am-11pm",
        imageurl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        menu: [{
                itemid: 1,
                item: "item3",
                rating: "4",
                price: "Rs.450"
            },
            {
                itemid: 2,
                item: "item4",
                rating: "4",
                price: "Rs.470"
            }
        ]
    },
    {
        id: 3,
        name: "Restaurant3",
        address: "Address3",
        timing: "9am-11pm",
        imageurl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        menu: [{
                itemid: 1,
                item: "item5",
                rating: "4",
                price: "Rs.450"
            },
            {
                itemid: 2,
                item: "item6",
                rating: "4",
                price: "Rs.470"
            }
        ]
    }
];

export function getRestaurants() {
    return restaurants;
}

export function getRestaurant(name) {
    return restaurants.find(
        restaurant => restaurant.name === name
    );
}