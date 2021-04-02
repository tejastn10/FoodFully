import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";

import { Navbar } from "./containers/auth/Nav";
import { Footer } from "./components/Footer";
import { Routes } from "./routes/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Layout className="bg">
        <Layout.Header className="hdr">
          <Navbar />
        </Layout.Header>
        <Layout.Content className="cnt">
          <Routes />
        </Layout.Content>
        <Layout.Footer className="ftr">
          <Footer />
        </Layout.Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
