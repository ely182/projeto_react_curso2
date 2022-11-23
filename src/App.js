import P from 'prop-types';
import { useEffect, useState } from 'react';
import './App.css';

const Post = ({ post }) => {
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

function App() {
  const [posts, setPosts] = useState([]);
  console.log('pai rodoou');

  // component did mount

  useEffect(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.jason())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  return (
    <div className="App">
      {posts.length > 0 &&
        posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          );
        })}
      {posts.length <= 0 && <p> nao tem posts</p>}
    </div>
  );
}

export default App;
