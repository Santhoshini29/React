
import React from "react";
import ReactDOM from "react-dom/client";
   const Header = () =>{
    return(
      
      <div className="header">
           <div className="logo-container">
            <img className="logo" src =
            "https://marketplace.canva.com/EAE6qtOUX08/1/0/1600w/canva-good-kitchen-logo-design-with-chef-hat-symbol-8C8EhVwzkV8.jpg"></img>
           </div>
           <div className="nav-items">
               <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                </ul> 
           </div>
      </div>
    )
   };
    
    
   const RestaurentCard =({resData}) =>{
    console.log()
      
 
      const{
        cloudinaryImageId, 
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime
      } = resData?.info;
       
    return(
       <div className="res-card" style={{
        backgroundColor:"#f0f0f0",
      } } >
        <img
        className="res-logo"
         alt="res-logo"
          src= {
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
          />
         <h3>{name} </h3>
         <h4>{cuisines.join(", ")} </h4>
         <h4>{avgRating}starts</h4>
         <h4>{costForTwo}</h4>
         <h4>{deliveryTime}minutes</h4>
      
          
        
          

       </div>
    )
   };

  const resList= [
    {
      "info": {
        "id": "344287",
        "name": "Varalakshmi Tiffins",
        "cloudinaryImageId": "8523266de1213e8ea57e5df4eedf747e",
        "locality": "Banjara Hills",
        "areaName": "Filmnagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "South Indian"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "6482",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 52,
          "lastMileTravel": 8.3,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "8.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-02 12:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
              "description": "Delivery!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/varalakshmi-tiffins-banjara-hills-filmnagar-hyderabad-344287",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "30253",
        "name": "Agra Sweets Banjara",
        "cloudinaryImageId": "nav4ebkoxrwlladx7a5m",
        "locality": "Utkoor- Mogdumpur road",
        "areaName": "Rambagh Colony",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Sweets",
          "Desserts",
          "Chaat",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "34",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-02 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/agra-sweets-banjara-utkoor-mogdumpur-road-rambagh-colony-hyderabad-30253",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "6498",
        "name": "Hotel Sandarshini",
        "cloudinaryImageId": "9f5783b9975a73ec001560327065a01c",
        "locality": "Masab Tank",
        "areaName": "Masab Tank",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Chinese",
          "South Indian",
          "Juices"
        ],
        "avgRating": 4.5,
        "parentId": "476",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-02 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hotel-sandarshini-masab-tank-hyderabad-6498",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "362596",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "M Cube Mall",
        "areaName": "Attapur",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.1,
        "parentId": "166",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-03 05:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-m-cube-mall-attapur-hyderabad-362596",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "378344",
        "name": "Theobroma",
        "cloudinaryImageId": "63dd75492c47fcec191132b8eb299ea5",
        "locality": "Banjara Hills",
        "areaName": "Banjara Hills",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "1040",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 6.4,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "6.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-03 00:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
              "shortDescription": "Perfect cake delivery",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                    "shortDescription": "Perfect cake delivery"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/theobroma-banjara-hills-hyderabad-378344",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "355463",
        "name": "Millet Express",
        "cloudinaryImageId": "75f8103a06f57c043f26343fa42e23e2",
        "locality": "Manikonda",
        "areaName": "Sri Laxmi Nagar Colony",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Healthy Food",
          "South Indian",
          "Biryani",
          "Chinese",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "10639",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 53,
          "lastMileTravel": 9.7,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "9.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-02 15:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Guiltfree.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Guiltfree.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹75 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/millet-express-manikonda-sri-laxmi-nagar-colony-hyderabad-355463",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "228215",
        "name": "Cafe Niloufer Premium Lounge",
        "cloudinaryImageId": "8407ef45d6d2283bf18037c3619cb733",
        "locality": "Ivine Banjara Hno8-2",
        "areaName": "Banjara Hills",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Beverages",
          "Snacks",
          "Desserts"
        ],
        "avgRating": 4.6,
        "parentId": "392382",
        "avgRatingString": "4.6",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 49,
          "lastMileTravel": 8,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "8.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-02 23:45:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/cafe-niloufer-premium-lounge-ivine-banjara-hno8-2-banjara-hills-hyderabad-228215",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "140111",
        "name": "Imperial Multi-Cusine Restaurant",
        "cloudinaryImageId": "yeednzto1jusnnhswke0",
        "locality": "Tolichowki",
        "areaName": "Tolichowki",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "Chinese",
          "Indian",
          "Kebabs",
          "Tandoor"
        ],
        "avgRating": 4.3,
        "parentId": "19254",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-02 10:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹75 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/imperial-multi-cusine-restaurant-tolichowki-hyderabad-140111",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "112603",
        "name": "Udipi's Upahar",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/23/a2e074a4-702f-4caa-aa8c-b59716e78de0_112603.JPG",
        "locality": "Manikonda",
        "areaName": "Muppas Panchavati Colony",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Biryani",
          "Chinese"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "1061",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 59,
          "lastMileTravel": 9.9,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "9.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-02 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/udipis-upahar-manikonda-muppas-panchavati-colony-hyderabad-112603",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "160128",
        "name": "KS Bakers",
        "cloudinaryImageId": "6127cb288329ad1c9e988276914d48ad",
        "locality": "Somi Reddy Nagar",
        "areaName": "Attapur",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Bakery",
          "Pizzas",
          "Desserts",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 4.2,
        "parentId": "574",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-02 22:45:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "v1704784556/Ratnesh_Badges/Listing_2x.png",
              "shortDescription": "Perfect Cake Delivery",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "v1704784556/Ratnesh_Badges/Listing_2x.png",
                    "shortDescription": "Perfect Cake Delivery"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹50 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/ks-bakers-somi-reddy-nagar-attapur-hyderabad-160128",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "27739",
        "name": "Cafe Niloufer Classic",
        "cloudinaryImageId": "1171b83d63d7c203e5f1c3e16980cd89",
        "locality": "Oshiwara",
        "areaName": "Red Hills",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Bakery",
          "Beverages",
          "Snacks",
          "Desserts"
        ],
        "avgRating": 4.6,
        "parentId": "466854",
        "avgRatingString": "4.6",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 5.5,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "5.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-03 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/cafe-niloufer-classic-oshiwara-red-hills-hyderabad-27739",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "7203",
        "name": "Taj Mahal-Abids",
        "cloudinaryImageId": "8aa874a03b5bd0804b6781b1fd13f02d",
        "locality": "Abids",
        "areaName": "Koti",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Biryani",
          "Snacks"
        ],
        "avgRating": 4.5,
        "parentId": "924",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 54,
          "lastMileTravel": 6.3,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "6.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-02 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/taj-mahal-abids-abids-koti-hyderabad-7203",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "57903",
        "name": "Capital Multi Cuisine Restaurant",
        "cloudinaryImageId": "ijy2jxi7lfwsebdtazpi",
        "locality": "Malakpet",
        "areaName": "Malakpet",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Haleem",
          "Biryani",
          "Lebanese",
          "Arabian"
        ],
        "avgRating": 4,
        "parentId": "19262",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 40,
          "lastMileTravel": 9.5,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "9.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-02 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/capital-multi-cuisine-restaurant-malakpet-hyderabad-57903",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "34634",
        "name": "Shah Ghouse Hotel & Restaurant",
        "cloudinaryImageId": "ks4d93rjtcbitkzkbqx0",
        "locality": "Tolichowki",
        "areaName": "Tolichowki",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Biryani",
          "Chinese",
          "Mughlai",
          "Tandoor"
        ],
        "avgRating": 4.3,
        "parentId": "19271",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 5.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "5.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-09 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Biryani.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Mughlai.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Biryani.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Mughlai.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/shah-ghouse-hotel-and-restaurant-tolichowki-hyderabad-34634",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "413629",
        "name": "CakeZone Patisserie",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/2/07ca95ba-b9cc-40bd-bed4-1b7c69953252_413629.jpg",
        "locality": "SATHYA NARAYAN NAGAR",
        "areaName": "Opp:Mythri Hospital",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Sweets",
          "Ice Cream"
        ],
        "avgRating": 4.3,
        "parentId": "7003",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 1.8,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "1.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-03 00:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/cakezone-patisserie-sathya-narayan-nagar-opp-mythri-hospital-hyderabad-413629",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "1387",
        "name": "Flavours of Taj Mahal Hotel",
        "cloudinaryImageId": "8aa874a03b5bd0804b6781b1fd13f02d",
        "locality": "Banjara Hills",
        "areaName": "Jubilee Hills",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Biryani",
          "Snacks"
        ],
        "avgRating": 4.5,
        "parentId": "80508",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 52,
          "lastMileTravel": 8.4,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "8.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-02 23:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/flavours-of-taj-mahal-hotel-banjara-hills-jubilee-hills-hyderabad-1387",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "734888",
        "name": "Chaayos Chai+Snacks=Relax",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/f92c604d-68cb-49db-8dec-9473650c363d_734888.JPG",
        "locality": "Khairatabad Circle No.17",
        "areaName": "BANJARA HILLS",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Bakery",
          "Beverages",
          "Chaat",
          "Desserts",
          "Home Food",
          "Italian",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "Sweets"
        ],
        "avgRating": 4.4,
        "parentId": "281782",
        "avgRatingString": "4.4",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 55,
          "lastMileTravel": 9.6,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "9.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-02 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-khairatabad-circle-no-17-banjara-hills-hyderabad-734888",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "65665",
        "name": "Roast ",
        "cloudinaryImageId": "4c3c3f544973bcc198947681e81325e4",
        "locality": "Hitech City",
        "areaName": "Madhapur",
        "costForTwo": "₹850 for two",
        "cuisines": [
          "Continental",
          "Asian",
          "Italian",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "9946",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 64,
          "lastMileTravel": 12.5,
          "serviceability": "SERVICEABLE",
          "slaString": "60-65 mins",
          "lastMileTravelString": "12.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-03 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/roast-hitech-city-madhapur-hyderabad-65665",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "707960",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "cloudinaryImageId": "7e526a0c0ed3cd56eefac3d318c78977",
        "locality": "Malakpet Circle",
        "areaName": "Charminar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream",
          "Ice Cream Cakes"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "582",
        "avgRatingString": "4.3",
        "totalRatingsString": "20+",
        "sla": {
          "deliveryTime": 49,
          "lastMileTravel": 5.5,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "5.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-02 22:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-malakpet-circle-charminar-hyderabad-707960",
        "type": "WEBLINK"
      }
    },
   
  ]
  
  const Body =()=>{
    return(
      <div className="body">
         <div className="search">Search</div>
         <div className="res-container">
          
             {
              resList.map((restaurant) => ( <RestaurentCard key={restaurant.info.id} resData ={ restaurant}/>))
              }
              
      </div>
      </div> 
    )
   };
  const AppLayout = ()=> {
    return(
      <div className="app">
         <Header/>
         <Body/>
      </div>
    )
  };

 const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayout/>); 


  