let query = `query twoUsers($user1: String!, $user2: String!) {
    github {
      user1: user(username: $user1) {
        id
        company
        avatar_url
      }
      user2: user(username: $user2) {
        id
        company
        avatar_url
      }
    }
  }
  `

  let query_variables = `{
    "user1": "david-shams",
    "user2": "bob-smith-compass"
  }`