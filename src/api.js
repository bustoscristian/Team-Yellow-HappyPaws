import { birds } from "./datasets/birds";
import { cats } from "./datasets/cats";
import { dogs } from "./datasets/dogs";
import { sleep } from "./utils/sleep";

const errorRate = 2;
const averageSleep = 3000;

const requestSim = async () => {
  const requestTime = averageSleep + Math.ceil((Math.random() - 0.5) * 5000);
  await sleep(requestTime);
  const errorChance = Math.ceil(Math.random() * 10);
  if (errorChance < errorRate) {
    throw new Error("500 - Unexpected server error");
  }
};

const getRandomSubArray = (array) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, Math.ceil(Math.random() * array.length));
  return selected;
};

export const getDogs = async () => {
  await requestSim();
  return getRandomSubArray(dogs);
};

export const getCats = async () => {
  await requestSim();
  return getRandomSubArray(cats);
};

export const getBirds = async () => {
  await requestSim();
  return getRandomSubArray(birds);
};
