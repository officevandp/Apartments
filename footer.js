class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      
        this.innerHTML = `           
        <footer>
        <div class="footer-flex">
           
        <div>
            <h3>Restoran apartmani 401</h3>
                    <p><i class="fa fa-location-arrow" aria-hidden="true"></i> &nbsp; &nbsp;Pavlovića put 35</p>
                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp; &nbsp;76300 Bijeljina, Republika Srpska
                    </p>
            <p><i class="fa fa-phone light" aria-hidden="true"></i> &nbsp; &nbsp;<a href="tel:+38765167781">+387 65 167 781</a></p>    
        </div>
        <div>
            <h3>Kontakt</h3>
            <p><a href="mailto:giletrans@yahoo.ca" target="_blank">giletrans@yahoo.ca</a></p>
            <div class="social">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/sala401" target="_blank">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="fa-brands fa-facebook"></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/restoraniapartmani401/" target="_blank">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="fa-brands fa-instagram"></span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:giletrans@yahoo.ca" target="_blank">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="fa fa-envelope" aria-hidden="true"></span>
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="fab fa-viber"></span>
                        </a>
                        <!-- <a href="https://invite.viber.com/?g2=AQAh2PDtW6upFk%2B6pAof2u52l%2FE%2BCwsMfG472M2A9PMfVqhaHFg6DNsjbNsO%2FG2V">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="fab fa-viber"></span>
                        </a> -->
                    </li>
                    <li>
                        <a href="https://www.booking.com/Share-qGqqmL" target="_blank">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span><img class="span-svg-img" src="./imgs/bookingcom-1.svg"></span>
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    
        <div>
            <div class="footerLogo">
                <h3>Prijavite se na BESPLATNI Newsletter i uvek budite u toku sa novim dešavanjima!</h3>
                <div class="newsletter">
                    <br>
                    <form action="newsletter.php" method="post">
                        <input class="input-newsletter-disabled" type="mail" name="mail" required="" placeholder="E-mail">
                        <input style="display: none;" value="Newsletter" name="message">
                        <div class="newsletter-footer">
                            <input id="privacy-newsletter" type="checkbox" value="Privatnost">
                            <label class="label-footer-agreement" for="privacy">Želim da primam novosti.</label>
                        </div>
                        <br>
                        <div class="divBtnNewsletter">
                            <button disabled="" name="submit" id="disabledNewsletterBtn" class="input-newsletter-disabled" type="submit">Prijavi se</button>
                        </div>
                    </form>
                   
                </div>
                
            </div>        
        </div>
        
        </div>  
        <p id="copyright">Apartmani i restoran 401 Bijeljina. Sva prava zadržana.</p>
       </footer>
        `;
      }
    }
  customElements.define('footer-component', Footer);
