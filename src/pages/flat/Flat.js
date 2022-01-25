import React from "react";
import HeadHeader from '../../components/headerTemplate/HeaderTemplate'
import InputLocation from "../../components/inputLocation/inputLocation";


class Flat extends React.PureComponent {
    render() {
        return (
            <div>
            <HeadHeader strongText={"IJARA UYLAR"} />
            <InputLocation/>
            </div>
        );
    }
}

export default Flat;
