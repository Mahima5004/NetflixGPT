Steps followed:
- Create React app using vite
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation(useRef)
- Firebase setup
- Create sign up use account
- Implement sign in user api
- Created Redux store and userSlice
- Add user to our store on user sign up, user sign in , user sign out(instead of calling useDispatch thrice we can use onAuthStateChanged by firebase which will execute in call this cases)
- Adding all the navigation related to browse and login page inside onAuthStateChanged calling since it executes with each sign in and sign out
- Unsubscribing to onAuthStateChanged once our body component unmounts
- Added hardcoded values inside the constants file
- Register to TMDB and create an app and get the api key
- Go through now playing api on TMDB and use it in the browser page
- Create slice for now playing movies and add it's reducer in appStore 







Features-

SignUp page(if not logged in)
SignIn page

Browse-(only when authenticated)
Navbar
Main Video
Trailer in background
Name & description
Play button
More info button
Movie suggestion
Movie list \* N (horizantally scrollable)

GPT AI-
Search Bar
Movie suggestion
