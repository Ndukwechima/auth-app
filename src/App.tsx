import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Login from "./components/login/Login";
import ResetPassword from "./components/resetPassword/ResetPassword";
import Register from "./components/register/Register";
import { PageProps } from "./interfaces";
const App: React.FC = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route
            path="/"
            element={
              <Page>
                <Register />
              </Page>
            }
          />
          <Route
            path="/login"
            element={
              <Page>
                <Login />
              </Page>
            }
          />
          <Route
            path="/reset-password"
            element={
              <Page>
                <ResetPassword />
              </Page>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

const Page: React.FC<PageProps> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="p-4"
  >
    {children}
  </motion.div>
);

export default App;
