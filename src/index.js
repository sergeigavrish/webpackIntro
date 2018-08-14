import User from './User.js'
import './style.scss'

window.addEventListener('load', function() {
  const root = document.getElementById('root');

  fetch(`https://jsonplaceholder.typicode.com/users/${Math.floor(Math.random() * 10 + 1)}`)
		.then((response) => response.json())
		.then((result) => {
      const user = new User(result.name);
      return root.appendChild(user.sayHi());
    });
});
