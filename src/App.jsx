import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./Layout/Layout";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Project from "./components/Project";



function App() {
  return (
    <>
      <Layout>
        <Banner />
        <Education />
        <Skills />
        <Project/>
      </Layout>
    </>
  );
}

export default App;
