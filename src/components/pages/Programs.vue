<template>
  <v-container fluid id="programs">
    <v-layout row wrap>

      <v-flex xs12 id="programs__jumbotron">
        <v-layout row wrap>
          <v-flex md7 sm7 xs7>
            <div id="content">
              <v-layout row wrap>
                <v-flex md3 id="content__block">
                </v-flex>
                <v-flex md9 id="text">
                  <h1>Our Programs</h1>
                  <p>We aim to create a better future generation for Indonesia, create new leaders in the field of computer science and to improve people’s lives through Computer Science education.</p>
                  <button-square
                    text="Know More"
                    color="#000"
                    hover="#fff"
                    v-scroll-to="'#our-program'"
                    medium="true"
                  />
                </v-flex>
              </v-layout>
            </div>
          </v-flex>
          <v-flex md5 sm5 xs5>
            <v-layout row wrap id="programs__photo-wrapper">
              <v-flex xs12 class="programs__jumbotron-photo">
                <img src="./../../assets/camp.jpg" alt="">
              </v-flex>
              <v-flex xs12 class="programs__jumbotron-photo">
                <img src="./../../assets/program.jpg" alt="">
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs12 id="our-program">
        <v-flex xs12 class="text">
          <h2 class="content__smalltitle">Our Program</h2>
          <h1 class="content__title">Leadership Development Program</h1>
          <p>Our program objectives are to create top tech-talented candidates with job opportunities where they would be able to innovate, lead, and create positive results, as well as to help to grow the local industry and society with supply of top tech-talents.</p>
        </v-flex>
        <v-flex xs12>
          <v-layout row wrap>
            <v-flex xs12 class="program-item">
              <v-layout row wrap>
                <v-flex sm4 class="program-photo">
                  <img src="./../../assets/camp.jpg" alt="">
                </v-flex>
                <v-flex sm8 class="program-content">
                  <h1>01</h1>
                  <h2>Capacity Building</h2>
                  <p>Enable scholars to identify and recognize their leadership talent and gain clarity about their purpose and values.</p>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12 class="program-item">
              <v-layout row wrap>
                <v-flex sm4 class="program-photo">
                  <img src="./../../assets/women.jpg" alt="">
                </v-flex>
                <v-flex sm8 class="program-content">
                  <h1>02</h1>
                  <h2>Exposure & Recognition</h2>
                  <p>Encourage scholars to build up their professional experience and portfolio.</p>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12 class="program-item">
              <v-layout row wrap>
                <v-flex sm4 class="program-photo">
                  <img src="./../../assets/viral.jpg" alt="">
                </v-flex>
                <v-flex sm8 class="program-content">
                  <h1>03</h1>
                  <h2>Viral Leadership</h2>
                  <p>Lead and influence others. Job of a leader is to leave behind other leaders.</p>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-flex>

      <v-flex xs12 id="program-scholarship">
        <v-layout row wrap>
          <v-flex md7 sm7 xs7 class="text">
            <h2 class="content__smalltitle">Our Program</h2>
            <h1 class="content__title">Scholarship Program</h1>
            <p>A four-year scholarship and leadership development program for computer science undergraduate at University of Indonesia (UI) and Bandung Institute of Technology (ITB).</p>
            <br><br>
          </v-flex>

          <v-flex md5 sm5 xs5 id="click-here">
            <router-link to="/apply#info">
              <p>For application<br>information:</p>
              <h1>Click Here</h1>
            </router-link>
          </v-flex>

        </v-layout>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import ButtonSquare from './../partials/ButtonSquare.vue';

export default {
  name: 'Programs',
  components: {
    ButtonSquare,
  },
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/contents.scss';

#programs {
  padding: 0;
}

#programs__jumbotron {
  height: 100vh;

  > .layout {
    height: 100vh;
  }
  #content {
    #content__block {
      background-color: $blue;
      height: 100vh;
    }
    #text {
      padding: 30vh 9vw 0 5vw;
      color: black;
      h1 {
        font-size: 3.5vw;
        padding-bottom: 2vh;
      }
      p {
        padding-bottom: 4vh;
        font-size: 1.5vw;
        color: black;
      }
    }
  }
  #programs__photo-wrapper {
    height: 100vh;

    .programs__jumbotron-photo {
      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
  }
}

