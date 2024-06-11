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
              name: "South Mumbai",
              properties: [
                {
                  name: "Suburban Villa",
                  id: 100,
                  type: "Residential",
                  price: 100000,
                  total_shares: 1000,
                  shares_available: 750,
                  roi: "5% per annum",
                  location: {
                    latitude: 37.7749,
                    longitude: -122.4194,
                    address: "123 Elm Street, Western Suburbs, XYZ City"
                  },
                  owner: {
                    name: "Jane Smith",
                    contact: "jane.smith@example.com",
                    phone: "+1234567890"
                  },
                  images: [
                    {
                      url: "https://images.unsplash.com/photo-1591389703635-e15a07b842d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHxlbnwwfHwwfHx8MA%3D%3D",
                      description: "Image 1"
                    },
                    {
                      url: "https://media.istockphoto.com/id/183844034/photo/aerial-view-of-rice-paddies-in-madagascar.webp?s=170667a&w=0&k=20&c=vSrF4s1jTSYGvuRrzzEhM3k4B3QxNogpuSYrPySGRWM=",
                      description: "Image 2"
                    },
                    {
                      url: "https://media.istockphoto.com/id/1853759318/photo/soybean-plantation-on-a-small-farm-in-brazil.webp?s=170667a&w=0&k=20&c=UHfWNeGaVzdXrc8OxWnUEDiq5ws6qi6YMR39D1BotQQ=",
                      description: "Garden view"
                    }
                  ],
                  description: "A spacious suburban villa located in Western Suburbs. Ideal for families seeking a quiet and comfortable living environment. Invest in shares of this property and enjoy returns based on the location's appreciation.",
                  nearby_facilities: ["School", "Supermarket", "Park", "Hospital"],
                  floor_plan_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZweWsWoO9_iMa3tTo5R5kjmMU0NM9wjSZA&s"
                },
                {
                  name: "Downtown Condo",
                  id: 99,
                  type: "Residential",
                  price: 70000,
                  total_shares: 700,
                  shares_available: 500,
                  roi: "6% per annum",
                  location: {
                    latitude: 40.7128,
                    longitude: -74.0060,
                    address: "456 Maple Avenue, Shivajinagar, XYZ City"
                  },
                  owner: {
                    name: "Alice Johnson",
                    contact: "alice.johnson@example.com",
                    phone: "+0987654321"
                  },
                  images: [
                    {
                      url: "https://static.vecteezy.com/system/resources/previews/000/366/438/original/home-vector-icon.jpg",
                      description: "Condo interior"
                    },
                    {
                      url: "https://example.com/images/condo99_view.jpg",
                      description: "View from the condo"
                    },
                    {
                      url: "https://example.com/images/condo99_amenities.jpg",
                      description: "Amenities"
                    }
                  ],
                  description: "A convenient downtown condo located in Shivajinagar. Perfect for young professionals and small families. Invest in shares of this property and benefit from the high demand of downtown living.",
                  nearby_facilities: ["Mall", "Metro Station", "Restaurant", "Gym"],
                  floor_plan_url: "https://example.com/floorplan/condo99"
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
              name: "Shivajinagar",
              properties: [
                {
                  name: "Sea View Apartment",
                  type: "Residential",
                  id: 90,
                  price: 45000,
                  owner: {
                    name: "John Doe",
                    contact: "john.doe@example.com"
                  },
                  images: [
                    {
                      url: "https://static.vecteezy.com/system/resources/previews/000/366/438/original/home-vector-icon.jpg",
                      description: "Condo interior"
                    },
                  ],
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
              name: "Whitefield",
              properties: [
                {
                  name: "Downtown Condo",
                  type: "Residential",
                  id: 87,
                  price: 200000,
                  owner: {
                    name: "Alice Johnson",
                    contact: "alice.johnson@example.com"
                  },
                  images: [
                    {
                      url: "https://static.vecteezy.com/system/resources/previews/000/366/438/original/home-vector-icon.jpg",
                      description: "Condo interior"
                    },
                  ],
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


