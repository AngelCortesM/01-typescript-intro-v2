export interface Passebger {
  name: string;
  children?: string[];
}

const passenger1: Passebger = {
  name: "John",
};
const passenger2: Passebger = {
  name: "Melissa",
  children: ["Mary", "Anna"],
};

const printChildren = (passenger: Passebger) => {
  const howManyChildren = passenger.children?.length ?? 0;
  console.log(passenger.name, howManyChildren);
};

printChildren(passenger2); // 0