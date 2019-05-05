import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
    job: [
      {'key': 0, name: 'Retail', cost: "10/hr", distance: 10, method: 'Walk', choiceName: 'Death in Family', Situation:'What role would you like to experience?',
      choice: [
          {key: 0, name: 'Go To Funeral', cost: "600$", description: 'Plane ticket',
          extra: '......', choiceName: 'Short on Rent',
              choice: [
                {key: 0, name: 'Skip Breakfast and Lunch Daily', cost: '', description: '2 weeks',
                        extra: '......', choiceName: 'Promotion - Raise to "15$/hr, able to afford Basic necessities'},
                {key: 1, name: 'Get A second Job', cost: '', description: '',
                        extra: '......', choiceName: 'Promotion - Raise to "15$/hr, able to afford Basic necessities'},
                {key: 2, name: 'Get evicted', cost: '', description: '',
                        extra: '......', choiceName: 'Promotion - Raise to "15$/hr, able to afford Basic necessities'}
                      ]},
          {key: 1, name: "Don't Go To Funeral", cost: "", description: '',
                    extra: '......', choiceName: 'Promotion to 15$/hr able to Afford Basic Needs',
                        choice: [
                          {key: 0, name: 'Increase Savings', cost: '', description: '',
                                  extra: '......', choiceName: 'Reached 10K in Savings - Choose Something',
                                  choice: [
                                    {key: 0, name: 'Down Payment for House', cost: '', description: '2 weeks',
                                            extra: '......', choiceName: ''},
                                    {key: 1, name: 'Purshase Modest used car for $3000', cost: '', description: '',
                                            extra: '......', choiceName: ''},
                                    {key: 2, name: 'Create Colleger Fund (529 plan)', cost: '', description: '',
                                            extra: '......', choiceName: ''}
                                          ]},
                          {key: 1, name: 'Take Vacation', cost: '', description: '',
                                  extra: '......', choiceName: 'Short on Rent',
                                  choice: [
                                    {key: 0, name: 'Skip Breakfast and Lunch Daily', cost: '', description: '2 weeks',
                                            extra: '......'},
                                    {key: 1, name: 'Get A second Job', cost: '', description: '',
                                            extra: '......'},
                                    {key: 2, name: 'Get evicted', cost: '', description: '',
                                            extra: '......'}
                                          ]},
                          {key: 2, name: 'Go To Night School', cost: '', description: '',
                                  extra: '......', choiceName: 'Get a job in choosen proffession',
                                  choice: [
                                    {key: 0, name: 'Down Payment for House', cost: '', description: '2 weeks',
                                            extra: '......', choiceName: ''},
                                    {key: 1, name: 'Purshase Modest used car for $3000', cost: '', description: '',
                                            extra: '......', choiceName: ''},
                                    {key: 2, name: 'Create Colleger Fund (529 plan)', cost: '', description: '',
                                            extra: '......', choiceName: ''}
                                          ]}]},
          {key: 2, name: "Car pool to Funeral", cost: "", description: ' Days off Work: 6 (8 total days) fuel Cost( 4 People Round trip) 116$',
                    extra: '......', choiceName: 'Promotion to 15$/hr able to Afford Basic Needs',
                        choice: [
                          {key: 0, name: 'Increase Savings', cost: '', description: '',
                                  extra: '......', choiceName: 'Reached 10K in Savings - Choose Something',
                                  choice: [
                                    {key: 0, name: 'Down Payment for House', cost: '', description: '2 weeks',
                                            extra: '......', choiceName: ''},
                                    {key: 1, name: 'Purshase Modest used car for $3000', cost: '', description: '',
                                            extra: '......', choiceName: ''},
                                    {key: 2, name: 'Create Colleger Fund (529 plan)', cost: '', description: '',
                                            extra: '......', choiceName: ''}
                                          ]},
                          {key: 1, name: 'Take Vacation', cost: '', description: '',
                                  extra: '......', choiceName: 'Short on Rent',
                                  choice: [
                                    {key: 0, name: 'Skip Breakfast and Lunch Daily', cost: '', description: '2 weeks',
                                            extra: '......'},
                                    {key: 1, name: 'Get A second Job', cost: '', description: '',
                                            extra: '......'},
                                    {key: 2, name: 'Get evicted', cost: '', description: '',
                                            extra: '......'}
                                          ]},
                          {key: 2, name: 'Go To Night School', cost: '', description: '',
                                  extra: '......', choiceName: 'Get a job in choosen proffession',
                                  choice: [
                                    {key: 0, name: 'Down Payment for House', cost: '', description: '2 weeks',
                                            extra: '......', choiceName: ''},
                                    {key: 1, name: 'Purshase Modest used car for $3000', cost: '', description: '',
                                            extra: '......', choiceName: ''},
                                    {key: 2, name: 'Create Colleger Fund (529 plan)', cost: '', description: '',
                                            extra: '......', choiceName: ''}
                                          ]}]}
        ]
      },
      {key: 1, name: 'Construction', cost: "20/hr", distance: 20, method: 'Drive', choiceName: 'You need transportation', Situation:'Now You need a transportation mean! Which one would you want ?', link:'Construction1',
      'choice': [
          {key: 0, name: 'Purshase a used car', cost: "3000$", description: 'Annual percentage rate 24% / Monthly payment: $93/Month - 60/ Insurance: $130/ Cost of Gas: $80/ Total: $5 604/ time: 20min',
          extra: '......', Situation: "You've been at the job 6 Months - Receive a promotion, Pay Raise : %32/hr", link:'ConstructionA1',
              choice: [
                {key: 0, name: 'Pay off car with extra $', cost: '', description: '', link:'ConstructionA1',
                        extra: '......', Situation: 'Death in Family',
                        choice: [
                          {key: 0, name: 'Go To Funeral', cost: "600$", description: 'Plane ticket',
                          extra: '......', choiceName: 'Short on Rent',},
                          {key: 1, name: "Don't Go To Funeral", cost: "", description: '',
                                    extra: '......', choiceName: 'Promotion to 15$/hr able to Afford Basic Needs',},
                          {key: 2, name: "Car pool to Funeral", cost: "", description: ' Days off Work: 6 (8 total days) fuel Cost( 4 People Round trip) 116$',
                                    extra: '......', choiceName: 'Promotion to 15$/hr able to Afford Basic Needs',},
                                  ]},
                {key: 1, name: 'Get A second Job', cost: '', description: '', link:'ConstructionA1',
                        extra: '......',choiceName: 'Death in Family',
                        choice: [
                          {key: 0, name: 'Go To Funeral', cost: "600$", description: 'Plane ticket',
                          extra: '......', choiceName: 'Short on Rent',},
                          {key: 1, name: "Don't Go To Funeral", cost: "", description: '',
                                    extra: '......', choiceName: 'Promotion to 15$/hr able to Afford Basic Needs',},
                          {key: 2, name: "Car pool to Funeral", cost: "", description: ' Days off Work: 6 (8 total days) fuel Cost( 4 People Round trip) 116$',
                                    extra: '......', choiceName: 'Promotion to 15$/hr able to Afford Basic Needs',},
                                  ]},
                {key: 2, name: 'Get evicted', cost: '', description: '',link:'ConstructionA1',
                        extra: '......',choiceName: 'Death in Family',
                        choice: [
                          {key: 0, name: 'Go To Funeral', cost: "600$", description: 'Plane ticket',
                          extra: '......', choiceName: 'Short on Rent',},
                          {key: 1, name: "Don't Go To Funeral", cost: "", description: '',
                                    extra: '......', choiceName: 'Promotion to 15$/hr able to Afford Basic Needs',},
                          {key: 2, name: "Car pool to Funeral", cost: "", description: ' Days off Work: 6 (8 total days) fuel Cost( 4 People Round trip) 116$',
                                    extra: '......', choiceName: 'Promotion to 15$/hr able to Afford Basic Needs',},
                                  ]}
                      ]},
          {key: 1, name: "Take public transportation, Cost: $91/Month, TIme: 2hours", cost: "", description: '',
                    extra: '......', Situation: 'Death in Family',link:'ConstructionB',
                    choice: [
                {key: 0, name: 'Go To Funeral', cost: "600$", description: 'Plane ticket', link:'ConstructionB1',
                      extra: '......', choiceName: "You've been at the job 6 Months - Receive a promotion, Pay Raise : %32/hr",
                      choice: [
                            {key: 0, name: 'Child College fund', cost: "", description: '',
                              extra: '......', choiceName: 'END'},
                            {key: 1, name: "Increase Savings  Send $10/hr to savings Account", cost: "", description: '',
                                        extra: '......', choiceName: 'END'},
                            {key: 2, name: "Splurge - Take a vacation, Cost: $1000, Time Off: (PTO)", cost: "", description: '',
                                        extra: '......', choiceName: 'END'},
                                      ]},
                {key: 1, name: "Don't Go To Funeral", cost: "", description: '', link:'ConstructionB1',
                                extra: '......', Situation: "You've been at the job 6 Months - Receive a promotion, Pay Raise : %32/hr",
                                choice: [
                                      {key: 0, name: 'Child College fund', cost: "", description: '',
                                        extra: '......', choiceName: 'END'},
                                      {key: 1, name: "Increase Savings  Send $10/hr to savings Account", cost: "", description: '',
                                                  extra: '......', choiceName: 'END'},
                                      {key: 2, name: "Splurge - Take a vacation, Cost: $1000, Time Off: (PTO)", cost: "", description: '',
                                                  extra: '......', choiceName: 'END'},
                                                ]},
                {key: 2, name: "Car pool to Funeral", cost: "", description: ' Days off Work: 6 (8 total days) fuel Cost( 4 People Round trip) 116$', link:'ConstructionB1',
                                extra: '......', choiceName: "You've been at the job 6 Months - Receive a promotion, Pay Raise : %32/hr",
                                choice: [
                                      {key: 0, name: 'Child College fund', cost: "", description: '',
                                        extra: '......', choiceName: 'END'},
                                      {key: 1, name: "Increase Savings  Send $10/hr to savings Account", cost: "", description: '',
                                                  extra: '......', choiceName: 'END'},
                                      {key: 2, name: "Splurge - Take a vacation, Cost: $1000, Time Off: (PTO)", cost: "", description: '',
                                                  extra: '......', choiceName: 'END'},
                                                ]},
                              ]},
          {key: 2, name: "Buy a bike, COst of Bike: $50, Cost of maintenance: $10/Month, Time: 1Hour", cost: "", description: '',
                    extra: '......', choiceName: 'Death in Family',link:'ConstructionB',
                    choice: [
                {key: 0, name: 'Go To Funeral', cost: "600$", description: 'Plane ticket', link:'ConstructionB1',
                      extra: '......', choiceName: "You've been at the job 6 Months - Receive a promotion, Pay Raise : %32/hr",
                      choice: [
                            {key: 0, name: 'Child College fund', cost: "", description: '',
                              extra: '......', choiceName: 'END'},
                            {key: 1, name: "Increase Savings  Send $10/hr to savings Account", cost: "", description: '',
                                        extra: '......', choiceName: 'END'},
                            {key: 2, name: "Splurge - Take a vacation, Cost: $1000, Time Off: (PTO)", cost: "", description: '',
                                        extra: '......', choiceName: 'END'},
                                      ]},
                {key: 1, name: "Don't Go To Funeral", cost: "", description: '', link:'ConstructionB1',
                                extra: '......', choiceName: "You've been at the job 6 Months - Receive a promotion, Pay Raise : %32/hr",
                                choice: [
                                      {key: 0, name: 'Child College fund', cost: "", description: '',
                                        extra: '......', choiceName: 'END'},
                                      {key: 1, name: "Increase Savings  Send $10/hr to savings Account", cost: "", description: '',
                                                  extra: '......', choiceName: 'END'},
                                      {key: 2, name: "Splurge - Take a vacation, Cost: $1000, Time Off: (PTO)", cost: "", description: '',
                                                  extra: '......', choiceName: 'END'},
                                                ]},
                {key: 2, name: "Car pool to Funeral", cost: "", description: ' Days off Work: 6 (8 total days) fuel Cost( 4 People Round trip) 116$', link:'ConstructionB1',
                                extra: '......', choiceName: "You've been at the job 6 Months - Receive a promotion, Pay Raise : %32/hr",
                                choice: [
                                      {key: 0, name: 'Child College fund', cost: "", description: '',
                                        extra: '......', choiceName: 'END',},
                                      {key: 1, name: "Increase Savings  Send $10/hr to savings Account", cost: "", description: '',
                                                  extra: '......', choiceName: 'END'},
                                      {key: 2, name: "Splurge - Take a vacation, Cost: $1000, Time Off: (PTO)", cost: "", description: '',
                                                  extra: '......', choiceName: 'END'},
                                                ]},
                              ]},
        ]
      },
      {key: 2, name: 'Office', cost: "16/hr", distance: 20, method: 'Drive', choiceName: 'Dead End - Go Back And choose a Different job'},
    ],
  tracker: 'job'
},
  mutations: {
    mutateTracker(state, value){
      state.tracker[0].append(value)
    },
    getData(state){
      return `${state}[0]`
    }
  },
  actions: {
    updateTracker(context){
      context.commit('mutateTracker')
    },
    returnUpdatedData(context){
      context.commit('getData')
    }
  }
})
