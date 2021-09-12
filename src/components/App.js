import NumberList from './NumberList';
import Title from './Title';
import PageDescription from './PageDescription';
import '../styles/App.css';

function App() {
  return (
    <div className="container">
      <Title title="A Guide to Understand Multiplication" />
      <PageDescription>Click a number to see all the numbers that are multiples of the chosen number (numbers will be highlighed in a different color)</PageDescription>
      <section>
        <NumberList maxNumberLimit={144} />
      </section>
    </div>
  );
}

export default App;
