# My Game Reviews Website

## Purpose of the website
* AAU, I want to be able to search for a game and create a review.
* AAU, I want to be able to edit and delete my own reviews.
* AAU, I want to look at all reviews for a game.
* AAU, I want to see a list of games with reviews.
* AAU, I want to upvote/downvote other user reviews, and reply to them.
* AAU, I want to see a users reviews in their profile.
## Link to trello
[Trello]('https://trello.com/b/4GTeRKv7/project-2#')
## ERD
![ERD]('public/images/Screen Shot 2022-04-08 at 12.42.40 PM.png')
## Wireframe
![wireframe1]('public/images/74EF89A1-A90F-47E7-8CDD-29253C499A88.jpeg')
![wireframe2]('public/images/72080742-B3EA-40E6-BBCC-4DB92924F44B.jpeg')
![wireframe3]('public/images/B52F1E7E-7654-47B5-9BF8-12AB8AB3A9B3.jpeg')
![wireframe4]('public/images/BBC307DF-9E98-4EBB-9413-861F64FA3BC8.jpeg')
## Routes
| HTTP METHOD | URL Endpoint    | Controller Action | Purpose                                                                  |
|-------------|-----------------|-------------------|--------------------------------------------------------------------------|
| GET         | /games          | gamesCtrl.index   | List all of the games with a review                                      |
| GET         | /games/:id      | gamesCtrl.show    | Show details of game + all reviews                                       |
| POST        | /games          | gamesCtrl.create  | Called when a review for a game generates a new game model using the API |
| PUT         | /games/:id/edit | gamesCtrl.edit    | Called when a user wants to edit a review for a game.                    |
| DELETE      | /games/:id      | gamesCtrl.delete  | Called when a user wants to delete their review                          |
routes is WIP will update as I go