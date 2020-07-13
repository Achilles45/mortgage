<template>
  <div class="counter__wrapper">
     <div class="container">
          <div class="row">
                 <div class="col-12 text-center">
                     <h5>Why Choose Us</h5>
                     <h1>Offering You Amazing Benefits</h1>
                 </div>
             </div>
         <div class="counter__conter">
                  <div class="counter__card">
                  <!-- <img src="../assets/images/ship.svg" class="icons" alt=""> -->
                        <div class="counter" data-target="72000">0</div>
                        <h4>Customers</h4>
                        <h6>Customers very satisfied with us</h6>
                </div>
                <div class="counter__card">
                   <!-- <img src="../assets/images/bus.svg" class="icons" alt=""> -->
                        <div class="counter" data-target="4000">0</div>
                        <h4>Home Owners</h4>
                        <h6>We've empowered lots of home owners</h6>
                </div>
                <div class="counter__card">
                  <!-- <img src="../assets/images/track.svg" class="icons" alt=""> -->
                        <div class="counter" data-target="100000000">0</div>
                        <h4>Loans and Overdraft</h4>
                        <h6>Our customers enjoy the best interest rates in the country</h6>
                </div>
                <!-- <div class="counter__card">
                    <img src="../assets/images/house.svg" class="icons" alt="">
                        <div class="counter" data-target="3000">0</div>
                        <h5>Packages in our Warehouses</h5>
                </div> -->
         </div>
         <div class="row mt-5">
             <div class="col-12 text-center">
                 <router-link to="/" class="features__btn">Create An Account</router-link>
             </div>
         </div>
     </div>
  </div>
</template>
f
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.counter()
    },
    methods:{
        counter(){
            //Get all counters
            const counters = document.querySelectorAll('.counter');
            let speed = 2000;
            counters.forEach(counter =>{
                const updateCount = () =>{
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    const inc = target / speed;

                    if(count < target){
                        counter.innerText = count + inc;
                        setTimeout(() => {
                            updateCount()
                        }, 1);
                    }else {
                        count.innerText = target;
                    }
                }
                updateCount()
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
.counter__wrapper{
    background: url('../assets/images/counter-bg.png');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    padding: 7rem 0;
    color: #fff;
    h5{
        opacity: .8;
    }
    h1{
        font-weight: bolder;
        font-size: 3rem;
        font-family: 'Poppins' !important;
    }
    .counter__conter{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 30px;
        margin-top: 4rem;
        .counter__card{
            text-align: center;
            .icons{
                max-width: 50px;
                height: auto;
            }
            h4{
                font-weight: bold;
                padding-top: .5rem;
                padding-bottom: .5rem;
                font-size: 1.3rem;
                font-family: 'Poppins' !important;
            }
            h6{
                line-height: 1.4;
                font-size: 1.1rem;
                opacity: .8;
            }
             .counter{
                font-size: 2.8rem;
                padding-top: .8rem;
                font-weight: bolder;
                font-family: 'Poppins' !important;
            }
        }
    }
   .features__btn{
       color: #fff;
       border: 1px solid #fff;
       text-decoration: none;
       padding: 1.2rem 3rem;
   }
}
</style>