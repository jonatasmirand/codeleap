import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';
import CreatePost from '../components/CardPost/CreatePost';
import Card from '../components/Card/Card';
import './home.css';
import Singnup from '../components/Singnup/Singnup';

function Home({ username, setUserName }) {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await api.get('/');
      return response.data.results;
    },
  });

  const posts = [...(data || [])].sort(
    (a, b) => new Date(b.created_datetime) - new Date(a.created_datetime),
  );

  const logout = () => {
    localStorage.removeItem("username");
    setUserName("");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="app">
      <div className="header">
        <h1>CodeLeap Network</h1>
      </div>

      <div className="container">
        <CreatePost username={username} toUpdate={refetch} />

        {posts?.map((post) => (
          <Card
            key={post.id}
            post={post}
            username={username}
            toUpdate={refetch}
          />
        ))}
      </div>

      <button
        className="logout"
        onClick={logout}
      >
        Change User
      </button>
    </div>
  );
}

export default Home;
