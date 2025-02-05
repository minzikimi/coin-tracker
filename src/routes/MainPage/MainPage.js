import { Link } from "react-router-dom";
import "./MainPage.css";
import useFetchCryptoData from "../../hooks/useFetchCryptoData";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import ShinyText from './ShinyText';
import FAQ from "../../components/FAQ/FAQ";
import Banner from "../../components/Banner/Banner";


function MainPage() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal () {
    setIsModalOpen(true);
  } 
  function closeModal () {
    setIsModalOpen(false);
  }


  return (
    <div>
      <div className="main-page-intro">
        <Banner />
      </div>

      <div className="button-wrapper">
        <button 
          className="openModalBtn"
          onClick={openModal}
        >
         <ShinyText text="Convert your seed today!" disabled={false} speed={3} className='custom-class' />
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <FAQ />
    </div>
  );
}

export default MainPage;
