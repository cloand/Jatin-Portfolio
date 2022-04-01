import LeftSection from "./components/leftSection";
import NavBar from "./components/NavBar";
import styledComponents from "styled-components";

const HomeSection = styledComponents.div`

  max-width:2400px;
margin:auto;
  `;

function App() {
  return (
    <div>
      <NavBar />
      <HomeSection>
        <LeftSection />
      </HomeSection>
    </div>
  );
}

export default App;
