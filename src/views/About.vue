<template>
  <div class="about">
    
    <h1>About Alpha Trail</h1>
    <!-- <h2>Demo: <a v-bind:href="'http://alphatrail.me'" target='_blank' rel = 'noopener'>alphatrail.me</a> </h2> -->
    <h2>Project:</h2>
    <p>Alpha Trail, a text-based economic decision-making game.</p>
    <h2>Built with:</h2>
    <p>Vue.js, Amplify, AWS, GraphQL, AWS-Lambda, Amazon-Dynamob</p>
    <h2>Team:</h2>
    <p>Hannah Fidoten, Lily L., Christine Wilson, Amadou Diallo, Rob Cotter, Robert Greisemer</p>
    <h2>What it does:</h2>
    <p>A decision-based game simulation that provides users with real-world scenarios of financial choices posed to people in mixed socio-economic situations.</p>
    <h2>Inspiration: </h2>
    <p>The inspiration for this project came from the personal experiences one of our team members who watched a close family member grapple with issues of economic inequality after re-entering society following time served in prison.  After discussing the daily struggles that people in less fortunate economic situations go through, the goal of our project was to raise awareness about these difficulties by creating an educational experience through vicarious, interactive decision-making.</p>
    <p>The initial idea was to have a text-based game modeled around Oregon Trail, hence the “Trail” part of the name. Alpha refers to the financial part of the project. Investopedia defines alpha as “a term used in investing to describe a strategy's ability to beat the market, or it's ‘edge.’...The excess return of an investment relative to the return of a benchmark index is the investment’s alpha.” The outcome of the decisions made in this game is our alpha. Sometimes the outcomes are greater than what is expected for a person in their current financial situation (taking a low-skill/low-wage job that quickly leads to a promotion) and other times the outcome is worse than what is expected (suffering a crippling illness). Markets can be unpredictable and so can life. Sometimes no matter what decision we make, we find ourselves on a path that feels like it spirals into despair.</p>
  <h2>Challenges:</h2>
    <p>
      <ul>
        <li>Deploying (Vue.Js Compatibility with Windows Subsystem for Linux)</li>
        <li>Appropriately implementing usable data structures</li>
        <li>Distributing workload</li>
        <li>Implementation of GraphQL APIs</li>
        <li>Maintaining clean source code management workflows</li>
      </ul>
    </p>
  <h2>Accomplishments:</h2>
    <p>
      <ul>
        <li>CSS & Web Design</li>
        <li>Coming together as a team and working through issues with creative solutions in order to work within the timeframe provided</li>
      </ul>
    </p>
  <h2>What we learned:</h2>
    <p>
      <ul>
        <li>Whether it was learning about the development process, rebooting a crashed computer, or developing in a new language, each member of the team did something that was new to them. </li>
        <li>Just because it sounds simple, doesn’t mean it is. </li>
      </ul>
    </p>


    <img src='../assets/philadelphia1.jpg'/> 

  </div>
</template>

<style lang="scss" scoped>
img {
  max-width: 100%;
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
p {
  text-align: left;
  font-size: 20px;
}
h2 {
  padding-top: 1rem;
}


</style>
