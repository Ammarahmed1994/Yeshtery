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
import Data from './components/body/data.component';

function App() {
  return (
    <div className="App">
      <section>
        <Data />
      </section>
      <Footer />
    </div>
  );
}

export default App;
