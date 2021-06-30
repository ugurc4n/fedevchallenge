import React from 'react'
import './sectionone.css'
import gunahsehri from '../assets/gunah-sehri.jpeg';
import hannibal from '../assets/hannibal.jpeg';
import hiddet from '../assets/hiddet.jpeg';
import itirazımvar from '../assets/itirazim-var.jpeg';
import kotukedi from '../assets/kotu-kedi-serafettin.jpeg';
import masum from '../assets/masum.jpeg';
import olumculdeney from '../assets/olumcul-deney.jpeg';
import shameless from '../assets/shameless.jpeg';
import sıfırbir from '../assets/sifir-bir.jpeg';
import suikastci from '../assets/suikastcinin-inanci.jpeg';
import vfor from '../assets/v-for-vandetta.jpeg';
import youngpope from '../assets/the-young-pope.jpeg';
import bingbang from '../assets/the-bing-bang-theory.jpeg';
import vikings from '../assets/vikingler.png';
import eleven from '../assets/11-22-63.jpeg';


function sectionone() {
  return (
    <div>
      <div className="movietext">
        <p>FİLMLER</p>
        <div className="movies">
          <ul className="carts">
            <li>
              <a href="#"><img src={gunahsehri} alt="gunahsehri" /></a>
            </li>
            <li>
              <a href="#"><img src={hannibal} alt="hannibal" /></a>
            </li>
            <li>
              <a href="#"><img src={hiddet} alt="hiddet" /></a>
            </li>
            <li>
              <a href="#"><img src={itirazımvar} alt="itirazımvar" /></a>
            </li>
            <li>
              <a href="#"><img src={kotukedi} alt="kotukedi" /></a>
            </li>
            <li>
              <a href="#"><img src={suikastci} alt="suikastci" /></a>
            </li>
            <li>
              <a href="#"><img src={bingbang} alt="bingbang" /></a>
            </li>
            <li>
              <a href="#"><img src={olumculdeney} alt="olumculdeney" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="movietext">
        <p>DİZİLER</p>
        <div className="movies">
          <ul className="carts">
            <li>
              <a href="#"><img src={masum} alt="masum" /></a>
            </li>
            <li>
              <a href="#"><img src={shameless} alt="shameless" /></a>
            </li>
            <li>
              <a href="#"><img src={vfor} alt="vfor" /></a>
            </li>
            <li>
              <a href="#"><img src={youngpope} alt="youngpope" /></a>
            </li>
            <li>
              <a href="#"><img src={eleven} alt="eleven" /></a>
            </li>
            <li>
              <a href="#"><img src={sıfırbir} alt="sıfırbir" /></a>
            </li>
            <li>
              <a href="#"><img src={vikings} alt="vikings" /></a>
            </li>
            <li>
              <a href="#"><img src={olumculdeney} alt="olumculdeney" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default sectionone
