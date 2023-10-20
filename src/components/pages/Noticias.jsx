import React from "react";
import Default from "../templates/Default";
import Loading from "../atoms/Loading";
import familyicon from "../../img/enc.png";


export default function Noticias(){
    const [loading, setLoading] = React.useState(false);

return loading ? (
    <Loading />
  ) : (
    <Default>
        <span>Hello World</span>
        <img height="150" src={familyicon} alt="Teste"/>
    </Default>


);
}