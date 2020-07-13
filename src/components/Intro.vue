<template>
  <div class="intro">
      <div class="container">
          <div class="row">
              <!-- <div class="col-md-2"></div> -->
              <div class="col-md-6 about__img__holder mt-5">
                  <img src="../assets/images/intro-img.png" class="img-fluid" alt=""><br><br>
              </div>
              <div class="col-md-6 text">
                   <div class="heading">
                    <h5>Banking For All</h5>
                  <h1><strong>Nothing is impossible. We can help you achieve your goals!</strong></h1>
              </div>
                  <p>The Mortgage Bank of Texas is your best partner of choice to provide you with access to long term and low interest housing financing solutions. Not only do we care about your housing, we also provide you with full fledge banking solutions.</p>
                  <div class="content">
                      <div class="content1 d-flex">
                          <div class="img__container mr-3">
                              <img src="../assets/images/icon10.png" alt="">
                          </div>
                          <p>All our processes and operations are completely paperless, so you can access all our services just from your mobile devices.</p>
                      </div><br>
                       <div class="content1 d-flex">
                          <div class="img__container2 mr-3">
                              <img src="../assets/images/icon2.png" alt="">
                          </div>
                          <p>Our repayment plan is very cheap and flexible to allow all our customers pay back loans with minimal effect.</p>
                      </div>
                  </div>
                  <router-link to="/about" class="about__btn">Read more</router-link>
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
@import '../assets/styles/_colors';
.intro{
    padding: 4.5rem 0;
    // background: #f5f5f5;
    z-index: -100;
    .about__img__holder::after{
        content: "";
        width: 200px;
        position: absolute;
        margin: 0 auto;
        height: 100%;
        width: 80%;
        background: $primary-color;
        border: 5px solid $primary-color;
        left: -20px;
        // right: 0;
        bottom: -50px;
        top: -30px;
        z-index: -10000 !important;
    }
    .text{
        .heading{
            h5{
                font-weight: 400;
                color: $primary-color;
                padding-bottom: 1rem;
                padding-top: 1rem;
            }
        h1{
            font-weight: 900;
            color: #2b2b2b;
            font-size: 2.8rem;
            padding-bottom: 1.5rem;
        }
    }
         p{
        color: #627081;
        line-height: 2;
        opacity: .8;
        font-size: .95rem;
        padding-bottom: 1rem;
    }
   .content{
       padding-bottom: 2rem;
        .img__container, .img__container2{
        background: $secondary-color;
        border-radius: 4px;
        height: 80px;
        width: 80px;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img__container2{
        background: $primary-color !important;
    }
   }
    .about__btn{
        background: $secondary-color;
        color: #fff;
        text-decoration: none;
        padding: 1.2rem 3rem;
        border-radius: 4px;
        font-size: .9rem;
        &:hover{
           background-image: linear-gradient(to right, $primary-color , $secondary-color);
           transition: all ease-in-out .5s !important;
        }
    }
    }
}

//Media queries
@media only screen and (max-width: 600px){
    .intro{
        padding: 4rem 0 !important;
        .about__img__holder::after{
        display: none !important;
    } 
    .text{
        .heading{
        h1{
            font-weight: 900;
            color: #2b2b2b;
            font-size: 2.3rem !important;
        }
    }
    }
    }
}
</style>