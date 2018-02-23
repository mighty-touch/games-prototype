<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="columns">
      <table class="table column is-offset-5"> 
      <thead>
        <th>Tarik Tambang!!!!!</th>
      </thead>
      <tbody>
        <td>{{ room }}</td>
      </tbody>
    </table>
    </div>
    <div>
    <form>
      <input type="radio" name="team" v-model="team" value="kiri"> kiri
      <input type="radio" name="team" v-model="team" value="kanan"> kanan
    </form>
    </div>
    <a @click="resetTug" class="button is-success">Reset</a>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
     room: 0,
     team: '',
     count: 0,
    }
  },
  beforeCreate () {
    let ref = this.$db.ref('shake')
    ref.on('value', (snapshot)=> {
      this.room = snapshot.val()
    })
  },
  created(){
    window.addEventListener('shake', this.pullTug, false)
  },
  methods: {
    pullTug() {
          if(this.team==='kiri') {
            this.$db.ref().update({"shake": this.room--})
          } else if (this.team==='kanan'){
            this.$db.ref().update({"shake": this.room++})
          }
    },
    resetTug() {
      this.$db.ref().update({"shake": 0})
    }
  }
}
</script>

<style>
.table{
  text-align: center;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
