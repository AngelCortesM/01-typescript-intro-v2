const skills: string[] = ["Bash", "Counter", "Healing"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string; // optional property
}

const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["Bash", "Counter", "Healing"],

};

strider.hometown = "Rivendell"; // optional property can be added later
console.table(strider);
export {};
