import React from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./assets/meleeIcons', false, /\.(png|jpe?g|svg)$/));

class Roster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: {
        doc: { name: 'Dr. Mario', checked: true, id: 0 },
        mario: {name: 'Mario', checked: true, id: 1 },
        luigi: {name: 'Luigi', checked: true, id: 2 },
        bowser: {name: 'Bowser', checked: true, id: 3 },
        peach: {name: 'Peach', checked: true, id: 4 },
        yoshi: {name: 'Yoshi', checked: true, id: 5 },
        dk: {name: 'Donkey Kong', checked: true, id: 6 },
        falcon: {name: 'Captain Falcon', checked: true, id: 7 },
        ganon: {name: 'Ganondorf', checked: true, id: 8 },
        falco: {name: 'Falco', checked: true, id: 9 },
        fox: {name: 'Fox', checked: true, id: 10 },
        ness: {name: 'Ness', checked: true, id: 11 },
        ics: {name: 'Ice Climbers', checked: true, id: 12 },
        kirby: {name: 'Kirby', checked: true, id: 13 },
        samus: {name: 'Samus', checked: true, id: 14 },
        zelda: {name: 'Zelda', checked: true, id: 15 },
        link: {name: 'Link', checked: true, id: 16 },
        ylink: {name: 'Young Link', checked: true, id: 17 },
        pichu: {name: 'Pichu', checked: true, id: 18 },
        pikachu: {name: 'Pikachu', checked: true, id: 19 },
        puff: {name: 'Jigglypuff', checked: true, id: 20 },
        mewtwo: {name: 'Mewtwo', checked: true, id: 21 },
        gnw: {name: 'Mr. Game & Watch', checked: true, id: 22 },
        marth: {name: 'Marth', checked: true, id: 23 },
        roy: {name: 'Roy', checked: true, id: 24 },
        sheik: {name: 'Sheik', checked: true, id: 25 }
      },

      order: [], // randomly ordered roster
      count: 25,
      bans: []
    };

  }

  componentDidMount() {
    this.shuffle();
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  banCharater(character, e) {
    const newRoster = this.state.characters;
    // this.setState({ characters: character.checked = false})
    newRoster[character].checked = false;
    this.setState({ characters: newRoster })
    // this.state.characters.character.checked = false;
    e.target.classList.add('banned');
  }

  makeCharacterTile(character) {
    return

  }

  getRandomInt(max) {
    let min = Math.ceil(0);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  fillRoster() {

  }

  getImgPath(name) {
    return `${name}.png`
  }

  shuffle = () => {
    let chars = [];
    let pickableChars = []; // non-banned chars
    let picked = [];
    for (let pickChar in this.state.characters) {
      let pickCharObj = this.state.characters[pickChar];
      chars.push(pickChar)
      if (pickCharObj.checked) {
        pickableChars.push(pickChar)
        // console.log(pickableChars)
      }
    }
    for (let i = 0; i <= this.state.count; i++) {
      let randIdx = this.getRandomInt(pickableChars.length - 1);
      let randChar = pickableChars[randIdx];
      pickableChars.splice(randIdx, 1);
      picked.push(randChar)
      // console.log(picked)
    }
    this.setState({ order: picked })
  }

  render() {
    let chars = Object.keys(this.state.characters);
    // let pickableChars = []; // non-banned chars
    // let picked = [];
    // for (let pickChar in this.state.characters) {
    //   let pickCharObj = this.state.characters[pickChar];
    //   chars.push(pickChar)
    //   if (pickCharObj.checked) {
    //     pickableChars.push(pickChar)
    //     // console.log(pickableChars)
    //   }
    // }
    // for (let i = 0; i <= this.state.count; i++) {
    //   let randIdx = this.getRandomInt(pickableChars.length - 1);
    //   let randChar = pickableChars[randIdx];
    //   pickableChars.splice(randIdx, 1);
    //   picked.push(randChar)
    //   // console.log(picked)
    // }
    // this.setState({ order: picked })

    return (
      <div>
        <h1>Iron Man Roster</h1>
        <div className='roster'>
          {this.state.order.map((char) => (

            <div className='charcard'>
              <img src={images[this.getImgPath(char)]} />
            </div>
          ))
          }
        </div>
        <button id='reroll' onClick={this.shuffle}>REROLL</button>
        <div className='controlRoster'>
          {chars.map((char) => (
            <div onClick={(e)=> {this.banCharater(char, e)}} className='charcard'>
              <img src={images[this.getImgPath(char)]} />
            </div>
          ))
          }

        </div>
      </div>
    );
  }
};

export default Roster;


/*
this.characters = [
      'Dr. Mario',
      'Mario',
      'Luigi',
      'Bowser',
      'Peach',
      'Yoshi',
      'Donkey Kong',
      'Captain Falcon',
      'Ganondorf',
      'Falco',
      'Fox',
      'Ness',
      'Ice Climbers',
      'Kirby',
      'Samus',
      'Zelda',
      'Link',
      'Young Link',
      'Pichu',
      'Pikachu',
      'Jigglypuff',
      'Mewtwo',
      'Mr. Game & Watch',
      'Marth',
      'Roy',
      'Sheik'
    ]
*/
