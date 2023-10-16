this is a basic file to follow through


git push origin main


# Parcel 
- It creates a DEV build
- Its created a local server 
- Its doing HMR : Hot Module Replacement (Automatically refreshes the page as well.)
- It uses a file watching algorithm that is written in C++
- Provides faster builds via caching. Inside parcel-cache. This is why when you build the program, it tends to load faster. 
- Provides image optimization 
- It also provides minification of the file. 
- Bundling is also done
- Compresses the file 
- Uses consistent hashing : What is it? 
- Provides Code Splitting
- Does Differential Bundling: Makes sure your app works on older browsers as well 
- Provides Diagnostic of the app as well as Error handling
- Also provides HTTPS 
- Does Tree Shaking; removes unused code for you 

#React Hooks

- Normal JS functions writted by Meta Developers 
- These are written inside the 'node-modules' file. 
- we need to import these utility functions. 
- There are two important react hookes : useState() & useEffect()

#Redux toolkit
- install libraries (Redux toolkit and React-redux) @reduxjs/toolkit and react-redux
- build our own store
- connect our store to the app
- slice (cart) to add items to the cart
- dispatch (action) 
- read the data using selector

#Types of Testing
- Unit Testing
- Integration Testing
- End to End Testing


#Setting up Testing in our App
- Install React Testing library
- Installed Jest
- Installed Babel Dependencies
- Configure Babel
//Parcel already uses Babel, now we are trying to add extra configuration, which will cause conflict. So we need to change Parcel's behaviour to accomodate Jest and Babel's new config. Solved by adding '.parcelrc' file. 
- Configure Parcel file to disable default Babel Transpilation
- Jest configuration ( npx jest --init  )
- Install JS Dom library
- Created a file 'sum.js' 
- Create a folder '__tests__'

