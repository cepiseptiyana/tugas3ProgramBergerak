<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tugas 3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="container">
        <p class="judul">
          <a class="Refresh" href="tabs/tugas3Page">Refresh</a>
        </p>
        <table class="center">
          <tr v-for="data in dataUsers">
            <td>
              <p style="font-size: 12px">rank</p>
              <p>{{ data.rank }}</p>
            </td>
            <td>
              <p style="font-size: 12px">{{ data.name }}</p>
              <p>{{ data.symbol }}</p>
            </td>
            <td style="padding-right: 60px">
              <p style="font-size: 12px">USD</p>
              <p>{{ data.price_usd }}</p>
            </td>
          </tr>
        </table>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

import { defineComponent } from "vue";
import EndPointAccess from "@/service";

export default defineComponent({
  name: "Tugas3",
  data() {
    return {
      dataUsers: null,
    };
  },
  mounted() {
    new EndPointAccess("https://api.coinlore.net/api/tickers/")
      .getResponse()
      .then((response) => (this.dataUsers = response.data.data));
  },
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
});
</script>

<style scoped>
#container {
  overflow: scroll;
  height: 500px;
  background-color: white;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container p {
  font-size: 16px;
  line-height: 22px;
  margin: 0;
}

#container a {
  text-decoration: none;
}

#container .judul {
  margin: 25px 0;
}

#container .Refresh {
  color: white;
  border-radius: 5px;
  padding: 13px 23px;
  background-color: #0044d0;
}

.center {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.center tr td:nth-child(1) {
  padding: 5px 20px;
}

.center tr td:nth-child(2) {
  padding-left: 10px;
}

.center tr td:nth-child(2),
.center tr td:nth-child(3) {
  text-align: start;
}

.center tr {
  background-color: #fff6cc;
  border: 2px solid #ffe14c;
}

.center tr td p {
  color: black;
}

.center tr td p:nth-child(2) {
  font-weight: bold;
}
</style>
