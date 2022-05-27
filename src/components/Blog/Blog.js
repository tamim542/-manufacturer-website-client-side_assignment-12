import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div>
            <div className='question-blog mb-8'>
                <h3 className='question-design text-2xl'>14.1 How will you improve the performance of a React Application?</h3>

                <p className='question-answer'>Optimization is the number one thing that is on the mind of every developer while fixing any software,  moreover web apps. There are some steps that can help us to improve the performance of a React Application ;

                    1. Nurture material state cantonal where indispensable.
                    2. Windowing or list virtualization in React.

                    3. Code-rending in React using progressive importation.
                    4. Sluggish loading images in React.
                    5. Memoizing React materials to confine unnecessary re-renders.
                </p>

                <h3 className='question-design text-2xl'>14.2 What are the different ways to manage a state in a React application?</h3>

                <p className='question-answer'>
                    We can follow some steps to manage state in React. These are;

                    1. At first we have to creat an empty project.  For this we Will delet the sample project and connected files which are installed while we bootstrap the project.

                    2. Secondly we have to use state in a component. After that we'll make a product page with a shoping chart that displays the total items in the chart using the state value.

                    3. In the third steps we've created a base state for the materials and we've referenced that state in our function.

                    4. At the last steps, we've to setting state using current state.</p>

                <h3 className='question-design text-2xl'>14.3 How does prototypical inheritance work?</h3>

                <p className='question-answer'>Simply put, prototypical inheritance refers to the ability to access the properties of an object from another object.  We use a JavaScript prototype to add new features and methods to existing object constructors.  We can then basically tell our JS code to inherit property from a prototype.
                </p>
                <h3 className='question-design text-2xl'>14.5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>

                <p className='question-answer'>The includes() method returns true if an array contains a specified value. The includes() method returns false if the value is not found. The includes() method is case sensitive.  It does not require this value to be an Array object, so it can be applied to other kinds of objects . The example below illustrates includes() method called on the function's arguments object.
                </p>
                <h3 className='question-design text-2xl'>14.6 What is a unit test? Why should write unit tests?</h3>

                <p className='question-answer'>Unit testing is a type of software testing where single units or software materials are tested.  The purpose is to verify that each unit of code works as expected.
                    Here are a few benefits to writing unit tests:
                    1. Unit testing saves time and money.  In general, we tend to test the happy path more than the unhappy path.

                    2.This naturalizes
                    the debugging process.

                    3.The unit improves test code coverage.  One controversial issue is having 100% code coverage across your application
                </p>
            </div>
        </div>
    );
};

export default Blog;