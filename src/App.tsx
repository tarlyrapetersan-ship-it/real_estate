import { Routes, Route } from 'react-router-dom';
import { Folder, Map, DollarSign, FileText, Bookmark, Layers } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import NewFeasibility from './pages/NewFeasibility';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import MarketData from './pages/MarketData';
import SettingsPage from './pages/Settings';
import Placeholder from './pages/Placeholder';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/new-feasibility" element={<NewFeasibility />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/:id" element={<PropertyDetail />} />
      <Route
        path="/projects"
        element={<Placeholder title="Projects" description="Track every active feasibility engagement in one place." icon={Folder} />}
      />
      <Route
        path="/map"
        element={<Placeholder title="Map" description="Explore parcels, zoning layers, and constraints geographically." icon={Map} />}
      />
      <Route path="/market-data" element={<MarketData />} />
      <Route
        path="/financial-models"
        element={<Placeholder title="Financial Models" description="Manage reusable financial model templates and assumptions." icon={DollarSign} />}
      />
      <Route
        path="/reports"
        element={<Placeholder title="Reports" description="Generate and share investment committee feasibility reports." icon={FileText} />}
      />
      <Route
        path="/saved-opportunities"
        element={<Placeholder title="Saved Opportunities" description="Revisit properties you have shortlisted for further study." icon={Bookmark} />}
      />
      <Route
        path="/documents"
        element={<Placeholder title="Documents" description="Store registry extracts, plans, and due diligence files." icon={Layers} />}
      />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}
