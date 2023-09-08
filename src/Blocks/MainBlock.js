import './MainBlock.css';
import Header from './Header';
import FirstBlock from './FirstBlock';
import SecondBlock from './SecondBlock';
import ThirdBlock from './TrirdBlock';
import FourthBlock from './FourthBlock';
import Footer from './Footer';

function MainBlock() {
  return (
    <div className="main-block">
      <Header />
      <div className="block1">
        <FirstBlock />
      </div>
      <div className="block">
        <SecondBlock />
      </div>
      <div className="block">
        <ThirdBlock />
      </div>
      <div className="block">
        <FourthBlock />
      </div>
      <div className="block">
        <Footer />
      </div>
    </div>
  );
}

export default MainBlock;
