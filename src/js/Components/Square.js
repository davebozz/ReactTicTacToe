import React from "react";

export default class Square extends React.Component {
    constructor(props)
    {
        super();
    }

    concatClassName()
    {
        const number = this.props.number;
        return "square " + number;
    }

    render()
    {
        return(
            <button className={this.concatClassName()}
                    onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}