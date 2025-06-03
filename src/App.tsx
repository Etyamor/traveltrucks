import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const CatalogItemPage = lazy(() => import('./pages/CatalogItemPage'));

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CatalogItemPage />} />
        <Route path="*" element={'Not Found'} />
      </Routes>
    </Suspense>
  );
}

export default App;
