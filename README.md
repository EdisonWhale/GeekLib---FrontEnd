# GeekLib: AI-Enhanced Library Management System ---FrontEnd Part

GeekLib is an AI-enhanced library management system that simplifies book management and provides users with a seamless experience. The web application is built with React and Spring Boot, offering a range of features, such as CRUD functionality, reviews, comments, and loan/return management. The project is secured with Okta authentication, and payments are processed through Stripe API. The AI assistance is powered by GPT-3.5 API, and the application is deployed on AWS using Amplify and EC2 for CI/CD.


Demo: www.geeklibr.com

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [APIs Used](#apis-used)
- [License](#license)


### Features

- Full-stack web application built with React and Spring Boot
- CRUD functionality for library management
- Book review and comment system
- Loan and return management
- Secure user authentication with Okta auth API and JWT
- Credit card payment processing with Stripe API
- Efficient dependency management with Maven
- Interaction with MySQL database using Spring Data JPA
- AI assistance with GPT-3.5 API
- responsive web design

## Installation

To get started with GeekLib Chatbot, follow these steps:

1. Clone the repository:  
```
git clone https://github.com/EdisonWhale/GeekLib-FrontEnd.git
```
2. Navigate to the project directory and install dependencies:  
```
cd GeekLib-FrontEnd
```
```
npm install
  ```
3. Set up environment variables for Okta, GPT-3.5 API, backend_API link and database credentials. 
```
.env
```
 
4. Start the development server:  
```
npm start
```

The application will now be running on `http://localhost:3000`.


## Usage

You need to set up the enivorent for GeekLib-Backend and mysql database as well.

for more information, please vist GeekLib-Backend repo
https://github.com/EdisonWhale/GeekLib-Backend.git

## APIs Used
[GPT-3.5 API](https://openai.com/api/gpt-3/)<br>
[Okta Auth API](https://developer.okta.com/)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

Made with ❤️ by Edison<br>
www.Edisonwhale.com

Have any question?  
Email me!  
Edison@gatech.edu
