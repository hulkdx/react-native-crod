/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  All of these data shall be change with API
*/
'use strict'
const categories = [
    { id: 0,
      name: "Environment",
      image: require("../../img/categories/environment.png"),
      imageFill: require("../../img/categories/environment-fill.png"),

      checked: false,
    },
    { id: 1,
      name: "Financial",
      image: require("../../img/categories/finance.png"),
      imageFill: require("../../img/categories/finance-fill.png"),

      checked: false,
    },
    {
      id: 2,
      name: "Politics",
      image: require("../../img/categories/politics.png"),
      imageFill: require("../../img/categories/politics-fill.png"),

      checked: false,
    },
    {
      id: 3,
      name: "Science",
      image: require("../../img/categories/science.png"),
      imageFill: require("../../img/categories/science-fill.png"),

      checked: false,
    },
    { id: 4,
      name: "Social",
      image: require("../../img/categories/social.png"),
      imageFill: require("../../img/categories/social-fill.png"),
      checked: false,
    },
    { id: 5,
      name: "Sports",
      image: require("../../img/categories/sport.png"),
      imageFill: require("../../img/categories/sport-fill.png"),
      checked: false,
    },
]

module.exports = categories
