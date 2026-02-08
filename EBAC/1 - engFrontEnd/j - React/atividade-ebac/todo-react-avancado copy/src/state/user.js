import {atom} from "recoil";

const userState = atom({
    key:"userState",
    default: { name: null, isLogged: false },
});

export default userState;