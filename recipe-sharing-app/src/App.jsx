// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import EditRecipePage from './pages/EditRecipePage';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
        <Route path="/recipe/:id/edit" element={<EditRecipePage />} />
      </Routes>
    </div>
  );
}

export default App;
