import React from 'react'
import '../style/sections.css'
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
import bigbang from '../assets/the-bing-bang-theory.jpeg';
import vikings from '../assets/vikingler.png';
import eleven from '../assets/11-22-63.jpeg';

function sections() {
  return (
    <div className="container">
      <div className="movietext">
        <span>FİLMLER</span>
        </div>
        <div className="movies">
          <ul className="cards">
            <li>
              <div class="overlay">
                <a href="#"><img src={olumculdeney} alt="olumculdeney" /></a>
                  <div class="middle">
                    <div class="text">Resident Evil</div>
                  </div>
              </div>
            </li>
            <li>
              <div class="overlay">
                <a href="#"><img src={hannibal} alt="hannibal" /></a>
                  <div class="middle">
                    <div class="text">Hannibal </div>
                  </div>
              </div>
            </li>
            <li>
               <div class="overlay">
                <a href="#"><img src={hiddet} alt="hiddet" /></a>
                  <div class="middle">
                    <div class="text">Fury </div>
                  </div>
              </div>
            </li>
            <li>
               <div class="overlay">
                <a href="#"><img src={itirazımvar} alt="itirazımvar" /></a>
                  <div class="middle">
                    <div class="text">İtirazım Var </div>
                  </div>
              </div>
            </li>
            <li>
              <div class="overlay">
                <a href="#"><img src={kotukedi} alt="kotukedi" /></a>
                  <div class="middle">
                    <div class="text">Kötü Kedi Şerafettin</div>
                  </div>
              </div>
            </li>
            <li>
              <div class="overlay">
                <a href="#"><img src={suikastci} alt="suikastci" /></a>
                  <div class="middle">
                    <div class="text">Assassin's Creed </div>
                  </div>
              </div>
            </li>
            <li>
              <div class="overlay">
                <a href="#"><img src={bigbang} alt="bigbang" /></a>
                  <div class="middle">
                    <div class="text">The BigBang Theory </div>
                  </div>
              </div>
            </li>
             <li>
              <div class="overlay">
                <a href="#"><img src={vikings} alt="vikings" /></a>
                  <div class="middle">
                    <div class="text">Vikings </div>
                  </div>
              </div>
            </li>
            <li>
              <div class="overlay">
                <a href="#"><img src={olumculdeney} alt="olumculdeney" /></a>
                  <div class="middle">
                    <div class="text">Resident Evil </div>
                  </div>
              </div>
            </li>
          </ul>
        </div>
      <div className="movietext">
        <span>DİZİLER</span>
              </div>
        <div className="movies">
          <ul className="cards">
            <li>
              <div class="overlay">
                <a href="#"><img src={masum} alt="masum" /></a>
                  <div class="middle">
                    <div class="text">Masum </div>
                  </div>
              </div>
            </li>
            <li>
              <div class="overlay">
                <a href="#"><img src={shameless} alt="shameless" /></a>
                  <div class="middle">
                    <div class="text">Shameless </div>
                  </div>
              </div>
            </li>
            <li>
              <div class="overlay">
                <a href="#"><img src={vfor} alt="vandetta" /></a>
                  <div class="middle">
                    <div class="text">V For Vandetta </div>
                  </div>
              </div>
            </li>
            <li>
              <div class="overlay">
                <a href="#"><img src={youngpope} alt="youngpope" /></a>
                  <div class="middle">
                    <div class="text">The Young Pope </div>
                  </div>
              </div>
            </li>
            <li>
              <div class="overlay">
                <a href="#"><img src={eleven} alt="11.22.63" /></a>
                  <div class="middle">
                    <div class="text">11.22.63 </div>
                  </div>
              </div>
            </li>
            <li>
              <div class="overlay">
                <a href="#"><img src={sıfırbir} alt="sıfırbir" /></a>
                  <div class="middle">
                    <div class="text">Sıfır Bir </div>
                  </div>
              </div>
            </li>
            <li>
              <div class="overlay">
                <a href="#"><img src={vikings} alt="vikings" /></a>
                  <div class="middle">
                    <div class="text">Vikings </div>
                  </div>
              </div>
            </li>
            <li>
              <div class="overlay">
                <a href="#"><img src={olumculdeney} alt="olumculdeney" /></a>
                  <div class="middle">
                    <div class="text">Resident Evil </div>
                  </div>
              </div>
            </li>
            <li>
              <div class="overlay">
                <a href="#"><img src={olumculdeney} alt="olumculdeney" /></a>
                  <div class="middle">
                    <div class="text">Resident Evil </div>
                  </div>
              </div>
            </li>
          </ul>
        </div>
        </div>
  )
}
export default sections
