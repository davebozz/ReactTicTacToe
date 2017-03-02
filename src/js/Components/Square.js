import React from "react";

export default class Square extends React.Component {
    constructor(props)
    {
        super(props);
    }

    concatClassName()
    {
        const number = this.props.number;
        return "square " + number;
    }

    render()
    {
        return(
            <button className={this.concatClassName()} >

            </button>
        );
    }
}