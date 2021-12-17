import React from "react";
import Title from './Components/Title';
import Card from './Components/Card';
import Container from './Components/Container';
import Classcomponet from './Components/Classcomponet';
import Normalfun from './Components/Arrowfun';
import Arrowfun from "./Components/Arrowfun";
import State from './Components/state';
import Statetry from "./Components/state";
import Setstate from "./Components/Setstate";
import Condition1 from "./Components/Condution1";
import Condition2 from "./Components/Condition2";
import Refresh from "./Components/Refresh";
import Rendertest from "./Components/dom/Render";
import Finddome from './Components/dom/Finddomnote'
import Finddomenote from "./Components/dom/Finddomnote";
import From from './Components/inputfom/From';
import MultipulInput from './Components/inputfom/MultipulInput';
import Textarea from './Components/inputfom/textarea';
import SelectOp from './Components/inputfom/SelectOp';
import SelectArr from './Components/inputfom/SelectJArr';
import SelectJasonArr from './Components/inputfom/SelectJArr';
import Selectjasonarry from "./Components/inputfom/Selectjasonarry";
import Axios from './Components/Axios';
import AxiosPost from './Components/AxiosPost';
import Table from './Components/Table';
import Hook from "./Components/Hook";
import Fragments from "./Components/Fragment";


function App() {
  return (
    <div>
      <Title />
      <Container />
      <Card text="Javascript Language" description="Javascript undoubtedly tops the list. It is widely."/>
      <Card text="Java Language" description="Java undoubtedly tops the list. It is widely."/>
      <Card text="Kotlin Language" description="Kotlin undoubtedly tops the list. It is widely."/>

      <Classcomponet btnclass="btn btn-danger" name='Fm' btnname="Classcomponents"/>
      <Classcomponet btnclass="btn btn-outline-primary" name='Faysal' btnname="Useanother"/>
      <Classcomponet btnclass="btn btn-success" name='Mridha' btnname="Anothertime"/>

      <Arrowfun />

      <Statetry />

      <Setstate />

      <Condition1 />

      <Condition2 />

      <Refresh />

      <Rendertest />

      <Finddomenote />

      <From />

      <MultipulInput />

      <Textarea />

      <SelectOp />

      <SelectJasonArr />

      <Selectjasonarry />

      <Axios />

      <AxiosPost />

      <Hook/>

      <Fragments />
    </div>
  );
}

export default App;
