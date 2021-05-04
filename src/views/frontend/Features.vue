<template>
  <div class="container-fluid">
    <section class="d-md-flex flex-row-reverse justify-content-between">
      <div class="content-img mt-5">
        <img class="mt-5" src="https://scontent.ftpe8-3.fna.fbcdn.net/v/t1.18169-9/11152682_10152749042512344_241794126113912863_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=OyGu0Pp6D6gAX-WV0R3&_nc_ht=scontent.ftpe8-3.fna&oh=9b2fd9fd3063fc6f4e0dd2dfb394fd88&oe=60B1643F" style="width:100%" alt="">
      </div>
      <div class="content">
        <h2>IT ALL STARTED</h2>
        <h3>Established in 2000</h3>
        <p>Hot Toys Limited is a high-end collectible brand, devoted to designing, developing and producing high quality and highly detailed collectibles with authentic likeness. Initially started the business from producing 1/6th scale military action figures, Hot Toys has since expanded its product scope to specialize in 1/6th scale collectible figures from popular movies, video games, comics as well as world renowned celebrities.</p>
        <div class="content-img">
          <img src="https://2.bp.blogspot.com/-2RUhApbTCfc/VySUZ5HB-TI/AAAAAAAA3uk/C47qLs38FPg9GwELvAXhck6O7JW3MwWSgCLcB/s1600/pop1.jpg" width="100%" alt="">
        </div>
      </div>
    </section>
    <section class="text-center m-auto p-5 inner-content">
      <h2>THE QUALITY</h2>
      <h3>BETTER THAN BETTER</h3>
      <p>The Hot Toys quality is defined by movie-accuracy, authentic and detailed fully realized likeness, craftsmanship, high quality and details of the collectible figures. We focus on the collectibles as a whole, not only on the head sculpt, but also on the costume, weapons and accessories. Each piece of head sculpt of the final product is specially hand-painted.</p>
    </section>
    <section class="d-md-flex pb-5 my-5 align-items-center inner-content">
      <img class="inner-img" src="https://starwarsblog.starwars.com/wp-content/uploads/2017/01/hot-toys-howard-chan-1536x864-971555370790.jpg" alt="">
      <div class="p-5">
        <h2>SINCE 2003,</h2>
        <h3>TO INTERNATIONAL</h3>
        <p>Hot Toys has acquired the official merchandising rights in producing collectibles from international movies which includes Iron Man, The Avengers, Pirates of the Caribbean, Batman, The Dark Knight, Superman, Terminator Series, Aliens & Predator franchises as well as world famous celebrities such as King of Pop Michael Jackson, martial artist Bruce Lee, two-time Oscar winner for Best Actor Award Marlon Brando, American film icon James Dean, renowned movie actor and musician Leslie Cheung and Wong Ka Kui, the founding member of the Hong Kong rock band – Beyond.</p>
      </div>
    </section>
    <section class="d-md-flex flex-row-reverse pb-5 my-5 align-items-center inner-content">
      <img class="inner-img" src="https://www.hottoys.com.cn/wp-content/uploads/2017/12/08.jpg" alt="">
      <div class="px-5">
        <h2>WORLD WIDE</h2>
        <h3>FROM HONG KONG</h3>
        <p>The Hot Toys brand is widely acclaimed in different parts of the world with products sold by our strategic worldwide distributors to over 30 countries including the United States, Europe, Greater China, South East Asia, Japan, Korea and the Middle East.</p>
      </div>
    </section>
    <section class="text-center mb-5">
      <h2>START YOUR JOURNEY</h2>
      <router-link class="btn btn-danger btn-lg" to="/products">SHOP NOW</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'checkout',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding: 20px;
  h2 {
    font-size: 18px;
    letter-spacing: 4px;
    color: #00cc99;
    margin-top: 25px;
  }
  h3 {
    white-space: nowrap;
    // letter-spacing: 4px;
  }
  p {
    padding-right: 11%;
    margin: 20px 0 0;
  }
  .content-img {
    padding-top: 60px;
    width: calc(66% + 30px);
    margin: 0 auto;
    max-width: 390px;
  }
}
.inner-content {
  h2 {
    font-size: 18px;
    letter-spacing: 4px;
    color: #00cc99;
    margin-top: 25px;
  }
  h3 {
    font-size: 20px;
    letter-spacing: 4px;
  }
  p {
    margin: 20px 0 0;
  }
}
.inner-img {
  width: 50%;
}
@media (min-width:768px){
  .content-img {
    width: calc(50% - 25px);
  }
  .content {
    width: calc(50% - 25px);
    padding: 80px 0 0 12.5%;
    h3 {
      font-size: 36px;
      letter-spacing: 4px;
      margin-top: 25px;
    }
  }
}
@media (max-width: 768px) {
  .inner-img {
    width: 100%;
  }
}
</style>
