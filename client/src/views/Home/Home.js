// @ is an alias to /src
import Jumbotron from '../../components/Jumbotron/Jumbotron.vue';
import Notification from '../../components/Notification/Notification.vue'
import Content from '../../components/Content/Content.vue'
import Footer from '../../components/Footer/Footer.vue'

var currentTimestamp = Math.floor(Date.now() / 1000)

export default {
  name: 'home',
  components: {
    Jumbotron,
    Notification,
    Content,
    Footer,
  },
  data() {
    return {
      newsletter: false,
      hideNews: false
    }
  },
  created() {
    window.addEventListener('scroll',this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event){
      var element = document.documentElement
      var offset = element.scrollTop + window.innerHeight;
      var height = element.offsetHeight;
      // this.newsletter = true
      if(offset + 2 > height){
        if(localStorage.getItem('time') == null ){
          localStorage.setItem('time', currentTimestamp)
          this.newsletter = true
        }
        else if((currentTimestamp - localStorage.getItem('time'))/60 < 10){

        }else{
          localStorage.setItem('time', currentTimestamp)
          this.newsletter = true
        }
      }
    },
    hideNewsletter(){
      this.newsletter = false
    }
  },
};
