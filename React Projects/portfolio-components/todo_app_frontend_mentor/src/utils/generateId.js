import { v4 as uuidv4 } from "uuid";

const getId = () => {
    return uuidv4().slice(-8);
};

export { getId };
