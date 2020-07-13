<template>
  <div class="features">
      <div class="container">
          <div class="row">
              <div class="col-md-2"></div>
              <div class="col-md-8 text-center">
                  <h1>Presenting Banking Plan & Services That are Right For You</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, quas?</p>
              </div>
               <div class="col-md-2"></div>
          </div>
          <div class="row">
              <!-- <div class="col-md-1"></div> -->
              <div class="col-12">
                  <div class="features__wrapper">
              <div class="features__card">
                  <img src="../assets/images/icon6.png" class="features__icons img-fluid" alt="">
                  <h5>Online Banking</h5>
                  <hr>
                  <p>You can use any of our products and services from a mobile device as we are completely a digital bank.</p>
              </div>
              <div class="features__card">
                  <img src="../assets/images/icon5.png" class="features__icons img-fluid" alt="">
                  <h5>Business Plan</h5>
                  <hr>
                  <p>Our professionals help our corporate clients to prepare business plans that are feasible and bankable at an affordable price.</p>
              </div>
              <div class="features__card">
                  <img src="../assets/images/icon8.png" class="features__icons img-fluid" alt="">
                  <h5>Credit Card</h5>
                  <hr>
                  <p>We offer credit cards that allow you to explore online payments in partnership with visa and mastercard.</p>
              </div>
              <div class="features__card">
                  <img src="../assets/images/icon4.png" class="features__icons img-fluid" alt="">
                  <h5>Housing Financing</h5>
                  <hr>
                  <p>Mortgages is our primary business. Our rates are the best in the whole of America. We help you own your dream home without breaking the bank.</p>
              </div>
               <div class="features__card">
                  <img src="../assets/images/icon7.png" class="features__icons img-fluid" alt="">
                  <h5>Online Deposits</h5>
                  <hr>
                  <p>You can make deposits into your account by directly transfer from either another bank or account to your account with us in seconds.</p>
              </div>
              <div class="features__card">
                  <img src="../assets/images/icon9.png" class="features__icons img-fluid" alt="">
                  <h5>Income Monitoring</h5>
                  <hr>
                  <p>Our engineering department is building a tool to help you visualize how you manage your income and expenses with us.</p>
              </div>
          </div>
              </div>
              <!-- <div class="col-md-1"></div> -->
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
@import '../assets/styles/_colors';
.features{
    background: #FAFAFA;
    padding: 4rem 0;
    h1{
        font-weight: bold;
        color: $primary-color;
        font-family: 'Poppins' !important;
    }
    .features__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 20px;
        margin-top: 3rem;
        .features__card{
            box-shadow: rgba(71,72,121,0.15) 1px 5px 20px 0px;
            background: #fff;
            // text-align: center;
            padding: 2rem 2.5rem;
            border-radius: 4px;
            .features__icons{
                max-width: 80px;
                height: auto;
            }
            h5{
                padding-top: 1rem;
                color: #2b2b2b;
                font-weight: 400;
                padding-top: 2rem;
            }
            p{
                color: #627081;
                line-height: 2;
                opacity: .8;
                font-size: .95rem;
            }
        }
    }
}
</style>