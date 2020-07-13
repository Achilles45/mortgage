<template>
  <div class="footer">
      <div class="main__footer">
          <div class="container">
          <div class="row">
              <div class="col-md-4">
                  <img src="../assets/images/logo-2.png" class="footer__logo" alt=""><br><br>
                  <p>564, Manon road, F1 456 Caron Town.</p>
                  <p>Office No 3456</p>
                  <p>info@example.com</p>
                  <p>234-5825852763</p>
              </div>
             <div class="col-md-4">
                 <div class="row">
                      <div class="col-md-6">
                  <h3>Useful Links</h3>
                  <ul>
                      <li><router-link to="/">Home</router-link></li>
                      <li><router-link to="/">About Us</router-link></li>
                      <li><router-link to="/">Contact Us</router-link></li>
                      <li><router-link to="/">Products</router-link></li>
                  </ul>
              </div>
              <div class="col-md-6">
                  <h3>About Us</h3>
                  <ul>
                      <li><router-link to="/">About Us</router-link></li>
                      <li><router-link to="/">Contact Us</router-link></li>
                      <li><router-link to="/">Sign In</router-link></li>
                      <li><router-link to="/">Create Account</router-link></li>
                  </ul>
              </div>
                 </div>
             </div>
             <div class="col-md-4">
                     <h3>Contact Us</h3>
                     <p>Our E-Banking in the most poular in the world Many desktop publishing packages and web page editors now use thei.</p>
                 </div>
          </div>
      </div>
      </div>
      <div class="footer__bottom">
          <div class="container">
              <div class="content d-flex justify-content-between">
                  <p><router-link to="/">See Our Terms & Conditions</router-link></p>
              <p>&copy;2020 Mortgage Bank of Texas. All rights reserved</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer{
    @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
    .main__footer{
        padding: 6rem 0;
        background: url('../assets/images/footer-bg.png');
        background-position: center;
        background-size: cover;
        color: #fff;
        h3{
            padding-bottom: 2rem;
            font-family: 'Poppins';
            font-weight: bold;
            font-size: 1.4rem;
        }
        a{
            color: #fff;
            line-height: 2.4;
        }
        p{
            line-height: 1.8;
        }
    }

    .footer__bottom{
        background: #fff;
        color: #333;
        padding-top: 1.5rem;
        a{
            color: #333;
            text-decoration: none;
            font-weight: 400;
        }
    }
}
</style>