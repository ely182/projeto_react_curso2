import './styles.css';

import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/ExampleProvider';

function App() {
  return (
    <CounterProvider>
    <PostsProvider>
      <div>
        <Posts />
      </div>
    </PostsProvider>
    </CounterProvider>
  );
}

export default App;