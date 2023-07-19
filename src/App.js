import React from "react";
import { Route, Routes } from "react-router-dom";
// import Joke from './component/01-joke/Joke';
// import MenuCat from './components/02-tab/MenuCat'
// import DropDown from './components/03-dropdown/DropDown';
// import Colors from './components/04-colors/Colors';
// import ToDo from './components/05-todo/ToDo';
// import AddToCart from "./components/06-add-to-cart/AddToCart";
// import Counter from "./components/07-reducer/Counter";
// import ImgSearch from "./components/08-imgSearch/ImgSearch";
// import Parent from "./components/09-parent-child/Parent";
// import LoadMore from "./components/10-load-more/LoadMore";
// import DIsButton from "./components/11-dis-button/DIsButton";
// import TimeInput from "./components/12-timerInput/TimeInput";
// import Filter from "./components/13-filter/Filter";
// import MultiSelect from "./components/14-multiSelect/MultiSelect";
// import FormValid from "./components/15-fomrValid/FormValid";
// import DyanamicData from "./components/16-dyanamicData/DyanamicData";
// import View from "./components/16-dyanamicData/View";
// import ProductFilter from "./components/17-products-filter/ProductFilter";
// import UploadFile from "./components/18-upload-file/UploadFile";

// crud with api
// import CrudMain from "./components/19-crud-restapi/CrudMain";
// import Create from "./components/19-crud-restapi/Create";
// import Edit from "./components/19-crud-restapi/Edit";

import VerticalTabs from "./components/20-tab2/Tab2";

const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<DyanamicData />} />
    //   <Route path="/view/:id" element={<View />} />
    // </Routes>

    // crud with API
    // <Routes>
    //   <Route path="/" element={<CrudMain />}></Route>
    //   <Route path="/create" element={<Create />}></Route>
    //   <Route path="/edit/:id" element={<Edit />}></Route>
    //   <Route
    //     path="*"
    //     element={
    //       <div>
    //         <h1>404 error</h1>
    //       </div>
    //     }
    //   ></Route>
    // </Routes>

    <VerticalTabs />
  );
};

export default App;
