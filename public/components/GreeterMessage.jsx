var React = require('react');

var GreeterMessage = React.createClass({
    render: function () {
      var name = this.props.name;
      var message = this.props.message;

      return (
        <div>
          <h1>Bookmark Saver</h1>
        <p>Here is a list of the links to videos and resources
          that I used to learn React during my
          Intro to React Class at Hack Oregon.</p>
        <ul>
   <li>
     <a href="https://github.com/rmurphey/js-assessment">JavaScript Assessment</a>
   </li>
   <li>
    <a href="http://devdocs.io/offline">DevDocs, offline version</a>
    </li>
    <li>
   <a href="https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84">FunFunFunctions: Higher Order Functions</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=sjyJBL5fkp8">FunFunFunctions: ES6/2015 var, let, and const</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=6sQDTgOqh-I">FunFunFunctions: ES6/2015 arrow functions</a>
  </li>
    <li>
      <a href="http://tech.co/dc-is-the-top-city-for-women-in-tech-2016-02">Industry Talk: Women in tech</a>
  </li>
  <li>
    <a href="https://www.udemy.com/understand-javascript/?couponCode=OCT1202&siteID=Kzz30XxWgII-loSkKDchAkcHj_nnwiIBHQ&LSNPUBID=Kzz30XxWgII">JavaScript: Understanding the Weird Parts</a>
  </li>
  <li>
   <a href="http://es6-features.org/">ES6 at a glance</a>
  </li>
  <li>
   <a href="https://www.youtube.com/watch?v=CozSF5abcTA">Essential ES6 / ES2015 JavaScript</a>
  </li>
  <li>
   <a href="https://www.youtube.com/watch?v=AfWYO8t7ed4">Javascript ES6 Cheatsheet - the best of JS ES6</a>
  </li>
  <li>
   <a href="https://github.com/airbnb/javascript">AirBnb Styleguide</a>
  </li>
  <li>
   <a href="https://egghead.io/courses/learn-es6-ecmascript-2015">Learn ES6 (ECMAScript 2015) - Course by @johnlindquist</a>
  </li>
  <li>
   <a href="https://frontendmasters.com/courses/computer-science">Learn Four Semesters of Computer Science in 5 Hours w/ Brian Holt</a>
  </li>
  <li>
   <a href="http://www-cs-students.stanford.edu/~blynn/gitmagic/">Git Intro</a>
  </li>
  <li>
   <a href="https://sublimetextbook.com/">Sublime Text Power User Book by Wes Bos</a>
  </li>
  <li>
   <a href="https://facebook.github.io/react/docs/thinking-in-react.html">Thinking in React</a>
  </li>
  <li>
   <a href="https://www.youtube.com/watch?v=fd2Cayhez58&feature=youtu.be">REACT JS TUTORIAL #2 - Reactjs Components & Rendering</a>
  </li>
  <li>
   <a href="https://www.youtube.com/watch?v=vu_rIMPROoQ">REACT JS TUTORIAL #3 - Composing Multiple React.js Components</a>
  </li>
  <li>
   <a href="https://www.youtube.com/watch?v=qh3dYM6Keuw&t=79s">REACT JS TUTORIAL #4 - State vs Props & Application Data</a>
  </li>
  <li>
   <a href="https://babeljs.io/blog/2015/06/07/react-on-es6-plus">React on ES6+</a>
  </li>
  <li>
   <a href="https://babeljs.io/docs/learn-es2015/x">Learn ES2015 · Babel</a>
  </li>
  <li>
   <a href="https://facebook.github.io/react/blog/2016/09/28/our-first-50000-stars.html">Our First 50,000 Stars - React Blog (History of React)</a>
  </li>
  <li>
   <a href="https://youtu.be/DN4yLZB1vUQ">Ashley Williams: If you wish to learn ES6/2015 from scratch, you must first invent the universe</a>
  </li>
  <li>
   <a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi">React Developer Tools (for Chrome)</a>
  </li>
     </ul>
     <p>{message}</p>
        <p>You can add to the list using the following box</p>
        
        </div>
      );
    }
});

module.exports = GreeterMessage;
