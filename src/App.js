import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";



const App = () => {
  const [visible, setVisible] = useState(false);  // visibility state

  // const showElement = () => setVisible(true);
  // const hideElement = () => setVisible(false);

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setVisible(!visible)}>{visible ? 'Masquer le Formulaire' : 'Montrer le formulaire'}</button><hr />  
      {visible && 
      <div className="form-control">
        <form>
          <label htmlFor="password">
            <input className="form-control" type="text" name="name" value="Titre de l'article" />
            <textarea className="form-control" value="Corps de l'article" /> 
            <hr />       
            <input className="btn btn-primary" type="submit" value="Créer un nouvel article" />
          </label>
          <hr />  
        </form>
      </div>}
    </div>
  );
}




function Blog(props) {
  const sidebar = (    
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>          
        {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>    
    <div key={post.id}>      
      <h3>{post.title}</h3>
        <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
        <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Titre de l article', content: 'Corps de l article'},
  {id: 2, title: 'Titre de l article', content: 'Corps de l article'}
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);

export default App;


