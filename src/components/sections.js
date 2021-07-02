import React from 'react'
import '../style/sections.css'
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
import ellipse from '../assets/Ellipse 1.png';

function sections() {
  return (
    <div className="main-section">
      <div className="movietext">
        <span>FİLMLER</span>
      </div>
      <div className="movies">
        <div className="cards">
          <div className="list">
            <div className="overlay">
              <a href="#"><img src={olumculdeney} alt="olumculdeney" /></a>
                <div className="middle">
                  <div className="favorite">
                    <a href="#"><img src={ellipse}/></a>
                    <a className="icon" href="#"><i class="fas fa-plus"></i></a>
                  </div>
                  <div className="text">Resident Evil</div>
                </div>
            </div>
          </div>
            <div className="list">
              <div className="overlay">
                <a href="#"><img src={hannibal} alt="hannibal" /></a>
                  <div className="middle">
                    <div className="favorite">
                        <a href="#"><img src={ellipse}/></a>
                        <a className="icon" href="#"><i class="fas fa-plus"></i></a>
                    </div>
                    <div className="text">Hannibal </div>
                  </div>
              </div>
            </div>
            <div className="list">
               <div className="overlay">
                <a href="#"><img src={hiddet} alt="hiddet" /></a>
                  <div className="middle">
                    <div className="favorite">
                        <a href="#"><img src={ellipse}/></a>
                        <a className="icon" href="#"><i class="fas fa-plus"></i></a>
                    </div>
                    <div className="text">Fury </div>
                  </div>
              </div>
            </div>
            <div className="list">
               <div className="overlay">
                <a href="#"><img src={itirazımvar} alt="itirazımvar" /></a>
                  <div className="middle">
                    <div className="favorite">
                        <a href="#"><img src={ellipse}/></a>
                        <a className="icon" href="#"><i class="fas fa-plus"></i></a>
                    </div>
                    <div className="text">İtirazım Var </div>
                  </div>
              </div>
            </div>
            <div className="list">
              <div className="overlay">
                <a href="#"><img src={kotukedi} alt="kotukedi" /></a>
                  <div className="middle">
                    <div className="favorite">
                        <a href="#"><img src={ellipse}/></a>
                        <a className="icon" href="#"><i class="fas fa-plus"></i></a>
                    </div>
                    <div className="text">Kötü Kedi Şerafettin</div>
                  </div>
              </div>
            </div>
            <div className="list">
              <div className="overlay">
                <a href="#"><img src={suikastci} alt="suikastci" /></a>
                  <div className="middle">
                    <div className="favorite">
                        <a href="#"><img src={ellipse}/></a>
                        <a className="icon" href="#"><i class="fas fa-plus"></i></a>
                    </div>
                    <div className="text">Assassins Creed</div>
                  </div>
              </div>
            </div>
            <div className="list">
              <div className="overlay">
                <a href="#"><img src={bigbang} alt="bigbang" /></a>
                  <div className="middle">
                    <div className="favorite">
                        <a href="#"><img src={ellipse}/></a>
                        <a className="icon" href="#"><i class="fas fa-plus"></i></a>
                    </div>
                    <div className="text">The BigBang Theory </div>
                  </div>
              </div>
            </div>
             <div className="list">
              <div className="overlay">
                <a href="#"><img src={vikings} alt="vikings" /></a>
                  <div className="middle">
                    <div className="favorite">
                        <a href="#"><img src={ellipse}/></a>
                        <a className="icon" href="#"><i class="fas fa-plus"></i></a>
                    </div>
                    <div className="text">Vikings </div>
                  </div>
              </div>
            </div>
            <div className="list">
              <div className="overlay">
                <a href="#"><img src={olumculdeney} alt="olumculdeney" /></a>
                  <div className="middle">
                    <div className="favorite">
                        <a href="#"><img src={ellipse}/></a>
                        <a className="icon" href="#"><i class="fas fa-plus"></i></a>
                    </div>
                    <div className="text">Resident Evil </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
        <div className="movietext">
          <span>DİZİLER</span>
        </div>
        <div className="movies">
          <div className="cards">
            <div className="list">
              <div className="overlay">
                <a href="#"><img src={masum} alt="masum" /></a>
                  <div className="middle">
                    <div className="favorite">
                        <a href="#"><img src={ellipse}/></a>
                        <a className="icon" href="#"><i class="fas fa-plus"></i></a>
                    </div>
                    <div className="text">Masum </div>
                  </div>
              </div>
            </div>
            <div className="list">
              <div className="overlay">
                <a href="#"><img src={shameless} alt="shameless" /></a>
                  <div className="middle">
                    <div className="favorite">
                        <a href="#"><img src={ellipse}/></a>
                        <a className="icon" href="#"><i class="fas fa-plus"></i></a>
                    </div>
                    <div className="text">Shameless </div>
                  </div>
              </div>
            </div>
            <div className="list">
              <div className="overlay">
                <a href="#"><img src={vfor} alt="vandetta" /></a>
                  <div className="middle">
                    <div className="favorite">
                        <a href="#"><img src={ellipse}/></a>
                        <a className="icon" href="#"><i class="fas fa-plus"></i></a>
                    </div>
                    <div className="text">V For Vandetta </div>
                  </div>
              </div>
            </div>
            <div className="list">
              <div className="overlay">
                <a href="#"><img src={youngpope} alt="youngpope" /></a>
                  <div className="middle">
                    <div className="favorite">
                        <a href="#"><img src={ellipse}/></a>
                        <a className="icon" href="#"><i class="fas fa-plus"></i></a>
                    </div>
                    <div className="text">The Young Pope </div>
                  </div>
              </div>
            </div>
            <div className="list">
              <div className="overlay">
                <a href="#"><img src={eleven} alt="11.22.63" /></a>
                  <div className="middle">
                    <div className="favorite">
                        <a href="#"><img src={ellipse}/></a>
                        <a className="icon" href="#"><i class="fas fa-plus"></i></a>
                    </div>
                    <div className="text">11.22.63 </div>
                  </div>
              </div>
            </div>
            <div className="list">
              <div className="overlay">
                <a href="#"><img src={sıfırbir} alt="sıfırbir" /></a>
                  <div className="middle">
                    <div className="favorite">
                        <a href="#"><img src={ellipse}/></a>
                        <a className="icon" href="#"><i class="fas fa-plus"></i></a>
                    </div>
                    <div className="text">Sıfır Bir </div>
                  </div>
              </div>
            </div>
            <div className="list">
              <div className="overlay">
                <a href="#"><img src={vikings} alt="vikings" /></a>
                  <div className="middle">
                    <div className="favorite">
                        <a href="#"><img src={ellipse}/></a>
                        <a className="icon" href="#"><i class="fas fa-plus"></i></a>
                    </div>
                    <div className="text">Vikings </div>
                  </div>
              </div>
            </div>
            <div className="list">
              <div className="overlay">
                <a href="#"><img src={olumculdeney} alt="olumculdeney" /></a>
                  <div className="middle">
                    <div className="favorite">
                        <a href="#"><img src={ellipse}/></a>
                        <a className="icon" href="#"><i class="fas fa-plus"></i></a>
                    </div>
                    <div className="text">Resident Evil </div>
                  </div>
              </div>
            </div>
            <div className="list">
              <div className="overlay">
                <a href="#"><img src={olumculdeney} alt="olumculdeney" /></a>
                  <div className="middle">
                    <div className="favorite">
                        <a href="#"><img src={ellipse}/></a>
                        <a className="icon" href="#"><i class="fas fa-plus"></i></a>
                    </div> 
                    <div className="text">Resident Evil </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default sections
