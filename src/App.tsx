import { useGetPosts } from './lib/api-hooks';
import { FetchState } from './types';
import './App.css';

function App() {
  const [posts, fetchState, getPosts] = useGetPosts();

  return (
    <div className="container">
      <h1>Mon simple API </h1>
      {fetchState === FetchState.DEFAULT && (
        <>
          <p>
          Bonjour, cliquez sur le bouton ci-dessous pour obtenir la liste des publications de
            l'API.
          </p>
          <button onClick={getPosts}>Obtenir des publications</button>
        </>
      )}
      {fetchState === FetchState.LOADING && <p>Fetching posts...</p>}
      {fetchState === FetchState.ERROR && (
        <>
          <p>Oops! Quelque chose s'est mal passé. Veuillez réessayer.</p>
          <button onClick={getPosts}>Get Posts</button>
        </>
      )}
      {fetchState === FetchState.SUCCESS && (
        <>
          <p>Voici la liste des messages :</p>
          <ul className="posts-list">
            {posts.map((post) => (
              <li key={post.id} className="post">
                <h3>
                  {post.id} - {post.title}
                </h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
