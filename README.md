# FoodDelivery

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Steps to Launch Application

1) First clone the application using below command
  git clone https://github.com/prajwalagarwal5/food-delivery.git 

2) Then use below command to install node_modules
    npm i

3) After successfull installation of node_modules, we are ready to go live with development server by entering below command
    npm run start
    
4) Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Method Explanation

This application is completely dynamic and responsive. Any restraunt users and customers can  create their account and use thier account.
This application creates a bridge between restaurants and consumers. 

Features-
  Restraunt user can create menu list for their user's view and keep a track on orders received by customer.
  Customers can view available restraunts and its menu and create thier orders.

We are initialising the localStorage with two varible -
   1) restrauntDetails- storing all information of the restraunts
   2) customerDetails- storing all the information of the customer
  We have created a dummy data for 2 restraunt and 2 customer, (anyone can signup and create a new one)-
    Details of dummy data-
      For Restraunt -
        1)	Emailid - chefcorner@gmail.com
            Password - chefcorner
        
        2)	Emailid - junction@gmail.com
            Password - junction
  
      For Customer -
        1)	EmailID - arun@gmail.com
            Password - arun
            
        2)	EmailID - amit@gmail.com
          	Password - amit
    The above data is stored in the file above inside src->app with file name customerDetails.json & restraunt-details.json

    
  
    
