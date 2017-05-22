/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  All of these data shall be change with API
*/
'use strict'
const notifications = [
   { fullName: "Michele Paoletti",
     message: "opened a discussion on your proposal",
     minAgo:"2",
     voted:'',
     profileImage: require("../../img/notification/man1.png")
   },

   { fullName: "Saba",
     message: "downvoted your reply",
     minAgo:"4",
     voted: 'down',
     profileImage: require("../../img/notification/man2.png")
   },
   { fullName: "Francesco Baraldi",
     message: "upvoted your reply",
     minAgo:"6",
     voted: 'up',
     profileImage: require("../../img/notification/man3.png")
   },
   { fullName: "Sofia Listi",
     message: "is now following your proposal",
     minAgo:"18",
     voted:'',
     profileImage: require("../../img/notification/woman1.png")
   },
   { fullName: "Francesca Lagana",
     message: "replied to the discussion you opened on a proposal",
     minAgo:"28",
     voted:'',
     profileImage: require("../../img/notification/woman2.png")
   },
   { fullName: "",
     message: "There is 1 day left until the deadline of the proposal is met",
     minAgo:"40",
     voted:'',
     profileImage: require("../../img/notification/environment.png")
   },
   { fullName: "",
     message: "There is 1 day left until the deadline of the proposal is met",
     minAgo:"40",
     voted:'',
     profileImage: require("../../img/notification/environment.png")
   },
]

module.exports = notifications
