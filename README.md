Cocktail Finder

Web app can be founds at https://t3.ftcdn.net/jpg/03/65/55/62/360_F_365556296_6ywGLPddYXkxpf75BFHifM9lMCZwJqdG.jpg : 

This web application allows users to search for cocktail recipes based on a cocktail name. The app fetches data from TheCocktailDB API and displays detailed information about each cocktail, including ingredients, instructions, and an image. Users can easily search for a cocktail, view its details, and initiate a new search for another cocktail.

HOW TO USE:
1. Choose a cocktail and enter its name on the inpot box: Type in the name of the cocktail you'd like to search for (e.g., "Margarita").
2. Click the Search button or press Enter to submit the search.
3. View the cocktail details:The app will display details about the cocktail, including its name, category, glass type, ingredients, and instructions.
4. Search again: If you wish to search for another cocktail, just type its name on the input box. 

COMPONENTS:

**App Component:**
The App component manages the primary state for the cocktail name and fetched data. It handles API calls to TheCocktailDB and controls when the input field is shown or hidden. After a search, it renders the result or allows the user to perform another search.

**Entry Component:**
This component allows the user to input a cocktail name and submit the form to trigger the search. It maintains the input value in its state and passes it to the App component when the form is submitted. The input field is cleared after submission.

**Info Component:**
Displays the details of the cocktail, including its name, ingredients, instructions, and an image, based on the data fetched from the API. It dynamically renders the ingredients and measurements, ensuring only available ones are shown. If no data is found, a message indicating no cocktail was found is displayed.

**Title Component:**
A component that displays the app’s title using the name prop. 

**Image Component:**
This component displays the image of the cocktail from the API data. 

FILES

**package.json:**
This file lists all the dependencies required for the app to run, such as React and React-DOM, as well as dev dependencies for development purposes. It also contains scripts to start, build, and test the app.

**index.html:**
The single HTML file that serves as the entry point for the React app. 

**styles.css:**
Contains the styles that define the visual appearance of the app, such as layout, typography, and colors. It ensures the app is responsive and visually appealing.

