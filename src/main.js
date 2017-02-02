import Vue from 'vue';
import axios from 'axios';
import './styles/style.css';

const url = "https://api.guildwars2.com/v2/tokeninfo";

export const Login = new Vue({
  el: '#app',
  data: {
    key: ''
  },
  props: {
    keyIsValid: false
  },
  methods: {
    validateKey(key) {
      axios.get(url, {
        params: {
          access_token: this.key
        }
      })
      .then((response) => {
        this.keyIsValid = true
        this.storeKey(this.key)
      })
      .catch((error) => {
        this.keyIsValid = false        
      }) 
    }, 
    storeKey(key) {
      localStorage.setItem("api_key", key);
    },
    getKey() {
      localStorage.getItem("api_key");
    }
  }
});
