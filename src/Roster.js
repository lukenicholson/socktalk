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
    if (newRoster[character].checked) {
      newRoster[character].checked = false;
      this.setState({ characters: newRoster })
      e.target.classList.add('banned');
    } else {
      newRoster[character].checked = true;
      this.setState({ characters: newRoster })
      e.target.classList.remove('banned');
    }

    // e.target.classList.add('banned');
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

  changeRosterSize(event) {
    const target = event.target
    const num = event.target.value
    this.setState({ count: num })
    console.log(event.target.value)
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
      <div className="page">
        <div className="sidebar">
          <h1>Iron Man Melee</h1>
          <p>
          <br />
          The "Iron Man Challenge" and its spinoff "Around the World" are popular twists on the classic platform fighter Super Smash Bros Melee, and these formats have been around for over 15 years. To start, two players get a randomly ordered roster and start a match with the character at the top left corner. Typical rules for battle are two stock mode, 2 minutes, all non-healing items items on very high, all non-tournament stages turned on. The winner of the match (or sudden death) gets to move on to the next character. The first person to work their way through the entire roster wins!
          <br />
          <br />
          But what if you don't want to work through the entire roster? Easy. Just use the control roster on the bottom to remove unwanted characters and hit "reroll" when you've adjusted the roster as you see fit.
          <br />
          <br />
          This single page React app has been used by multiple top 100 players for participation in Iron Man Challenges on stream in front of hundreds of people.
          </p>
        </div>
        <div className="rosters">
          {/* <h1>Iron Man Roster</h1> */}
          <div className='roster'>
            {this.state.order.map((char) => (

              <div className='charcard'>
                <img src={images[this.getImgPath(char)]} />
              </div>
            ))
            }
          </div>
          <button id='reroll' onClick={this.shuffle}>REROLL</button>
          {/* <form>
            <label for="numChars">Chars:</label>
            <select id="numChars" name="numChars" onChange={this.changeRosterSize}>
              <option value="25">26</option>
              <option value="24">25</option>
              <option value="23">24</option>
              <option value="22">23</option>
              <option value="21">22</option>
              <option value="20">21</option>
              <option value="19">20</option>
              <option value="18">19</option>
              <option value="17">18</option>
              <option value="16">17</option>
              <option value="15">16</option>
              <option value="14">15</option>
              <option value="13">14</option>
              <option value="12">13</option>
              <option value="11">12</option>
              <option value="10">11</option>
              <option value="9">10</option>
              <option value="8">9</option>
              <option value="7">8</option>
              <option value="6">7</option>
              <option value="5">6</option>
              <option value="4">5</option>
              <option value="3">4</option>
              <option value="2">3</option>
              <option value="1">2</option>
              <option value="0">1</option>
            </select>
          </form> */}
          <div className='controlRoster'>
            {chars.map((char) => (
              <div onClick={(e)=> {this.banCharater(char, e)}} className='charcard'>
                <img src={images[this.getImgPath(char)]} />
              </div>
            ))
            }

          </div>
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
