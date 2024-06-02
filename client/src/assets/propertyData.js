export const data = {
    states: [
        {
            name: "Maharashtra",
            cities: [
                {
                    name: "Mumbai",
                    // regions: ["South Mumbai", "Western Suburbs", "Eastern Suburbs", "Navi Mumbai"]
                    regions: [
                        {
                            name:"South Mumbai",
                            properties : [
                                {
                                  name: "Suburban Villa",
                                  id:100,
                                  type: "Residential",
                                  price: 100000,
                                  owner: {
                                    name: "Jane Smith",
                                    contact: "jane.smith@example.com"
                                  },
                                  image: {
                                    url: "https://static.vecteezy.com/system/resources/previews/000/366/438/original/home-vector-icon.jpg",
                                    description: "Exterior view of the villa"
                                  },
                                  description: "A spacious suburban villa located in Western Suburbs."
                                },
                                {
                                  name: "Downtown Condo",
                                  type: "Residential",
                                  id:99,
                                  price:70000,
                                  owner: {
                                    name: "Alice Johnson",
                                    contact: "alice.johnson@example.com"
                                  },
                                  image: {
                                    url: "https://static.vecteezy.com/system/resources/previews/000/366/438/original/home-vector-icon.jpg",
                                    description: "Condo interior"
                                  },
                                  description: "A convenient downtown condo located in Shivajinagar."
                                }
                              ]
                        }
                    ]
                },
                {
                    name: "Pune",
                    // regions: [{"Shivajinagar", "Hinjewadi", "Kothrud", "Viman Nagar"}]
                    regions: [
                        {
                            name:"Shivajinagar",
                            properties : [
                                {
                                  name: "Sea View Apartment",
                                  type: "Residential",
                                  id:90,
                                  price:45000,
                                  owner: {
                                    name: "John Doe",
                                    contact: "john.doe@example.com"
                                  },
                                  image: {
                                    url: "https://static.vecteezy.com/system/resources/previews/000/366/438/original/home-vector-icon.jpg",
                                    description: "Front view of the apartment"
                                  },
                                  description: "An amazing sea view apartment located in South Mumbai with all modern amenities."
                                }
                              ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Karnataka",
            cities: [
                {
                    name: "Bangalore",
                    // regions: ["Whitefield", "Koramangala", "Indiranagar", "Jayanagar"]
                    regions: [
                        {
                            name:"Whitefield",
                            properties : [
                                {
                                  name: "Downtown Condo",
                                  type: "Residential",
                                  id:87,
                                  price:200000,
                                  owner: {
                                    name: "Alice Johnson",
                                    contact: "alice.johnson@example.com"
                                  },
                                  image: {
                                    url: "https://static.vecteezy.com/system/resources/previews/000/366/438/original/home-vector-icon.jpg",
                                    description: "Condo interior"
                                  },
                                  description: "A convenient downtown condo located in Shivajinagar."
                                }
                              ]
                        }
                    ]
                }
            ]
        }
    ]
}


