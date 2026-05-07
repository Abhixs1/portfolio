import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Hero, Navbar, StarsCanvas } from "./components";
import { SuspenseLoader } from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";
import { ToastProvider, ToastContainer } from "./context/ToastContext";
import SocialLinks from "./components/SocialLinks";

// Lazy load heavy components
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <BrowserRouter>
          <div className='relative z-0 bg-primary'>

            {/* Hero Section with background pattern */}
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              <Hero />
            </div>

            {/* All sections wrapped in stars */}
            <div className='relative z-0'>
              <StarsCanvas />

              {/* About */}
              <div className='relative'>
                <div className='absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#915EFF] to-transparent opacity-50' />
                <Suspense fallback={<SuspenseLoader />}>
                  <About />
                </Suspense>
              </div>

              {/* Experience */}
              <div className='relative'>
                <div className='absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00CEA8] to-transparent opacity-30' />
                <Suspense fallback={<SuspenseLoader />}>
                  <Experience />
                </Suspense>
              </div>

              {/* Tech */}
              <div className='relative'>
                <div className='absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#915EFF] to-transparent opacity-30' />
                <Suspense fallback={<SuspenseLoader />}>
                  <Tech />
                </Suspense>
              </div>

              {/* Works / Projects */}
              <div className='relative'>
                <div className='absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00CEA8] to-transparent opacity-30' />
                <Suspense fallback={<SuspenseLoader />}>
                  <Works />
                </Suspense>
              </div>

              {/* Testimonials */}
              <div className='relative'>
                <div className='absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#915EFF] to-transparent opacity-30' />
                <Suspense fallback={<SuspenseLoader />}>
                  <Feedbacks />
                </Suspense>
              </div>

              {/* Contact */}
              <div className='relative'>
                <div className='absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00CEA8] to-transparent opacity-50' />
                <Suspense fallback={<SuspenseLoader />}>
                  <Contact />
                </Suspense>
              </div>

              {/* Footer */}
              <footer className='relative z-10 text-center py-8 border-t border-[#915EFF]/20'>
                <p className='text-secondary text-[14px]'>
                  Designed & Built by{" "}
                  <span className='text-[#915EFF] font-semibold'>Abhishek Kumar</span>
                </p>
                <div className='mt-4'>
                  <SocialLinks variant="footer" />
                </div>
                <p className='text-secondary/40 text-[12px] mt-4'>
                  © {new Date().getFullYear()} Abhishek Kumar. All rights reserved.
                </p>
              </footer>

            </div>
          </div>
        </BrowserRouter>
        <ToastContainer />
      </ToastProvider>
    </ErrorBoundary>
  );
};

export default App;