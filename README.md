# UserProfileSearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Task
The app should display user profiles in GitHub:

1. When you enter the website, there should be an input and a search button.

2. The input field will expect GitHub usernames. A GitHub username may only contain alphanumeric characters or hyphens (-).

3. When the search button is clicked, validate the input. If it is valid, use the following [API](https://api.github.com/search/users?q=usernameParam) to query GitHub usernames that contain the text received in the input.

4. Display the search results on a search results page. Display the results in a simple table.

    The columns that are required are: User Id (id), Username (login), Profile URL Link (url)

5. Add a filter input that checks if any of the fields contain the typed text and filters the table accordingly.