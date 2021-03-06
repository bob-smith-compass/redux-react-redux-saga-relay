// https://www.graphqlhub.com

let query = `
{
    graphQLHub
    github {
      user(username: "clayallsopp") {
        login
        id
        avatar_url
      }
      repo(ownerUsername: "clayallsopp", name: "graphqlhub") {
        id
        name
        issues(limit: 1) {
          id
          state
          title
        }
        branches(limit: 1) {
          name
          lastCommit {
            ...commit
          }
        }
        commits(limit: 1) {
          ...commit
        }
      }
    }
  }
  
  fragment status on GithubStatus {
    state
    description
    target_url
    context
    updated_at
  }
  
  fragment commit on GithubCommit {
    sha
    message
    status {
      ...status
    }
    author {
      ... on GithubUser {
        login
        id
      }
      ... on GithubCommitAuthor {
        email
      }
    }
  }`