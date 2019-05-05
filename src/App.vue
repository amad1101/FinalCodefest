<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | <router-link to="/simulation">Demo</router-link> |
      <router-link to="/projectdocs">Docs</router-link> 
       
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #3e6994;
    -webkit-transition: all 0.2s ease-in-out; 
    -moz-transition: all 0.2s ease-in-out; 
    -o-transition: all 0.2s ease-in-out; 
    transition: all 0.2s ease-in-out;
    &.router-link-exact-active {
      // color: #42b983;
      color: #52ae8c;
    }
  }
  a:hover { color: #ffffff; }
}
* {
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  background: #292929;
  
}
h1 {
  color: #52ae8c;
  padding: 1rem;
}
h2 {
  color: white;
  font-weight: normal;
  text-align: left;
  max-width: 85%;
  margin: 0 auto; 
  padding-bottom: 1rem;
}
p {
  color: white;
  text-align: left;
  max-width: 85%;
  margin: 0 auto; 
  font-size: 20px;
}
img {
  max-width: 100%;
  height: auto;
  padding-top: 1rem;
}
#maincol {
  color: #52ae8c;
  // text-align: left;
  // max-width: 85%;
  margin: 0 auto; 
  padding-bottom: 4rem;
  padding-top: 4rem;
}
#title {
  font-size: 6rem;
  font-weight: bolder;
  font-family: "Raleway";
  margin: 0 auto; 
}
.hr {
  width: 40%;
  height: 1px;
  margin-left: auto;
  margin-right: auto;
  background-color: #52ae8c;
  border: 0 none;
  margin-top: 3px;
  margin-bottom:35px; 
}

</style>
