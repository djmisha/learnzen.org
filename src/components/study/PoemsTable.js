import React from "react";
import dataArray from "../../data";
import SinglePoemRow from "./singlePoemRow";

class PoemsTable extends React.Component {
    render() {
        // const filterText = this.props.filterText;
        const visiblePoem = this.props.visiblePoem;
        const poemRows = [];

        dataArray.forEach((poem) => {
            /*Looks for matching Text*/
            /* Search  */

            // if (poem.content.indexOf(filterText) === -1) {
            //     return;
            // }

            /* Looks for visible Poem by number*/

            if (visiblePoem === poem.number) {
                let currentHash = poem.number;
                document.location.hash = currentHash;

                poemRows.push(
                    <SinglePoemRow
                        number={poem.number}
                        content={poem.content}
                        key={poem.number}
                        className="visiblePoem"
                    />
                );
            }

            // if (visiblePoem === "all") {
            //     poemRows.push(
            //         <SinglePoemRow
            //             number={poem.number}
            //             content={poem.content}
            //             key={poem.number}
            //             className="visiblePoem"
            //         />
            //     );
            // }
        });

        return <ul className="all-poems">{poemRows}</ul>;
    }
}

export default PoemsTable;
