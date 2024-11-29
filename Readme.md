# what is cdn and why do we use it 🏎

-- CDN stand for <Content Deivery network> 

--it acts like a distributed network where our file is stored in different servers and when we request to get those file the server neart to us will give us the file.

--this decreases the loading time  i.e <Fast Reloading>

--if one servers goes down then we can get the file from another server we dont need to sit ideally.

-->in Short CDN is a collection of servers which are placed in different loactaion and through that our request gets fullfilled(by the nearest one).

# what is crossorigin in script tag

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
