import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import TerraceRoof from "./pages/services/TerraceRoof";
import TileEpoxyGrouting from "./pages/services/TileEpoxyGrouting";
import ExteriorWall from "./pages/services/ExteriorWall";
import PressureGrouting from "./pages/services/PressureGrouting";
import RetainingWall from "./pages/services/RetainingWall";
import StructuralRetrofitting from "./pages/services/StructuralRetrofitting";
import Bathroom from "./pages/services/Bathroom";
import Basement from "./pages/services/Basement";
import TankWaterproofing from "./pages/services/TankWaterproofing";
import Podium from "./pages/services/Podium";
import SwimmingPool from "./pages/services/SwimmingPool";
import EpoxyFlooring from "./pages/services/EpoxyFlooring";
import PlanterBox from "./pages/services/PlanterBox";
import WaterBodies from "./pages/services/WaterBodies";
import LiftPit from "./pages/services/LiftPit";
import CrackFilling from "./pages/services/CrackFilling";
import ExpansionJoint from "./pages/services/ExpansionJoint";
import IndustrialFlooring from "./pages/services/IndustrialFlooring";
import NewExistingStructure from "./pages/services/NewExistingStructure";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services/terrace-roof" element={<TerraceRoof />} />
          <Route path="/services/tile-epoxy-grouting" element={<TileEpoxyGrouting />} />
          <Route path="/services/exterior-wall" element={<ExteriorWall />} />
          <Route path="/services/pressure-grouting" element={<PressureGrouting />} />
          <Route path="/services/retaining-wall" element={<RetainingWall />} />
          <Route path="/services/structural-retrofitting" element={<StructuralRetrofitting />} />
          <Route path="/services/bathroom" element={<Bathroom />} />
          <Route path="/services/basement" element={<Basement />} />
          <Route path="/services/tank-waterproofing" element={<TankWaterproofing />} />
          <Route path="/services/podium" element={<Podium />} />
          <Route path="/services/swimming-pool" element={<SwimmingPool />} />
          <Route path="/services/epoxy-flooring" element={<EpoxyFlooring />} />
          <Route path="/services/planter-box" element={<PlanterBox />} />
          <Route path="/services/water-bodies" element={<WaterBodies />} />
          <Route path="/services/lift-pit" element={<LiftPit />} />
          <Route path="/services/crack-filling" element={<CrackFilling />} />
          <Route path="/services/expansion-joint" element={<ExpansionJoint />} />
          <Route path="/services/industrial-flooring" element={<IndustrialFlooring />} />
          <Route path="/services/new-existing-structure" element={<NewExistingStructure />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
