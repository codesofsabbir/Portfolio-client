import {Helmet} from "react-helmet";
import "./History.css"
import Education from './HistoryComponent.jsx/Education';
import Work from './HistoryComponent.jsx/Work';
import Footer from '../../Components/Footer';
function History() {
  return (
    <div className='w-full mt-[70px] lg:mt-8 mx-2 md:mx-8 overflow-x-auto   scrollBarHide'>
      <Helmet>
          <title>History</title>
      </Helmet>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Education />
          <Work />
        </div>
        <Footer />
    </div>
  )
}

export default History