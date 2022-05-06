#Pokemon Express Homework

    Make a Pokemon app that displays data inside server-side rendered views.

#Learning Objectives

    Practicing index and show routes with express
    Practicing New and Create routes with express and Mongoose
    Practicing Update and Delete Routes

#The User Stories

    When a user goes to the /pokemon route they will see an array of pokemon
    When a user goes to /pokemon/:name, they will be see that pokemon's info by name
    When a user posts to /pokemon a user will receive the posted pokemon

#Assignment

                Week 1 Day 4
    Add a new get route /pokemon/:id
    That will res.status(200).json({id: req.params.id});
    So, when you go to localhost:3000/pokemon/whatever
    whatever will show up in the browser


                Week 2 Day 1
    Continue working by adding a Post and incorporating Mongoose JS

                Week 2 Day 2
    Add A Seed Route to Pokemon that adds the entire original pokemon array
    Add a Clear Route to Remove Pokemon from database

                Week 2 Day 3
    Add Update and Delete functionality to your pokemon app
    Deploy your Pokemon App to Netlify at it's final complete form
