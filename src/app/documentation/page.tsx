import DataTypeSection from "./sections/DataTypeSection";
import InputStatement from "./sections/InputStatement";
import OperatorSection from "./sections/OperatorSection";
import LogStatement from "./sections/logStatement";

export default function Documentation(){
    return (
        <div className="h-screen bg-gradient-to-r from-black to-gray-900 max-md:pl-5 md:pl-10 pt-10 overflow-scroll scroll-y">
            <div>
                <h1 className="text-white text-2xl"><span className="text-blue-600">#</span>Documentation</h1>
                {/* <p className="mt-10">this is the content that should come in this place</p> */}
            </div>
            
            <LogStatement/>
            <InputStatement/>
            <DataTypeSection/>
            <OperatorSection/>
        </div>
    )
}