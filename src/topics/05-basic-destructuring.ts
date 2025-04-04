interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}
interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Angel",
    year: 2014,
  },
};

const song = "New Song";

const { song: anotherSong, songDuration: duration, details } = audioPlayer;
const { author } = details;

// console.log("song: ", anotherSong);
// console.log("duration: ", duration);
// console.log("Author: ", author);

const [goku, vegeta, trunks]: string[] = ["Goku", "Vegeta", "Trunks"];

// console.log("Personaje 1: ", goku);
console.error("Personaje 3:", trunks);

export {};
