<template>
  <div class="blog">
      <div class="container">
          <div class="row">
              <div class="col-12 text-center">
                  <h5>News</h5>
                  <h1>Your News And Information</h1>
              </div>
          </div>
          <div class="blog__wrapper">
              <div class="blog__card">
                  <div class="img__holder">
                      <img src="../assets/images/blog1.png" class="img-fluid" alt="">
                  </div>
                  <div class="blog__body">
                      <div class="top d-flex justify-content-between">
                          <div class="date">
                              <small><i class="fa fa-clock"></i> 30|06|2020</small>
                          </div>
                          <div class="type">
                              <small><i class="fa fa-cloud"></i> Business</small>
                          </div>
                      </div>
                      <div class="main__body">
                          <h4>How to invest and grow your money</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab distinctio hic optio ipsum similique illo?</p>
                          <div class="button__holder">
                              <router-link to="/" class="blog__btn">Read more</router-link>
                          </div>
                      </div>
                  </div>
              </div>
               <div class="blog__card">
                  <div class="img__holder">
                      <img src="../assets/images/blog2.png" class="img-fluid" alt="">
                  </div>
                  <div class="blog__body">
                      <div class="top d-flex justify-content-between">
                          <div class="date">
                              <small><i class="fa fa-clock"></i> 30|06|2020</small>
                          </div>
                          <div class="type">
                              <small><i class="fa fa-cloud"></i> Business</small>
                          </div>
                      </div>
                      <div class="main__body">
                          <h4>How secured is my investment.</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab distinctio hic optio ipsum similique illo?</p>
                          <div class="button__holder">
                              <router-link to="/" class="blog__btn">Read more</router-link>
                          </div>
                      </div>
                  </div>
              </div>
               <div class="blog__card">
                  <div class="img__holder">
                      <img src="../assets/images/blog3.png" class="img-fluid" alt="">
                  </div>
                  <div class="blog__body">
                      <div class="top d-flex justify-content-between">
                          <div class="date">
                              <small><i class="fa fa-clock"></i> 30|06|2020</small>
                          </div>
                          <div class="type">
                              <small><i class="fa fa-cloud"></i> Business</small>
                          </div>
                      </div>
                      <div class="main__body">
                          <h4>Do i need collateral to get loans?</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab distinctio hic optio ipsum similique illo?</p>
                          <div class="button__holder">
                              <router-link to="/" class="blog__btn">Read more</router-link>
                          </div>
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
@import '../assets/styles/_colors';
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
.blog{
    background: url('../assets/images/blog-bg.png');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    color: #fff;
    padding: 4rem 0;
    h1{
        font-weight: bolder;
        font-family: 'Poppins' !important;
    }
    h5{
        font-family: 'Poppins' !important;
        opacity: .8;
    }
    .blog__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 30px;
        margin-top: 3rem;
        .blog__card{
            .blog__body{
                background: #fff;
                padding: 3rem 3rem;
                p{
                    color: #627081;
                    padding-top: 1rem;
                    font-size: .9rem;
                    line-height: 1.8;
                    padding-bottom: 1rem;
                }
                h4{
                    color: $primary-color;
                    font-weight: bold;
                    font-family: 'Poppins' !important;
                    text-transform: capitalize;
                    line-height: 1.3;
                    font-size: 1.3rem;
                }
                .blog__btn{
                    background: $secondary-color;
                    padding: 1rem 2rem;
                    text-decoration: none;
                    color: #fff;
                    border-radius: 50px;
                }
                .top{
                    color: #627081;
                    padding-bottom: 1rem;
                }
            }
        }
    }
}
</style>