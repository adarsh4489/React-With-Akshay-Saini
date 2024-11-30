# ################ -------------------Class 1: Inception -------------------################

# what is cdn and why do we use it 🏎
--------------------------------------

-- CDN stand for Content Deivery network 

--it acts like a distributed network where our file is stored in different servers and when we request to get those file the server neart to us will give us the file.

--this decreases the loading time  i.e Fast Reloading

--if one servers goes down then we can get the file from another server we dont need to sit ideally.

-->in Short CDN is a collection of servers which are placed in different loactaion and through that our request gets fullfilled(by the nearest one).

# what is crossorigin in script tag
-------------------------------------

--> This is an attribute of script tag

--> Suppose we are using an website and in that website i want to use some resources that are placed in different website then we are trying to get data from different website from different website this is known as cross origin.

-->      website1------------request------------>website2
             origin-------------------------crossorigin  

--> The crossorigin attribute tells the browser how to make the request (with or without credentials).

--> Crossorigin attribue is a way to tell the brouser how to handle the request that are from different origin.

     #----------- why do we need crossorigin-------#

-->crossorigin check that weather the request is safe or not like we are sharing data and if its not safe 

-->crossorigin="anonymous"    doesnot send cockies and all,
-->crossorigin="use-credentials"  sends credentials

# React.createElement("what type of element you want to create eg:h1 ,h2 p etc ",{ attributes},"what to write inside that tag ")
--> for example:   React.createElement("h1","id:"main-heading","Hi this is my main heading");


# Libray V/S Framework
------------------------
# library

--> In library we get predefined functions and code for doing a task we can integrate those function through that library and can use it in our project.

--> we can control the flow of the project,we have to just call the function or methods to implement it in our code. eg:React js , jquery.

# Framework
 
--> on the other hand framework is a blueprint or we can say its a structure having its own method and way to implement and get result ,we have to follow set of rules and structure Eg: Angular,Ruby on Rails,Django 


#  #######################  ----------------Class 2 Igniting the app ------------- #######################

# Git V/S Github
-----------------

--> git is your personal diary and github is a library where you can keep your diary and other people can also access     your diary (read,contribute)

 # Git: 

   --> Git is a version control system
   --> git works locally on your computer ,using git you can manage your code and also you can work with peoples on a single project while sitting in different locations.

  # git commands

   --> intialize git repository:                               git init
   --> view commit history:                                    git log
   --> saves changes with a message:                           git commit -m "i fixed this bug"
   
   -->create a new branch with branch name adrash:             git branch adarsh
   -->gives all the branches in repository                     git branch 
   -->delete a branch whose name is adarsh                     git branch -d adarsh 
   -->createa branch (aman) and jump to that branch            git branch -d adarsh 
   -->change the current repo to newbranch (aman)              git checkout aman
   
   --> for cloning a project                                   git clone (link of your project brackets not required)
   --> to check status of your working directory               git status
   
   -->to add a single file in current directory                git add file_name
   -->to add all the modified files in current directory       git add .
   -->Modify the last commit (useful if                        git commit --ammend 
    you forgot to add a file or made a mistake).

   -->only fetches changes but dont merge                      git fetch origin

   -->push changes to a specific branch                        git push origin branch-name
   -->push all branches to remote                              git push origin --all
   -->pull changes from the remote                             git pull origin branch_name

   -->merge branch aman to main branch                         git merge aman
 

 # Github:

    -->A platform for hosting and sharing git repositories, 
    -->Github is a cloud based service that allows us to store,share and colaborate projects
    -->it allows us to access our projects remotely form any device 
    -->using github we can interact with different people globaly working on a project

#  ######### ----------------- Parcel --------------##############

--> parcel is a web application bundler
--> npm install -D parcel  (for development phase)
--> npx parcel index.html (starting point of the application)

   -->npm is used for downloading packages
   -->npx is used for executing packages

# what Parcel does
--------------------

-->
