<template>
  <div class="topbar d-none d-lg-block">
      <div class="container">
        <div class="row">
            <div class="col-md-3">
                <h6><img src="../assets/images/phone-icon.png" class="icon" alt=""> +5 (87) 8695-312</h6>
            </div>
            <div class="col-md-3">
                 <h6><img src="../assets/images/time-icon.png" class="icon" alt=""> Mon-Sat (10 AM - 6 PM)

</h6>
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
.topbar{
    background: $primary-color;
    color: #fff;
    padding-top: 1.2rem;
    padding-bottom: .6rem;
    font-size: .75rem;
    .fa-phone, .fa-envelope, .fa-cubes{
      margin-right: .5rem;
    }
    .icon{
      height: 20px;
      width: 20px;
    }
    h6{
      font-size: .9rem;
    }
}
</style>