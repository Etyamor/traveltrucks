import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const CatalogItemPage = lazy(() => import('./pages/CatalogItemPage'));

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CatalogItemPage />} />
          <Route path="*" element={'Not Found'} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
