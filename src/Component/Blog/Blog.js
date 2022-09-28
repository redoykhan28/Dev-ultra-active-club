import React from 'react';
import './blog.css'
const Blog = () => {
    return (
        <div className='blog'>
            <h2>Blog</h2>
            <div className='ques-ans'>
                <h3>Q1.How react works?</h3>
                <p>Answer:React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes

                    It goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. In fancy words, React does batch updates. So putting all pieces together, Reconciliation = Render + Diffing occurs in between + Commit.
                </p>
            </div>
            <div className='ques-ans'>
                <h3>Q2.Diffrence between props and state?</h3>
                <p>Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
                    so,
                    Props are used to pass data, whereas state is for managing data. Data from props is read-only, and cannot be modified by a component that is receiving it from outside. State data can be modified by its own component, but is private (cannot be accessed from outside)
                </p>
            </div>
            <div className='ques-ans'>
                <h3>Q3.what useEffect actually works expect api fetch?</h3>
                <p>Answer:UseEffect in react is a hook function that handle side effects of react. it's not only used to load or fetch api but also used to tasks like updating the DOM, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.
                </p>
            </div>

        </div>
    );
};

export default Blog;