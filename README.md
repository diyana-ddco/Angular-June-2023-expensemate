# Expensemate Documentation

## Disclaimer

**Please note that Expensemate is a project assignment for the SoftUnit course "Angular - юни 2023." It is intended for educational purposes and as a demonstration of skills acquired during the course..**


## Introduction
Expensemate is an application designed to help freelancers easily track their expenses and generate reports for their accountants. The application provides a user-friendly interface for registering expenses and managing financial data.

## System Architecture
Expensemate is built upon a client-server architecture:

### Frontend
The frontend is developed using Angular, a popular web framework. It provides the user interface for interacting with the application's features.
### Backend
The backend is built using Spring Boot, which exposes REST APIs to handle user requests and manage the application's data.
### Authentication
User authentication is handled using AWS Cognito, providing a secure and scalable authentication solution.

## Technologies Used
Angular
Spring Boot
Amazon Cognito
Amazon RDS for PostgreSQL


# User Guide

## User Registration and Authentication
1. Access the Expensemate application.
2. Click on the "Register" button to create a new account. Provide the required information.
3. Once registered, log in using your credentials.

# Logging In
1. Enter your registered username (or email) and password.
2. Click on the "Login" button.

# Expenses Module
1. After logging in, navigate to the "Expenses" section.
2. Click on the "Add Expense" button to register a new expense.
3. Fill in the expense details (e.g., date, description, amount).
4. Save the expense.

# Generating Reports
1. In the "Reports" section, select the desired date range.
2. Click on the "Generate Report" button.
3. The system will generate a report based on the specified date range and display it on the screen.
4. You can also download the report in PDF or Excel format.

