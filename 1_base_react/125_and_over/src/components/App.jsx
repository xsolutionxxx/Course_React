import WhoAmI126 from "./126_components_props/Props";
import WhoAmI129 from "./129_components_state/State";

function App() {
  return (
    <>
      <div>
        <h1>125. Components props</h1>
        {/* <WhoAmI126 name="John" surname="Smith" link="facebook.com" /> */}
        {/* <WhoAmI126 name={{ first: "Alex" }} surname="Shepr" link="instagram.com" /> */}
        <WhoAmI126
          name={() => {
            return "Felicia";
          }}
          surname="Shepr"
          link="instagram.com"
        />
      </div>

      <hr />

      <div>
        <h1>129. Components state</h1>
        <WhoAmI129 name="John" surname="Smith" link="facebook.com" />
        <WhoAmI129 name="Felicia" surname="Shepr" link="instagram.com" />
      </div>
    </>
  );
}

export default App;
