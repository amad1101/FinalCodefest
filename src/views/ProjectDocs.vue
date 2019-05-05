<template>
  <div class="simulation">
    <h1>Project Documentation</h1>
    <!-- <h2> Try out Alpha Trail at: <a v-bind:href="'http://alphatrail.me'" target='_blank' rel = 'noopener'>alphatrail.me</a> </h2> -->

    <iframe id='googdoc' src="https://docs.google.com/document/d/e/2PACX-1vTU6qpo3wJAaT-P_ZUQSQxEp6NqeDU7W2iRt4R0hjzIEepRoXfVMRSM5fqqmcPMR5uWwLjeEMhMhkf0/pub?embedded=true"></iframe>

  </div>
</template>

<style lang="scss" scoped>
img {
  max-width: 85%;
  height: auto;
  padding-top: 1.5rem;
}
a{
  color: #52ae8c;
  text-decoration: underline;
}
a:hover {
  color: #ffffff;
  -webkit-transition: all 0.2s ease-in-out; 
  -moz-transition: all 0.2s ease-in-out; 
  -o-transition: all 0.2s ease-in-out; 
  transition: all 0.2s ease-in-out;
}
iframe {
  width: 75%;
  height: 50rem;
}
</style>