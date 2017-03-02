import React from "react";

import Board from "./Board";

export default class Game extends React.Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return(
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>
                        {/*Status*/}
                    </div>
                    <ol>
                        {/* TODO */}
                    </ol>
                </div>
            </div>
        );
    }
}