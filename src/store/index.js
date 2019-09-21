
import { createStore } from 'redux';

/**
 * Redux State
 * [https://www.nhsinform.scot/illnesses-and-conditions/a-to-z](https://www.nhsinform.scot/illnesses-and-conditions/a-to-z)
 */
const symptoms = [
    `dizziness`,
    `sweaty and clammy skin`,
    `rapid heartbeat (tachycardia)`,
    `shortness of breath`,
    `feeling faint`,
    `loss of consciousness`,
];
let defaultState = {
    diseases: [
        {name: 'cancer', description: 'Killer disease', symptoms: ['ra']},
        {
            name: 'Abdominal aortic aneurysm', 
            description: 'An abdominal aortic aneurysm (AAA) is a swelling (aneurysm) of the aorta – the main blood vessel that leads away from the heart, down through the abdomen to the rest of the body', 
            symptoms: [
                `a pulsating feeling in your stomach (abdomen), usually near your belly button, that's usually only noticeable when you touch it`,
                `persistent back pain`,
                `persistent abdominal pain`,
                symptoms[0],
                symptoms[1],
                symptoms[2],
                symptoms[3],
                symptoms[4],
                symptoms[5]
            ]}
    ]
};
let reducer = (state = defaultState , action) => {
    console.log(state);
    switch(action.type) {
        case 'INCREASE':
            return state+1;
        case 'DECREASE':
            return state-1;
        default:
            return state;
    }
};
const store = createStore(reducer);
export default store;