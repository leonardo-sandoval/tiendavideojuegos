import Sidebar from "../componets/Sideba";
import Cards from "../componets/cards";

export const store = ()=>{
return (
    <div className="min-h-screen flex flex-row">
        <Sidebar />
        <Cards />
    </div>
)
};

export default store;