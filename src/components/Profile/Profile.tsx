import { NavProfile } from "./NavProfile";
import { PhotoProfile } from "./PhotoProfile";
import { InfoProfile } from "./InfoProfile";
import { OptionsProfile } from "./OptionsProfile";
import { LogoutProfile } from "./LogoutProfile";


export function Profile () {
    return (
        <div>
        <NavProfile></NavProfile>
        <PhotoProfile></PhotoProfile>
        <InfoProfile></InfoProfile>
        <div className="divider relative top-6"></div> 
        <OptionsProfile></OptionsProfile>
        <LogoutProfile></LogoutProfile>
        </div>
    )
}