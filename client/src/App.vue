<template>
  <v-app>
    <v-app-bar app height="70">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <div class="hidden-sm-and-down">
        <v-btn text class="black--text font-weight-black">About Us</v-btn>
        <v-btn text class="black--text font-weight-black">Gallery</v-btn>
        <v-btn text class="black--text font-weight-black">Crew</v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-sheet
        class="d-flex red darken-2"
        width="300"
        style="justify-content: center; align-items: center"
      >
        <v-toolbar-title>
          <img src="segelteam.png" class="hidden-xs-only" height="63" />
        </v-toolbar-title>
        <h2 class="hidden-xs-only display-5 white--text font-weight-light">
          <span class="white--text font-weight-black">SEGEL</span>TEAM
        </h2>
      </v-sheet>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute left temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>ABOUT US</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>GALLERY</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>CREW</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <div class="all">
        <v-img src="picture.jpg" width="100%" height="500px"> </v-img>
        <div class="ok"></div>
        <div
          style="
            width: 40%;
            position: absolute;
            right: 0;
            top: 0;
            margin: 20px;
            text-align: center;
          "
        >
          <h1 class="red--text text--lighten-5">NEWS HEADLINE</h1>
          <p class="white--text text-uppercase">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="left pa-5 mb-0 pb-0">
          <div style="position: absolute; bottom: 0">
            <v-icon medium>mdi-calendar-month</v-icon
            ><span class="body-2 ml-2">23 MAI 2021</span>
            <h3 class="red--text">NEWS HEADLINE</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="middle pa-5 mb-0 pb-0">
          <div style="position: absolute; bottom: 0">
            <v-icon medium color="white">mdi-calendar-month</v-icon
            ><span class="body-2 white--text ml-2">23 MAI 2021</span>
            <h3 class="red--text">NEWS HEADLINE</h3>
            <p class="white--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div class="right pa-5 mb-0 pb-0">
          <div style="position: absolute; bottom: 0">
            <h1>17 MAI</h1>
            <h3 class="text--red">HEADLINE BEITRAG 2021</h3>
            <span class="subtitle-1">SUBTITLE</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <v-container text-center justify-center class="mt-10">
        <h1>HEADLINE - LOREM IPSUM</h1>
        <span class="subtitle-1 font-weight-bold">SUBTITLE LOREM IPSUM</span>
        <v-divider width="500" class="mx-auto mt-4 dark"></v-divider>
        <v-row class="mt-10" style="text-align: left">
          <v-col cols="6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            tempore sunt debitis sapiente accusantium incidunt dolore quis.
            Cupiditate in, harum ullam nesciunt placeat quia aliquam illo veniam
            corporis. Ea, iste.Lorem ipsum dolor sit amet consectetur.
            <br />
            <br />
            adipisicing elit. Eveniet tempore sunt debitis sapiente accusantium
            incidunt dolore quis. Cupiditate in, harum ullam nesciunt placeat
            quia aliquam illo veniam corporis. Ea, iste.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eveniet tempore sunt debitis
            sapiente accusantium incidunt dolore quis. Cupiditate in, harum
            ullam nesciunt placeat quia aliquam illo veniam corporis. Ea,
            iste.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet tempore sunt debitis sapiente accusantium incidunt dolore
            quis. Cupiditate in, harum ullam nesciunt placeat quia aliquam illo
            veniam corporis. Ea, iste.
          </v-col>
          <v-col cols="6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            tempore sunt debitis sapiente accusantium incidunt dolore quis.
            Cupiditate in, harum ullam nesciunt placeat quia aliquam illo veniam
            corporis. Ea, iste.Lorem ipsum dolor sit amet consectetur
            <br />
            <br />
            adipisicing elit. Eveniet tempore sunt debitis sapiente accusantium
            incidunt dolore quis. Cupiditate in, harum ullam nesciunt placeat
            quia aliquam illo veniam corporis. Ea, iste.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eveniet tempore sunt debitis
            sapiente accusantium incidunt dolore quis. Cupiditate in, harum
            ullam nesciunt placeat quia aliquam illo veniam corporis. Ea,
            <br />
            <br />
            iste.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet tempore sunt debitis sapiente accusantium incidunt dolore
            quis. Cupiditate in, harum ullam nesciunt placeat quia aliquam illo
            veniam corporis. Ea, iste.
          </v-col>
        </v-row>
      </v-container>
      <v-container class="mt-10 black" text-center justify-center fluid>
        <h1 class="white--text">UNSER TEAM</h1>
        <span class="subtitle-1 font-weight-bold white--text"
          >SUBTITLE VON UNSEREM TEAM</span
        >
        <v-divider width="500" class="mx-auto mt-4" color="white"></v-divider>

        <v-tabs
          class="mt-16"
          background-color="transparent"
          color="white"
          dark
          centered
          v-model="tab"
        >
          <v-tab v-for="p of picker" :key="p">{{ p }}</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" class="ma-0 pa-0 transparent">
          <v-tab-item v-for="item in picker" :key="item">
            <v-container
              class="d-flex flex-wrap mt-10"
              style="justify-content: center"
              fluid
            >
              <v-card
                v-for="(c, i) of computedData"
                :key="c.name"
                :max-width="c.show ? 500 : 250"
                class="justify-center"
              >
                <v-row v-if="c.visible">
                  <v-col :cols="c.show ? 6 : 12" class="mr-0 pr-0 pl-0">
                    <v-img
                      :src="c.image"
                      :gradient="
                        !c.show
                          ? 'to top right, rgba(0,0,0,.33), rgba(0,0,0,.7)'
                          : ''
                      "
                      width="250"
                      height="200"
                      @mouseover="showDetails(c, i, 'over')"
                      @mouseout="showDetails(c, i, 'leave')"
                    ></v-img>
                  </v-col>
                  <v-col cols="6" v-if="c.show" class="ml-0 pl-0">
                    <v-sheet
                      style="background: #e5eaee; position:relative;"
                      height="200"
                      class="pa-2"
                      width="250"
                    >
                      <div class=" pl-0 pa-2 mr-2" style="position:absolute; bottom: 0; ">
                        <h2>{{ c.name }}</h2>
                        <p>A smooth sea never made a skilled sailor</p>
                      </div>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-card>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
        <v-btn
          @click="limit = null"
          v-if="limit != null"
          outlined
          color="white"
          class="my-10"
          >Load more</v-btn
        >
        <v-btn
          @click="limit = 5"
          v-if="limit == null"
          outlined
          color="white"
          class="mt-10"
          >Load less</v-btn
        >
      </v-container>
      <v-app-bar height="50">
        <v-icon medium class="mr-5">mdi-copyright</v-icon>
        <span class="hidden-sm-and-down"
          >2021. Segel-Team. Alle Rechte vorbehalten</span
        >

        <v-spacer></v-spacer>
        <v-btn icon class="ml-16"><v-icon>mdi-twitter</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-facebook</v-icon></v-btn>
        <v-spacer></v-spacer>
        <v-btn text class="caption">Impressum</v-btn>
        <v-btn text class="caption">Datenschutz</v-btn>
        <v-btn text class="caption">Rechtliches</v-btn>
        <v-btn text class="caption">Copyright</v-btn>
      </v-app-bar>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',

  data: () => ({
    crew: [],
    drawer: false,
    group: false,
    limit: 10,
    picker: ['Show all', 'Trim', 'Tactic', 'helmsman'],
    tab: '',
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  created() {
    this.getCrew();
  },
  computed: {
    computedData() {
      return this.limit ? this.getDuty().slice(0, this.limit) : this.getDuty();
    },
  },

  methods: {
    getDuty() {
      switch (this.tab) {
        case 0:
          return this.crew;
        case 1:
          return this.crew.filter((el) =>
            el.duty_slugs.includes(this.picker[1].toLowerCase()),
          );

        case 2:
          return this.crew.filter((el) =>
            el.duty_slugs.includes(this.picker[2].toLowerCase()),
          );

        case 3:
          return this.crew.filter((el) =>
            el.duty_slugs.includes(this.picker[3].toLowerCase()),
          );

        default:
          return 'None';
      }
    },
    async getCrew() {
      let { data } = await axios({
        url: 'http://127.0.0.1:3000/crew',
        method: 'GET',
      });
      data = data.map((el) => ({ ...el, show: false, visible: true }));

      this.crew = data;
      console.log(this.crew);
    },
    showDetails(current, i, type) {
      if (type == 'over') {
        current.show = true;
        if (this.computedData[i + 1] != null) {
          this.computedData[i + 1].visible = false;
        } else {
          this.computedData[i - 1].visible = false;
        }
      } else {
        current.show = false;
        if (this.computedData[i + 1] != null) {
          this.computedData[i + 1].visible = true;
        } else {
          this.computedData[i - 1].visible = true;
        }
      }
    },
  },
};
</script>

<style>
.left {
  shape-outside: polygon(200px 300px, 300px 300px, 300px 0, 0 0);
  clip-path: polygon(380px 50px, 380px 300px, 00px 300px, 00px 0px);
  left: 0;
  bottom: 0;
  position: absolute;
  background: #e5eaee;
  height: 300px;
  width: 25%;
}
.all {
  position: relative;
}

.middle {
  shape-outside: polygon(200px 300px, 300px 300px, 300px 0, 0 0);
  clip-path: polygon(380px 50px, 380px 300px, 00px 300px, 00px 0px);
  left: 25%;
  bottom: 0;
  position: absolute;
  background: black;
  height: 250px;
  width: 25%;
}
.right {
  shape-outside: polygon(200px 300px, 300px 300px, 300px 0, 0 0);
  clip-path: polygon(760px 00px, 760px 300px, 00px 300px, 00px 100px);
  right: 0;
  bottom: 0;
  position: absolute;
  background: #e5eaee;
  height: 300px;
  width: 50%;
}
</style>