#our-program {
  padding: 0 20vw 10vh 20vw;
  background-color: #ECF7FD;
  
  p {
    font-size: 1vw;
  }

  .program-item {
    padding: 0;
    background-color: white;
    margin-bottom: 1vh;
    h1 {
      font-size: 6vw;
      color: $blue;
    }
    h2 {
      font-weight: bold;
      font-size: 1.5vw;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1vw;
    }
    .program-photo {
      padding: 0;
      justify-content: center;
      overflow: hidden;
      img {
        object-fit: cover;
        height: 100%;
        max-width: 100%;
      }
    }
    .program-content {
      padding: 2vw;
    }
  }
}

#program-scholarship {
  padding: 0 0 0 20vw;

  p {
    font-size: 1vw;
  }

  .text {
    padding-right: 5vw;
  }
  #program-scholarship__list {
    height: 100%;
  }

  #click-here {
    background-color: #012EA3;
    position: relative;
    a {
      position: absolute;
      padding: 4vw;
      height: 100%;
      width: 100%;
      color: white;
    }
    p {
      font-size: 1vw;
    }
    h1 {
      font-size: 3vw;
    }
  }
}

@media screen and (max-width: 1025px) {

  #programs__jumbotron {
    #content {
      // #content__block {
      //   display: none;
      // }
      #text {
        color: black;
        h1 {
          font-size: 4.3vh;
        }
        p {
          font-size: 2vh;
          line-height: 3vh;
        }
      }
    }
  }

  #our-program {
    p {
      font-size: 1.3vw;
      line-height: 2.3vw;
    }

    .program-item {
      h1 {
        font-size: 6vh;
        padding: 2vh 3vw;
      }
      h2 {
        font-size: 3vh;
        padding: 0 3vw;
      }
      p {
        font-size: 1.3vw;
        padding: 0 3vw;
      }
    }
  }

  #program-scholarship {
    p {
      font-size: 1.3vw;
      line-height: 2.3vw;
    }
    #click-here {
      p {
        font-size: 1.5vw;
        line-height: 3.5vh;
      }
      h1 {
        font-size: 3.5vw;
      }
    }
  }
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (max-width: 1024px) and (orientation: landscape) {
  
}

@media screen and (max-width: 1024px) and (orientation: portrait) {
  #programs__jumbotron {
    >div >div {
      flex-basis: 100%;
      max-width: 100%;
    }
    #content {
      #content__block {
        display: none;
      }
      #text {
        padding: 20vh 10vw 0 10vw;
        color: black;
        h1 {
          font-size: 4.3vh;
        }
        p {
          font-size: 2vh;
          line-height: 3vh;
        }
      }
    }
    #programs__photo-wrapper {
      height: 100%;

      .programs__jumbotron-photo {
        height: 100%;
      }
      .programs__jumbotron-photo:first-child{
        display: none;
      }
    }
  }

  #our-program {
    padding-right: 10vw;
    padding-left: 10vw;

    p {
      font-size: 2vh;
      line-height: 3vh;
    }

    .program-item {
      h1 {
        font-size: 6vh;
        padding: 2vh 3vw;
      }
      h2 {
        font-size: 3vh;
        padding: 0 3vw;
      }
      p {
        font-size: 2vh;
        padding: 0 3vw;
      }
    }
  }

  #program-scholarship {
    padding: 0;

    p {
      font-size: 2vh;
      line-height: 2.5vh;
    }

    .text {
      padding: 0 10vw;
      flex-basis: 100%;
      max-width: 100%;
    }
    #program-scholarship__list {
      height: 100%;
    }

    #click-here {
      flex-basis: 100%;
      max-width: 100%;
      padding: 5vh 12vw;
      position: static;
      a {
        position: static;
        color: white;
      }
      p {
        font-size: 3vh;
        line-height: 3.5vh;
      }
      h1 {
        font-size: 6vh;
      }
    }
  }
}
</style>
