import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookList from './views/Books/BookList';
import BookDetail from './views/Books/BookDetail';
import './App.css';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path = "/books">
            <BookList />
          </Route>
          <Route exact path = "/books/:id">
            <BookDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
