import './App.css';
import './SCSS/nav1.scss';
import './SCSS/nav2.scss';
import './SCSS/nav3.scss';
import './SCSS/shoppingDetails.scss';
import './SCSS/similarProducts.scss';
import './SCSS/cartModal.scss';
import './SCSS/breadCrumb.scss';
 import './SCSS/footer.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/footer.component';
import Nav1 from './components/Navbars/nav1.component';
import Nav2 from './components/Navbars/nav2.component';
import Nav3 from './components/Navbars/nav3.component';
import BreadCrumb from './components/body/breadCrumb.component';
import Data from './components/body/data.component';

function App() {
  return (
      <div className="App">
        <header >
          {/* <Nav1 />
          <Nav2 />
          <Nav3 /> */}
        </header>
        <section>
          {/* <BreadCrumb /> */}
          <Data />
        </section>
        <Footer />
      </div>
   

  );
}

export default App;
