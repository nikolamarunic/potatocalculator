# PotatoCalculator

A web app for managing your stock portfolio, inspired by the Canadian Couch Potato model.

View live: https://www.potatocalculator.com

The app was made with **React** and makes use of **AWS Amplify, Cognito, DynamoDB** in the backend as well as **Route 53** for the domain hosting.

![Image of Potatocalculator](https://github.com/nikolamarunic/images/blob/master/potatocalculator_splash.png)

# Overview
The app allows users to add, delete, and edit their stock holdings on the left hand side of the screen, as well as their target allocation for that holding within their portfolio.

<p align="center">
  <img src = https://media.giphy.com/media/f7Rw6JiOa0REgHAOq6/giphy.gif>
</p>

The user can also declare their accounts and the amount within each account. These are the values which the app will use to calculate how much the user should put in each of their holdings when investing a given amount.

<p align="center">
  <img src = https://media.giphy.com/media/PlUFhbOUWsfkrNNsav/giphy.gif>
</p>

Users of TD Webbroker can also upload the CSV files exported from their accounts and have them directly accessible in the web app.

<p align="center">
  <img src = https://media.giphy.com/media/JUeHEQSQBrJippvFtU/giphy.gif>
</p>

Once the user has the allocations and accounts to their liking, they can invest a given dollar amount. Based on the target allocations which theyve inputted and the acutal allocations of the holdings in their accounts, the app will tell the user how much to buy/sell of each holding in each account.

Users may click the hamburger button to see the change in each of their holdings after investing. This is also where users may customize the account limits for special accounts such as a TFSAs, RRSPs or 401ks.

<p align="center">
  <img src = https://media.giphy.com/media/MayHeCjE70ZJyhNbFF/giphy.gif>
</p>

Finally users can create and account and have all their information saved as they perform their actions.

<p align="center">
  <img src = https://github.com/nikolamarunic/images/blob/master/ezgif.com-optimize-2.gif>
</p>

All UI was created from scratch for learning purposes and so may not be totally responsive.

# LICENSE
MIT
