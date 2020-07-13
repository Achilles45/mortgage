<template>
  <div class="pricing">
      <div class="container">
          <div class="row">
              <div class="col-md-2"></div>
              <div class="col-md-8 text-center">
                  <h5>Investment Plans</h5>
                  <h1>Grab Our Mega Investment Package</h1>
                  <p>You have the option to grow your money with us through our well managed investment vehicle where we deploy capital into high interest yielding and safe investment opportunities for monthly returns.</p>
              </div>
              <div class="col-md-2"></div>
          </div>
          <div class="pricing__wrapper">
              <div class="pricing__card">
                  <div class="header text-center">
                      <h4>5.50%</h4>
                      <p>Monthly</p>
                      <hr>
                      <h5>BASIC PLAN</h5>
                  </div>
                  <div class="pricing__body text-center">
                      <h6>Maximum Deposit: $5,000.00</h6>
                      <h6>Manimum Deposit: $1,000.00</h6>
                      <h6>Real time Updates</h6>
                       <div class="button__holder pt-5">
                          <router-link to="/" class="pricing__btn">Invest Now</router-link>
                      </div>
                  </div>
              </div>
               <div class="pricing__card">
                  <div class="header text-center">
                      <h4>7.50%</h4>
                      <p>Monthly</p>
                      <hr>
                      <h5>STANDARD PLAN</h5>
                  </div>
                  <div class="pricing__body text-center">
                      <h6>Maximum Deposit: $10,000.00</h6>
                      <h6>Manimum Deposit: $5,000.00</h6>
                      <h6>Real time Updates</h6>
                       <div class="button__holder pt-5">
                          <router-link to="/" class="pricing__btn">Invest Now</router-link>
                      </div>
                  </div>
              </div>
               <div class="pricing__card">
                  <div class="header text-center">
                      <h4>10.0%</h4>
                      <p>Monthly</p>
                      <hr>
                      <h5>PREMIUM PLAN</h5>
                  </div>
                  <div class="pricing__body text-center">
                      <h6>Maximum Deposit: $100,000.00</h6>
                      <h6>Manimum Deposit: $10,000.00</h6>
                      <h6>Real time Updates</h6>
                      <div class="button__holder pt-5 pb-3">
                          <router-link to="/" class="pricing__btn">Invest Now</router-link>
                      </div>
                  </div>
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
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
@import '../assets/styles/_colors';
.pricing{
    background: #FAFAFA;
    padding: 4rem 0;
    h1{
        color: #2b2b2b;
        font-weight: bold;
    }
    p{
        line-height: 1.7;
        padding-top: 1rem;
        color: #627081;
    }
    h5{
        color: #2b2b2b;
        opacity: .7;
    }
    .pricing__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 30px;
        margin-top: 3rem;
        .pricing__card{
            box-shadow: rgba(71,72,121,0.15) 1px 5px 20px 0px;
            cursor: pointer;
             &:hover{
                  transform: translateY(-10px);
                  transition: all ease-in-out .5s;
              }
            .header{
                background: $primary-color;
                padding: 3rem;
                color: #fff;
                h4{
                    font-weight: bolder;
                    font-family: 'Poppins' !important;
                    font-size: 1.5rem;
                }
                h5{
                    color: #fff !important;
                    opacity: 1 !important;
                    font-family: 'Poppins' !important;
                    font-weight: bolder;
                    font-size: 1.5rem;
                }
                p{
                    font-size: 1rem;
                    font-family: 'Poppins' !important;
                    color: #fff;
                }
                hr{
                    background: #fff;
                }
            }
            .pricing__body{
                padding: 3rem;
                h6{
                    border-bottom: 1px dashed #333 !important;
                    border-width: 50% !important;
                    line-height: 2.5;
                    color: #627081;
                }
                .pricing__btn{
                    background: $primary-color;
                    text-decoration: none;
                    color: #fff;
                    padding: 1rem 2rem;
                    border-radius: 3px;
                    &:hover{
                        background: $secondary-color;
                    }
                }
            }
        }
    }
}
</style>