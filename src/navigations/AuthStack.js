import { Flash, Login, SignUp } from "../screens";
import navigationStrings from "./navigationStrings";


export default function (Stack) {
    return (
    <>
        {/* <Stack.Screen name={navigationStrings.FLASH} component={Flash} /> */}
        <Stack.Screen name={navigationStrings.LOGIN} component={Login}  />
        <Stack.Screen name={navigationStrings.SIGNUP} component={SignUp} />
    </>
    )
}