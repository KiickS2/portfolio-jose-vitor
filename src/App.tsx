import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import ProjectsArea from "./components/ProjectsArea";

function App() {
  return (
    <div>
      <div className="banner">
        <Introduction />
      </div>
      <ProjectsArea />
      <Footer />
    </div>
  );
}

export default App;
