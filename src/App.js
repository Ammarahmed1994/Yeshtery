import './App.css';
import './CSS/nav1.css';
import './CSS/nav2.css';
import './CSS/nav3.css';
import './CSS/shoppingDetails.css';
import './CSS/footer.css';
import './CSS/similarProducts.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/footer.component';
import Nav1 from './components/Navbars/nav1.component';
import Nav2 from './components/Navbars/nav2.component';
import Nav3 from './components/Navbars/nav3.component';
import BreadCrumb from './components/body/breadCrumb.component';
import Data from './components/body/data.component';
// import SimilarProducts from './components/body/SimilarProducts.component';


function App() {
  return (
      <div className="App">

        <header >
          <Nav1 />
          <Nav2 />
          <Nav3 />
        </header>
        <section>
          <BreadCrumb />
          <Data />
        </section>
        <Footer />
      </div>
   

  );
}

export default App;
