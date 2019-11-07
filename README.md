
# **Welcome to our Bucket List Application**

  _What would you love to do with your life?_
  This application allow users to create a bucket list item with a title, description,
  location and add a cost estimate of the item. You can also rate the item on importance and difficulty. If you change your mind, you can update and delete the bucket list item that you created.
  Bucket List is a **team project** as part of the General Assembly Immersive Program that pushed us technically and collaboratively.


# Links

  []()
  []()


# Technologies used:

**This application is built with:**

*  Javascript
*  HTML
*  CSS
*  Jquery
*  AJAX
*  Handlebars
*  Bootstrap


#  User Stories

*   As an unregistered user, I would like to sign up with email and password.
*   As a registered user, I would like to sign in with email and password.
*   As a signed in user, I would like to change password.
*   As a signed in user, I would like to sign out.
*   As a signed in user, I do not want to see sign-in/sign-up fields.
*   As a non-authenticated user, I would not want to see change-password/sign-out fields.
*   As a user, I would like forms to clear after submittal/failure.
*   As a user, I would like success/failure messages when I have completed an auth action.
*   As a user, I would like to be automatically signed in when I successfully sign up.
*   As a signed in user, I would like to create a bucket list item with a title and description.
*   As a signed in user, I would like to update my bucket list item's title and description.
*   As a signed in user, I would like to delete my bucket list item.
*   As a signed in user, I would like to see all my bucket list items but not other users.
*   As a signed in user, I would like to cross off items to complete them.
*   As a signed in user, I would like to be able to see all my completed items.
*   As a signed in user, I want to be able to add a location to my item.
*   As a signed in user, I want to be able to rate my item on difficulty.
*   As a signed in user, I want to be able to rate my item on importance to me.
*   As a signed in user, I want to be able to add a cost estimate to my item.


# Development Steps

We started everyday of this 4 day team project with a standup meeting based on our team scrum plan. It was really important to build our team git workflow and we created our feature branches where we would be working on. It was a challenge for us to skip merge conflicts.
The first step of the project was drawing user stories, wireframes and ERD. The second step of the development was working with backend part. This application is built with Express Api and MongoDB. We created our resource, end points and tested our resource's end points with curl scripts.
Next step was frontend part, adding forms for authentication and connecting API requests to them. We connected user authorization to CRUD events. This step was followed by creating forms and we decided to use modals for our forms.
The last part of the project was styling the application that we created.


# Problem Solving Strategy

We wanted to keep our HTML and Javascript separated and to write clearer code so we used  Handlebars. The most challenging part in this project was the part of interacting Handlebars with modals that we used to create our forms.
We could not figure out how to get handlebars to get item_id when it's doing the done/update/delete events. The page was just refreshing and we could not send any data after submitting.

# Wireframes

![Wireframe](https://user-images.githubusercontent.com/50851526/68174158-12875580-ff4b-11e9-8195-398bdd31d808.png)
![Wireframe](https://user-images.githubusercontent.com/50851526/68174203-3b0f4f80-ff4b-11e9-9874-a8f600757236.png)


# Future Iterations

For future iterations, we would like to connect with a third-party location API to allow users to search for a location or venue to add to their bucket list items. We would like to add the feature that will randomly give me ideas of things I could put on my bucket list by clicking on a button. I would also like to be able to view other user's bucket lists and to see a cool animation or congratulations popup when I complete an item.
